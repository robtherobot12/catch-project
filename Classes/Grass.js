class Grass {
    constructor(p5, rand) {
        this.rand = rand
    }

    /**
 * Draws a simple line representing a grass strand at the specified position.
 * 
 * @param {p5} p5 - The p5.js instance.
 * @param {number} x - The x-coordinate of the starting point of the grass.
 * @param {number} y - The y-coordinate of the starting point of the grass.
 */
    draw(p5, x, y) {
        p5.stroke("#306844")
        p5.angleMode("RADIANS")
        p5.line(x, y, x + (5 * p5.cos(0.001 * p5.millis() + this.rand)), y -20)
        p5.stroke(0,0,0,1)
    }
}