<script setup>
import { useNombreStore } from '../stores/nombre'

const store = useNombreStore()
</script>

<template>
  <div class="start-game-container">
    <div class="game-card">
        <div class="icon-wrapper">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="music-icon">
                <path fill-rule="evenodd" d="M19.953 2.5a.75.75 0 0 0-1.153-.608L18 2.607V13.78c0 1.9-1.996 3.27-3.823 2.657a2.915 2.915 0 0 0-3.677 2.812A2.75 2.75 0 0 0 13.25 22a2.75 2.75 0 0 0 2.75-2.75V5.195l3.203-1.07a.75.75 0 0 0 .75-.75V2.5Z" clip-rule="evenodd" />
            </svg>
        </div>
        
      <h2>¡Adivina la Canción!</h2>
      <p>Escucha fragmentos de 5 segundos y adivina el título correcto</p>

      <ul class="steps-list">
          <li>
              <span class="step-badge">1</span>
              Escucha el fragmento de la canción
          </li>
          <li>
              <span class="step-badge">2</span>
              Elige la respuesta correcta entre 4 opciones
          </li>
          <li>
              <span class="step-badge">3</span>
              Gana 10 puntos por cada respuesta correcta
          </li>
      </ul>

      <div class="input-group">
        <label for="nombre">Tu nombre</label>
        <input id="nombre" v-model="store.nombre" placeholder="Introduce tu nombre" type="text"/>
      </div>

      <router-link to="/juego" class="btn-start">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
          Comenzar Juego
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.start-game-container {
    display: flex;
    justify-content: center;
    padding: 4rem 1rem;
    min-height: 80vh;
    align-items: center;
}

.game-card {
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    border: 1px solid #e5e7eb;
    max-width: 500px;
    width: 100%;
    text-align: center;
}

.icon-wrapper {
    width: 64px;
    height: 64px;
    background-color: #f3e8ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.music-icon {
    width: 32px;
    height: 32px;
    color: var(--color-primary);
}

h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
}

p {
    color: var(--color-text-light);
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

.steps-list {
    list-style: none;
    padding: 0;
    text-align: left;
    margin-bottom: 2rem;
}

.steps-list li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--color-text-dark);
}

.step-badge {
    background-color: #f3e8ff;
    color: var(--color-primary);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.input-group {
    text-align: left;
    margin-bottom: 1.5rem;
}

.input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);
}

input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 1rem;
    background-color: #f9fafb;
    outline: none;
    transition: border-color 0.2s;
}

input:focus {
    border-color: var(--color-primary);
    background-color: white;
}

.btn-start {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    background-color: var(--color-primary); /* Use primary purple */
    color: white;
    padding: 0.875rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: opacity 0.2s;
}

.btn-start:hover {
    opacity: 0.9;
}

.icon-sm {
    width: 20px;
    height: 20px;
}
</style>
