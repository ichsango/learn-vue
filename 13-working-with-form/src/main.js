import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/header.vue'
//import Body from './components/contact/index.vue'

const app = createApp(App)

app.component('app-header', Header)
app.mount('#app')