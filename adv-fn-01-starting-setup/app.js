function add(num1, num2) {
  return num1 + num2;
}

// function sendDataToServer() {}

console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax * multiplier;
  }

  return calculateTax;
}
multiplier=1.2;

const calculateVatAmount = createTaxCalculator(.19);
const calculateIncomeTaxAmount = createTaxCalculator(.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

let userName= 'Richard';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();

// function powerOf(x, n) {
//   let result = 1;

//   for(let i=0; i<n; i++){
//     result *=x;
//   }
//   return result;
// }

function powerOf(x, n) {
  if (n === 1) {
    return x;
  }

  return x * powerOf(x, n-1);
}

console.log(powerOf(2,3));

const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel', 
      friends: [
        {
          name: 'Chris',
          friends:[
            {
              name:'Hari'
            },
            {
              name: 'Amelia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
}

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends){
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }

  return collectedNames;
}

console.log(getFriendNames(myself));