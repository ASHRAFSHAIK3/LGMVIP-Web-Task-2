function clearDisplay() {
    document.getElementsByName('display')[0].value = '';
}

function deleteLast() {
    var display = document.getElementsByName('display')[0];
    display.value = display.value.slice(0, -1);
}

function appendValue(value) {
    document.getElementsByName('display')[0].value += value;
}

function evaluateExpression() {
    var display = document.getElementsByName('display')[0];
    display.value = eval(display.value);
}

function calculateSquareRoot() {
    var display = document.getElementsByName('display')[0];
    display.value = Math.sqrt(parseFloat(display.value));
}

function calculateDiscount() {
    var display = document.getElementsByName('display')[0];
    var discount = parseFloat(display.value) * 0.1;
    display.value = discount.toFixed(2);
}