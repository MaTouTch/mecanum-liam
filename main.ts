radio.onReceivedString(function (receivedString) {
    if (receivedString == "D") {
        if (_switch == 0) {
            mecanumRobot.setServo(60)
            basic.showNumber(0)
            _switch = 1
        } else {
            mecanumRobot.setServo(120)
            basic.showNumber(1)
            _switch = 0
        }
    } else if (receivedString == "U") {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 100)
        basic.pause(LagMove)
        mecanumRobot.state(MotorState.stop)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
let LagMove = 0
let _switch = 0
radio.setGroup(1)
radio.sendString("Mecanum")
_switch = 0
LagMove = 200
mecanumRobot.setServo(60)
basic.pause(1000)
mecanumRobot.setServo(120)
basic.forever(function () {
	
})
