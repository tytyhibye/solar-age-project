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
    let endGame = [];
    this.solarAge = (this.usersAge / this.perYear)
    if (this.solarAge >= 200) {
      this.lifeSpan = (this.solarAge -= 200);  //need to create lifeSpan without changing value of solarAge
      endGame.push(this.lifeSpan, this.solarAge);
      // console.log(this.getAge())
      console.log(endGame)      // returns [lifeSpan, lifeSpan]
      return endGame;
    } else {
      return this.solarAge;
    }
  }
}