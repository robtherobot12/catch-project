class GameManager {
    constructor() {
      this.points = 0
      this.objectsMissed = 0
      this.badObjectsEaten = 0
      this.scenes = []
      this.currentScene = 0
    }
  
    /**
 * Adds a scene to the game.
 * 
 * @param {Scene} scene - The scene object to be added.
 */
    addScene(scene) {
      this.scenes.push(scene)
    }

    /**
 * Sets the current scene of the game.
 * 
 * @param {number} sceneIndex - The index of the scene to be set as the current scene.
 */
    setScene(sceneIndex) {
      this.currentScene = sceneIndex
    }

    /**
 * Adds points to the game score.
 * 
 * @param {number} points - The points to be added to the game score.
 */
    addPoints(points) {
      this.points += points
    }
  
    /**
 * Retrieves the current points of the game score.
 * 
 * @returns {number} - The current points of the game score.
 */
    getPoints() {
      return this.points
    }
  
    /**
 * Increments the count of objects missed in the game.
 * 
 * @param {number} objectsMissed - The number of objects missed to be added to the count.
 */
    addObjectsMissed(objectsMissed) {
      this.objectsMissed += objectsMissed
    }

    /**
 * Retrieves the count of objects missed in the game.
 * 
 * @returns {number} - The count of objects missed in the game.
 */

    getObjectsMissed() {
      return this.objectsMissed
    }
  
    /**
 * Sets the count of bad objects eaten by the player.
 * 
 * @param {number} badObjectsEaten - The count of bad objects eaten by the player.
 */
    setBadObjectsEaten(badObjectsEaten) {
      this.badObjectsEaten = badObjectsEaten
    }

    /**
 * Resets the game state by setting counts of missed objects, points, and bad objects eaten to zero.
 */
    resetState() {
      this.objectsMissed = 0
      this.points = 0
      this.badObjectsEaten = 0
    }

  /**
 * Updates the game state by drawing the current scene and transitioning to a new scene if a condition is met.
 * 
 * @param {p5} p5 - The p5.js instance.
 */
    update(p5) {
      this.scenes[this.currentScene].draw(p5)
      if(this.objectsMissed >= 5) {
        this.currentScene = 1
      }
    }
  }