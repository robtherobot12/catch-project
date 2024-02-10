class Grass {
    constructor(p5, rand) {
        this.rand = rand
    }

    draw(p5, x, y) {
        p5.stroke("#306844")
        p5.angleMode("RADIANS")
        p5.line(x, y, x + (5 * p5.cos(0.001 * p5.millis() + this.rand)), y -20)
        p5.stroke(0,0,0,1)
    }
}