import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/generals/appHeader.vue'
import Footer from './components/generals/appFooter.vue'

const app = createApp(App) 

app.directive('custDir', {
    created(el) {
        console.log(el.parentNode);
        console.log('created')
    },
    beforeMount(el, binding) {
        
        el.style.color = binding.modifiers.blue ? 'blue' : 'red'
        el.style.fontSize = binding.modifiers.small ? '15px' : '30px'   
        el.innerHTML = binding.value
    },
    mounted(el) {
        console.log(el.parentNode);
        console.log('beforeMount')
    },
    beforeUpdate(el, binding) {
        el.innerHTML = binding.value;
        console.log('beforeUpdate')
    },
    updated() {
        console.log('update')
    }
})

app.component('app-header', Header)
app.component('app-footer', Footer)
app.mount('#app')
