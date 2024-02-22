class FallingObjectManager {
    constructor(p5, gameManager) {
      this.spawnRateMillis = 0.5 * 1000
      this.lastSpawnedTimestamp = 0
      this.objects = {}
      this.p5 = p5
      this.playerDimensions = [0, 0, 0, 0]
      this.gameManager = gameManager
    }
  
    spawnObject() {
      const objUuid = crypto.randomUUID()
      const fallingObj = new FallingObject(this.p5, this.p5.random(20, this.p5.width - 20), -10, 0.1, 1, objUuid, this, this.playerDimensions)
      this.objects[objUuid] = fallingObj
      this.lastSpawnedTimestamp = this.p5.millis()
    }

    updatePlayer(x, y, width, height) {
      this.playerDimensions = [x, y, width, height]
    }

    catchObject(index, points) {
      this.gameManager.addPoints(points)
      this.destroyObject(index, false)
    }

    destroyObject(index, outOfBounds) {
      delete this.objects[index]
      if(outOfBounds) {
        this.gameManager.addObjectsMissed(1)
      }
      
      // console.log(Object.keys(this.objects).length)
    }

    update() {
      
      if(this.p5.millis() - this.lastSpawnedTimestamp >= this.spawnRateMillis) {
        // console.log("spawning new object")
        this.spawnObject()
      }

      Object.entries(this.objects).forEach(element => {
        element[1].draw(this.playerDimensions)
      });
    }
  
    getObjects() {
      return this.objects
    }
  }