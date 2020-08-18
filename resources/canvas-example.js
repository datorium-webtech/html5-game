const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

/*
 * Line
 */
context.beginPath(); // Start drawing a path / line 

context.moveTo(20, 20); // Starting coordinates (x, y) or (distance from left, dist from top)
context.lineTo(300, 40); // Ending coordinates 

context.strokeStyle = "#FF0000" // Set te color of line (paint brush)
context.lineWidth = 5; // Set the thickness of line

context.stroke(); // Finish setting the properties/values and draw the result/line



/*
 * Customer shape using path / multiple lines
 */
context.beginPath();

context.moveTo(450, 450) // Start
context.lineTo(550, 300); // Each lineTo() draws a new line starting from previous position
context.lineTo(400, 250);
context.lineTo(420, 500);
context.lineTo(500, 500);
context.closePath(); // Draw a line that returns to the start

context.stroke(); // Draw an outline for the new shape (can remove if you dont want a border)
context.fillStyle = "#0000FF" // Set color of shape background (fill bucket)
context.fill();



/*
 * Exercise
 */
context.beginPath();
context.moveTo(100, 500);
context.lineTo(200, 300);
context.lineTo(300, 500);
context.closePath();
// Just an *outline* with *2 pixel width* and *green* and then draw it.
context.strokeStyle = "#00FF00";
context.lineWidth = 2;
context.stroke();



/*
 * Simple shapes
 */
// Rectangle
context.fillStyle = "#FF00FF"; // Set a color
context.fillRect(50, 50, 120, 80); // Draw a rectangle (start left, start top, width, height)

context.moveTo(150, 100);

// Circle
context.arc(100, 100, 50, 0, Math.PI * 2, false); // First 2: position of the center
context.stroke();

// Draw an image
// TODO: 
// 1] Create an <img> element and assign it to variable (let) canvasImageSource
// 2] Set it's "src" attribute to "resources/smile.png"
let canvasImageSource = document.createElement("img");
canvasImageSource.src = "resources/smile.png";
canvasImageSource.addEventListener("load", e => {
    // This will be executed when image is loaded
    context.drawImage(canvasImageSource, 300, 300, 50, 50); // Draw at 300,300 position with size 50x50
});

// Erase an area
context.clearRect(20, 20, 100, 150); // 20, 20 starting; 100x150 erase area size
// TODO: Erase the entire canvas
context.clearRect(0, 0, 600, 600);
