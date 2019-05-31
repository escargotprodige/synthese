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
          <v-container fill-height fluid>
            <v-layout row wrap space-around fill-height>
              <v-flex xs6 pa-1>
                <part-select
                  label="Stock"
                  :weapon-type="type"
                  part-type="STOCK"
                  v-model="parts.stock"
                ></part-select>
                <part-select
                  label="Barrel"
                  :weapon-type="type"
                  part-type="BARREL"
                  v-model="parts.barrel"
                ></part-select>
                <part-select
                  label="Accessory"
                  :weapon-type="type"
                  part-type="ACCESSORY"
                  v-model="parts.accessory"
                ></part-select>
              </v-flex>
              <v-flex xs6 pa-1>
                <part-select
                  label="Elemental"
                  :weapon-type="type"
                  part-type="ELEMENTAL"
                  v-model="parts.elemental"
                ></part-select>
                <part-select
                  label="Sight"
                  :weapon-type="type"
                  part-type="SIGHT"
                  v-model="parts.sight"
                ></part-select>
                <part-select label="Grip" :weapon-type="type" part-type="GRIP" v-model="parts.grip"></part-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 pa-1>
      <v-card>
        <v-card-title>{{parts.grip}}</v-card-title>
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

import PartSelect from '~/components/part-select.vue'

export default {
  data() {
    return {
      parts: {
        grip: '',
        stock: '',
        sight: '',
        elemental: '',
        barrel: '',
        accessory: '',
      },
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
  components: {
    PartSelect,
  },
}
</script>

