<script setup>
import { useNombreStore } from '../stores/nombre'

const store = useNombreStore()
</script>

<template>
  <div>
    <label for="nombre">Escribe tu nombre:</label>
    <input id="nombre" v-model="store.nombre" placeholder="Tu nombre" />
    <router-link to="/juego">Comenzar juego</router-link>
  </div>
</template>
