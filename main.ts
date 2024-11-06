radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        act1 = 1
        xiamiBoard.setIndexColor(0, 0xff0000)
        xiamiBoard.setIndexColor(1, 0xff0000)
    } else if (receivedNumber == 112) {
        act2 = 1
        xiamiBoard.setIndexColor(0, 0x00ff00)
        xiamiBoard.setIndexColor(1, 0x00ff00)
    } else if (receivedNumber == 113) {
        act3 = 1
        xiamiBoard.setIndexColor(0, 0x007fff)
        xiamiBoard.setIndexColor(1, 0x007fff)
    } else {
        xiamiBoard.setIndexColor(0, 0xff8000)
        xiamiBoard.setIndexColor(1, 0xff8000)
    }
})
function action () {
    if (act1 == 1) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
    if (act1 == 2) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 32)
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
    if (act3 == 3) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
}
function init () {
    basic.showIcon(IconNames.Angry)
    xiamiBoard.ledBlank()
    xiamiBoard.initXiaMiBoard()
    xiamiBoard.setBrightness(140)
    radio.setTransmitPower(7)
    radio.setGroup(123)
    xiamiBoard.OLEDshowUserText("DFRobot", 0, 0)
    act1 = 0
    act2 = 0
    act3 = 0
}
let act3 = 0
let act2 = 0
let act1 = 0
init()
basic.forever(function () {
	
})
