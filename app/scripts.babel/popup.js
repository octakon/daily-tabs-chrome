'use strict';
var sites = {};
var initSites = function() {
  if(typeof window.localStorage.allDays === 'undefined') {
    sites.allDays = [];
  } else {
    sites.allDays = JSON.parse(window.localStorage.allDays);
  }
};
initSites();

requirejs.config({
  baseUrl: 'scripts.babel'
});

requirejs(['utils/tabs'], function(tabs) {
  var btnSaveCurrentTab = $('#save-current-tab');
  var btnSaveAllTabs = $('#save-all-tabs');
  var btnGetSmart = $('#get-smart');

  var saveCurrentTab = function() {
    tabs.getCurrentTab(function(tab) {
      sites.allDays.push(tab.url);
      window.localStorage.allDays = JSON.stringify(sites.allDays);
      window.alert(JSON.stringify(sites));
    });
  };

  var saveAllTabs = function() {
    tabs.getAllTabs(function(tabs){
      console.log(tabs);
      var i = 0;
      var tabsLength = tabs.length;
      for (i; i < tabsLength; i++) {
        var tab = tabs[i];
        sites.allDays.push(tab.url);
      }
      window.localStorage.allDays = JSON.stringify(sites.allDays);
      window.alert(JSON.stringify(sites.allDays));
    });
  };

  var openTabs = function() {
    initSites();
    var i = 0;
    var numberURLs = sites.allDays.length;
    for(i; i < numberURLs; i++) {
      tabs.createTab(sites.allDays[i]);
    }
  };

  btnSaveCurrentTab.on('click.sct', saveCurrentTab);
  btnSaveAllTabs.on('click.sat', saveAllTabs);
  btnGetSmart.on('click.gs', openTabs);

});
