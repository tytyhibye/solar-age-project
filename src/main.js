import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Planet } from "./solar-bizz.js";

//bizz logic:


//UI logic:
$("#inputForm").submit(function(event) {
  event.preventDefault();
  let inputAge = $('#age').val();
  let inputName = $('#planet').val();
  let planetAge = 0
  
  switch(inputName){
  case 'Mercury':
    planetAge = 88
    break;
  case 'Venus':
    planetAge = 224
    break;
  case 'Earth':
    planetAge = 365
    break;
  case 'Mars':
    planetAge = 687
    break;
  case 'Saturn':
    planetAge = 10759
    break;
  case 'Jupiter':
    planetAge = 4329
    break;
  case 'Uranus':
    planetAge = 30688.5
    break;
  case 'Neptune':
    planetAge = 60182
    break;
  case 'Pluto':
    planetAge = 90553
    break;
  }

  let newPlanet = new Planet(inputName, planetAge, inputAge)
  newPlanet.getAge(newPlanet.getDays())
  // console.log(inputAge)
  $(".inputField").fadeOut(300);
  $("#results").fadeIn(1700);
  if (newPlanet.solarAge > 200) {
    $("#outputAge").text(newPlanet.solarAge);
    $("#outputSpan").text(newPlanet.lifeSpan);
    $("#rip").fadeIn(1700);
  } else {
  $("#outputAge").text(newPlanet.solarAge);
  }
  $("#outputPlanet").text(newPlanet.planetName);
  
  $('#reset').click(function(event) {
    event.preventDefault();
    $("#results").hide();
    $(".inputField").fadeIn(1700);
  })
});