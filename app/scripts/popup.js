'use strict';
var sites = {};
if (typeof window.localStorage.allDays === 'undefined') {
  sites.allDays = [];
} else {
  sites.allDays = JSON.parse(window.localStorage.allDays);
}
chrome.tabs.query({
  active: true,
  windowId: chrome.windows.WINDOW_ID_CURRENT
}, function (tabs) {
  console.log(tabs);
});

requirejs.config({
  baseUrl: 'scripts.babel'
});

requirejs(['utils/tabs'], function (tabs) {

  $('#save-current-tab').on('click.sct', function () {
    tabs.getCurrentTab(function (tab) {
      sites.allDays.push(tab.url);
      window.localStorage.allDays = JSON.stringify(sites.allDays);
      window.alert(JSON.stringify(sites));
    });
  });
});
//# sourceMappingURL=popup.js.map
