class App {
    
    /*
     * TODO:
     * 1] Create fields this.canvas and immediately create a new Canvas object
     * 2] Create generator field as a new generator object
     */
    constructor() {
        this.canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.generator = new Generator();
    }

    /*
     * TODO: Create a run() method will: (1) Clear the canvas, (2) draw all coins.
     */
    run() {
        this.canvas.clear();
        this.generator.drawCoins(this.canvas.context);
    }
}