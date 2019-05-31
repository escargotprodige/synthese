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

const parts = [
  'BODY',
  'BARREL',
  'ACCESSORY',
  'ELEMENTAL',
  'SIGHT',
  'GRIP',
  'STOCK',
]

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
      modifierType: casual.random_element(['PRE_ADD', 'SCALE']),
    }
  },
  attributes() {
    let obj = {}

    attributes.forEach(attribute => {
      obj[attribute] = casual.integer(0, 15)
    })

    return obj
  },
  weapon_base(brand, weaponType = casual.word) {
    return {
      brand: { connect: { id: brand } },
      weaponType,
      attributes: { create: casual.attributes },
    }
  },
  weapon_title(brand) {
    return {
      name: casual.word,
      brand: { connect: { id: brand.id } },
    }
  },
  async weapon_part(
    brand = casual.company_name,
    weaponType = casual.word,
    partType = casual.word,
  ) {
    let _brands = await prisma
      .brands()
      .$fragment('fragment BrandId on Brand { id }')
    return {
      brand: { connect: { id: brand } },
      weaponType,
      partType,
      prefix: casual.word,
      effects: {
        create: pickFrom(attributes, casual.integer(1, 6), casual.effect),
      },
      titles: { create: forEach(_brands, casual.weapon_title) },
    }
  },
}

casual.register_provider(weapon_provider)

async function main() {
  brands.forEach(async brand => {
    const _brand = await prisma.createBrand({ name: brand })
    weaponTypes.forEach(async weapon => {
      await prisma.createWeaponBase(casual.weapon_base(_brand.id, weapon))
      parts.forEach(async part => {
        await prisma.createWeaponPart(
          await casual.weapon_part(_brand.id, weapon, part),
        )
      })
    })
  })
}

main()
