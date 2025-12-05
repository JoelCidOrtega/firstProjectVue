<template>
  <nav class="navbar">
    <div class="container navbar-content">
      <router-link to="/" class="brand">
        <div class="logo-wrapper">
            <!-- Replacing local image with a styled placeholder icon if needed, or keeping img -->
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="logo-icon">
              <path d="M19.953 2.5a.75.75 0 0 0-1.153-.608L18 2.607V13.78c0 1.9-1.996 3.27-3.823 2.657a2.915 2.915 0 0 0-3.677 2.812A2.75 2.75 0 0 0 13.25 22a2.75 2.75 0 0 0 2.75-2.75V5.195l3.203-1.07a.75.75 0 0 0 .75-.75V2.5Z" />
              <path d="M9.75 6.75A2.75 2.75 0 0 0 7 9.5v8.542l.067.026a3.637 3.637 0 0 1-1.285.556 2.916 2.916 0 0 0-3.237 2.695 2.75 2.75 0 1 0 5.405-.623V9.5a1.25 1.25 0 0 1 1.25-1.25h.5a.75.75 0 0 0 .75-.75V6.75a.75.75 0 0 0-.75-.75h-.5Z" />
            </svg>
            <span class="brand-name">Adivina la Canción</span>
        </div>
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link active">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.632 8.632a.75.75 0 0 1-1.06 1.06l-.353-.353v6.32a.75.75 0 0 1-.75.75h-3.75a.75.75 0 0 1-.75-.75V15h-3v4.5a.75.75 0 0 1-.75.75H7.25a.75.75 0 0 1-.75-.75v-6.32l-.353.353a.75.75 0 0 1-1.06-1.06l8.632-8.632Z" />
            </svg>
           Inicio
        </router-link>
        <router-link to="/jugar" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
            </svg>
            Jugar
        </router-link>
        <router-link to="/ranking" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="nav-icon">
              <path fill-rule="evenodd" d="M5.143 14.167a.75.75 0 0 1 .387-1.01l7.168-3.325a.75.75 0 0 1 .604 0l7.168 3.325a.75.75 0 0 1 .387 1.01l-7.168 12.33a.75.75 0 0 1-1.304 0l-7.168-12.33a.75.75 0 0 1-.074-.02V14.167Z" clip-rule="evenodd" />
               <path fill-rule="evenodd" d="M5.25 7.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M5.25 3.75a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
            Ranking
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: var(--color-white);
  padding: 1rem 0;
  border-bottom: 1px solid #e5e7eb;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  text-decoration: none;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  width: 28px;
  height: 28px;
  color: var(--color-primary); /* Solid color */
}

.brand-name {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--color-primary); /* Solid color, no gradient */
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-light); /* Softer gray */
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.active {
    color: var(--color-primary);
    font-weight: 600;
    /* Removed background pill style */
}

.nav-icon {
  width: 20px;
  height: 20px;
}
</style>
