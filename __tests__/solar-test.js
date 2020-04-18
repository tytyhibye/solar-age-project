import { Planet } from "../src/solar-bizz"

console.log(Planet)

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
})