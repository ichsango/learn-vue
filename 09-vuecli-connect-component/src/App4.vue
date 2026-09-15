<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-life v-if="showIt"></comp-life>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compLife from './components/life/index.vue'

    export default {
        components: {
            compLife
        },
        data() {
            return {
                showIt: true
            }
        },
        mounted() {
            setTimeout(() => { 
                this.showIt = false
            }, 3000)
        }
    }
</script>

<style scope>
 body {
  padding: 0;
  margin: 0;
 }
  .container {
    min-height: 80vh;
    box-sizing: border-box;
    padding: 20px;
  }
  li {
    color: red;
  }
</style>