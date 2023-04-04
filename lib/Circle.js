const Shape = require('./Shape')

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="105" r="60" fill='${this.color}'/>`
    }
}

module.exports = Circle;