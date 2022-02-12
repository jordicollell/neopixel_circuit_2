radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        strip.clear()
        cotxe1 = cotxe1 + 1
        strip.setPixelColor(cotxe1, neopixel.colors(NeoPixelColors.Purple))
        strip.setPixelColor(cotxe2, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    } else if (receivedNumber == 2) {
        strip.clear()
        cotxe2 = cotxe2 + 1
        strip.setPixelColor(cotxe1, neopixel.colors(NeoPixelColors.Purple))
        strip.setPixelColor(cotxe2, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
    }
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let cotxe2 = 0
let cotxe1 = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
strip.clear()
strip.show()
cotxe1 = 1
cotxe2 = 1
strip.setPixelColor(cotxe1, neopixel.colors(NeoPixelColors.Purple))
strip.setPixelColor(cotxe2, neopixel.colors(NeoPixelColors.Orange))
strip.show()
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
