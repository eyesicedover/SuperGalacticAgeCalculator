import { Calculator } from './../js/calculator.js';

describe ("Character", function () {
  it("will validate that convertToSeconds will return a dateTime in seconds", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();

    //Act
    newCalculator.convertToSeconds();

    //Assert
    expect(newCalculator.userDateInSeconds).toEqual(10);
    expect(newCalculator.todaysDateInSeconds).not.toBeLessThan(10);
  })
});
