<template>
  <v-layout row wrap>
    <v-flex xs6 pa-1>
      <v-card>
        <v-card-text>
          <h3>Sélection de l'item</h3>
          <v-select label="Marque" :items="brands" item-text="name" v-model="brand"></v-select>
          <v-select label="Type" :items="types" v-model="type"></v-select>
          <v-select
            label="Rareté"
            :items="rarities"
            item-text="text"
            item-value="value"
            v-model="rarity"
          ></v-select>
          <v-slider
            label="Niveau"
            :min="1"
            :max="72"
            thumb-label="always"
            always-dirty
            v-model="level"
          ></v-slider>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs6 pa-1 d-flex>
      <v-card>
        <v-card-text>
          <h3>Sélection des pièces</h3>
          <v-layout row wrap>
            <v-flex xs6 pa-1>
              <v-select label="Stock"></v-select>
              <v-select label="Barrel"></v-select>
              <v-select label="Accessory"></v-select>
            </v-flex>
            <v-flex xs6 pa-1>
              <v-select label="Elemental"></v-select>
              <v-select label="Sight"></v-select>
              <v-select label="Grip"></v-select>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 pa-1>
      <v-card>
        <v-card-text>
          <h3>Statistiques</h3>
          <v-data-table></v-data-table>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      brand: 'Hyperion',
      level: 22,
      type: 'PISTOL',
      rarity: 'COMMON',
      types: [
        { text: 'Pistol', value: 'PISTOL' },
        { text: 'Shotgun', value: 'SHOTGUN' },
        { text: 'Assault rifle', value: 'ASSAULT_RIFLE' },
        { text: 'Sniper', value: 'SNIPER' },
        { text: 'Rocket Launcher', value: 'ROCKET_LAUNCHER' },
        { text: 'SMG', value: 'SMG' },
      ],
      rarities: [
        { text: 'Commun', value: 'COMMON' },
        { text: 'Non commun', value: 'UNCOMMON' },
        { text: 'Rare', value: 'RARE' },
        { text: 'Tres rare', value: 'VERY_RARE' },
      ],
    }
  },
  apollo: {
    brands: gql`
      query {
        brands {
          name
        }
      }
    `,
  },
}
</script>

