class App {
    
    /*
     * TODO:
     * 1] Create fields this.canvas and immediately create a new Canvas object
     * 2] Create generator field as a new generator object
     */
    constructor() {
        this.canvas = new Canvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        this.generator = new Generator();
        this.scoreboard = new Scoreboard();

        /*
         * TODO:
         * 1] Create an interval that runs every 100 miliseconds (from constants)
         * 2] Call the run() method inside the interval
         */
        const self = this;
        setInterval(function() {
            self.run();
        }, REFRESH_RATE);

        // Create an event that captures click events on the canvas
        // Checks if a coin was in the clicked coordinates
        // Calls a clickCoin() method if true
        this.canvas.context.canvas.addEventListener("click", event => {
            const clickX = event.x - event.target.getBoundingClientRect().left;
            const clickY = event.y - event.target.getBoundingClientRect().top;

            for (let i = 0; i < self.generator.coins.length; i++) {
                const coin = self.generator.coins[i];
                if (clickX >= coin.x &&
                    clickX <= coin.x + coin.size &&
                    clickY >= coin.y &&
                    clickY <= coin.y + coin.size) {
                    self.clickCoin(coin);
                }
            }
        });
    }

    /*
     * TODO: Create a run() method will: (1) Clear the canvas, (2) draw all coins.
     */
    run() {
        this.generator.generate();

        this.canvas.clear();
        this.generator.drawCoins(this.canvas.context);
        this.scoreboard.draw(this.canvas.context);
    }

    /*
     * TODO:
     * 1] Create a clickCoin(coin) method
     * 2] Increase scoreboard score by the value of the coin
     * 3] Expire the coin
     */
    clickCoin(coin) {
        this.scoreboard.score += coin.value;
        this.generator.expireCoin(coin);
    }
}