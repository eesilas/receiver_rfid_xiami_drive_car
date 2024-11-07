function FF () {
    for (let index = 0; index < 1; index++) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 32)
        basic.pause(1000)
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.setIndexColor(0, 0x007fff)
        xiamiBoard.setIndexColor(1, 0x007fff)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 111) {
        action()
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
    } else if (receivedNumber == 114) {
        act4 = 1
        xiamiBoard.setIndexColor(0, 0xff9da5)
        xiamiBoard.setIndexColor(1, 0xff9da5)
    } else if (receivedNumber == 115) {
        act5 = 1
        xiamiBoard.setIndexColor(0, 0x00ffff)
        xiamiBoard.setIndexColor(1, 0x00ffff)
    }
})
function action () {
    while (act2 == 1) {
        act2 = 0
        TL()
        FF()
    }
    while (act3 == 1) {
        act3 = 0
        FF()
    }
    while (act4 == 1) {
        act4 = 0
        TR()
        FF()
    }
    while (act5 == 1) {
        act5 = 0
        blink()
        xiamiBoard.setIndexColor(0, 0xb09eff)
        xiamiBoard.setIndexColor(1, 0xb09eff)
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
        basic.pause(500)
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.setIndexColor(0, 0xffff00)
        xiamiBoard.setIndexColor(1, 0xffff00)
    }
})
function blink () {
    for (let index = 0; index < 4; index++) {
        xiamiBoard.setIndexColor(0, 0xff0000)
        basic.pause(100)
        xiamiBoard.setIndexColor(1, 0x00ff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0xffff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(1, 0x00ff00)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0xb09eff)
        basic.pause(100)
        xiamiBoard.setIndexColor(0, 0xff0080)
        basic.pause(100)
    }
}
function TL () {
    for (let index = 0; index < 1; index++) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 32)
        basic.pause(500)
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.setIndexColor(0, 0x00ff00)
        xiamiBoard.setIndexColor(1, 0x00ff00)
    }
}
function init () {
    music.setVolume(65)
    basic.showIcon(IconNames.Angry)
    xiamiBoard.ledBlank()
    xiamiBoard.initXiaMiBoard()
    xiamiBoard.setBrightness(140)
    radio.setTransmitPower(7)
    radio.setGroup(123)
    xiamiBoard.OLEDshowUserText("RFID instruct sequential car", 0, 0)
    act1 = 0
    act2 = 0
    act3 = 0
    act4 = 0
    act5 = 0
}
function TR () {
    for (let index = 0; index < 1; index++) {
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CCW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
        basic.pause(500)
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
        xiamiBoard.setIndexColor(0, 0xffff00)
        xiamiBoard.setIndexColor(1, 0xffff00)
    }
}
let act1 = 0
let act5 = 0
let act4 = 0
let act3 = 0
let act2 = 0
init()
basic.forever(function () {
	
})
