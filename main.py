def on_button_pressed_a():
    global degree
    degree += -1
    degree = max(0, degree)
    ShowTemperature(degree)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global degree
    degree += 1
    degree = min(25, degree)
    ShowTemperature(degree)
input.on_button_pressed(Button.B, on_button_pressed_b)

def ShowTemperature(thisdegree: number):
    global row, y, y2, x2
    basic.clear_screen()
    row = (thisdegree - thisdegree % 5) / 5
    while y <= row - 1:
        for x in range(6):
            led.plot(x, 4 - y)
        y += 1
    while x2 <= thisdegree % 5 - 1:
        y2 = 0
        led.plot(x2, 4 - row - y2)
        x2 += 1
y2 = 0
x2 = 0
y = 0
row = 0
degree = 0
basic.clear_screen()
degree = 4
ShowTemperature(degree)
basic.pause(1000)
degree += 3
ShowTemperature(degree)