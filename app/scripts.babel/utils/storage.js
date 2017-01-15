define(function () {
    var sites = {};
    var storage = {
        days: {
            SUN: 0,
            MON: 1,
            TUE: 2,
            WED: 3,
            THU: 4,
            FRI: 5,
            SAT: 6,
            EVERY: 99
        },

        initSites: function () {
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

        setUrlTo: function (url, preset) {
            let wStorage = window.localStorage;
            switch (preset) {
                case this.days.EVERY:
                    sites.everyDayTabs.push(url);
                    break;

                case this.days.SUN:
                    sites.sundayTabs.push(url);
                    break;

                case this.days.MON:
                    sites.mondayTabs.push(url);
                    break;

                case this.days.TUE:
                    sites.tuesdayTabs.push(url);
                    break;

                case this.days.WED:
                    sites.wednesdayTabs.push(url);
                    break;

                case this.days.THU:
                    sites.thursdayTabs.push(url);
                    break;

                case this.days.FRI:
                    sites.fridayTabs.push(url);
                    break;

                case this.days.SAT:
                    sites.saturdayTabs.push(url);
                    break;
            }
            wStorage.sites = JSON.stringify(sites);
        },

        getSites: function () {
            return sites;
        },

        getTodaySites: function () {
            var today = new Date().getDay();
            switch (today) {
                case this.days.SUN:
                    return sites.sundayTabs;

                case this.days.MON:
                    return sites.mondayTabs;

                case this.days.TUE:
                    return sites.tuesdayTabs;

                case this.days.WED:
                    return sites.wednesdayTabs;

                case this.days.THU:
                    return sites.thursdayTabs;

                case this.days.FRI:
                    return sites.fridayTabs;

                case this.days.SAT:
                    return sites.saturdayTabs;

                default:
                    return null;
            }
        },

        hasTabsToOpen: function () {
            let sites = this.getSites();
            let todaySites = this.getTodaySites();
            let numberEverydaySites = sites.everyDayTabs.length;
            return numberEverydaySites !== 0 || (todaySites !== null && todaySites.length !== 0 );
        },

        removeSite: function (preset, index) {
            let wStorage = window.localStorage;
            let sites = this.getSites();
            switch(preset) {
                case this.days.EVERY:
                    sites.everyDayTabs.splice(index, 1);
                    break;
                case this.days.MON:
                    sites.mondayTabs.splice(index, 1);
                    break;
                case this.days.TUE:
                    sites.tuesdayTabs.splice(index, 1);
                    break;
                case this.days.WED:
                    sites.wednesdayTabs.splice(index, 1);
                    break;
                case this.days.THU:
                    sites.thursdayTabs.splice(index, 1);
                    break;
                case this.days.FRI:
                    sites.fridayTabs.splice(index, 1);
                    break;
                case this.days.SAT:
                    sites.saturdayTabs.splice(index, 1);
                    break;
                case this.days.SUN:
                    sites.sundayTabs.splice(index, 1);
                    break;
                default:
                    return false;
            }
            wStorage.sites = JSON.stringify(sites);
        }

    };
    return storage;
});
