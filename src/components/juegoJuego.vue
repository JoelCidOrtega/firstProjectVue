<template>
  <div>
    <img src="" alt="" />
    <h3>Adivina la Canción</h3>
    <p>Jugador: {{ store.nombre }}</p>
  </div>
  <div>
    <div>Pregunta ... de ...</div>
    <div>%</div>
    <input type="range" />
  </div>

  <div>
    <button>play</button>
    <input type="range" />
    <p>reproducir fragmento de 5 segundos</p>
    <h3>¿Que canción es?</h3>
    <p id="cancion"></p>
    <div>
      <button>Opción 1</button>
      <button>Opción 2</button>
      <button>Opción 3</button>
      <button>Opción 4</button>
    </div>
    <button>Siguiente Pregunta</button>
  </div>
</template>
<script>
import { useNombreStore } from '../stores/nombre'
const store = useNombreStore()
</script>
<style></style>
