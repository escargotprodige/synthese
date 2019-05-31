<template>
  <v-select
    :label="label"
    :items="weaponParts"
    item-text="brand.name"
    item-value="id"
    v-model="item"
    v-on:change="updateValue"
  ></v-select>
</template>

<script>
import gql from 'graphql-tag'

export default {
  props: {
    label: String,
    partType: String,
    weaponType: String,
    value: String,
  },
  data() {
    return {
      item: '',
    }
  },
  created() {
    if (this.value) {
      this.item = this.value
    }
  },
  watch: {
    value(val) {
      this.item = val
    },
  },
  apollo: {
    weaponParts: {
      query: gql`
        query SelectWeaponParts(
          $partType: WeaponPartType
          $weaponType: WeaponType
        ) {
          weaponParts(where: { partType: $partType, weaponType: $weaponType }) {
            id
            brand {
              name
            }
          }
        }
      `,
      variables() {
        return {
          partType: this.partType,
          weaponType: this.weaponType,
        }
      },
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
