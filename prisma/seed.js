const casual = require('casual');

var attributes = casual.words(7).split(' ')

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

const pickFrom = (arr, amount, generator) => {
  let temp = [...arr]
  let result = []

  for (let i = 0; i < amount; i++) {
    let val = shuffle(temp).pop()
    result.push(generator(val))
  }
  return result;
}

const forEach = (arr, generator) => {
  let res = []
  arr.forEach((element) => {
    res.push(generator(element))
  })
  return res;
}

casual.define('effect', function(attribute) {
  return {
    attributeToModify: attribute,
    baseValueConstant: casual.random,
    modifierType: casual.random_element(['add', 'mult'])
  }
})

casual.define('weapon_part', function(brand, weaponType, partType) {
  return {
    brand,
    weaponType,
    effects: pickFrom(attributes, 3, casual.effect)
  }
})

console.log(forEach(attributes, casual.effect))
