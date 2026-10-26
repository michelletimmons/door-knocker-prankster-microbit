radio.set_group(25)

def on_forever():
    radio.send_number(input.sound_level())
basic.forever(on_forever)
