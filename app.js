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
    this.intro = function(){
        console.log("Hi, my name is " + this.name);
    }
    //return this
}

let Dave = new player("Dave", "Warriors", true)
console.log(Dave);
Dave.intro()

function menu(appitize, mainDish, dessert){
    this.appitize = appitize
    this.mainDish = mainDish
    this.dessert = dessert
}

let lunch = new menu ('sushi','beef','cake')
console.log(lunch);

// Class

class Car {
    constructor (year, make, model, color) {
        this.year = year
        this.make = make
        this.model = model
        this.color = color
    }
    drive() {
        console.log("Vroom");
    }

    intro(){
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car (2020, 'Tesla', 'Modely','silver')
console.log(tesla);
tesla.drive()
tesla.intro()

//

class GithubProfile {
    constructor(username, name, url){
        this.username = username
        this.name = name
        this.url = url
    }   
    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`);
    }
}

fetch('http://api.github.com/users/margaret-jihua')
.then(response => {
    return response.json()
})
.then(data => {
    let githubURL = data.url
    let githubUSername = data.login
    let githubName = data.name

    let mars = new GithubProfile(githubName, githubName, githubURL)
    console.log(mars);
    mars.intro()
})