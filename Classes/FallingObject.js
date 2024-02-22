class FallingObject {
    constructor(p5, x, y, speed, pointsModifier, index, manager, playerDimensions) {
      this.p5 = p5
      this.x = x
      this.y = y
      this.speed = speed
      this.pointsModifier = pointsModifier
      this.index = index
      this.manager = manager
      this.destroyed = false
      this.playerDimensions = playerDimensions
    }
  
    setPointsModifier(points) {
      this.pointsModifier = points
    }
  
    getPointsModifier() {
      return this.pointsModifier
    }
  
    draw(playerDimensions) {
      this.playerDimensions = playerDimensions
      if(this.y > this.p5.height + 10 && !this.destroyed) {
        this.manager.destroyObject(this.index, true)
        this.destroyed = true
        // console.log(this.index)
        return
      }

      this.p5.circle(this.x, this.y, 20)
      this.y = this.y + (this.speed * this.p5.deltaTime)

      if(this.x < this.playerDimensions[0] + this.playerDimensions[2] && this.x > this.playerDimensions[0] - this.playerDimensions[2] && this.y >= this.playerDimensions[1] - this.playerDimensions[3]) {
        this.manager.catchObject(this.index, this.pointsModifier)
      }
    }
  }