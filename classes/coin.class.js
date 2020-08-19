class Coin {
    constructor(value) {
        this.value = value;
        this.size = 50;
        this.x = 0;
        this.y = 0;
        this.color = new Array(); // or []
    }

    draw(context) {
        // Border (outer circle);
        context.beginPath();
        // draw a circle here
        context.arc(this.x + this.size/2, this.y + this.size/2, this.size/2, 0, Math.PI * 2, false); 
        context.endPath();
        context.fillStyle = this.color[0];
        context.fill();
    }

    // TODO:
    // 1] Create an if statement that will check value field
    // 2] If value is equal to 1, then set color field as ["#663300", "#993300"]
    //    if 2, then ["#888888", "#AAAAAA"]
    //    if 3, then ["#FFCC00", "#FFF000"]
    setColor() {
        if (this.value === 1) {
            this.color = ["#663300", "#993300"];
        } else if (this.value === 2) {
            this.color = ["#888888", "#AAAAAA"];
        } else if (this.value === 3) {
            this.color = ["#FFCC00", "#FFF000"];
        }
    }
}
