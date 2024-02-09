class GrapeVine {
    constructor(p5) {
        self.grapeAmount = 70
        self.vineAmount = 3
        self.grapeRandOffset = 15
        self.vineRandOffset = 2
        self.vineLength = 30

        self.grapeRands = []
        for (let n = 0; n < self.grapeAmount; n++) {
            self.grapeRands.push([p5.random(-self.grapeRandOffset, self.grapeRandOffset), p5.random(-self.grapeRandOffset, self.grapeRandOffset)])
        }
    }

    draw(p5, x, y) {
        p5.fill("#41684A")
        p5.ellipse(x, y + 35, 40, 100)

        for(let n = 0; n < self.vineAmount; n++) {
            p5.fill(184, 165, 136)
            p5.triangle(x-self.vineRandOffset, y+(self.vineLength * (n + 1) ), x+self.vineRandOffset, y+(self.vineLength * (n + 1)), x, y + (self.vineLength * n))
        }
        
        for (let n = 0; n < self.grapeAmount; n++) {
            p5.fill(186, 104, 200)
            p5.circle(x +self.grapeRands[n][0], (y + (self.grapeRands[n][1] * 3))+30, 3)
        }
    }
}