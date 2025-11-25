import { defineStore } from 'pinia'
// ⚠️ AJUSTA ESTA RUTA si no usas el alias @/
import ALL_CANCIONES from './canciones.json'

const NUM_PREGUNTAS = 5

// --- Función auxiliar para mezclar un array (Fisher-Yates) ---
function shuffleArray(array) {
    // Crea una copia del array original para no modificar el JSON
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
// ------------------------------------------------------------------

export const useCancionesAleatorias = defineStore('juegoStore', {
    state: () => ({
        cancionesDisponibles: ALL_CANCIONES,

        // Estado del Juego
        preguntasSeleccionadas: [], // Las 5 canciones del juego
        preguntaActualIndex: 0,
        opcionesRespuesta: [],     // 4 opciones para la vista
        puntaje: 0,
        juegoTerminado: false,
    }),

    getters: {
        cancionActual(state) {
            // Devuelve la canción correcta de la pregunta actual
            return state.preguntasSeleccionadas[state.preguntaActualIndex] || null
        },
        progreso(state) {
            // Devuelve el progreso actual (ej: 1 / 5)
            const actual = state.preguntaActualIndex + 1;
            const total = state.preguntasSeleccionadas.length;
            return `${actual} / ${total}`;
        }
    },

    actions: {
        iniciarJuego() {
            if (this.cancionesDisponibles.length < NUM_PREGUNTAS) {
                 console.error(`Se necesitan al menos ${NUM_PREGUNTAS} canciones en el JSON.`);
                 return;
            }

            // 1. Seleccionar 5 canciones únicas al azar
            const cancionesMezcladas = shuffleArray(this.cancionesDisponibles);
            this.preguntasSeleccionadas = cancionesMezcladas.slice(0, NUM_PREGUNTAS);

            // 2. Resetear el estado
            this.preguntaActualIndex = 0;
            this.puntaje = 0;
            this.juegoTerminado = false;

            // 3. Configurar la primera pregunta
            this.configurarPreguntaActual();
        },

        configurarPreguntaActual() {
            const cancionCorrecta = this.cancionActual;
            if (!cancionCorrecta) return;

            // 1. Obtener canciones falsas (distractores)
            const distractores = this.cancionesDisponibles.filter(c => c.id !== cancionCorrecta.id);

            // 2. Seleccionar 3 distractores al azar
            const distractoresMezclados = shuffleArray(distractores).slice(0, 3);

            // 3. Combinar las 4 opciones y mezclarlas para que la correcta no siempre esté en el mismo lugar
            let opciones = [cancionCorrecta, ...distractoresMezclados];
            this.opcionesRespuesta = shuffleArray(opciones);
        },

        responder(cancionIdSeleccionada) {
            // Si el juego terminó, no hacer nada
            if (this.juegoTerminado) return;

            const esCorrecta = cancionIdSeleccionada === this.cancionActual.id;

            if (esCorrecta) {
                this.puntaje++;
            }

            // 1. Determinar si quedan más preguntas
            if (this.preguntaActualIndex < NUM_PREGUNTAS - 1) {
                this.preguntaActualIndex++;
                // 2. Preparar la siguiente pregunta
                this.configurarPreguntaActual();
            } else {
                // 3. Terminar el juego
                this.juegoTerminado = true;
                console.log("Juego terminado. Puntaje final:", this.puntaje);
            }
        }
    }
});
