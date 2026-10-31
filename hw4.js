var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
    console.log('Exercise 1:', thisIsANewVariable);
}

let greetingMessage = `Hello, JavaScript!`;
let decimalNumber = 3.14;
let isLearning = true;
console.log('Exercise 2:', greetingMessage, decimalNumber, isLearning);
console.log('Types:', typeof greetingMessage, typeof decimalNumber, typeof isLearning);

// Store the player's current score.
let currentScore = 95;
console.log('Exercise 3:', currentScore);

console.log('Exercise 4 (==):', '100' == 100);
console.log('Exercise 4 (===):', '100' === 100);

let isWeekend = false;
let schedule;
schedule = isWeekend === true ? 'Day off' : 'Work day';
console.log('Exercise 5:', schedule);

let userAge = 16;
console.log('Exercise 6:');
if (userAge >= 18) {
    console.log('Access Granted');
} else {
    console.log('Access Denied');
}

let hasPermission = true;
let itemCount = 3;
console.log('Exercise 7:');
if (hasPermission === true && itemCount < 5) {
    console.log('Ready to process');
}

console.log('Exercise 8:');
for (let iterationNumber = 1; iterationNumber <= 5; iterationNumber++) {
    console.log(iterationNumber);
}

console.log('Exercise 9:');
for (let iterationNumber = 0; iterationNumber <= 9; iterationNumber++) {
    if (iterationNumber === 7) {
        break;
    }
    console.log(iterationNumber);
}

let counter = 10;
console.log('Exercise 10:');
do {
    console.log('Running once');
    counter++;
} while (counter < 10);

function calculateArea(width, height) {
    return width * height;
}
let resultArea = calculateArea(5, 10);
console.log('Exercise 11:', resultArea);

let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log('Exercise 12 (Banana index):', fruitList.indexOf('Banana'));
console.log('Fruit list:', fruitList);

// slice() creates a shallow copy. The outer arrays are separate, but nested
// objects and arrays remain shared references. Changes to a nested object
// through either array are visible through the other array.
let originalData = [10, 20, { label: 'original' }];
let clonedData = originalData.slice();
console.log('Exercise 13 (separate arrays):', clonedData !== originalData);
clonedData[0] = 99;
console.log('Independent primitive values:', originalData[0], clonedData[0]);
clonedData[2].label = 'updated';
console.log('Shared nested object:', originalData[2].label, clonedData[2].label);

function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}
console.log('Exercise 14 (constructor type):', typeof Animal);

let dog = new Animal('Canine', 'Woof');
let cat = new Animal('Feline', 'Meow');
let animalArray = [dog, cat];
console.log('Exercise 15:', animalArray);
