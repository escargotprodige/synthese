import { objectType, prismaExtendType, intArg, idArg, arg } from 'yoga'
import { WeaponPart, WeaponBase } from '../../.yoga/prisma-client'

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

        let parts: WeaponPart[] = []

        for (let part of args.parts) {
          parts.push(await ctx.prisma.weaponPart({ id: part }))
        }

        //1. appliquer effets des parties aux attributs
        //2. appliquer bonus de marque
        //3. level scaling

        return { level: args.level, base, parts }
      },
    })
  },
})
