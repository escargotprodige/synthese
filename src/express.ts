import { yogaExpress } from 'yoga'
import { Nuxt, Builder } from 'nuxt'

const isProd = process.env.NODE_ENV === 'production'

const config = require('../nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

if (config.dev) {
  new Builder(nuxt).build()
}

export default yogaExpress(app => {
  app.use(nuxt.render)
})
