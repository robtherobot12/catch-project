class GrapeVine {
    constructor(p5) {
        this.grapeAmount = 70
        this.vineAmount = 3
        this.grapeRandOffset = 15
        this.vineRandOffset = 2
        this.vineLength = 30

        this.grapeRands = []
        for (let n = 0; n < this.grapeAmount; n++) {
            //p5.randomSeed(n)
            this.grapeRands.push([p5.random(-this.grapeRandOffset, this.grapeRandOffset), p5.random(-this.grapeRandOffset, this.grapeRandOffset)])
        }
    }

    draw(p5, x, y) {
        p5.fill("#362419")
        p5.ellipse(x, y + 90, 50, 20)

        p5.fill("#41684A")
        p5.ellipse(x, y + 35, 40, 100)

        for(let n = 0; n < this.vineAmount; n++) {
            p5.fill(184, 165, 136)
            p5.triangle(x-this.vineRandOffset, y+(this.vineLength * (n + 1) ), x+this.vineRandOffset, y+(this.vineLength * (n + 1)), x, y + (this.vineLength * n))
        }
        
        for (let n = 0; n < this.grapeAmount; n++) {
            p5.fill("#6b175d")
            p5.circle(x +this.grapeRands[n][0], (y + (this.grapeRands[n][1] * 3))+30, 3)
        }
    }
}