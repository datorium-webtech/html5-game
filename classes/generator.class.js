// TODO:
// 1] Create a new class "Generator"
// 2] Create a field "coins" and set as an empty array
// 3] Create empty methods generate() and drawCoins(context)

class Generator {

    constructor() {
        this.coins = new Array(); // or []
    }

    generate() {
        // Math.floor( Math.random() * (1 + max - min) ) + min;
        // Generate a random number between 1 and 3
        const value = Math.floor(Math.random() * 3) + 1;
        // Create a coin, and give it random position
        // TODO:
        // 1] Create a new coin and assign it to newCoin
        // 2] Add the coin to "this.coins" field;
        const newCoin = new Coin(value);
        this.coins.push(newCoin);
        // 3] Generator a random x and y position for the coin, so that it is always inside
        //    the boundaries
        newCoin.x = Math.floor( Math.random() * (1 + CANVAS_WIDTH - newCoin.size) );
        newCoin.y = Math.floor( Math.random() * (1 + CANVAS_HEIGHT - newCoin.size) );
        // Expire (delete) the coins after a while
    }

    drawCoins(context) {
        // TODO:
        // 1] Create a loop that iterates from 0 to the length of "coins" array
        // 2] Inside the loop: Select a coin from the array using the iterator as index
        //    And draw the coin
        for (let i = 0; i < this.coins.length; i++) {
            this.coins[i].draw(context);
        }
    }

}