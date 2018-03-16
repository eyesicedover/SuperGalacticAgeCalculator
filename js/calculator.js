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

  calculateMercuryAge(age) {
    let convertedAge = age/.24;
    return convertedAge;
  }

  calculateVenusAge(age) {
    let convertedAge = age/.62;
    return convertedAge;
  }

  calculateMarsAge(age) {
    let convertedAge = age/1.88;
    return convertedAge;
  }

  calculateJupiterAge(age) {
    let convertedAge = age/11.86;
    return convertedAge;
  }

  lifeExpectancy(expAge) {
    let allExpAges = [];
    allExpAges.push(this.calculateMercuryAge(expAge));
    allExpAges.push(this.calculateVenusAge(expAge));
    allExpAges.push(this.calculateMarsAge(expAge));
    allExpAges.push(this.calculateJupiterAge(expAge));
    return allExpAges;
  }
}
