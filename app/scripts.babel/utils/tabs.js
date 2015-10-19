define(function() {
  var windowID = chrome.windows.WINDOW_ID_CURRENT;

  var tabs = {
    getCurrentTab: function (callback) {
      chrome.tabs.query({
        active: true,
        windowId: windowID,
      },
      function (result) {
        // console.log(tabs[0]);
        callback(result[0]);
      });
    }
  };
  return tabs;
});
