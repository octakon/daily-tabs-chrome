'use strict';

console.log('\'Allo \'Allo! Popup');
chrome.tabs.query(
  {
    active: true,
    windowId: chrome.windows.WINDOW_ID_CURRENT
  },
  function(tabs) {
    console.log(tabs);
});

requirejs.config({
  baseUrl: 'scripts.babel'
});

requirejs(['utils/tabs'], function(tabs) {

  $('#alert-current-tab').on('click.alert', function(evt) {
    tabs.getCurrentTab(function(tab) {
      $('#currentTab').html(tab.url);
      alert(tab.url);
    });
  });

});
