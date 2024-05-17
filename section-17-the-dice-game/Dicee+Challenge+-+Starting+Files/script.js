imgArray = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];

function images() {
  // the random images
  var randomNumber1 = Math.floor(Math.random() * imgArray.length);
  var randomNumber2 = Math.floor(Math.random() * imgArray.length);

  // get images at randomNumber1
  selectedImages1 = imgArray[randomNumber1];
  selectedImages2 = imgArray[randomNumber2];
  // display the images()
  document.getElementsByClassName("img1")[0].src = "images/" + selectedImages1;
  document.getElementsByClassName("img2")[0].src = "images/" + selectedImages2;
}

window.onload = images;

var myCanvas = document.createElement("canvas");
myCanvas.style.position = "fixed";
myCanvas.style.top = "0";
myCanvas.style.left = "0";
myCanvas.style.width = "100%";
myCanvas.style.height = "100%";
myCanvas.style.zIndex = "9999"; // High z-index to ensure it's on top
myCanvas.style.pointerEvents = "none"; // Ensures it doesn't block clicks
document.body.appendChild(myCanvas);

var myConfetti = confetti.create(myCanvas, {
  resize: true,
  useWorker: true,
});

myConfetti({
  particleCount: 100,
  spread: 160,
  // any other options from the global
  // confetti function
});

var triangle = confetti.shapeFromPath({ path: "M0 10 L5 0 L10 10z" });

confetti({
  shapes: [triangle],
});
