export class Calculator {
  constructor() {
    this.userDate;
    this.todaysDate;
    this.userDateInSeconds;
    this.todaysDateInSeconds;
    this.userAgeInSeconds;
    this.userAge;
  }

  convertToSeconds() {
    this.userDateInSeconds = ((this.userDate.getTime())/1000);
    this.todaysDateInSeconds = ((this.todaysDate.getTime())/1000);
  }

  ageInSeconds() {
    this.userAgeInSeconds = this.todaysDateInSeconds - this.userDateInSeconds;
  }

  determineAge() {
    this.userAge = (this.userAgeInSeconds/31536000);
  }

  calculateMercuryAge() {
    let convertedAge = this.userAge/.24;
    return convertedAge;
  }

  calculateVenusAge() {
    let convertedAge = this.userAge/.62;
    return convertedAge;
  }

  calculateMarsAge() {
    let convertedAge = this.userAge/1.88;
    return convertedAge;
  }

  calculateJupiterAge() {
    let convertedAge = this.userAge/11.86;
    return convertedAge;
  }
}
