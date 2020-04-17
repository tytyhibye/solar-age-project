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

  let newPlanet = new Planet(inputName,inputAge)
  inputAge = newPlanet.getAge()
  console.log(name)

  $("#outputAge").text(newPlanet.solarAge);
  $("#outputPlanet").text(newPlanet.planetName);

});