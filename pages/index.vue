<template>
  <v-card>
    <v-card-title>Tu pue</v-card-title>
    <v-card-text>{{allo}}</v-card-text>
  </v-card>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    allo: gql`
      query {
        brands
      }
    `,
  },
}
</script>

