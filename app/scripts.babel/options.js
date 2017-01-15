'use strict';


requirejs.config({
    baseUrl: 'scripts'
});

requirejs(['utils/tabs', 'utils/storage'], function (tabs, storage) {
    storage.initSites();

    let calloutNoSites = $('#no-sites.callout');
    let tableStoredSites = $('#saved-sites');


    let createRows = function (sites, preset, day) {
        let rows = [];
        _.each(sites, function (site, index) {
            let row = $('<tr>');
            let tdSite = $('<td>').addClass('sites').html(site).data('index', index);
            let tdPreset = $('<td>').addClass('presets').html(preset).data('day', day);
            let tdRemove = $('<td>').html('<a href="#" class="button alert" >' +
                '<span aria-hidden="true">' +
                'X' +
                '</span>' +
                '</a>');
            row.append(tdSite).append(tdPreset).append(tdRemove);
            rows.push(row);
        });
        tableStoredSites.append(rows);
    };

    let fillTable = function () {
        let sites = storage.getSites();
        createRows(sites.everyDayTabs, 'every day', storage.days.EVERY);
        createRows(sites.mondayTabs, 'monday', storage.days.MON);
        createRows(sites.tuesdayTabs, 'tuesday', storage.days.TUE);
        createRows(sites.wednesdayTabs, 'wednesday', storage.days.WED);
        createRows(sites.thursdayTabs, 'thursday', storage.THU);
        createRows(sites.fridayTabs, 'friday', storage.days.FRI);
        createRows(sites.saturdayTabs, 'saturday', storage.days.SAT);
        createRows(sites.sundayTabs, 'sunday', storage.days.SUN);
    };

    let refillTable = function () {
        tableStoredSites.find('tr').not('tr:first').remove();
        fillTable();
    };

    let deleteSite = function (event) {
        let closestTableRow = $(this).closest('tr');
        let siteTableData = closestTableRow.find('.sites');
        let presetsTableData = closestTableRow.find('.presets');
        storage.removeSite(presetsTableData.data('day'), siteTableData.data('index'));
        refillTable();
    };

    if(storage.hasTabsToOpen()) {
        fillTable();
        tableStoredSites.removeClass('hide');
        tableStoredSites.on('click.del', 'td > a', deleteSite)
    } else {
        calloutNoSites.removeClass('hide');
    }

});
