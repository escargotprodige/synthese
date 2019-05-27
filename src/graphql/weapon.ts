import {
  objectType,
  prismaExtendType,
  intArg,
  arg,
  inputObjectType,
} from 'yoga'

/*
query Weapon($weaponBase: WeaponBase, $parts: PartsInput, $level: Int)
*/

export const Weapon = objectType({
  name: 'Weapon',
  definition(t) {
    t.int('level', (o: any) => o.level)
    t.string('name', o => 'test')
  },
})

export const WeaponInput = inputObjectType({
  name: 'WeaponInput',
  definition(t) {
    t.int('level')
    t.field('weaponBase', { type: 'WeaponBaseWhereUniqueInput' })
    t.list.field('weaponParts', { type: 'WeaponPartWhereInput' })
  },
})

export const WeaponQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('weapon', {
      type: Weapon,
      args: { weaponInput: arg({ type: WeaponInput }) },
      resolve(root, args, context) {
        //creer objet avec data depuis db
        return { level: args.weaponInput.level }
      },
    })
  },
})
