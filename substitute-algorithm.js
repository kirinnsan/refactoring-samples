// (1)
// before
function judgeFood(foods) {
  let result = [];
  for (let i = 0; i < foods.length; i++) {
    switch (foods[i]) {
      case 'apple':
        result.push('apple');
        break;
      case 'banana':
        result.push('banana');
        break;
      case 'melon':
        result.push('melon');
        break;
      default:
        break;
    }
  }
  return result;
}

// after
function judgeFoodAfter(foods) {
  const FOOD_TYPE = ['apple', 'banana', 'melon'];
  return foods.filter(food => FOOD_TYPE.includes(food));
}

console.log('(No1):start');
console.log(judgeFood(['apple', 'melon', 'dddd']));
console.log('------------------------------')
console.log(judgeFoodAfter(['apple', 'melon', 'dddd']));
console.log('(No1):end');


// (2)

const food2 = ['apple', 'banana', 'melon'];
function isFood(foods) {
  let isFood = false;
  for (food of foods) {
    if (food === 'banana') {
      isFood = true;
    }
  }
  return isFood;
}

console.log('(No2):start');
console.log(isFood(food2));
console.log('------------------------------')
console.log(food2.includes('banana'));
console.log('(No2):end');


// (3)

function cheapestFood(foods) {
  let cheapest = foods[0] ? foods[0].price : Infinity;
  for (const food of foods) {
    if (food.price < cheapest) {
      cheapest = food.price;
    }
  }
  return cheapest;
}

const food3 = [
  { name: 'orange', price: 100 },
  { name: 'banana', price: 80 },
  { name: 'melon', price: 200 },
]

console.log('(No3):start');
console.log(cheapestFood(food3));
console.log('------------------------------')
console.log(Math.min(...food3.map(ele => ele.price)));
console.log('(No3):end');


// No4

const food4 = [
  { name: 'orange', price: 100, color: 'red' },
  { name: 'banana', price: 80, color: 'yellow' },
  { name: 'melon', price: 200, color: 'green' },
]

console.log('(No4):start');

let names = [];
for (const i of food4) {
  if (i.color === 'yellow') {
    names.push(i.name);
  }
}
console.log(names);
console.log('------------------------------')

names = food4.filter(ele => ele.color === 'yellow')
  .map(ele => ele.name);
console.log(names);
console.log('(No4):end');

