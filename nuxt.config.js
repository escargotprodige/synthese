module.exports = {
    modules: ['@nuxtjs/vuetify', '@nuxtjs/apollo'],
    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:4000'
            }
        }
    }
}