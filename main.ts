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
