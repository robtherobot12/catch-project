class FallingObjectManager {
    constructor(p5, gameManager) {
      this.spawnRateMillis = 0.5 * 1000
      this.lastSpawnedTimestamp = 0
      this.objects = {}
      this.p5 = p5
      this.playerDimensions = [0, 0, 0, 0]
      this.gameManager = gameManager
    }

  /**
 * Spawns a new falling object in the game.
 */
    spawnObject() {
      const objUuid = crypto.randomUUID()
      const fallingObj = new FallingObject(this.p5, this.p5.random(20, this.p5.width - 20), -10, 0.1, 1, objUuid, this, this.playerDimensions)
      this.objects[objUuid] = fallingObj
      this.lastSpawnedTimestamp = this.p5.millis()
    }

    /**
 * Updates the dimensions of the player.
 * 
 * @param {number} x - The x-coordinate of the player.
 * @param {number} y - The y-coordinate of the player.
 * @param {number} width - The width of the player.
 * @param {number} height - The height of the player.
 */
    updatePlayer(x, y, width, height) {
      this.playerDimensions = [x, y, width, height]
    }

    /**
 * Handles catching an object by adding points to the game and destroying the object.
 * 
 * @param {number} index - The index of the object to be caught.
 * @param {number} points - The points to be added to the game.
 */
    catchObject(index, points) {
      this.gameManager.addPoints(points)
      this.destroyObject(index, false)
    }

    /**
 * Destroys an object from the game.
 * 
 * @param {number} index - The index of the object to be destroyed.
 * @param {boolean} outOfBounds - Indicates whether the object went out of bounds.
 */
    destroyObject(index, outOfBounds) {
      delete this.objects[index]
      if(outOfBounds) {
        this.gameManager.addObjectsMissed(1)
      }
      
      // console.log(Object.keys(this.objects).length)
    }

    /**
 * Updates the game state.
 * - Checks if it's time to spawn a new object and spawns one if necessary.
 * - Draws all objects currently in the game.
 */
    update() {
      
      if(this.p5.millis() - this.lastSpawnedTimestamp >= this.spawnRateMillis) {
        // console.log("spawning new object")
        this.spawnObject()
      }

      Object.entries(this.objects).forEach(element => {
        element[1].draw(this.playerDimensions)
      });
    }
  
    /**
 * Retrieves all objects currently in the game.
 * 
 * @returns {Object} - An object containing all objects in the game.
 */
    getObjects() {
      return this.objects
    }
  }