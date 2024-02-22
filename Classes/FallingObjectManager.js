class FallingObjectManager {
    constructor(spawnRate, p5) {
      this.spawnRate = spawnRate
      this.objects = []
      this.p5 = p5
    }
  
    spawnObject() {
      fallingObj = new FallingObject(p5, p5.random(20, p5.width - 20), -10, 2, 1)
      this.objects.push(fallingObj)
    }

    update() {
      this.objects.forEach(element => {
        element.draw()
      });
    }
  
    getObjects() {
      return this.objects
    }
  }