<script>
import { useNombreStore } from '../stores/nombre'
const store = useNombreStore()
store.setNombre('')
export default {
  props: {
    nombre: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <div>
    <img src="" alt="" />
    <h1>¡Adivina la canción!</h1>
    <p>Aquí es donde se desarrollará la mecánica del juego.</p>
    <P>Escucha el fragmenot de la canción</P>
    <p>Elige la respuesta correcta entre 4 opciones</p>
    <p>Gana 10 puntos por cada respuesta correcta</p>
    <p>Tu nombre: {{ store.nombre }}</p>
    <router-link to="/juego">Comenzar juego</router-link>
  </div>
</template>
