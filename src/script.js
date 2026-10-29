function calculate(principal, rate, years) {
  principal = Number(principal);
  rate = Number(rate);
  years = Number(years);

  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(years) ||
    principal < 0 ||
    rate < 0 ||
    years < 0
  ) {
    throw new TypeError("Please enter valid numeric values.");
  }

  const interest = (principal * rate * years) / 100;
  const total = principal + interest;

  return {
    interest,
    total
  };
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculate };
}

if (typeof document !== "undefined") {
  const form = document.getElementById("calculator-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const principal = document.getElementById("principal").value;
      const rate = document.getElementById("rate").value;
      const years = document.getElementById("years").value;

      const result = calculate(principal, rate, years);

      document.getElementById("result").innerHTML = `
        <p>Interest: ${result.interest.toFixed(2)}</p>
        <p>Total Amount: ${result.total.toFixed(2)}</p>
      `;
    });
  }
}