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
    if (this.solarAge > 200) {
      let lifeSpan = (this.solarAge - 200);  
      endGame.push(lifeSpan, this.solarAge);
      console.log(endGame)     
      return endGame;
    } else {
      return this.solarAge;
    }
  }
}