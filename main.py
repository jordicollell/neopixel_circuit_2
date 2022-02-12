def on_received_number(receivedNumber):
    global cotxe1, cotxe2
    if receivedNumber == 1:
        strip.clear()
        cotxe1 = cotxe1 + 1
        strip.set_pixel_color(cotxe1, neopixel.colors(NeoPixelColors.PURPLE))
        strip.set_pixel_color(cotxe2, neopixel.colors(NeoPixelColors.ORANGE))
        strip.show()
    elif receivedNumber == 2:
        strip.clear()
        cotxe2 = cotxe2 + 1
        strip.set_pixel_color(cotxe1, neopixel.colors(NeoPixelColors.PURPLE))
        strip.set_pixel_color(cotxe2, neopixel.colors(NeoPixelColors.ORANGE))
        strip.show()
radio.on_received_number(on_received_number)

def on_button_pressed_ab():
    control.reset()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

cotxe2 = 0
cotxe1 = 0
strip: neopixel.Strip = None
radio.set_group(1)
strip = neopixel.create(DigitalPin.P0, 300, NeoPixelMode.RGB)
strip.clear()
strip.show()
cotxe1 = 1
cotxe2 = 1
strip.set_pixel_color(cotxe1, neopixel.colors(NeoPixelColors.PURPLE))
strip.set_pixel_color(cotxe2, neopixel.colors(NeoPixelColors.ORANGE))
strip.show()
basic.show_leds("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")