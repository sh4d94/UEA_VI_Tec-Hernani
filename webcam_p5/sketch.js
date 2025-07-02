let webcam;

//I write the explications in the comments in english, because I am starting to learn it, and I want to practice my english skills.
//This code uses the p5 library to create a simple sketch that displays a webcam feed
//The webcam feed is displayed in the center of the canvas, and it is flipped horizontally to
//simulate a mirror effect. The webcam feed is also resized to 400x400 pixels.

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  webcam = createCapture(VIDEO, {flipped: true}); // The flipped option is set to true to mirror the video, it means the video will appear as if you are looking in a mirror.
  webcam.size(400, 400);
  webcam.hide(); // Hide the default video element
}

function draw() {
  background(220);
  //applyMatrix(1, 0, 0, 1, 50, 50); // This line is not necessary for this example
  translate(width / 2, height / 2); // Center the video on the canvas
  image(webcam, -200, -200, 400, 400); //The first parameter is the video element, the second and third are the x and y coordinates where the video will be drawn on the canvas, the fourth and fifth are the width and height of the video element.
}