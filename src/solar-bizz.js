export class Planets {
  constructor(userAge, planetName, perYear) {
    this.userAge = userAge;
    this.planetName = planetName;
    this.perYear = perYear;
  }

getDays() {
  let age = this.userAge;
  this.perYear = (age*365);
  return this.perYear;
  }
}