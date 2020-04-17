import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Planet } from "./solar-bizz.js";

//bizz logic:



//UI logic:
$(document).ready(function() {
  let planetList = [];


  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var inputAge = $("#age").val();
    var planetName = $("#planet").val();
    var planetAge = new Planet(inputAge, planetName);

    getDays(inputAge);
    getAge()

    $("#outputAge").text(planetName.solarAge)
  });
});