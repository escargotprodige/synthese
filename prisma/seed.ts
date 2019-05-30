import { prisma } from '../.yoga/prisma-client'

const casual = require('casual')

const attributes = require('./attributes.json')
const brands = [
  'Hyperion',
  'Bandit',
  'Vladof',
  'Tediore',
  'Maliwan',
  'Jakobs',
  'Torgue',
]

// const parts = [
//   'BODY',
//   'BARREL',
//   'ACCESSORY',
//   'ELEMENTAL',
//   'SIGHT',
//   'GRIP',
//   'STOCK',
// ]

const weaponTypes = [
  'PISTOL',
  'SHOTGUN',
  'ASSAULT_RIFLE',
  'SNIPER',
  'ROCKET_LAUNCHER',
  'SMG',
]

function shuffle(a) {
  var j, x, i
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = a[i]
    a[i] = a[j]
    a[j] = x
  }
  return a
}

const pickFrom = (arr, amount, generator) => {
  let temp = [...arr]
  let result = []

  for (let i = 0; i < amount; i++) {
    let val = shuffle(temp).pop()
    result.push(generator(val))
  }
  return result
}

const forEach = (arr, generator) => {
  let res = []
  arr.forEach(element => {
    res.push(generator(element))
  })
  return res
}

let weapon_provider = {
  effect(attribute) {
    return {
      attributeToModify: attribute,
      baseValueConstant: casual.random,
      modifierType: casual.random_element(['add', 'mult']),
    }
  },
  attribute(attr) {
    return {
      name: attr,
      value: casual.integer(0, 15),
    }
  },
  weapon_base(brand, weaponType = casual.word) {
    return {
      brand: { connect: { id: brand } },
      weaponType,
      attributes: { create: forEach(attributes, casual.attribute) },
    }
  },
  weapon_title(brand) {
    return {
      name: casual.word,
      brand,
    }
  },
  weapon_part(
    brand = casual.company_name,
    weaponType = casual.word,
    partType = casual.word,
  ) {
    return {
      brand: { connect: { name: brand } },
      weaponType,
      partType,
      prefix: casual.word,
      effects: { create: pickFrom(attributes, 3, casual.effect) },
      titles: { create: forEach(brands, casual.weapon_title) },
    }
  },
}

casual.register_provider(weapon_provider)

async function main() {
  brands.forEach(async brand => {
    const _brand = await prisma.createBrand({ name: brand })
    weaponTypes.forEach(async weapon => {
      await prisma.createWeaponBase(casual.weapon_base(_brand.id, weapon))
    })
  })
}

main()
