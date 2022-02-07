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