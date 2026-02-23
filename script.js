function calculateStock() {
  const capital = parseFloat(document.getElementById("capital").value);
  const entry = parseFloat(document.getElementById("entry").value);
  const stop = parseFloat(document.getElementById("stop").value);
  const target = parseFloat(document.getElementById("target").value);
  const riskPercent = parseFloat(document.getElementById("riskPercent").value);

  const riskAmount = capital * (riskPercent / 100);
  const priceDiff = Math.abs(entry - stop);
  const positionSize = riskAmount / priceDiff;
  const reward = Math.abs(target - entry) * positionSize;
  const rrRatio = reward / riskAmount;

  document.getElementById("result").innerHTML = `
    <p>💰 최대 손실: ${riskAmount.toFixed(0)} 원</p>
    <p>📦 매수 수량: ${positionSize.toFixed(2)}</p>
    <p>🎯 예상 수익: ${reward.toFixed(0)} 원</p>
    <p>⚖ 손익비: ${rrRatio.toFixed(2)} : 1</p>
  `;
}

function calculateCrypto() {
  const capital = parseFloat(document.getElementById("capital").value);
  const entry = parseFloat(document.getElementById("entry").value);
  const stop = parseFloat(document.getElementById("stop").value);
  const target = parseFloat(document.getElementById("target").value);
  const leverage = parseFloat(document.getElementById("leverage").value);
  const feePercent = parseFloat(document.getElementById("fee").value) / 100;
  const riskPercent = parseFloat(document.getElementById("riskPercent").value);

  const riskAmount = capital * (riskPercent / 100);
  const priceDiff = Math.abs(entry - stop);
  const positionSize = (riskAmount / priceDiff) * leverage;
  const marginRequired = (positionSize * entry) / leverage;
  const feeCost = positionSize * entry * feePercent * 2;
  const reward = Math.abs(target - entry) * positionSize - feeCost;
  const rrRatio = reward / riskAmount;

  document.getElementById("result").innerHTML = `
    <p>💰 최대 손실: ${riskAmount.toFixed(0)} 원</p>
    <p>📦 포지션 규모: ${positionSize.toFixed(2)}</p>
    <p>🏦 필요 증거금: ${marginRequired.toFixed(0)} 원</p>
    <p>💸 수수료: ${feeCost.toFixed(0)} 원</p>
    <p>🎯 예상 수익: ${reward.toFixed(0)} 원</p>
    <p>⚖ 손익비: ${rrRatio.toFixed(2)} : 1</p>
  `;
}