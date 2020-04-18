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
    // console.log(this.perYear)
    // console.log(this.userAge)
    return this.solarAge
  }
}