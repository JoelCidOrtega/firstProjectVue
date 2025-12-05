<script setup>
import { ref, onMounted } from 'vue'

const ranking = ref([])

onMounted(() => {
    // Cargar ranking desde localStorage
    const rankingGuardado = localStorage.getItem('rankingVideojuego')
    if (rankingGuardado) {
        ranking.value = JSON.parse(rankingGuardado)
    }
})
</script>

<template>
  <div class="ranking-container">
    <div class="header-section">
         <div class="icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="trophy-icon">
                <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.625l.377.028.017.252c.064.95.275 1.868.618 2.73 1.076 2.705 3.328 4.608 6.141 5.385.152.042.306.082.46.121l.138.034.225 1.127a3.568 3.568 0 0 1-1.748.243l-.407-.052a.75.75 0 0 0-.19 1.488l.407.052c.224.029.449.052.674.07l.21.017v2.228H9.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.638v-2.228l.21-.017c.225-.018.45-.041.675-.07l.406-.052a.75.75 0 0 0-.19-1.488l-.406.052c-.569.073-1.157-.008-1.749-.243l.225-1.127.138-.034c.154-.039.308-.08.46-.121 2.813-.777 5.065-2.68 6.141-5.385.343-.862.554-1.78.618-2.73l.017-.252.376-.028a6.753 6.753 0 0 0 6.139-5.625.75.75 0 0 0-.584-.86c-1.012-.212-2.036-.394-3.071-.542v-.858a.75.75 0 0 0-.75-.75h-12a.75.75 0 0 0-.75.75ZM17.157 3.525c.033.272.062.548.085.827l.024.364a5.253 5.253 0 0 1-4.22 5.088 8.01 8.01 0 0 1-.502.13l-.15.034-.146-.367a6.6 6.6 0 0 0-1.37-2.126.75.75 0 0 0-1.164.962 8.086 8.086 0 0 1 1.63 2.502c.07.185.127.373.173.563l.024.1.18-.046c.077-.02.155-.038.232-.057 1.954-.47 3.523-2.008 4.298-3.896.223-.541.37-1.11.439-1.696.012-.102.02-.204.026-.307l.003-.042h-3.538Z" clip-rule="evenodd" />
            </svg>
         </div>
         <h2>Tabla de Clasificación</h2>
         <p>Los mejores jugadores de todos los tiempos</p>
         <span class="badge-sm">Top 10 Jugadores</span>
    </div>

    
    <div v-if="ranking.length > 0" class="ranking-list">
         <div v-for="(jugador, index) in ranking" :key="index" class="ranking-card" :class="'rank-' + (index + 1)">
              
              <!-- Icono de Posición -->
              <div class="rank-pos">
                   <span v-if="index === 0">👑</span>
                   <span v-else-if="index === 1">🥈</span>
                   <span v-else-if="index === 2">🥉</span>
                   <span v-else class="rank-num">#{{ index + 1 }}</span>
              </div>

              <!-- Info Jugador -->
              <div class="player-details">
                  <div class="player-header">
                       <span class="player-name">{{ jugador.nombre }}</span>
                       <span v-if="index === 0" class="rank-badge">🥇 Campeón</span>
                       <span v-if="index === 1" class="rank-badge">🥈 Segundo</span>
                       <span v-if="index === 2" class="rank-badge">🥉 Tercero</span>
                  </div>
                  <div class="player-sub">
                       <span>{{ jugador.precision || 0 }}% de precisión</span>
                       <span class="bullet">•</span>
                       <span>{{ jugador.fecha || '-' }}</span>
                  </div>
              </div>

              <!-- Puntos -->
              <div class="player-points">
                   <span class="points-val">{{ jugador.puntos }}</span>
                   <span class="points-label">puntos</span>
              </div>
         </div>
    </div>

    <!-- Empty State -->
    <div v-else class="empty-state">
         <div class="empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 1 0-4.5 0v5.625M12 3.75v-2.25m0 0 2.248.543A9.006 9.006 0 0 1 12 15.357 9.006 9.006 0 0 1 9.75 2.043 12.007 12.007 0 0 0 12 1.5Z" />
            </svg>
         </div>
         <h3>Aún no hay puntuaciones</h3>
         <p>¡Sé el primero en aparecer en el ranking!</p>
         <RouterLink to="/jugar" class="btn-primary btn-empty">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            Jugar Ahora
         </RouterLink>
    </div>
    
    <div class="footer-actions">
        <RouterLink to="/" class="btn-ghost">← Volver al Inicio</RouterLink>
        <RouterLink v-if="ranking.length > 0" to="/jugar" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            Jugar Ahora
        </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.ranking-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 1rem;
    text-align: center;
}

.header-section {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon-circle {
    width: 64px;
    height: 64px;
    background-color: #f3e8ff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.trophy-icon {
    width: 32px;
    height: 32px;
    color: #c026d3;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #c026d3; /* Pink title */
    font-weight: 500;
}

.header-section p {
    color: var(--color-text-light);
    margin-bottom: 1rem;
}

.badge-sm {
    background-color: #c026d3;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-weight: 700;
}

/* LISTA */
.ranking-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 3rem;
}

.ranking-card {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    border-radius: 12px;
    background: white;
    border: 1px solid #e5e7eb;
    transition: transform 0.2s;
    text-align: left;
}

.ranking-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Colores por ranking */
.rank-1 {
    background-color: #fffbeb; /* Yellow-50 */
    border-color: #fcd34d; /* Yellow-300 */
}

.rank-2 {
    background-color: #f8fafc; /* Slate-50 */
    border-color: #cbd5e1; /* Slate-300 */
}

.rank-3 {
    background-color: #fff7ed; /* Orange-50 */
    border-color: #fdba74; /* Orange-300 */
}

.rank-pos {
    font-size: 2rem;
    margin-right: 1.5rem;
    width: 40px;
    text-align: center;
}

.rank-num {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-light);
}

.player-details {
    flex: 1;
}

.player-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.25rem;
}

.player-name {
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--color-text-dark);
}

.rank-badge {
    font-size: 0.75rem;
    background: white;
    padding: 0.1rem 0.5rem;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.1);
    color: var(--color-text-light);
    font-weight: 600;
}

.player-sub {
    font-size: 0.85rem;
    color: var(--color-text-light);
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.bullet {
    font-size: 0.6rem;
    opacity: 0.5;
}

.player-points {
    text-align: right;
}

.points-val {
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    color: #c026d3; /* Pink */
    line-height: 1;
}

.points-label {
    font-size: 0.75rem;
    color: var(--color-text-light);
}

/* EMPTY STATE */
.empty-state {
    background: white;
    padding: 4rem 2rem;
    border-radius: 16px;
    border: 1px solid #e5e7eb;
    margin-bottom: 3rem;
}

.empty-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    color: #d1d5db;
}

.empty-state h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-text-dark);
    margin-bottom: 0.5rem;
}

.empty-state p {
    color: var(--color-text-light);
    margin-bottom: 2rem;
}

.btn-empty {
    max-width: 300px;
    margin: 0 auto;
}

/* FOOTER */
.footer-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
}

.btn-primary {
    background-color: #c026d3;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: opacity 0.2s;
}

.btn-primary:hover {
    opacity: 0.9;
}

.btn-ghost {
    background-color: white;
    color: var(--color-text-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid #e5e7eb;
    transition: background-color 0.2s;
}

.btn-ghost:hover {
    background-color: #f9fafb;
}

.icon-sm {
    width: 20px;
    height: 20px;
}
</style>
