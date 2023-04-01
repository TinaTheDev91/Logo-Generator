class SVG {
    constructor() {
      this.characters = "";
      this.shapeChoice = "";
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeChoice}${this.characters}</svg>`;
    }
  
    setText(characters, characterColor) {  
      this.characters = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${characterColor}">${characters}</text>`;
    }
  
    setShape(shape) {
      this.shapeChoice = shape.render();
    }
  }
  
  module.exports = SVG;