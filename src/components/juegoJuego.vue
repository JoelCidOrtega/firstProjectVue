<script setup>
import { useNombreStore } from '../stores/nombre'
import { useCancionesAleatorias } from '../stores/cancionesAleatorias'
import { Howl } from 'howler'
import { onUnmounted } from 'vue'

const sound = new Howl({
  src: ['../songs/songsmp3/CalleCortada.mp3'],
  html5: true, // Muy importante para archivos locales o grandes
})
function playAudio() {
  sound.play()
}

function pauseAudio() {
  sound.pause()
}

// Para evitar que "siga sonando" si cambias de página
onUnmounted(() => {
  sound.stop()
})
const store = useNombreStore()
const storeCanciones = useCancionesAleatorias()
</script>

<template>
  <p>Adivina la Canción</p>
  <p>Jugador: {{ store.nombre }}</p>

  <div id="gameCard">
    <div>
      <button @click="playAudio">▶️ Play</button>
      <button @click="pauseAudio">⏸️ Pause</button>
    </div>
    <input type="range" /> Audio progreso

    <!-- Ahora sí funciona -->
    <p>{{ storeCanciones.cancionActual?.nombre }}</p>

    <div id="opciones">
      <button @click="storeCanciones.siguienteCancion()">Siguiente canción</button>
    </div>
  </div>
</template>
