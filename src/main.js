import { Calculator } from './../js/calculator';
import './styles.css';


$(document).ready(function() {
  let newCalculator = new Calculator();
  $("Form#userForm").submit(function(event) {
    event.preventDefault();
    let userDate = $("input#userDate").val();
    newCalculator.userDate = new Date(userDate);
    newCalculator.todaysDate = new Date();
    let agesArray = newCalculator.runCalc();
    $(".mercuryAge").text(agesArray[0].toFixed(2));
    $(".venusAge").text(agesArray[1].toFixed(2));
    $(".marsAge").text(agesArray[2].toFixed(2));
    $(".jupiterAge").text(agesArray[3].toFixed(2));
    $("#result").fadeIn();
  });

  $("Form#deathForm").submit(function(event) {
    event.preventDefault();
    let deathAge = $("input#userDeath").val();
    deathAge = parseInt(deathAge);
    let userAge = newCalculator.userAge;
    let agesArray = newCalculator.convertAllPlanetAges(userAge);
    let deathArray = newCalculator.convertAllPlanetAges(deathAge);
    let ageDiff = newCalculator.differenceOfAges(agesArray, deathArray);

    $(".deathExp").text(deathAge);
      $(".earthYears").text((deathAge - newCalculator.userAge).toFixed(2));
    $(".mercuryYears").text(ageDiff[0].toFixed(2));
    $(".venusYears").text(ageDiff[1].toFixed(2));
    $(".marsYears").text(ageDiff[2].toFixed(2));
    $(".jupiterYears").text(ageDiff[3].toFixed(2));
    $("#deathExp").fadeIn();
  });
});
