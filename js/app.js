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