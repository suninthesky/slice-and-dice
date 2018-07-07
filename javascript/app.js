/*jslint es6 */

import chart from './modules/chart.js';
import queryParams from './modules/params.js';

document.addEventListener('DOMContentLoaded', function () {
    const chartContainer = document.getElementById('chart');

    if (!chartContainer) {
        return;
    }

    const msg = "Loading data from GrantNav..."
    chartContainer.innerHTML = `<div style="position: relative; top: 50px;">${msg}</div>`;

    const params = queryParams.all(window.location.search);

    if (!params.q) {
        params.q = document.getElementById('story-query').innerText;
    }

    if (!params.slice) {
        params.slice = document.getElementById('story-slice').innerText;
    }

    const opts = {el: chartContainer, params};
    chart.init(opts);

    updateChartControls(params);
});

function updateChartControls(params) {
    const slice = document.getElementById('slice');
    slice.value = params.slice || 'funder';

    const query = document.getElementById('query');

    if (!query) {
        return;
    }

    query.elements.q.value = params.q || '';

    query.addEventListener('submit', function (e) {
        e.preventDefault();
        const q = this.elements.q.value;
        window.location.search = `q=${q}`;
    }, false);
}