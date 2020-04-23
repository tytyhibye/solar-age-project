import { Planet } from "../src/solar-bizz"

describe ("Planet", () => {

  test('should verify user input age is numbers only', () => {
    const testOne = new Planet("Earth", 365, 33)
    expect(typeof(testOne.planetName)).toEqual("string");
    expect(typeof(testOne.perYear)).toEqual("number");
    expect(typeof(testOne.usersAge)).toEqual("number");
  })

  test('should return earth years in days', () => {
    let testTwo = new Planet("Earth", 365, 33)
    expect(testTwo.getDays(testTwo.usersAge)).toEqual(12045);
  })

  test('should divide earth age in days by planet days per year to return exact solar age', () => {
    let testThree = new Planet("Mercury", 88, 33)
    expect(testThree.getAge(testThree.getDays())).toEqual(136.875);
  })

  test('should return the difference in time between users passing on inhabited planet', () => {
   let testFour = new Planet("Mercury", 88, 50)
   expect(testFour.getAge(testFour.getDays())).toEqual([7.38, 207.38]);
  })
})