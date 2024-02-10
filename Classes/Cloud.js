class Cloud {
    constructor(p5, cloudColor) {
      this.xLocation = p5.random(-800, p5.width-50);
      this.randomizeYPosition(p5);
      this.speed = p5.random(0.25, 0.5);
      this.cloudColor = cloudColor;
    }
    
    display(p5) {
      this.xLocation += this.speed * 1;
      
      if(this.xLocation >= p5.width+50) {
        this.xLocation = -50;
        this.randomizeYPosition(p5);
      }
      
      p5.stroke(0,0);
      p5.fill(this.cloudColor);
      
      p5.circle(this.xLocation + 25, this.yLocation, 50);
      p5.circle(this.xLocation, this.yLocation - 25, 50);
      p5.circle(this.xLocation - 25, this.yLocation, 50);
      p5.rect(this.xLocation - 25, this.yLocation-25, 50);
    }
    
    randomizeYPosition(p5) {
      this.yLocation = p5.random(100, p5.height-150);
    }
  }