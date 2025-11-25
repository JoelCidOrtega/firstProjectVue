<script setup>
import { useNombreStore } from '../stores/nombre'
import { useCancionesAleatorias } from '../stores/cancionesAleatorias'
import { Howl } from 'howler'
import { ref, onUnmounted, watch, onMounted } from 'vue'

// --- STORES ---
const storeNombre = useNombreStore()
const storeJuego = useCancionesAleatorias()

// --- ESTADO DE AUDIO LOCAL ---
const sound = ref(null)
const FRAGMENTO_DURACION_S = 5; // Duración del fragmento a reproducir
let stopTimeout = null; // Para guardar el ID del temporizador de pausa
const currentFragmentStart = ref(null) // Inicio (segundos) del fragmento seleccionado

// -------------------------------------------------------------------

/**
 * @description Carga la canción, busca un punto aleatorio y la prepara.
 * @param {string} songUrl La ruta del archivo MP3 de la canción actual (ej: /songs/...).
 */
function cargarNuevaCancion(songUrl) {
    // 🛑 Limpiar cualquier instancia anterior
    if (sound.value) {
        sound.value.stop()
        sound.value.unload()
    }

    // Crear la nueva instancia de Howl
    sound.value = new Howl({
        src: [songUrl],
        html5: true,
        volume: 0.5,
    })

    // 🟢 LÓGICA DE BÚSQUEDA ALEATORIA EN EL EVENTO 'LOAD'
    // Selecciona un punto aleatorio dentro de la canción donde haya espacio para
    // reproducir `FRAGMENTO_DURACION_S` segundos y guarda ese inicio en `currentFragmentStart`.
    sound.value.on('load', function() {
        const duracion = this.duration()
        // Si la canción es más corta que el fragmento, empieza en 0
        const maxInicio = Math.max(0, duracion - FRAGMENTO_DURACION_S)
        const inicioRandom = Math.random() * maxInicio

        currentFragmentStart.value = inicioRandom
        // Aplicar seek en cuanto esté cargada para posicionar correctamente
        try {
            this.seek(inicioRandom)
        } catch (e) {
            console.warn('No se pudo aplicar seek inmediatamente:', e)
        }

        console.log(`Canción cargada: ${storeJuego.cancionActual?.nombre || 'desconocida'}. Fragmento en: ${inicioRandom.toFixed(2)}s`)
    })

    sound.value.on('loaderror', (id, error) => {
        console.error("Error al cargar la canción:", error)
    })
    sound.value.on('playerror', (id, error) => {
        console.error("Error de reproducción (Bloqueo de Autoplay):", error)
    })
}

/**
 * @description Reproduce el fragmento de 5 segundos desde el punto aleatorio.
 */
function playAudio() {
    if (!sound.value) {
        console.warn("No hay canción cargada para reproducir.")
        return
    }

    // 1. Detener cualquier reproducción previa y el temporizador
    clearTimeout(stopTimeout);
    sound.value.stop();

    // 2. Iniciamos la reproducción
    // Asegurarnos de que reproducimos desde el inicio aleatorio seleccionado.
    // Si por alguna razón `currentFragmentStart` no está definido (usuario apretó
    // play muy rápido), intentamos calcularlo ahora usando la duración.
    try {
        const dur = sound.value.duration()
        if (currentFragmentStart.value === null || Number.isNaN(currentFragmentStart.value)) {
            const maxInicioNow = Math.max(0, dur - FRAGMENTO_DURACION_S)
            currentFragmentStart.value = Math.random() * maxInicioNow
        }
        sound.value.seek(currentFragmentStart.value)
    } catch (e) {
        console.warn('No se pudo posicionar el seek antes de reproducir:', e)
    }

    sound.value.play();

    // 3. ⏳ Detenemos automáticamente después de 5 segundos
    stopTimeout = setTimeout(() => {
        if (sound.value && sound.value.playing()) {
            sound.value.pause()
            console.log("Fragmento de 5 segundos terminado.")
        }
    }, FRAGMENTO_DURACION_S * 1000);
}

/**
 * @description Pausa el audio.
 */
function pauseAudio() {
    clearTimeout(stopTimeout); // Detener el temporizador si lo hay
    if (sound.value) {
        sound.value.pause()
    }
}

// 🟢 FUNCIÓN CLAVE: Llama a cargar la canción cuando la store cambia
function cargarAudioDeStore() {
    // Detener audio anterior si existe
    if (sound.value) sound.value.stop();

    const cancion = storeJuego.cancionActual;
    if (cancion && cancion.mp3) {
        cargarNuevaCancion(cancion.mp3);
    }
}

// 🟢 VIGILANCIA: Observar cuándo cambia el índice (inicia una nueva ronda)
watch(() => storeJuego.preguntaActualIndex, () => {
    // Cuando cambiamos de pregunta, cargamos la nueva canción
    cargarAudioDeStore();
});

// --- INICIALIZACIÓN Y LIMPIEZA ---

onMounted(() => {
    storeJuego.iniciarJuego(); // 1. Inicia la partida, selecciona 5 preguntas
    cargarAudioDeStore();      // 2. Carga la primera canción
});

onUnmounted(() => {
    clearTimeout(stopTimeout);
    if (sound.value) {
        sound.value.stop()
        sound.value.unload()
    }
})
</script>

<template>
    <div>
        <h1 v-if="storeJuego.juegoTerminado">🎉 ¡Juego Terminado! Puntaje Final: {{ storeJuego.puntaje }} / 5</h1>

        <div v-else>
            <h1>Adivina la Canción: {{ storeJuego.progreso }}</h1>
            <p>Jugador: **{{ storeNombre.nombre }}**</p>

            <div id="gameCard">
                <div id="audio-controls">
                    <button @click="playAudio" :disabled="!storeJuego.cancionActual || !sound">▶️ Reproducir Fragmento (5s)</button>
                    <button @click="pauseAudio" :disabled="!storeJuego.cancionActual || !sound">⏸️ Pausar</button>
                </div>

                <div id="opciones-respuesta">
                    <p>¿Qué canción es?</p>
                    <button
                        v-for="opcion in storeJuego.opcionesRespuesta"
                        :key="opcion.id"
                        @click="storeJuego.responder(opcion.id)"
                        class="respuesta-btn">
                        {{ opcion.nombre }}
                    </button>
                </div>
            </div>
        </div>

        <button v-if="storeJuego.juegoTerminado" @click="storeJuego.iniciarJuego()">Volver a Jugar</button>

    </div>
</template>
