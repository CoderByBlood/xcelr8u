import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ui from '@nuxt/ui/vue-plugin'
import App from './App.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

const app = createApp(App)

app.use(router)
app.use(ui)
app.mount('#app')