define(function() {
  var windowID = chrome.windows.WINDOW_ID_CURRENT;

  var tabs = {
    getCurrentTab: function (callback) {
      chrome.tabs.query({
        active: true,
        windowId: windowID,
      },
      function (result) {
        callback(result[0]);
      });
    },
    getAllTabs: function(callback) {
      chrome.tabs.query({
        windowId: windowID,
      },
      function (result) {
        callback(result);
      });
    },
    createTab: function(url) {
      chrome.tabs.create({
        windowId: windowID,
        url: url
      });
    }
  };
  return tabs;
});
