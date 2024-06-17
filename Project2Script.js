function calculate(){
    let n = document.getElementById("yearInput").value*12;
    let p = document.getElementById("principalInput").value;
    let r = document.getElementById("yearlyRateInput").value/1200;
    let payment = (p*r)/(1-Math.pow((1 + r), -n));
    document.getElementById(paymentOutput).innerHTML=payment;
}