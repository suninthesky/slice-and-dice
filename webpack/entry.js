/*jslint es6 */
'use strict';

import d3 from 'd3';

// TODO: document known issues
const cors = 'https://cors-anywhere.herokuapp.com/';
// TODO: get url from params
const url = 'http://grantnav.threesixtygiving.org/search.json?json_query=%7B"extra_context"%3A+%7B"amountAwardedFixed_facet_size"%3A+3%2C+"awardYear_facet_size"%3A+3%7D%2C+"sort"%3A+%7B"_score"%3A+%7B"order"%3A+"desc"%7D%7D%2C+"aggs"%3A+%7B"recipientOrganization"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientOrganization.id_and_name"%2C+"size"%3A+3%7D%7D%2C+"fundingOrganization"%3A+%7B"terms"%3A+%7B"field"%3A+"fundingOrganization.id_and_name"%2C+"size"%3A+3%7D%7D%2C+"currency"%3A+%7B"terms"%3A+%7B"field"%3A+"currency"%2C+"size"%3A+3%7D%7D%2C+"recipientRegionName"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientRegionName"%2C+"size"%3A+3%7D%7D%2C+"recipientDistrictName"%3A+%7B"terms"%3A+%7B"field"%3A+"recipientDistrictName"%2C+"size"%3A+3%7D%7D%7D%2C+"query"%3A+%7B"bool"%3A+%7B"filter"%3A+%5B%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%2C+"must"%3A+%7B%7D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%7B"range"%3A+%7B"amountAwarded"%3A+%7B%7D%7D%7D%2C+"must"%3A+%7B%7D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%2C+%7B"bool"%3A+%7B"should"%3A+%5B%5D%7D%7D%5D%2C+"must"%3A+%7B"query_string"%3A+%7B"query"%3A+"tech"%2C+"default_field"%3A+"_all"%7D%7D%7D%7D%7D';

// TODO: extract utility method
const exists = function (a, b) {
  return a ? a[0][b] : 'Missing';
};

// TODO: extract utility method
function mapData (arr) {
  return arr.map(function (obj) {
    return {
      query: 'Query 1',
      funder: obj.fundingOrganization[0].name,
      fund: exists(obj.grantProgramme, 'title'),
      amount: obj.amountAwarded,
      location: exists(obj.beneficiaryLocation, 'name'),
      year: obj.awardDate.substring(0,4),
      title: obj.title,
      description: obj. description,
      radius: (Math.sqrt(+obj.amountAwarded / Math.PI)) / 10,
      x: Math.random() * width,
      y: Math.random() * height
    };
  });
}

// TODO: extract utility method
function sumAmountByCategory (data, category) {
  const sums = {};

  data.forEach(function (o) {
    if (typeof sums[o[category]] === 'undefined') {
      sums[o[category]] = 0;
    }
    sums[o[category]] += o.amount;
  });

  return sums;
}

// TODO: extract utility method
function constructChildren (sums) {
  return Object.keys(sums).map(function (k) {
    return { name: k, value: sums[k] };
  });
}

// TODO: extract utility method
function pluck(array, key) {
  return array.map((o) => o[key]);
}

var treemap = function (data, vname, size) {
  const sums = sumAmountByCategory(data, vname);
  const children = constructChildren(sums);

  d3.layout
    .treemap()
    .size(size)
    .ratio(1/1)
    .padding(15)
    .value(function (d) {
      return Math.sqrt(d.value / Math.PI);
    }).nodes(
      { children: children }
    );

  return children;
};

function addCircles (circles) {
  circles.enter().append('circle')
    .attr('class', 'node')
    .attr('cx', (d) => d.x)
    .attr('cy', (d) => d.y)
    .attr('r', 0)
    .style('fill', (d) => fill(d.funder));

  circles.transition()
    .duration(1000)
    .attr('r', function (d) { return d.radius; });
}

// TODO: organise chart setup code
const varname = 'funder';
// TODO: responsive height
let width = (window.innerWidth - 300), height = 710;
const padding = 2;
// TODO: generate colours
const fill = d3.scale.ordinal().range(['#5bc0eb', '#fde74c', '#9bc53d', '#e55934', '#fa7921', '#ff6b6b']);
const svg = d3.select('#chart').append('svg')
              .attr('width', width)
              .attr('height', height);
const force = d3.layout.force();

// TODO: loading message in UI
d3.json(cors + url, function (error, data) {
  // TODO: failure message in UI
  if (error) { throw error; }

  data = mapData(data.grants);

  const maxRadius = d3.max(pluck(data, 'radius'));
  const circles = svg.selectAll('circle').data(data);

  addCircles(circles);

  draw('funder');

  // TODO: extract event listener
  document.getElementById('slice').addEventListener('change', function () {
    return draw(this.value);
  });

  // TODO: refactor
  window.addEventListener('resize', resize);
  function resize() {
    width = window.innerWidth - 300;
    svg.attr('width', width);
    draw('funder');
  }

  function draw (varname) {
    const centers = treemap(data, varname, [width, height]);
    force.on('tick', tick(centers, varname));
    labels(centers);
    force.start();
  }

  function tick (centers, prop) {
    const lookup = {};
    centers.forEach((center) => lookup[center.name] = center);

    return function (e) {
      data.forEach(function (o) {
        const center = lookup[o[prop]];
        o.y += ((center.y + (center.dy / 2)) - o.y) * e.alpha;
        o.x += ((center.x + (center.dx / 2)) - o.x) * e.alpha;
      });

      circles.each(collide(0.13))
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });
    };
  }

  function labels (centers) {
    svg.selectAll('.label').remove();

    svg.selectAll('.label')
    .data(centers).enter().append('text')
    .attr('text-anchor', 'middle')
    .attr('class', 'label')
    .text((d) => d.name)
    .attr('transform', function (d) {
      return 'translate(' + (d.x + (d.dx / 2)) + ', ' + (d.y + 20) + ')';
    });
  }

  function collide(alpha) {
    var quadtree = d3.geom.quadtree(data);
    return function (d) {
      var r = d.radius + maxRadius + padding,
          nx1 = d.x - r,
          nx2 = d.x + r,
          ny1 = d.y - r,
          ny2 = d.y + r;
      quadtree.visit(function(quad, x1, y1, x2, y2) {
        if (quad.point && (quad.point !== d)) {
          var x = d.x - quad.point.x,
              y = d.y - quad.point.y,
              l = Math.sqrt(x * x + y * y),
              r = d.radius + quad.point.radius + padding;
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
});