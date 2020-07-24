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

// fetch('')
// .then(response => {
//     return response.json()
// })
// .then(data => {
//     let githubURL = data.url
//     let githubUSername = data.login
//     let githubName = data.name

//     let mars = new GithubProfile(githubName, githubName, githubURL)
//     //console.log(mars);
//     //mars.intro()
// })


var isMomHappy = true;

// Promise
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );



let willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        const phone = {
            brand: 'iphone',
            color: 'red'
        }
        resolve(phone)
    }
    else {
        reject('No phone')
    }    
})


willIGetNewPhone.then(result => {
    console.log(result);
})


// fetch(endpoint).then(res => {return res.json()})

//Async & Awaits
async function printUsers() {
    const endpoint = 'http://api.github.com/users/margaret-jihua';
    const romepoint = 'http://api.github.com/users/romebell'
    let mars = await fetch(endpoint).then(res => res.json());
    let rome = await fetch(romepoint).then(res => res.json());
    //console.log(mars);
    //console.log(rome);
  }
  printUsers();

  //
  async function printFacebook(){
      let facebookEndpoint = 'http://api.github.com/users/facebook'
      let facebook = await fetch(facebookEndpoint).then(res => res.json())
      console.log(facebook.login);
  }

  printFacebook()