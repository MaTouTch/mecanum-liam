radio.onReceivedString(function (receivedString) {
    if (receivedString == "D") {
        if (_switch == 0) {
            mecanumRobot.setServo(60)
            _switch = 1
        } else {
            mecanumRobot.setServo(120)
            _switch = 0
        }
    } else if (receivedString == "N") {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Forward, 100)
        basic.pause(LagMove)
        mecanumRobot.state(MotorState.stop)
    } else if (receivedString == "S") {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 100)
        basic.pause(LagMove)
        mecanumRobot.state(MotorState.stop)
    } else if (receivedString == "L") {
        mecanumRobot.Motor(LR.Upper_left, MD.Back, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Lower_right, MD.Back, 100)
        basic.pause(LagMove)
        mecanumRobot.state(MotorState.stop)
    } else if (receivedString == "R") {
        mecanumRobot.Motor(LR.Upper_left, MD.Forward, 100)
        mecanumRobot.Motor(LR.Upper_right, MD.Back, 100)
        mecanumRobot.Motor(LR.Lower_left, MD.Back, 100)
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
