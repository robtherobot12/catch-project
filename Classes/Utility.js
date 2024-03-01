class Utils {
  /**
 * Sets a gradient using the p5.js library.
 * 
 * @param {p5} p5 - The p5.js instance.
 * @param {number} x - The x-coordinate of the top-left corner of the gradient rectangle.
 * @param {number} y - The y-coordinate of the top-left corner of the gradient rectangle.
 * @param {number} w - The width of the gradient rectangle.
 * @param {number} h - The height of the gradient rectangle.
 * @param {color} c1 - The starting color of the gradient.
 * @param {color} c2 - The ending color of the gradient.
 * @param {string} axis - The axis along which the gradient should be applied ("Y_AXIS" or "X_AXIS").
 */
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
    /**
    * Clamps a value within a specified range.
    * 
    * @param {number} val - The value to be clamped.
    * @param {number} min - The minimum value of the range.
    * @param {number} max - The maximum value of the range.
    * @returns {number} - The clamped value within the range [min, max].
    */
    static clamp = (val, min, max) => Math.min(Math.max(val, min), max)
}