radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        if (_switch == 0) {
            mecanumRobot.setServo(0)
            _switch = 1
        } else {
            mecanumRobot.setServo(90)
            _switch = 0
        }
    }
})
let _switch = 0
radio.setGroup(1)
_switch = 0
basic.forever(function () {
	
})
