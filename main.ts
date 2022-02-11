radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 202)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 202)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 202)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 202)
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 202)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    }
    if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 202)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
    }
    if (receivedNumber == 5) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.showLeds(`
    . # # # .
    . . . # .
    . . # . .
    . . # . .
    . . # . .
    `)
maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
radio.setGroup(1)
