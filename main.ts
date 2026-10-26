radio.setGroup(25)
basic.showIcon(IconNames.Skull)
basic.forever(function () {
    radio.sendNumber(input.soundLevel())
})
