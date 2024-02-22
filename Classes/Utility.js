class Utils {
    static setGradient(p5, x, y, w, h, c1, c2, axis) {
        p5.noFill();
      
        if (axis === "Y_AXIS") {
          // Top to bottom gradient
          for (let i = y; i <= y + h; i++) {
            let inter = p5.map(i, y, y + h, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(x, i, x + w, i);
          }
        } else //if  (axis === "X_AXIS")
        {
          // Left to right gradient
          for (let i = x; i <= x + w; i++) {
            let inter = p5.map(i, x, x + w, 0, 1);
            let c = p5.lerpColor(c1, c2, inter);
            p5.stroke(c);
            p5.line(i, y, i, y + h);
          }
        }
      }

    static clamp = (val, min, max) => Math.min(Math.max(val, min), max)
}