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
const FRAGMENTO_DURACION_S = 5;
let stopTimeout = null;
const currentFragmentStart = ref(null)

// --- ESTADO UI ---
const hasAnswered = ref(false)
const selectedOptionId = ref(null)

function cargarNuevaCancion(songUrl) {
    if (sound.value) {
        sound.value.stop()
        sound.value.unload()
    }

    sound.value = new Howl({
        src: [songUrl],
        html5: true,
        volume: 0.5,
    })

    sound.value.on('load', function() {
        const duracion = this.duration()
        const maxInicio = Math.max(0, duracion - FRAGMENTO_DURACION_S)
        const inicioRandom = Math.random() * maxInicio

        currentFragmentStart.value = inicioRandom
        try {
            this.seek(inicioRandom)
        } catch (e) {
            console.warn('No se pudo aplicar seek inmediatamente:', e)
        }
    })
}

function playAudio() {
    if (!sound.value) return

    clearTimeout(stopTimeout);
    sound.value.stop();

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

    stopTimeout = setTimeout(() => {
        if (sound.value && sound.value.playing()) {
            sound.value.pause()
        }
    }, FRAGMENTO_DURACION_S * 1000);
}

function pauseAudio() {
    clearTimeout(stopTimeout);
    if (sound.value) {
        sound.value.pause()
    }
}

function cargarAudioDeStore() {
    if (sound.value) sound.value.stop();
    const cancion = storeJuego.cancionActual;
    if (cancion && cancion.mp3) {
        cargarNuevaCancion(cancion.mp3);
    }
}

function seleccionarOpcion(id) {
    if (hasAnswered.value) return; // Ya respondió

    selectedOptionId.value = id;
    hasAnswered.value = true;
    
    // Verificar respuesta en el store (actualiza puntos)
    storeJuego.verificarRespuesta(id);
    
    // Detener audio si suena
    pauseAudio();
}

function siguientePregunta() {
    hasAnswered.value = false;
    selectedOptionId.value = null;
    storeJuego.avanzarPregunta();
}

// Helpers para clases CSS
function getButtonClass(opcionId) {
    if (!hasAnswered.value) return 'respuesta-btn-normal';

    const esCorrecta = opcionId === storeJuego.cancionActual.id;
    const esSeleccionada = opcionId === selectedOptionId.value;

    if (esCorrecta) return 'respuesta-btn-correct';
    if (esSeleccionada && !esCorrecta) return 'respuesta-btn-incorrect';
    
    return 'respuesta-btn-disabled';
}

watch(() => storeJuego.preguntaActualIndex, () => {
    cargarAudioDeStore();
});

