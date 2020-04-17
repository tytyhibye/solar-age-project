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
    var days = this.perYear;
    this.solarAge = (days / planetName.perYear)
    return this.solarAge;
  }
}

export let mercury = new Planet(0, "Mercury", 88,);
export let venus = new Planet(0, "Venus", 224);
export let earth = new Planet(0, "Earth", 365);
export let mars = new Planet(0, "Mars", 687);
export let jupiter = new Planet(0, "Jupiter", 4329);
export let saturn = new Planet(0, "Saturn", 10759);
export let uranus = new Planet(0, "Uranus", 30688.5);
export let neptune = new Planet(0, "Neptune", 60182);
export let pluto = new Planet(0, "Pluto", 90553);