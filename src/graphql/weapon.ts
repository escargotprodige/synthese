import { objectType, prismaExtendType, intArg, idArg, arg } from 'yoga'
import {
  WeaponPart,
  WeaponBase,
  Brand,
  Effect,
  Attributes,
} from '../../.yoga/prisma-client'

export const Stats = objectType({
  name: 'Stats',
  definition(t) {
    t.string('name')
    t.float('value')
  },
})

export const Weapon = objectType({
  name: 'Weapon',
  definition(t) {
    t.int('level', (o: any) => o.level)
    t.string('name', o => 'test')
    t.field('brand', { type: 'Brand' })
    t.field('weaponType', { type: 'WeaponType' })
    t.field('base', { type: 'WeaponBase' })
    t.list.field('parts', {
      type: 'WeaponPart',
    })
    t.list.field('stats', { type: 'Stats' })
  },
})

export const WeaponQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('weapon', {
      type: Weapon,
      args: {
        level: intArg(),
        baseId: idArg(),
        parts: idArg({ list: true }),
      },
      resolve: async (root, args, ctx): Promise<any> => {
        const base: WeaponBase = await ctx.prisma.weaponBase({
          id: args.baseId,
        })

        const brand: Brand = await ctx.prisma
          .weaponBase({ id: args.baseId })
          .brand()

        let parts: WeaponPart[] = []

        for (let part of args.parts) {
          parts.push(await ctx.prisma.weaponPart({ id: part }))
        }

        //1. appliquer effets des parties aux attributs
        let modifiedAttributes: {} = Object.assign({}, base.attributes)

        parts.forEach(part => {
          for (let effect of part.effects) {
            let name = effect.attributeToModify
            let attr = base.attributes[name]

            let val = null
            if (effect.modifierType == 'SCALE') {
              val = attr * effect.baseValueConstant
            } else if (effect.modifierType == 'PRE_ADD') {
              val = attr + effect.baseValueConstant
            }

            modifiedAttributes[name] = val
          }
        })

        let stats = []

        for (let attr in modifiedAttributes) {
          stats.push({ name: attr, value: modifiedAttributes[attr] })
        }

        //TODO: appliquer bonus de marque
        //TODO: level scaling

        return {
          level: args.level,
          weaponType: base.weaponType,
          base,
          parts,
          brand,
          stats,
        }
      },
    })
  },
})
