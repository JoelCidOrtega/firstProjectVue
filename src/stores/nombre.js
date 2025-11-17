import { defineStore } from 'pinia'

export const useNombreStore = defineStore('nombre', {
  state: () => ({
    nombre: '',
  }),
  actions: {
    setNombre(nuevoNombre) {
      this.nombre = nuevoNombre
    },
  },
})
