const { calculate } = require("../script");

describe("Interest Rate Calculator", function () {
  it("calculates simple interest correctly", function () {
    const result = calculate(1000, 5, 2);

    expect(result.interest).toBe(100);
    expect(result.total).toBe(1100);
  });

  it("converts string inputs to numbers", function () {
    const result = calculate("2000", "10", "3");

    expect(result.interest).toBe(600);
    expect(result.total).toBe(2600);
  });
});