radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(69)
radio.setTransmitPower(6)
let folgen_oder_nicht_oder_Abbrechen = 2
basic.forever(function () {
    radio.sendValue("nicken", input.rotation(Rotation.Pitch))
    radio.sendNumber(input.rotation(Rotation.Roll))
})
