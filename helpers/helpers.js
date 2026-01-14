/**
 * Calculate the square of the euclidean distance between two points
 * @param {Number} x1
 * @param {Number} y1
 * @param {Number} x2
 * @param {Number} y2
 * @returns
 */
function squareDistance(x1, y1, x2, y2) {
  return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
}

/**
 * Check if (x, y) is outside canvas bounds
 * @param {Number} x
 * @param {Number} y
 * @return {boolean}
 */
function outOfBOunds(x, y) {
  let outside = false;
  if (0 > x > width) return (outside = true);
  if (0 > y > height) return (outside = true);
}
/**
 * Checks if x, y is near the border
 * @param {Number} x
 * @param {Number} y
 * @return {boolean}
 */
function closeToBorder(x, y) {
  let radius = nodeDiameter / 2;
  let distanceLeft = x;
  let distanceTop = y;
  let distanceRight = width - x;
  let distanceBottom = height - y;

  let near = false;
  if (distanceLeft <= radius) return (near = true);
  if (distanceTop <= radius) return (near = true);
  if (distanceRight <= radius) return (near = true);
  if (distanceBottom <= radius) return (near = true);
}
