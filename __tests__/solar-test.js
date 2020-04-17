import { Planet } from "../src/solar-bizz.js"


//let mercury = new Planet(0, "mercury", 88, '');

describe ("Planet", () => {

  test('should verify user input age is numbers only', () => {
    const testOne = new Planet("Saturn", 10759, 33)
    expect(typeof(testOne.planetName)).toEqual("string");
    expect(typeof(testOne.perYear)).toEqual("number");
    expect(typeof(testOne.inputAge)).toEqual("number");
  })

  test('should return earth years in days', () => {
    let testTwo = new Planet("Earth", 365, 33)
    expect(testTwo.getDays(testTwo.inputAge)).toEqual(12045);
  })

  test('should divide earth age in days by planet days per year to return exact solar age', () => {
    let testThree = new Planet("mercury", 88, 33)
    expect(testThree.getAge(testThree.solarAge)).toEqual(136.875)
  })
})