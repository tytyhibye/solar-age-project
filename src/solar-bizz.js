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
    if (this.solarAge > 200) {
      this.lifeSpan = this.solarAge -= 200;
      return this.lifeSpan;
    } else {
    return this.solarAge;
    }
  }
}