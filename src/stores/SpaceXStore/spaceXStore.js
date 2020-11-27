import { observable, action } from "mobx";

class SpaceXStore {
  @observable isSelectedYear;
  @observable launchValue;
  @observable landingValue;
  @observable missionsList;
  @observable currentURL;
  constructor() {
    this.init();
  }

  init() {
    this.isSelectedYear = "";
    this.launchValue = "";
    this.landingValue = "";
    this.missionsList = null;
    this.currentURL = "";
  }

  @action.bound
  setSelectedYear(value) {
    if (this.isSelectedYear !== value) {
      this.isSelectedYear = value;
    } else {
      this.isSelectedYear = "";
    }
    this.fetchData();
  }

  @action.bound
  setLaunchValue(value) {
    if (this.launchValue !== value) {
      this.launchValue = value;
    } else {
      this.launchValue = "";
    }
    this.fetchData();
  }

  @action.bound
  setLandingValue(value) {
    if (this.landingValue !== value) {
      this.landingValue = value;
    } else {
      this.landingValue = "";
    }
    this.fetchData();
  }

  getLaunchValues = () => {
    return ["True", "False"];
  };

  getYears = () => {
    return [
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
    ];
  };

  @action.bound
  setData(response) {
    this.missionsList = response;
  }

  @action.bound
  getURL() {
    let url = `https://api.spaceXdata.com/v3/launches?limit=100`;
    if (this.launchValue) {
      const isLaunchedSuccessfully = this.launchValue === "True" ? true : false;
      url = url + `&launch_success=${isLaunchedSuccessfully}`;
    }
    if (this.landingValue) {
      const isLandedSuccessfully = this.landingValue === "True" ? true : false;
      url = url + `&land_success=${isLandedSuccessfully}`;
    }
    if (this.isSelectedYear) {
      url = url + `&launch_year=${this.isSelectedYear}`;
    }

    return url;
  }

  async fetchData() {
    const url = this.getURL();
    if (url !== this.currentURL) {
      this.missionsList = null;
      this.currentURL = url;
      const res = await fetch(url);
      const response = await res.json();
      this.setData(response);
    }
  }
}

export default SpaceXStore;
