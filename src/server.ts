import * as path from 'path'
import { ApolloServer, makePrismaSchema, express, yogaEject } from 'yoga'
import * as types from './graphql'

import expressMiddleware from './express'
import datamodelInfo from '../.yoga/nexus-prisma'
import { prisma } from '../.yoga/prisma-client'

export default yogaEject({
  async server() {
    const schema = makePrismaSchema({
      types,
      prisma: {
        datamodelInfo,
        client: prisma,
      },
      outputs: {
        schema: path.join(__dirname, './schema.graphql'),
        typegen: path.join(__dirname, '../.yoga/nexus.ts'),
      },
      nonNullDefaults: {
        input: false,
        output: false,
      },
      typegenAutoConfig: {
        sources: [
          ,
          {
            source: path.join(__dirname, '../.yoga/prisma-client/index.ts'),
            alias: 'prisma',
          },
          ,
        ],
      },
    })
    const apolloServer = new ApolloServer.ApolloServer({
      schema,
    })
    const app = express()

    await expressMiddleware(app)
    apolloServer.applyMiddleware({ app, path: '/graphql' })

    return app
  },
  async startServer(app) {
    return app.listen({ port: 4000 }, () => {
      console.log(`🚀  Server ready at http://localhost:4000/`)
    })
  },
  async stopServer(http) {
    http.close()
  },
})
