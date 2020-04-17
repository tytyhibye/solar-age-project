import { Planets } from "./../src/solar-bizz.js"

describe ("Planets", () => {

  test('should verify user input age is numbers only', () => {
    const testOne = new Planets( 33, "earth", 365)
    expect(typeof(testOne.userAge)).toEqual("number");
    expect(typeof(testOne.planetName)).toEqual("string");
    expect(typeof(testOne.perYear)).toEqual("number");
  })
})