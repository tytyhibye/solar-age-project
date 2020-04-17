export class Planet {
  constructor(planetName, perYear, usersAge) {
    this.planetName = planetName;
    this.perYear = perYear;
    this.usersAge = usersAge;
  }
  getDays() {
    let age = this.usersAge;
    this.usersAge = (age * 365);
    return this.usersAge;
  }
  getAge() {
    this.solarAge = (this.usersAge / this.perYear)
    console.log(this.perYear)
    console.log(this.userAge)
    return this.solarAge
  }
}
export let mercury = new Planet("Mercury", 88);
export let venus = new Planet("Venus", 224);
export let earth = new Planet("Earth", 365);
export let mars = new Planet("Mars", 687);
export let jupiter = new Planet("Jupiter", 4329);
export let saturn = new Planet("Saturn", 10759);
export let uranus = new Planet("Uranus", 30688.5);
export let neptune = new Planet("Neptune", 60182);
export let pluto = new Planet("Pluto", 90553);