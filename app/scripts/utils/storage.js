'use strict';

define(function () {
  var sites = {};
  var days = {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6
  };
  var storage = {
    initSites: function initSites() {
      var storedSites = window.localStorage.sites;
      if (!_.isUndefined(storedSites)) {
        sites = JSON.parse(storedSites);
      }
      if (_.isUndefined(sites.everyDayTabs)) {
        sites.everyDayTabs = [];
      }
      if (_.isUndefined(sites.mondayTabs)) {
        sites.mondayTabs = [];
      }
      if (_.isUndefined(sites.tuesdayTabs)) {
        sites.tuesdayTabs = [];
      }
      if (_.isUndefined(sites.wednesdayTabs)) {
        sites.wednesdayTabs = [];
      }
      if (_.isUndefined(sites.thursdayTabs)) {
        sites.thursdayTabs = [];
      }
      if (_.isUndefined(sites.tuesdayTabs)) {
        sites.tuesdayTabs = [];
      }
      if (_.isUndefined(sites.fridayTabs)) {
        sites.fridayTabs = [];
      }
      if (_.isUndefined(sites.saturdayTabs)) {
        sites.saturdayTabs = [];
      }
      if (_.isUndefined(sites.sundayTabs)) {
        sites.sundayTabs = [];
      }
    },

    setUrlTo: function setUrlTo(url, preset) {
      var wStorage = window.localStorage;
      switch (preset) {
        case 'every':
          sites.everyDayTabs.push(url);
          break;

        case 'sun':
          sites.sundayTabs.push(url);
          break;

        case 'mon':
          sites.mondayTabs.push(url);
          break;

        case 'tue':
          sites.tuesdayTabs.push(url);
          break;

        case 'wed':
          sites.wednesdayTabs.push(url);
          break;

        case 'thu':
          sites.thursdayTabs.push(url);
          break;

        case 'fri':
          sites.fridayTabs.push(url);
          break;

        case 'sat':
          sites.saturdayTabs.push(url);
          break;
      }
      wStorage.sites = JSON.stringify(sites);
    },

    getSites: function getSites() {
      return sites;
    },

    getTodaySites: function getTodaySites() {
      var today = new Date().getDay();
      switch (today) {
        case days.SUN:
          return sites.sundayTabs;

        case days.MON:
          return sites.mondayTabs;

        case days.TUE:
          return sites.tuesdayTabs;

        case days.WED:
          return sites.wednesdayTabs;

        case days.THU:
          return sites.thursdayTabs;

        case days.FRI:
          return sites.fridayTabs;

        case days.SAT:
          return sites.saturdayTabs;

        default:
          return null;
      }
    }
  };
  return storage;
});
//# sourceMappingURL=storage.js.map
