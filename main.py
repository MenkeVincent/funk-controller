radio.set_group(69)
radio.set_transmit_power(6)
folgen_oder_nicht_oder_Abbrechen = 2

def on_forever():
    if input.rotation(Rotation.PITCH) < 0:
        pass
    if input.rotation(Rotation.ROLL) > 0:
        pass
basic.forever(on_forever)
