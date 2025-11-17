import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

// Crear instancia de Pinia
const pinia = createPinia()

// Registrar Pinia en la app
app.use(pinia)

app.mount('#app')
