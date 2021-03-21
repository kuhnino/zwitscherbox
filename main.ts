serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
serialmp3.setMp3Volume(20)
let ZufallsMP3 = 1
let AnzahlGespielterMP3s = 0
basic.forever(function () {
    while (input.lightLevel() > 60) {
        ZufallsMP3 = randint(1, 15)
        serialmp3.playMp3Track(ZufallsMP3, 2)
        AnzahlGespielterMP3s += 1
        while (AnzahlGespielterMP3s == 13) {
            control.waitMicros(1200)
            serialmp3.playMp3Track(1, 1)
            AnzahlGespielterMP3s = 0
        }
    }
    AnzahlGespielterMP3s = 0
})
