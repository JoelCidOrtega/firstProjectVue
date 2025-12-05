<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-content">
        <div class="badge">
            <span class="badge-icon">🎵</span>
            ¡Nuevo Juego!
        </div>
        <h1 class="hero-title">¿Cuánto sabes de música?</h1>
        <p class="hero-description">
          Pon a prueba tu conocimiento musical. Escucha fragmentos de 5 segundos y
          adivina la canción correcta entre 4 opciones. ¡Compite por las mejores
          puntuaciones!
        </p>
        <div class="hero-actions">
          <router-link to="/jugar" class="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            Comenzar a Jugar
          </router-link>
          <router-link to="/ranking" class="btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                 <path fill-rule="evenodd" d="M5.143 14.167a.75.75 0 0 1 .387-1.01l7.168-3.325a.75.75 0 0 1 .604 0l7.168 3.325a.75.75 0 0 1 .387 1.01l-7.168 12.33a.75.75 0 0 1-1.304 0l-7.168-12.33a.75.75 0 0 1-.074-.02V14.167Z" clip-rule="evenodd" />
            </svg>
            Ver Ranking
          </router-link>
        </div>
        <div class="hero-visual">
          <div class="headphones-circle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="headphones-icon">
                <path fill-rule="evenodd" d="M12 2.25a7.5 7.5 0 0 0-7.5 7.5v9a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H5.25v-1.5a6.75 6.75 0 0 1 13.5 0v1.5h-2.25a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75v-9a7.5 7.5 0 0 0-7.5-7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="how-it-works">
      <div class="container">
        <h2 class="section-title">¿Cómo funciona?</h2>
        <p class="section-subtitle">Un juego simple pero adictivo que pondrá a prueba tus conocimientos musicales</p>
        
        <div class="cards-grid">
          <!-- Card 1 -->
          <div class="feature-card">
            <div class="feature-icon-wrapper icon-purple">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="feature-icon">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-1.06 1.06l-.353-.353v6.32a.75.75 0 0 1-.75.75h-3.75a.75.75 0 0 1-.75-.75V15h-3v4.5a.75.75 0 0 1-.75.75H7.25a.75.75 0 0 1-.75-.75v-6.32l-.353.353a.75.75 0 0 1-1.06-1.06l8.632-8.632Z" />
                </svg> <!-- Using placeholder, design shows music note -->
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="feature-icon" style="display:none"> <!-- Keeping SVG slot ready -->
                     <path fill-rule="evenodd" d="M19.953 2.5a.75.75 0 0 0-1.153-.608L18 2.607V13.78c0 1.9-1.996 3.27-3.823 2.657a2.915 2.915 0 0 0-3.677 2.812A2.75 2.75 0 0 0 13.25 22a2.75 2.75 0 0 0 2.75-2.75V5.195l3.203-1.07a.75.75 0 0 0 .75-.75V2.5Z" />
                </svg>
                 <!-- Actual Music Note Icon -->
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="feature-icon">
                     <path fill-rule="evenodd" d="M19.953 2.5a.75.75 0 0 0-1.153-.608L18 2.607V13.78c0 1.9-1.996 3.27-3.823 2.657a2.915 2.915 0 0 0-3.677 2.812A2.75 2.75 0 0 0 13.25 22a2.75 2.75 0 0 0 2.75-2.75V5.195l3.203-1.07a.75.75 0 0 0 .75-.75V2.5Z" clip-rule="evenodd" />
                 </svg>
            </div>
            <h3>Escucha</h3>
            <p>Reproduce un fragmento de 5 segundos de una canción popular</p>
          </div>

          <!-- Card 2 -->
          <div class="feature-card">
            <div class="feature-icon-wrapper icon-pink">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="feature-icon">
                    <path d="M12 2.25a9.75 9.75 0 0 0-9.75 9.75v.505a2.536 2.536 0 0 1 .425 4.909 9.721 9.721 0 0 0 5.093 4.295 2.57 2.57 0 0 1 5.485-.756 2.569 2.569 0 0 1 5.486.756 9.721 9.721 0 0 0 5.092-4.295 2.536 2.536 0 0 1 .426-4.91v-.504A9.75 9.75 0 0 0 12 2.25ZM9.932 9.53a.75.75 0 0 1 0-1.06A4.47 4.47 0 0 1 12 7.5a4.47 4.47 0 0 1 2.068.97.75.75 0 1 1-1.026 1.096A2.97 2.97 0 0 0 12 9c-.58 0-1.12.169-1.542.47a.75.75 0 0 1-1.026-.53v.59Z" />
                </svg>
            </div>
            <h3>Adivina</h3>
            <p>Elige la respuesta correcta entre 4 opciones posibles</p>
          </div>

           <!-- Card 3 -->
          <div class="feature-card">
            <div class="feature-icon-wrapper icon-orange">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="feature-icon">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>
            </div>
            <h3>Compite</h3>
            <p>Gana 10 puntos por respuesta correcta y sube en el ranking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="container stats-grid">
        <div class="stat-item">
          <h3>10</h3>
          <p>Preguntas por partida</p>
        </div>
        <div class="stat-item">
          <h3>100</h3>
          <p>Puntos máximos</p>
        </div>
        <div class="stat-item">
          <h3>5s</h3>
          <p>Por canción</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
            <div class="trophy-icon">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-white-lg">
                    <path fill-rule="evenodd" d="M5.143 14.167a.75.75 0 0 1 .387-1.01l7.168-3.325a.75.75 0 0 1 .604 0l7.168 3.325a.75.75 0 0 1 .387 1.01l-7.168 12.33a.75.75 0 0 1-1.304 0l-7.168-12.33a.75.75 0 0 1-.074-.02V14.167Z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M5.25 7.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M5.25 3.75a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
            </div>
          <h3>¿Listo para el desafío?</h3>
          <p>Demuestra que eres un experto musical y alcanza el top del ranking</p>
          <router-link to="/jugar" class="btn-cta">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-sm">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
              Empezar Ahora
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hero Section */
.hero-section {
  text-align: center;
  padding: 4rem 1rem 5rem;
  background-color: var(--color-white); /* White background instead of radial gradient */
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}

