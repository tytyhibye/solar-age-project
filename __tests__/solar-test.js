import { Planets } from "./../src/solar-bizz.js"

describe ("Planets", () => {

  test('should verify user input age is numbers only', () => {
    const testOne = new Planets( 33, "earth", 365)
    expect(typeof(testOne.userAge)).toEqual("number");
    expect(typeof(testOne.planetName)).toEqual("string");
    expect(typeof(testOne.perYear)).toEqual("number");
  })

  test('should return earth years in days', () => {
    let testTwo = new Planets ( 33, "Earth", )
    expect(testTwo.getDays(testTwo.userAge)).toEqual(12045);
  })
})