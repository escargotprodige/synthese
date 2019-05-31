<template>
  <v-layout row wrap>
    <v-flex xs6 pa-1>
      <v-card>
        <v-card-text>
          <h3>Sélection de l'item</h3>
          <v-select label="Marque"></v-select>
          <v-select label="Type"></v-select>
          <v-select label="Rareté"></v-select>
          <v-slider label="Niveau" :min="1" :max="72" thumb-label="always" always-dirty></v-slider>
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

