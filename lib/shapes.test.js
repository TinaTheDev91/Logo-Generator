const Circle = require('./Circle')
const Square = require('./Square')
const Triangle = require('./Triangle')

describe('Shape Choice', () => {

    describe('Triangle', () => {
        it('should pass if triangle is selected', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    
        });
    
    });
    
    describe('Circle', () => {
        it('should pass if circle is selected', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="105" r="60" fill="green" />');
    
        });
    
    });
    
    describe('Square', () => {
        it('should pass if square is selected', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<rect x="100" y="55" width="100" height="100" fill="pink" />');
    
        });
    
    });

});
