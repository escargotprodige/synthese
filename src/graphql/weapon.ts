import { objectType, prismaExtendType, intArg, idArg, arg } from 'yoga'
import { WeaponPart, WeaponBase } from '../../.yoga/prisma-client'

export const Weapon = objectType({
  name: 'Weapon',
  definition(t) {
    t.int('level', (o: any) => o.level)
    t.string('name', o => 'test')
    t.field('brand', { type: 'Brand' })
    t.field('weaponType', { type: 'WeaponType' })
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
        parts: arg({ type: 'WeaponPartWhereInput' }),
      },
      resolve: async (root, args, ctx): Promise<any> => {
        const base: WeaponBase = await ctx.prisma.weaponBase({
          id: args.baseId,
        })
        const parts: WeaponPart[] = await ctx.prisma.weaponParts({
          where: args.parts,
        })
        
        //1. appliquer effets des parties aux attributs
        //2. appliquer bonus de marque
        //3. level scaling
      },
    })
  },
})
