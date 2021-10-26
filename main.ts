let tool = 0
input.onGesture(Gesture.Shake, function () {
    tool = randint(1, 2)
    if (tool) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (tool) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
