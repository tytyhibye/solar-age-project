import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Planet } from "./solar-bizz.js";
import { mercury } from "./solar-bizz.js";

//bizz logic:



//UI logic:
$(document).ready(function() {
  let planetList = [mercury];


  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var inputAge = $("#age").val();
    console.log(inputAge);
    var planetName = $("#planet").val();
    console.log(planetName);
    var planetAge = new Planet(inputAge, planetName);

    this.getDays(inputAge);
    comment.log(this.perYear)
    // getAge();

    this.planetSelector(planetName) {
      if (planetName === "Mercury") {

      }
    }

    $("#outputAge").text(this.solarAge)
  });
});