onMounted(() => {
    storeJuego.iniciarJuego();
    cargarAudioDeStore();
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
    <div class="game-container">
        
        <!-- HEADER DEL JUEGO -->
        <header class="game-header">
            <div class="header-info">
                 <div class="player-info">
                     <span class="avatar-icon">👤</span>
                     <span class="player-name">{{ storeNombre.nombre || 'Jugador' }}</span>
                 </div>
                 <div class="score-badge">
                     🏆 {{ storeJuego.puntos }} pts
                 </div>
            </div>
            <div class="progress-bar-container">
                 <div class="progress-text">
                     <span>Pregunta {{ storeJuego.preguntaActualIndex + 1 }} de 10</span>
                 </div>
                 <div class="progress-track">
                     <div class="progress-fill" :style="{ width: ((storeJuego.preguntaActualIndex + 1) / 10 * 100) + '%' }"></div>
                 </div>
            </div>
        </header>

        <!-- CARTEL JUEGO TERMINADO -->
        <div v-if="storeJuego.juegoTerminado" class="game-card result-card">
            <div class="trophy-large">🏆</div>
            <h2>¡Juego Terminado!</h2>
            <p class="final-score">Puntaje Final: <strong>{{ storeJuego.puntos }}</strong> / 100</p>
            <button @click="storeJuego.iniciarJuego()" class="btn-primary">Volver a Jugar</button>
        </div>

        <!-- TARJETA DE JUEGO -->
        <div v-else class="game-card">
            
            <!-- CONTROLES AUDIO -->
            <div class="audio-section">
                <button @click="playAudio" class="play-btn" :disabled="!storeJuego.cancionActual || !sound">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="play-icon">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <span class="audio-hint">Reproducir fragmento (5s)</span>
            </div>

            <div class="question-section">
                <h3>¿Qué canción es?</h3>
                <p v-if="hasAnswered" class="artist-hint">{{ storeJuego.cancionActual.artista }}</p>
            </div>

            <!-- OPCIONES -->
            <div class="options-grid">
                <button
                    v-for="opcion in storeJuego.opcionesRespuesta"
                    :key="opcion.id"
                    @click="seleccionarOpcion(opcion.id)"
                    :class="['respuesta-btn', getButtonClass(opcion.id)]"
                    :disabled="hasAnswered"
                >
                    {{ opcion.nombre }}
                     <span v-if="hasAnswered && opcion.id === storeJuego.cancionActual.id" class="status-icon">✅</span>
                     <span v-if="hasAnswered && opcion.id === selectedOptionId && opcion.id !== storeJuego.cancionActual.id" class="status-icon">❌</span>
                </button>
            </div>

            <!-- BOTON SIGUIENTE -->
            <div v-if="hasAnswered" class="next-action">
                <button @click="siguientePregunta" class="btn-next">Siguiente Pregunta →</button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.game-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.game-header {
    margin-bottom: 2rem;
}

.header-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.player-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: var(--color-text-dark);
}

.score-badge {
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-weight: 700;
    color: var(--color-primary);
}

.progress-track {
    background-color: #e5e7eb;
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.5rem;
}

.progress-fill {
    background-color: var(--color-primary);
    height: 100%;
    transition: width 0.3s ease;
}

.progress-text {
    font-size: 0.85rem;
    color: var(--color-text-light);
    text-align: right;
}

.game-card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    text-align: center;
}

.audio-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}

.play-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d946ef, #8b5cf6); /* Keeping a nice gradient for the main play button */
    border: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.1s, box-shadow 0.2s;
    box-shadow: 0 4px 10px rgba(139, 92, 246, 0.3);
    margin-bottom: 1rem;
}

.play-btn:active {
    transform: scale(0.95);
}

.play-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.play-icon {
    width: 32px;
    height: 32px;
}

.audio-hint {
    font-size: 0.85rem;
    color: var(--color-text-light);
}

.question-section {
    margin-bottom: 2rem;
}

.question-section h3 {
    font-size: 1.25rem;
    color: var(--color-text-dark);
    margin-bottom: 0.5rem;
}

.artist-hint {
    color: var(--color-secondary);
    font-weight: 600;
}

.options-grid {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 2rem;
}

.respuesta-btn {
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    background: #f9fafb;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
    display: flex;
    justify-content: space-between; /* To place checkmark at end */
    align-items: center;
    color: var(--color-text-dark);
}

.respuesta-btn-normal:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
}

.respuesta-btn-correct {
    background-color: #dcfce7 !important; /* Light green bg */
    border-color: #22c55e !important;      /* Green border */
    color: #15803d !important;             /* Dark green text */
}

.respuesta-btn-incorrect {
    background-color: #fee2e2 !important; /* Light red bg */
    border-color: #ef4444 !important;      /* Red border */
    color: #b91c1c !important;             /* Dark red text */
}

.respuesta-btn-disabled {
    opacity: 0.7;
    cursor: default;
}

.status-icon {
    font-size: 1.2rem;
}

.next-action {
    margin-top: 1rem;
}

.btn-next {
    width: 100%;
    padding: 1rem;
    background-color: var(--color-primary);
    color: white;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    transition: opacity 0.2s;
}

.btn-next:hover {
    opacity: 0.9;
}

/* Results */
.result-card .trophy-large {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.result-card h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.final-score {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--color-text-light);
}
</style>
