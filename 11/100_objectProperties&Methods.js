var rect = {
    width: 10,
    height: 20,

    calculateArea: function() {
        return this.width * this.height
    },
    calculatePerimeter: function() {
        return 2 * (this.width + this.height)
    }
}

var area = rect.calculateArea()
var perimeter = rect.calculatePerimeter()

console.log(area, perimeter)

// Properties are like noun and adjective of an object.
// Here width & height are the "properties" of the rectangle

// Methods are like verb of an object. It works like a function
// Here calculateArea & calculatePerimeter are two "methods" of the rectangle 