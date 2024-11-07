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
    } else if (receivedNumber == 114) {
        act4 = 1
        xiamiBoard.setIndexColor(0, 0xff9da5)
        xiamiBoard.setIndexColor(1, 0xff9da5)
    } else if (receivedNumber == 115) {
        act5 = 1
        xiamiBoard.setIndexColor(0, 0xff00ff)
        xiamiBoard.setIndexColor(1, 0xff00ff)
    } else if (receivedNumber == 123) {
        action()
    } else {
        xiamiBoard.setIndexColor(0, 0xff8000)
        xiamiBoard.setIndexColor(1, 0xff8000)
    }
})
function action () {
    if (act1 == 1) {
        led.plot(0, 0)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
        basic.pause(100)
        act1 = 0
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
    if (act2 == 1) {
        led.plot(1, 0)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CCW, 32)
        basic.pause(100)
        act2 = 0
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
    if (act3 == 1) {
        led.plot(2, 0)
        xiamiBoard.motorRun(MOTOR.M1, DIRECTION.CW, 32)
        xiamiBoard.motorRun(MOTOR.M2, DIRECTION.CW, 32)
        basic.pause(100)
        act3 = 0
    } else {
        xiamiBoard.motorStop(MOTOR.M1)
        xiamiBoard.motorStop(MOTOR.M2)
    }
    if (act4 == 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.InBackground)
        led.plot(3, 0)
        act4 = 0
    } else {
        basic.showIcon(IconNames.Heart)
    }
    if (act5 == 1) {
        blink()
        led.plot(4, 0)
        act5 = 0
    } else {
        basic.showIcon(IconNames.SmallHeart)
    }
}
function blink () {
    for (let index = 0; index < 4; index++) {
        xiamiBoard.setIndexColor(0, xiamiBoard.rgb(152, 0, 0))
        xiamiBoard.setIndexColor(1, xiamiBoard.rgb(0, 122, 0))
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
let act5 = 0
let act4 = 0
let act3 = 0
let act2 = 0
let act1 = 0
init()
basic.forever(function () {
	
})
