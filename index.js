const inquirer = require('inquirer')
const {writeFile} = require('fs/promises')
const Circle = require('./lib/Circle')
const Square = require('./lib/Square')
const Triangle = require('./lib/Triangle')

const Svg = require('./svg')

function createShape() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What 3 characters would you like to include?',
            name: 'characters',
            validate: (characters) => 
            characters.length<= 3 || 'Your logo can only include up to 3 characters.'
        },
        {
            type: 'input',
            message: 'What color would you chosen characters to be?',
            name: 'characterColor',
        },
        {
            type: 'list',
            message: 'Please select one of the following shapes.',
            choices: ['Circle', 'Square', 'Triangle'],
            name: 'shapeChoice'
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be.',
            name: 'shapeColor',
        },
    ])
    .then(res => {
        var shape
        switch (res.shapeChoice) {
            case 'Circle':
                shape = new Circle()
                break;
            case 'Square':
                shape = new Square()
                break;
            case 'Triangle':
                shape = new Triangle()
                break;
        }
        shape.setColor(shapeColor)
        
        const svg = new Svg()
        svg.setText(characters, characterColor)
        svg.setShape(shapeChoice)
        return writeFile('logo.svg', svg.render())
    })
    .then(()=> {
        console.log('You generated your logo!')
    })
    
}