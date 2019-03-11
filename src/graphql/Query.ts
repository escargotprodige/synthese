import { prismaObjectType } from 'yoga';

export const Query = prismaObjectType({
    name: "Query",
    definition(t) {
        t.prismaFields(['*']);
    }
})