document.getElementById("calc-btn").addEventListener("click", function () {
  const monthly = Number(document.getElementById("monthly").value);
  const annualRate = Number(document.getElementById("rate").value);
  const years = Number(document.getElementById("years").value);
  const monthlyRate = (annualRate / 100) / 12;
  const months = years * 12;
  let total = 0;

  for (let i = 0; i < months; i++) {
    total = (total + monthly) * (1 + monthlyRate);
  }
});
