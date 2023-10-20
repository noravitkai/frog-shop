import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './input.css'
import ShoppingCart from './components/ShoppingCart.vue'

const app = createApp(App)

app.use(router)

app.component('ShoppingCart', ShoppingCart)

app.mount('#app')
