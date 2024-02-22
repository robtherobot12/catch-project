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

    setScene(sceneIndex) {
      this.currentScene = sceneIndex
    }

    addPoints(points) {
      this.points += points
    }
  
    getPoints() {
      return this.points
    }
  
    addObjectsMissed(objectsMissed) {
      this.objectsMissed += objectsMissed
    }

    getObjectsMissed() {
      return this.objectsMissed
    }
  
    setBadObjectsEaten(badObjectsEaten) {
      this.badObjectsEaten = badObjectsEaten
    }

    resetState() {
      this.objectsMissed = 0
      this.points = 0
      this.badObjectsEaten = 0
    }
  
    update(p5) {
      this.scenes[this.currentScene].draw(p5)
      if(this.objectsMissed >= 5) {
        this.currentScene = 1
      }
    }
  }