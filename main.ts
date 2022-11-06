input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("F - B - - E B E ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.lightLevel()))
})
