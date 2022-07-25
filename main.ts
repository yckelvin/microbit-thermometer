input.onButtonPressed(Button.A, function () {
    degree += -1
    degree = Math.max(0, degree)
    ShowTemperature(degree)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "GET") {
        radio.sendNumber(degree)
    }
})
input.onButtonPressed(Button.B, function () {
    degree += 1
    degree = Math.min(25, degree)
    ShowTemperature(degree)
})
function ShowTemperature (thisdegree: number) {
    row = (thisdegree - thisdegree % 5) / 5
    basic.clearScreen()
    y = 0
    while (y <= row - 1) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, 4 - y)
        }
        y += 1
    }
    x = 0
    while (x <= thisdegree % 5 - 1) {
        y = 0
        led.plot(x, 4 - row - y)
        x += 1
    }
}
radio.onReceivedValue(function (name, value) {
    if (name == "POST") {
        ShowTemperature(value)
    }
})
function getTemp () {
    return degree
}
let x = 0
let y = 0
let row = 0
let degree = 0
degree = 0
radio.setGroup(120)
