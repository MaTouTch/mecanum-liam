radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        if (_switch == 0) {
            mecanumRobot.setServo(60)
            basic.showNumber(0)
            _switch = 1
        } else {
            mecanumRobot.setServo(120)
            basic.showNumber(1)
            _switch = 0
        }
    }
})
let _switch = 0
radio.setGroup(1)
radio.sendString("Mecanum")
_switch = 0
mecanumRobot.setServo(60)
basic.pause(1000)
mecanumRobot.setServo(120)
basic.forever(function () {
	
})
