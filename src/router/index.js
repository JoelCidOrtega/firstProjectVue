import { createRouter, createWebHistory } from 'vue-router'

import JugarView from '../views/JugarView.vue'
import HomeView from '../views/HomeView.vue'
import RankingView from '../views/RankingView.vue'
import JuegoJuego from '../components/juegoJuego.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jugar',
      name: 'jugar',
      component: JugarView,
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: RankingView,
    },
    {
      path: '/juego',
      name: 'juego',
      component: JuegoJuego,
    },
  ],
})

export default router
