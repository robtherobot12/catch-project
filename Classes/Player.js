class Player {    
    constructor(p5, objectManager) {
        this.p5 = p5
        this.xInput = 0
        this.speed = 0.2
        this.x
        this.y
        this.objectManager = objectManager
    }

    /**
 * Displays the player character and handles its movement.
 */
    display() {
        this.x == null ? this.x = this.p5.width / 2 : this.x = this.x
        this.y == null ? this.y = this.p5.height - 50 : this.y = this.y

        this.p5.fill(0, 0, 0, 100)
        this.p5.ellipse(this.x, this.y + 10, 130, 50)

        this.p5.fill("#88665d")
        this.p5.circle(this.x - 60, this.y - 50, 10)
        this.p5.circle(this.x + 60, this.y - 50, 10)
        this.p5.fill("#bcaa99")
        this.p5.quad(this.x - 40, this.y, this.x - 60, this.y - 50, this.x + 60, this.y - 50, this.x + 40, this.y)
        this.p5.circle(this.x - 60, this.y - 50, 5)
        this.p5.circle(this.x + 60, this.y - 50, 5)
        this.p5.fill("#88665d")
        this.p5.quad(this.x - 35, this.y - 5, this.x - 55, this.y - 50, this.x + 55, this.y - 50, this.x + 35, this.y - 5)

        
        

        if(this.p5.keyIsDown(65)) { // A
            this.xInput = -1
        } else if(this.p5.keyIsDown(68)) { // D
            this.xInput = 1 
        }

        if(!this.p5.keyIsDown(65) && !this.p5.keyIsDown(68)) { // A
            this.xInput = 0 
        }

        
        this.x = this.p5.lerp(this.x, this.x + (this.xInput * this.p5.deltaTime * this.speed), 0.9)
        // console.log(this.x)
        this.x = Utils.clamp(this.x, 0, this.p5.width)

        this.objectManager.updatePlayer(this.x, this.y, 70, 60)
    }
}