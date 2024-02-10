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
    this.NEXT_SCENE = NEXT_SCENE
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

    this.grapePlants = []
    for (let n=0; n < 7; n++) {
      let grapeVine = new GrapeVine(myp5)
      this.grapePlants.push(grapeVine)
    }

    this.grass = []
    this.grassRand = []
    for (let n=0; n < 200; n++) {
      let grassPiece = new Grass(myp5, myp5.random(-360, 360))
      this.grass.push(grassPiece)
      this.grassRand.push([myp5.random(-270, 270), myp5.random(0, 50)])
    }

    this.clouds = []
    this.cloudNumber = 10
    for (let i = 0; i < this.cloudNumber; i++) {
      var newCloud = new Cloud(myp5, myp5.color(200, 200, 200));
      myp5.append(this.clouds, newCloud);
    }
  }

  draw(p5) {
    Utils.setGradient(p5, 0, 0, p5.width, p5.height, p5.color(41, 128, 185), p5.color(255, 255, 255), "Y_AXIS")
    p5.stroke(0, 0, 0, 1)

    for (let i = 0; i < this.clouds.length; i++) {
      this.clouds[i].display(p5);
    }

    p5.fill(119, 76, 36)
    p5.ellipse(p5.width, (p5.height/2) + 250, 1300, 400)
    p5.fill(127, 172, 74)
    p5.ellipse(0, (p5.height/2) + 200, 500, 400)
    p5.fill(34,139,34)
    p5.ellipse(20, p5.height - 10, 700, 150)
    p5.fill(69, 137, 51)
    p5.ellipse(p5.width - 20, p5.height, 700, 150)

    

    for (let n=0; n < this.grass.length; n++) {
      this.grass[n].draw(p5, 280 + (this.grassRand[n][0]), 300 + (this.grassRand[n][1]))
    }

    for (let n=0; n < this.grapePlants.length; n++) {
      this.grapePlants[n].draw(p5, 300 + (60*n), 195 - (7*n))
    }
    
  }

  
}