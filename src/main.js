import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
//import $ from "jquery";
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
  }

  let newPlanet = new Planet(inputName, planetAge, inputAge)
  newPlanet.getAge(newPlanet.getDays())
  console.log(inputAge)

  $("#outputAge").text(newPlanet.solarAge);
  $("#outputPlanet").text(newPlanet.planetName);

});