'use strict';

const names=[
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass'
];

const leftImage = document.getElementById('left-image');
const middleImage = document.getElementById('middle-image');
const rightImage = document.getElementById('right-image');
const imageSection = document.getElementById('image-section');
const resultButton = document.getElementById('buttonRe');
let leftIndex;
let middleIndex;
let rightIndex;

let voteNum = 0;
let totalNum = 26;


function Products (name){
  this.name = name;
  this.path = `./assets/${name}.jpg`;
  this.votes = 0;
  this.shownTimes=0;
  Products.all.push(this);
}

Products.all=[];

for(let i = 0; i<length ; i++)
{
  number = Math.floor(Math.random()*(max-min)+min);
  // randomNumbers.push(number);
  console.log('index is ', randomNumbers.indexOf(number));
  if(posiible && !repeatedAllowed && randomNumbers.indexOf(number)===-1)

    randomNumbers.push(number);

  else if(posiible && !repeatedAllowed)
    i--;
  else
    randomNumbers.push(number);
}
return randomNumbers;
}


