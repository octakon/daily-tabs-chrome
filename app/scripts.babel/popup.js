'use strict';

requirejs.config({
  baseUrl: 'scripts.babel'
});

requirejs(['utils/tabs', 'utils/storage'], function(tabs, storage) {
  storage.initSites();

  var btnSaveCurrentTab = $('#save-current-tab');
  var btnSaveAllTabs = $('#save-all-tabs');
  var btnGetSmart = $('#get-smart');
  var selectPresets = $('#saving-presets');

  var getSelectedPreset = function () {
    return selectPresets.find('option:selected').val();
  };

  var saveCurrentTab = function() {
    tabs.getCurrentTab(function(tab) {
      storage.setUrlTo(tab.url, getSelectedPreset());
      window.alert(JSON.stringify(storage.getSites()));
    });
  };

  var saveAllTabs = function() {
    tabs.getAllTabs(function(tabs){
      console.log(tabs);
      var i = 0;
      var tabsLength = tabs.length;
      for (i; i < tabsLength; i++) {
        var tab = tabs[i];
        storage.setUrlTo(tab.url, getSelectedPreset());
      }
      window.alert(JSON.stringify(storage.getSites()));
    });
  };

  var openTabs = function() {
    var sites = storage.getSites();
    var todaySites = storage.getTodaySites();
    var i = 0;
    var numberURLs = sites.everyDayTabs.length;
    for(i; i < numberURLs; i++) {
      tabs.createTab(sites.everyDayTabs[i]);
    }
    if(!_.isNull(todaySites)) {
      i=0;
      numberURLs = todaySites.length;
      for(i; i < numberURLs; i++) {
        tabs.createTab(todaySites[i]);
      }
    }
  };

  btnSaveCurrentTab.on('click.sct', saveCurrentTab);
  btnSaveAllTabs.on('click.sat', saveAllTabs);
  btnGetSmart.on('click.gs', openTabs);

});
