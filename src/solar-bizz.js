export class Planet {
  constructor(planetName, perYear, inputAge, solarAge) {
    this.planetName = planetName;
    this.perYear = perYear;
    this.inputAge = inputAge;
    this.solarAge = solarAge;
  }
  getDays() {
    let age = this.inputAge;
    this.perYear = (age * 365);
    return this.perYear;
  }
  getAge() {
    var days = 12045;
    this.solarAge = (days / mercury.perYear)
    return this.solarAge;
  }
}
export let mercury = new Planet("Mercury", 88,);
export let venus = new Planet("Venus", 224);
export let earth = new Planet("Earth", 365);
export let mars = new Planet("Mars", 687);
export let jupiter = new Planet("Jupiter", 4329);
export let saturn = new Planet("Saturn", 10759);
export let uranus = new Planet("Uranus", 30688.5);
export let neptune = new Planet("Neptune", 60182);
export let pluto = new Planet("Pluto", 90553);