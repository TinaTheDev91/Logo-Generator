const Shape = require('./Shape')
class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill='${this.color}'/>`
    }
}

module.exports = Circle;