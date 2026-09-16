<template>
    
    <div v-user-lastname.border="lastname"></div>
    <h3 v-custDir.blue.big="valDirective"></h3>
    
    <button @click="this.valDirective = 'changed text' ">change text</button>
</template>

<script>
    export default {
        data() {
            return {
                valDirective: 'text from data',
                lastname: 'Ghofur'
            }
        },
        directives: {
            'user-lastname': {
                beforeMount(el, binding) {
                    el.innerHTML = binding.value
                    el.style.color = 'magenta'
                    el.style.fontSize = '35px'
                    el.style.border = binding.modifiers.border ? '1px solid black' : 'none'
                },
            },
        }
    }
</script>