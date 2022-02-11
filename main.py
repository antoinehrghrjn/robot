def on_received_number(receivedNumber):
    if receivedNumber == 1:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 202)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 202)
    if receivedNumber == 2:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 202)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 202)
    if receivedNumber == 3:
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 202)
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    if receivedNumber == 4:
        maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 202)
        maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CCW, 0)
    if receivedNumber == 5:
        maqueen.motor_stop(maqueen.Motors.ALL)
radio.on_received_number(on_received_number)

maqueen.write_led(maqueen.LED.LED_LEFT, maqueen.LEDswitch.TURN_ON)
maqueen.write_led(maqueen.LED.LED_RIGHT, maqueen.LEDswitch.TURN_ON)
radio.set_group(1)