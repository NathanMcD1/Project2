function calculate(){
    let n = parseFloat(document.getElementById("yearInput").value) * 12;
    let p = parseFloat(document.getElementById("principalInput").value);
    let r = parseFloat(document.getElementById("yearlyRateInput").value) / 1200;
    let payment = (p * r) / (1 - Math.pow((1 + r), -n));
    document.getElementById("paymentOutput").innerHTML = "$" + payment.toFixed(2);
}