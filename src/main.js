import { Calculator } from './../js/calculator';
import './styles.css';


$(document).ready(function() {
  let newCalculator = new Calculator();
  $("#userForm").submit(function(event) {
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
});
