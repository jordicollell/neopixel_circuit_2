radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (cotxe1 == cotxe2) {
            strip.showColor(neopixel.colors(NeoPixelColors.White))
        }
        dibuix_cotxes()
        cotxe1 += 1
    } else if (receivedNumber == 2) {
        if (cotxe2 == cotxe1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        }
        dibuix_cotxes()
        cotxe2 += 1
    }
})
function inici () {
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
}
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
function dibuix_cotxes () {
    strip.clear()
    strip.setPixelColor(cotxe1, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(cotxe1 + 1, neopixel.colors(NeoPixelColors.Purple))
    strip.setPixelColor(cotxe2, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(cotxe2 + 1, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
}
let strip: neopixel.Strip = null
let cotxe2 = 0
let cotxe1 = 0
inici()
