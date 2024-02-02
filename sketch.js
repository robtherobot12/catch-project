function setup() {
  const gameScene = new GameScene()
  const gameOverScene = new GameOverScene()
  const gameManager = new GameManager()

  gameManager.addScene(gameScene)
  gameManager.addScene(gameOverScene)
}

function draw() {
  gameManager.update()
}