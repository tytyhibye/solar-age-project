import { Planets } from "./../src/solar-bizz.js"

describe ("Planets", () => {

  test('should verify user input is numbers only', () => {
    const testOne = new Planets("33", "earth", "365")
    expect(typeof(testOne.userAge)).toEqual(33);
    expect(typeof(testOne.planetName)).toEqual("earth");
    expect(typeof(testOne.userAge)).toEqual("365");
  })
})