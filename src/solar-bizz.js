export class Planet {
  constructor(inputAge, planetName, perYear, solarAge) {
    this.inputAge = inputAge;
    this.planetName = planetName;
    this.perYear = perYear;
    this.solarAge = solarAge;
  }
  getDays() {
    let age = this.inputAge;
    this.perYear = (age * 365);
    return this.perYear;
  }
  getAge() {
    var perYear = 12045;
    this.solarAge = (perYear / mercury.perYear)
    return this.solarAge;
  }
}

let mercury = new Planet(0, "mercury", 88,);
let venus = new Planet(0, "venus", 224);
let earth = new Planet(0, "earth", 365);
let mars = new Planet(0, "mars", 687);
let jupiter = new Planet(0, "jupiter", 4329);
let saturn = new Planet(0, "saturn", 10759);
let uranus = new Planet(0, "uranus", 30688.5);
let neptune = new Planet(0, "neptune", 60182);
let pluto = new Planet(0, "pluto", 90553);