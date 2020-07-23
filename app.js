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