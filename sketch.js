const spacing = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  for (let y = height / 3; y < 2 * height / 3; y += spacing) {
    for (let x = width / 3; x < 2 * width / 3; x += spacing) {
      fill(
        noise(y / 250, frameCount / 500, x / 100) * 255,
        noise(x / 3.14, frameCount / 250, y / 150) * 255,
        noise(frameCount / 300, frameCount / 200, y / 200) * 255
      );
      rect(x, y, spacing * 2, spacing * 2);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}