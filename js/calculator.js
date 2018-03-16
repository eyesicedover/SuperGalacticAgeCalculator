export class Calculator {
  constructor() {
    this.userDate;
    this.todaysDate;
    this.userDateInSeconds;
    this.todaysDateInSeconds;
    this.userAge;
  }

  convertToSeconds() {
    this.userDateInSeconds = ((this.userDate.getTime())/1000);
    this.todaysDateInSeconds = ((this.todaysDate.getTime())/1000);
  }

  determineAge() {
    let ageInSeconds = this.todaysDateInSeconds - this.userDateInSeconds;
    this.userAge = (ageInSeconds/31536000);
  }
}
