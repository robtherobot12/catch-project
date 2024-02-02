class FallingObject {
    constructor(x, y, speed, pointsModifier) {
      this.x = x
      this.y = y
      this.speed = speed
      this.pointsModifier = pointsModifier
    }
  
    setPointsModifier(points) {
      this.pointsModifier = points
    }
  
    getPointsModifier() {
      return this.pointsModifier
    }
  
    draw() {
      
    }
  }