function calcTip(value) {

if (value > 50 && value < 300) {

    var tip = (10 / 100) * value;

    return tip;

} else {

    var tip = (15 / 100) * value;

    return tip;
}
}
console.log(calcTip(150));

console.log(calcTip(2000));

const bills = [265, 80, 560];

const tips = bills.map(calcTip)

console.log(bills, tips)

function calcTotal(value) {
    return value + calcTip(value)
}

const total = bills.map(calcTotal)

console.log(total)