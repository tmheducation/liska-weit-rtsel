input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.showIcon(IconNames.No)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showString("gipt es 7 kontinente")
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showString("gipt es ein hörner")
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString("die dieno sauria lebten im miteillaiter")
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.showIcon(IconNames.Yes)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    music.playMelody("C5 B C B G A F E ", 81)
})
basic.showString("wielkommen")
