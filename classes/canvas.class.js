class Canvas {

    /**
     * The constructor function is executed whenever a new Canvas object is created.
     * You can set the size of the canvas element by giving numbers as parameters.
     * @param {number} width
     * @param {number} height
     */
    constructor(width, height) {
        // Fields for this class
        this.width = width;
        this.height = height;
        this.context = undefined;
        // End of fields

        console.log("Creating a new Canvas object with width=" + width + " and height=" + height);
        this.createElement();
    }

    /**
     * This is a methods / function that can be called on this object.
     */
    createElement() {
        // TODO:
        // 1] Create a new element <canvas> and store it in a local constant "ele"
        // 2] Set the width and height of this element using the class fields "this.width" and "this.height"
        // 3] Add the element to the div #app
        const ele = document.createElement("canvas");
        ele.width = this.width;
        ele.height = this.height;
        document.querySelector("#app").append(ele);

        // TODO: Create a new field for this class called "context" (undefined as default)
        // Set the field here at the context of this canvas
        this.context = ele.getContext("2d");
    }

    // TODO: Create a method clear() that will erase the entire canvas
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}
