/*jslint es6 */

import d3 from 'd3';
import randomColor from 'randomColor';

export default {init};

const STATE = {};
const OPTS = {
    width: width(),
    height: 710,
    rowHeight: 200,
    rowNums: 4,
    padding: 2,
    force: d3.layout.force(),
    tooltip: d3.select('#tooltip')
};

function init({el, params}) {
    d3.json(validateUrl(params.q), function (error, data) {
        if (error) {
            const msg = 'Please supply a valid <a href="http://grantnav.threesixtygiving.org/" target="_blank">grantnav</a> search URL'
            return printMsg(el, msg);
        }
        printMsg(el);
        plot(data, params);
    });
}

function addCircles(circles) {
    const colorOpts = {count: uniq(pluck(STATE.data, 'funder')).length};
    const fill = d3.scale.ordinal().range(randomColor(colorOpts));

    circles.enter().append('circle')
        .attr('class', 'node')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', 0)
        .style('fill', (d) => fill(d.funder))
        .on('mouseout', () => OPTS.tooltip.style('visibility', 'hidden'))
        .on('mouseover', function (d) {
            showTooltip.call(this, d);
        });

    circles.transition()
        .duration(1000)
        .attr('r', (d) => d.radius);
}

// From https://bl.ocks.org/mbostock/3231298
function collide(alpha) {
    const quadtree = d3.geom.quadtree(STATE.data);
    return function (d) {
        let r = d.radius + STATE.maxRadius + OPTS.padding,
            nx1 = d.x - r,
            nx2 = d.x + r,
            ny1 = d.y - r,
            ny2 = d.y + r;
        quadtree.visit(function (quad, x1, y1, x2, y2) {
            if (quad.point && (quad.point !== d)) {
                let x = d.x - quad.point.x,
                    y = d.y - quad.point.y,
                    l = Math.sqrt(x * x + y * y),
                    r = d.radius + quad.point.radius + OPTS.padding;
                if (l < r) {
                    l = (l - r) / l * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    quad.point.x += x;
                    quad.point.y += y;
                }
            }
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        });
    };
}

function constructChildren(sums) {
    return Object.keys(sums).map(function (k) {
        return {name: k, value: sums[k]};
    });
}

function exists(a, b) {
    return a ? a[0][b] : 'Missing';
}

function labels(centers) {
    OPTS.svg.selectAll('.label').remove();

    OPTS.svg.selectAll('.label')
        .data(centers).enter().append('text')
        .attr('text-anchor', 'middle')
        .attr('class', 'label')
        .text((d) => d.name)
        .attr('transform', function (d) {
            if (this.getComputedTextLength() < 150) {
                return 'translate(' + (d.x + (d.dx / 2)) + ', ' + (d.y + 20) + ')';
            } else {
                return 'translate(-9999, 0)';
            }
        });
}

function mapData(arr) {
    return arr.map(function (obj) {
        return {
            funder: obj.fundingOrganization[0].name,
            fund: exists(obj.grantProgramme, 'title'),
            amount: obj.amountAwarded,
            location: exists(obj.beneficiaryLocation, 'name'),
            year: obj.awardDate.substring(0, 4),
            title: obj.title,
            description: obj.description,
            duration: exists(obj.plannedDates, 'duration'),
            radius: (Math.sqrt(+obj.amountAwarded / Math.PI)) / 10,
            x: Math.random() * OPTS.width,
            y: Math.random() * OPTS.height
        };
    });
}

function plot(data, params) {
    const slice = params.slice || 'funder';

    STATE.data = mapData(data.grants);

    OPTS.height = (uniq(pluck(STATE.data, slice)).length / OPTS.rowNums) * OPTS.rowHeight;
    OPTS.svg = d3.select('#chart').append('svg')
        .attr('width', OPTS.width)
        .attr('height', OPTS.height);

    STATE.maxRadius = d3.max(pluck(STATE.data, 'radius'));
    STATE.circles = OPTS.svg.selectAll('circle').data(STATE.data);

    addCircles(STATE.circles);
    sliceCircles(slice);

    window.addEventListener('resize', function () {
        OPTS.width = width();
        OPTS.svg.attr('width', OPTS.width);
        sliceCircles(slice);
    }, false);

    document.getElementById('slice').addEventListener('change', function () {
        history.pushState({}, '', '?slice=' + this.value + '&q=' + params.q);
        return sliceCircles(this.value);
    }, false);
}

function pluck(array, key) {
    return array.map((o) => o[key]);
}

function printMsg(el, msg = '') {
    el.innerHTML = msg;
}

function showTooltip(d) {
    const cx = this.cx.baseVal.value;
    const cy = this.cy.baseVal.value;
    const r = this.r.baseVal.value;

    const html = `
        <strong>Funder</strong>
        <p>${d.funder}</p>
        <strong>Title</strong>
        <p>${d.title}</p>
        <strong>Description</strong>
        <p>${d.description}</p>
        <strong>Amount</strong>
        <p>${d.amount}</p>
        <strong>Fund</strong>
        <p>${d.fund}</p>
        <strong>Year</strong>
        <p>${d.year}</p>
        <strong>Location</strong>
        <p>${d.location}</p>
        <strong>Duration (months)</strong>
        <p>${d.duration}</p>
    `;

    OPTS.tooltip.html(html)
        .style('visibility', 'visible')
        .style('top', (cy + r + 7) + 'px')
        .style('left', (cx - 110) + 'px');
}

function sliceCircles(slice) {
    const centers = treemap(STATE.data, slice, [OPTS.width, OPTS.height]);
    OPTS.force.on('tick', tick(centers, slice));
    labels(centers);
    OPTS.force.start();
}

function sumAmountByCategory(data, category) {
    const sums = {};

    data.forEach(function (o) {
        if (typeof sums[o[category]] === 'undefined') {
            sums[o[category]] = 0;
        }
        sums[o[category]] += o.amount;
    });

    return sums;
}

function tick(centers, prop) {
    const lookup = {};
    centers.forEach(function (center) {
        lookup[center.name] = center;
    });

    return function (e) {
        STATE.data.forEach(function (o) {
            const center = lookup[o[prop]];
            o.y += ((center.y + (center.dy / 2)) - o.y) * e.alpha;
            o.x += ((center.x + (center.dx / 2)) - o.x) * e.alpha;
        });

        STATE.circles.each(collide(0.13))
            .attr('cx', (d) => d.x)
            .attr('cy', (d) => d.y);
    };
}

function treemap(data, vname, size) {
    const sums = sumAmountByCategory(data, vname);
    const children = constructChildren(sums);

    d3.layout.treemap().size(size).ratio(1 / 1).padding(25)
        .value(function (d) {
            return Math.sqrt(d.value / Math.PI);
        }).nodes({children: children});

    return children;
}

function uniq(array) {
    return array.filter((el, pos, arr) => arr.indexOf(el) === pos)
}

function validateUrl(url) {
    const pattern = /^www|https?:\/\//;

    if (pattern.test(url)) {
        const api = /http:\/\/grantnav.threesixtygiving.org\/search\?/;
        const proxy = 'https://slice-and-dice.herokuapp.com/search.json?';
        return url.replace(api, proxy);
    } else {
        return '';
    }
}

function width() {
    if (window.innerWidth < 720) {
        return window.innerWidth;
    } else {
        return window.innerWidth - 300;
    }
}