'use strict';

requirejs.config({
    baseUrl: 'scripts'
});

requirejs(['utils/tabs', 'utils/storage'], function (tabs, storage) {
    storage.initSites();

    var btnSaveCurrentTab = $('#save-current-tab');
    var btnSaveAllTabs = $('#save-all-tabs');
    var btnOpenTabs = $('#open-tabs');
    var selectPresets = $('#saving-presets');

    var getSelectedPreset = function () {
        return parseInt(selectPresets.find('option:selected').val());
    };

    var saveCurrentTab = function () {
        tabs.getCurrentTab(function (tab) {
            storage.setUrlTo(tab.url, getSelectedPreset());
            triggerButtonToOpenTabs();
        });
    };

    var saveAllTabs = function () {
        tabs.getAllTabs(function (tabs) {
            var i = 0;
            var tabsLength = tabs.length;
            for (i; i < tabsLength; i++) {
                var tab = tabs[i];
                storage.setUrlTo(tab.url, getSelectedPreset());
            }
            triggerButtonToOpenTabs();
        });
    };

    var openTabs = function () {
        var sites = storage.getSites();
        var todaySites = storage.getTodaySites();
        var i = 0;
        var numberURLs = sites.everyDayTabs.length;
        for (i; i < numberURLs; i++) {
            tabs.createTab(sites.everyDayTabs[i]);
        }
        if (!_.isNull(todaySites)) {
            i = 0;
            numberURLs = todaySites.length;
            for (i; i < numberURLs; i++) {
                tabs.createTab(todaySites[i]);
            }
        }
    };

    let triggerButtonToOpenTabs = function () {
        if (storage.hasTabsToOpen()) {
            btnOpenTabs.removeClass('disabled');
            btnOpenTabs.on('click.gs', openTabs);
        } else {
            btnOpenTabs.addClass('disabled');
        }
    };

    btnSaveCurrentTab.on('click.sct', saveCurrentTab);
    btnSaveAllTabs.on('click.sat', saveAllTabs);

    triggerButtonToOpenTabs();

});
