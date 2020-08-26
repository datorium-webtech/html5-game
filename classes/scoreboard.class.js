class Scoreboard {
    constructor() {
        this.score = 0;
    }

    draw(context) {
        context.fillStyle = "#000";
        context.fillRect(10, 10, 130, 30);
        // How to write text on canvas
        context.fillStyle = "#FFF"; // color of text
        context.font = "20px Courier New" // Font size + Font Family
        context.fillText("Score: " + this.score, 15, 30) // Write text (text, left pos, top pos)
    }
}