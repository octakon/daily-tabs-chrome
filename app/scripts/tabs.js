"use strict";

(function () {
  var windowID = chrome.windows.WINDOW_ID_CURRENT;
  var tabs = {
    getCurrentTab: function getCurrentTab() {
      var currentTab = chrome.tabs.query({
        active: true,
        windowId: windowID
      }, function (tabs) {
        return tabs[0];
      });
      return currentTab;
    }
  };

  return tabs;
})();
//# sourceMappingURL=tabs.js.map
