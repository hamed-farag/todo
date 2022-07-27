import { generateRandomNumber } from "../../src/utils/number";

describe("utils/number", () => {
  it("generateRandomNumber / Number should be defined", () => {
    const number = generateRandomNumber();

    expect(number).toBeDefined();
  });
  it("generateRandomNumber / Number should be positive", () => {
    const number = generateRandomNumber();

    expect(number).toBeGreaterThan(0);
  });
});
