// OBject Oriented Programming

// Prototypal Inherit

const dog = {
    name: "Michael",
    goodBoy: true,
    gendar: 'boy'
}

const dogTwo = {
    name: 'Rocco'
}

dogTwo.__proto__ = dog

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);
console.log(dogTwo.name);

//

const cat = {
    name: "Mia",
    longfur: true,
    color: 'white'
}

const catTwo = {
    name: "Mike"
}

catTwo.__proto__ = cat

console.log(cat);
console.log(catTwo);
console.log(catTwo.longfur);
console.log(catTwo.color);

// Constructor function
function User(name) {
    this.name = name
    // return this
}

let adam = new User('Adam')
let pete = new User('Pete')
console.log(adam.name);
console.log(pete.name);



function player(name, team, threePointShooter){
    //this = {}
    this.name = name
    this.team = team
    this.threePointShooter = threePointShooter
    //return this
}

let Dave = new player("Dave", "Warriors", true)
console.log(Dave);

function menu(appitize, mainDish, dessert){
    this.appitize = appitize
    this.mainDish = mainDish
    this.dessert = dessert
}

let lunch = new menu ('sushi','beef','cake')
console.log(lunch);