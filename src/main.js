import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Planet } from "./solar-bizz.js";
import { mercury } from "./solar-bizz.js";

//bizz logic:



//UI logic:
$(document).ready(function() {
  let planetList = [];


  $("form#inputForm").submit(function(event) {
    event.preventDefault();

    var inputAge = $("#age").val();
    var planetName = $("#planet").val();
    console.log(inputAge)
    console.log(planetName)
    var planetAge = new Planet(inputAge, planetName);
    
    this.getDays(inputAge);
    comment.log(this.perYear)
    
    // this.getAge();
    
    this.planetSelector(planetName) {
      if (planetName === "Mercury") {
        this.perYear = 88;
      } else if(planetName === "Venus") {
        this.perYear = 224;
      }
    }

    $("#outputAge").text(this.solarAge);
    $("#outputPlanet").text(this.planetName);
  });
});