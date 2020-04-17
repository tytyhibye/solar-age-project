import { Planet } from "./../src/solar-bizz.js"

describe ("Planet", () => {

  test('should verify user input age is numbers only', () => {
    const testOne = new Planet(33, "earth", 365)
    expect(typeof(testOne.inputAge)).toEqual("number");
    expect(typeof(testOne.planetName)).toEqual("string");
    expect(typeof(testOne.perYear)).toEqual("number");
  })

  test('should return earth years in days', () => {
    let testTwo = new Planet(33, "Earth", )
    expect(testTwo.getDays(testTwo.inputAge)).toEqual(12045);
  })

  test('should divide planets days by earth age in days to return solar age', () => {
    let testThree = new Planet(33, "mercury", 88)
    expect(testThree.getAge(testThree.solarAge)).toEqual(136)
  })
})