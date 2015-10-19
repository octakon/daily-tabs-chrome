'use strict';

console.log('\'Allo \'Allo! Popup');
chrome.tabs.query({
  active: true,
  windowId: chrome.windows.WINDOW_ID_CURRENT
}, function (tabs) {
  console.log(tabs);
});
//# sourceMappingURL=popup.js.map
