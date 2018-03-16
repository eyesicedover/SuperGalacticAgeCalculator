import { Calculator } from './../js/calculator.js';

describe ("Character", function () {
  it("will validate that convertToSeconds will convert a dateTime to seconds", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("December 12, 1992");
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
    newCalculator.userDate = new Date("December 12, 1992");
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
    newCalculator.userDate = new Date("December 12, 1992");
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
    newCalculator.userDate = new Date("December 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let mercuryAge = newCalculator.calculateMercuryAge(newCalculator.userAge);

    //Assert
    expect(mercuryAge).toBeGreaterThan(105);
  })

  it("will validate that calculateVenusAge will give the users age in Venusian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("December 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let venusAge = newCalculator.calculateVenusAge(newCalculator.userAge);

    //Assert
    expect(venusAge).toBeGreaterThan(40);
  })

  it("will validate that calculateMarsAge will give the users age in Martian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("December 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let marsAge = newCalculator.calculateMarsAge(newCalculator.userAge);

    //Assert
    expect(marsAge).toBeGreaterThan(13);
  })

  it("will validate that calculateJupiterAge will give the users age in Jupiterian years", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("December 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();

    //Act
    let jupiterAge = newCalculator.calculateJupiterAge(newCalculator.userAge);

    //Assert
    expect(jupiterAge).toBeGreaterThan(2);
  })

  it("will validate that convertAllPlanetAges will take an input age in years and return an array with that number converted to each age", function() {
    //Arrange
    let newCalculator = new Calculator();

    //Act
    let convertedAges = newCalculator.convertAllPlanetAges(85);

    //Assert
    expect(convertedAges[0]).toBeGreaterThan(350);
    expect(convertedAges[1]).toBeGreaterThan(137);
    expect(convertedAges[2]).toBeGreaterThan(45);
    expect(convertedAges[3]).toBeGreaterThan(7);
  })

  it("will validate that differenceofAges will return the difference of ages in two arrays", function() {
    //Arrange
    let newCalculator = new Calculator();
    newCalculator.userDate = new Date("December 12, 1992");
    newCalculator.todaysDate = new Date();
    newCalculator.convertToSeconds();
    newCalculator.ageInSeconds();
    newCalculator.determineAge();
    let convertedAges = newCalculator.convertAllPlanetAges(newCalculator.userAge);
    let convertedLifeExpAges = newCalculator.convertAllPlanetAges(85);

    //Act
    let ageDiffs = newCalculator.differenceOfAges(convertedAges, convertedLifeExpAges);

    //Assert
    expect(ageDiffs[0]).toBeGreaterThan(248);
    expect(ageDiffs[1]).toBeGreaterThan(96);
    expect(ageDiffs[2]).toBeGreaterThan(31);
    expect(ageDiffs[3]).toBeGreaterThan(5);
  })
});
