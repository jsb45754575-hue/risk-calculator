function calculate() {
  const direction = document.getElementById("direction").value;
  const capital = parseFloat(document.getElementById("capital").value);
  const entry = parseFloat(document.getElementById("entry").value);
  const stop = parseFloat(document.getElementById("stop").value);
  const target = parseFloat(document.getElementById("target").value);
  const leverage = parseFloat(document.getElementById("leverage").value);
  const feePercent = parseFloat(document.getElementById("fee").value) / 100;
  const riskPercent = parseFloat(document.getElementById("riskPercent").value);

  if (!capital || !entry || !stop || !riskPercent) {
    alert("모든 값을 입력해주세요.");
    return;
  }

  const riskAmount = capital * (riskPercent / 100);
  const priceDiff = Math.abs(entry - stop);
  const positionSize = (riskAmount / priceDiff) * leverage;
  const marginRequired = (positionSize * entry) / leverage;

  const feeCost = positionSize * entry * feePercent * 2;

  const rewardDiff = Math.abs(target - entry);
  const reward = rewardDiff * positionSize - feeCost;

  const rrRatio = reward / riskAmount;

  let riskColor = "green";
  if (riskPercent > 3) riskColor = "red";
  else if (riskPercent > 1) riskColor = "orange";

  document.getElementById("result").innerHTML = `
    <p>💰 최대 손실: ${riskAmount.toFixed(0)} 원</p>
    <p>📦 포지션 규모: ${positionSize.toFixed(2)}</p>
    <p>🏦 필요 증거금: ${marginRequired.toFixed(0)} 원</p>
    <p>💸 수수료 비용: ${feeCost.toFixed(0)} 원</p>
    <p>🎯 예상 수익: ${reward.toFixed(0)} 원</p>
    <p style="color:${riskColor}; font-weight:bold;">
      ⚖ 손익비: ${rrRatio.toFixed(2)} : 1
    </p>
  `;
}