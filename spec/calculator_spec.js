import { Calculator } from './../js/calculator.js';

describe ("Character", function () {
  it("will validate that convertToSeconds will convert a dateTime to seconds", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();

    //Act
    newCalculator.convertToSeconds();

    //Assert
    expect(newCalculator.userDateInSeconds).toEqual(724147200);
    expect(newCalculator.todaysDateInSeconds).toBeGreaterThan(724147200);
  })

  it("will validate that ageInSeconds will give an age in seconds", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();

    //Act
    newCalculator.ageInSeconds();

    //Assert
    expect(newCalculator.userAgeInSeconds).toBeGreaterThan(797076883);
  })

  it("will validate that determineAge will give an age in years", function() {
    //Arrange
    let newCalculator = new Calculator();
    //age should be at least 25 at this time
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();

    //Act
    newCalculator.determineAge();

    //Assert
    expect(newCalculator.userAge).toBeGreaterThan(25);
  })

  it("will validate that calculateMercuryAge will give the users age in Mercurian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    //age should be at least 25 at this time
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let mercuryAge = newCalculator.calculateMercuryAge();

    //Assert
    expect(mercuryAge).toBeGreaterThan(105);
  })

  it("will validate that calculateVenusAge will give the users age in Venusian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    //age should be at least 25 at this time
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let venusAge = newCalculator.calculateVenusAge();

    //Assert
    expect(venusAge).toBeGreaterThan(40);
  })

  it("will validate that calculateMarsAge will give the users age in Martian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    //age should be at least 25 at this time
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let marsAge = newCalculator.calculateMarsAge();

    //Assert
    expect(marsAge).toBeGreaterThan(13);
  })

  it("will validate that calculateJupiterAge will give the users age in Jupiterian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    //age should be at least 25 at this time
    newCalculator.userDate = new Date("Decembter 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let jupiterAge = newCalculator.calculateJupiterAge();

    //Assert
    expect(jupiterAge).toBeGreaterThan(13);
  })
});
