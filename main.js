console.log(2);
const cats = ['fluffy', 'spike', 'killer'];
console.log(cats[0]);

const favAnimal = 'cow, bear, dog, cat';
const favAnimalArray = favAnimal.split(',');
console.log(favAnimalArray);

const numArray = [1,2,3,4,5];
const newNum = numArray.join('cow');
console.log(newNum);

let imAString = 'mom , bob, banana, computer';
let imAnArray = imAString.split(',');
let imAReverseString = imAnArray.reverse().join(',');
let imForward = imAString.split(',');
let imReverse = imAReverseString.split(',');


for(let i = 0; i<4; i++) {
    if(imForward[i] === imReverse[i]) {
        console.log(imAnArray[i] + ' is a palindrome');
    }
    else {
        console.log(imAnArray[i] + ' is not a palindrome');
    }
}

let animals = ['spiders', 'snakes', 'gophers', 'big spiders'];

let lastItem = animals.pop();
let firstItem = animals.shift();
animals.push('bat');
animals.unshift('baby hippo');
console.log(animals);

for(let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}