const Shape = require('./Shape')
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" fill='${this.color}'/>`
    }
}

module.exports = Square;