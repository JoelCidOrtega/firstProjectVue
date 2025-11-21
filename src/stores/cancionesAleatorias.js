import { defineStore } from 'pinia'
import canciones from '../songs/canciones.json'

export const useCancionesAleatorias = defineStore('Cancion', {
  state: () => ({
    canciones,
    indexActual: 0,
  }),

  getters: {
    cancionActual(state) {
      return state.canciones[state.indexActual]
    },
  },

  actions: {
    seleccionarCancion(index) {
      this.indexActual = index
    },

    siguienteCancion() {
      if (this.indexActual < this.canciones.length - 1) {
        this.indexActual++
      }
    },
  },
})
