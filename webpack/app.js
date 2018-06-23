/*jslint es6 */

import chart from './modules/chart.js';
import queryParams from './modules/params.js';

document.addEventListener('DOMContentLoaded', function () {
    const chartContainer = document.getElementById('chart');

    if (!chartContainer) {
        return;
    }

    // TODO: refactor
    chartContainer.innerText = 'Loading...';

    const params = queryParams.all(window.location.search);

    if (!params.q) {
        params.q = document.getElementById('story-query').innerText;
    }

    const opts = {el: chartContainer, params};
    chart.init(opts);

    updateChartControls(params);
});

function updateChartControls(params) {
    const query = document.getElementById('query');
    const slice = document.getElementById('slice');

    query.elements.q.value = params.q || '';
    slice.value = params.slice || 'funder';

    query.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = this.elements.q.value;
        window.location.search = `q=${q}`;
    }, false);
}