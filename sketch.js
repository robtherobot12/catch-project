const myp5 = new p5(( sketch ) => {

  let gameScene
  let gameOverScene
  let gameManager

  sketch.setup = () => {
    gameScene = new GameScene()
    gameOverScene = new GameOverScene()
    gameManager = new GameManager()

    gameManager.addScene(gameScene)
    gameManager.addScene(gameOverScene)

    myp5.createCanvas(640, 360);
  }

  sketch.draw = () => {
    gameManager.update(myp5)
  }
})

class Scene {
  constructor(NEXT_SCENE) {
    self.NEXT_SCENE = NEXT_SCENE
  }
}

class GameOverScene extends Scene {
  constructor(NEXT_SCENE) {
    super(NEXT_SCENE)
  }

  draw(p5) {
    p5.background(0, 255, 0);
  }
}

class GameScene extends Scene {
  constructor(NEXT_SCENE) {
    super(NEXT_SCENE)

    self.grapePlants = []
    for (let n=0; n < 5; n++) {
      let grapeVine = new GrapeVine(myp5)
      self.grapePlants.push(grapeVine)
    }
  }

  draw(p5) {
    Utils.setGradient(p5, 0, 0, p5.width, p5.height, p5.color(41, 128, 185), p5.color(255, 255, 255), "Y_AXIS")
    p5.stroke(0, 0, 0, 1)

    p5.fill(119, 76, 36)
    p5.ellipse(p5.width, (p5.height/2) + 250, 1300, 400)
    p5.fill(127, 172, 74)
    p5.ellipse(0, (p5.height/2) + 200, 500, 400)
    p5.fill(34,139,34)
    p5.ellipse(20, p5.height - 10, 700, 150)
    p5.fill(69, 137, 51)
    p5.ellipse(p5.width - 20, p5.height, 700, 150)

    for (let n=0; n < self.grapePlants.length; n++) {
      self.grapePlants[n].draw(p5, 100, 100)
    }
    
  }

  
}