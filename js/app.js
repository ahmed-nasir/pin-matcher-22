function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
}
function generatePin() {
    const displyPin = document.getElementById('display-pin');
    // displyPin.value = pin;
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    const successNotification = document.getElementById('notify-success');

    const errorNotification = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        successNotification.style.display = 'block';
        errorNotification.style.display = 'none';
    } else {
        successNotification.style.display = 'none';
        errorNotification.style.display = 'block';
    }

}