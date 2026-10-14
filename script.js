document.getElementById("calc-btn").addEventListener("click", function () {
  // 毎月の積立額
  const monthly = Number(document.getElementById("monthly").value);
  // 年利（％）
  const annualRate = Number(document.getElementById("rate").value);
  // 運用期間（年）
  const years = Number(document.getElementById("years").value);
  // 月利に変換
  const monthlyRate = (annualRate / 100) / 12;
  // 総月数（ヶ月）
  const months = years * 12;

  let total = 0;

  for (let i = 0; i < months; i++) {
    total = (total + monthly) * (1 + monthlyRate);
  }

  // 【出力ブロック】計算結果を画面に表示する
  document.getElementById("result").textContent =  `将来の資産額: ${Math.floor(total).toLocaleString()}円`
});
