function calculate{
    let n = document.getElementById(yearInput).innerHTML*12
    let p = document.getElementById(principalInput).innerHTML;
    let r = document.getElementById(yearlyRateInput).innerHTML/1200;
    let payment = (p*r)/(1-(1+r)**(-n));
    document.getElementById(paymentOutput).innerHTML=
}