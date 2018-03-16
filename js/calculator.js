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

  //method to save space
  runCalc() {
    let allConvertedAges = [];
    this.convertToSeconds();
    this.ageInSeconds();
    this.determineAge();
    allConvertedAges.push(this.calculateMercuryAge(this.userAge));
    allConvertedAges.push(this.calculateVenusAge(this.userAge));
    allConvertedAges.push(this.calculateMarsAge(this.userAge));
    allConvertedAges.push(this.calculateJupiterAge(this.userAge));
    return allConvertedAges;
  }

  convertAllPlanetAges(age) {
    let allAges = [];
    allAges.push(this.calculateMercuryAge(age));
    allAges.push(this.calculateVenusAge(age));
    allAges.push(this.calculateMarsAge(age));
    allAges.push(this.calculateJupiterAge(age));
    return allAges;
  }

  differenceOfAges(userAges, allLifeExpAges) {
    let allAgeDiff = [];
    for (var i = 0; i < userAges.length; i++) {
      allAgeDiff.push(allLifeExpAges[i] - userAges[i]);
    }
    return allAgeDiff;
  }
}