.badge {
  background-color: #f3e8ff; /* Light purple bg */
  color: var(--color-primary); /* Dark purple text */
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  /* Removed shadow */
}

.hero-title {
  font-size: 2.5rem; /* Slightly smaller */
  font-weight: 800;
  color: var(--color-text-dark); /* Solid dark color */
  margin-bottom: 1.25rem;
  /* Removed gradient text */
}

.hero-description {
  font-size: 1.15rem;
  color: var(--color-text-light);
  margin-bottom: 2.5rem;
  max-width: 600px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  justify-content: center;
}

.icon-sm {
  width: 20px;
  height: 20px;
}

/* Hero Visual (Headphones) - Simplified */
.hero-visual {
  display: flex;
  justify-content: center;
}

.headphones-circle {
  width: 150px;
  height: 150px;
  background-color: #fce7f3; /* Light pink */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Removed shadow and float animation */
}

.headphones-icon {
  width: 80px;
  height: 80px;
  color: var(--color-secondary); /* Pink icon */
}

/* How It Works Section */
.how-it-works {
  padding: 4rem 1rem;
  background-color: #f9fafb; /* Light gray */
  text-align: center;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.section-subtitle {
  color: var(--color-text-light);
  margin-bottom: 3rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  /* Removed hover transform and shadow */
}

.feature-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px; /* Rounded square instead of circle */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.icon-purple { background-color: #f3e8ff; color: #9333ea; }
.icon-pink { background-color: #fce7f3; color: #db2777; }
.icon-orange { background-color: #ffedd5; color: #ea580c; }

.feature-icon {
  width: 24px;
  height: 24px;
}

.feature-card h3 {
  font-size: 1.15rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
}

.feature-card p {
  color: var(--color-text-light);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Stats Section */
.stats-section {
  background-color: white; /* White instead of gradient */
  padding: 4rem 1rem;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.stats-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  text-align: center;
}

.stat-item h3 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 0.25rem;
  color: var(--color-primary); /* Colored text instead of white */
}

.stat-item p {
  font-size: 0.9rem;
  color: var(--color-text-light); /* Grey text */
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-weight: 600;
}

/* CTA Section */
.cta-section {
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
}

.cta-card {
  /* Removed background gradient, simpler card */
  background-color: white;
  border: 1px solid #e5e7eb;
  width: 100%;
  max-width: 600px;
  padding: 3rem 2rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trophy-icon {
  margin-bottom: 1.25rem;
}

.icon-white-lg {
  width: 48px;
  height: 48px;
  color: var(--color-accent); /* Orange icon */
}

.cta-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.cta-card p {
  margin-bottom: 2rem;
  color: var(--color-text-light);
  font-size: 1rem;
}

.btn-cta {
  background-color: var(--color-secondary); /* Pink button */
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  transition: opacity 0.2s;
}

.btn-cta:hover {
  opacity: 0.9;
  transform: none; /* Removed scale */
}
</style>
