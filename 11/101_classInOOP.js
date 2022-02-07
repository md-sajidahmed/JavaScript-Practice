class rect {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height)
    }
}

var rect1 = new rect(10, 20)
var rect2 = new rect(40, 70)
var rect3 = new rect(5, 8)

var area1 = rect1.calculateArea()
console.log(area1)

// In the constructor, we define the properties of the class which we need to define outside the class in the object

// Class is just a template of an object