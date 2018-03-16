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
}
