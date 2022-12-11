basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P2,
    DigitalPin.P3,
    PingUnit.Centimeters
    ))
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P3,
    PingUnit.Centimeters
    ) < 3) {
        SuperBit.Servo(SuperBit.enServo.S1, 180)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
        SuperBit.RGB_Program().clear()
        SuperBit.RGB_Program().show()
    }
})
