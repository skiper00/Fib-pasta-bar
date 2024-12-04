import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Contacts from '@/pages/Contacts.vue'
import Antipasto from '@/pages/categories/Antipasto.vue'
import Deserts from '@/pages/categories/Deserts.vue'
import Drinks from '@/pages/categories/Drinks.vue'
import Pasta from '@/pages/categories/Pasta.vue'
import Pizza from '@/pages/categories/Pizza.vue'
import Salads from '@/pages/categories/Salads.vue'
import Soup from '@/pages/categories/Soup.vue'
import Stock from '@/pages/Stock.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/Контакты', name: 'contact', component: Contacts },
    { path: '/Антипасто', name: 'антипасто', component: Antipasto },
    { path: '/Десерты', name: 'десерты', component: Deserts },
    { path: '/Напитки', name: 'напитки', component: Drinks },
    { path: '/Паста', name: 'паста', component: Pasta },
    { path: '/Пицца', name: 'пицца', component: Pizza },
    { path: '/Салаты', name: 'салаты', component: Salads },
    { path: '/Супы', name: 'супы', component: Soup },
    { path: '/Акции', name: 'акции', component: Stock },
  ],
})

export default router
