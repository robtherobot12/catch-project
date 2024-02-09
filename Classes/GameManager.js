class GameManager {
    constructor() {
      this.points = 0
      this.objectsMissed = 0
      this.badObjectsEaten = 0
      this.scenes = []
      this.currentScene = 0
    }
  
    addScene(scene) {
      this.scenes.push(scene)
    }
  
    setPoints(points) {
      this.points = points
    }
  
    getPoints() {
      return this.points
    }
  
    setObjectsMissed(objectsMissed) {
      this.objectsMissed = objectsMissed
    }
  
    setBadObjectsEaten(badObjectsEaten) {
      this.badObjectsEaten = badObjectsEaten
    }
  
    update(p5) {
      this.scenes[this.currentScene].draw(p5)
    }
  }