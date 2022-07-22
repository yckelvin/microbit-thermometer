input.onButtonPressed(Button.A, function () {
    degree += -1
    degree = Math.max(0, degree)
    ShowTemperature(degree)
})
input.onButtonPressed(Button.B, function () {
    degree += 1
    degree = Math.min(25, degree)
    ShowTemperature(degree)
})
function ShowTemperature (degree: number) {
    basic.clearScreen()
    row = (degree - degree % 5) / 5
    for (let y = 0; y <= row - 1; y++) {
        for (let x = 0; x <= 5; x++) {
            led.plot(x, 4 - y)
        }
    }
    for (let x = 0; x <= degree % 5 - 1; x++) {
        let y = 0
        led.plot(x, 4 - row - y)
    }
}
let row = 0
let degree = 0
degree = 0
