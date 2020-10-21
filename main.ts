for (let J = 0; J <= 4; J++) {
    for (let I = 0; I <= 4; I++) {
        if (I % 2 == J % 2) {
            led.plot(I, J)
        }
    }
}
