<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <comp-directives></comp-directives>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compDirectives from './components/Directives/index.vue'
    //import compGrape from './components/fruits/grape.vue'

    export default {
        components: {
            compDirectives
        },
        data() {
            return {
                
            }
        },
        
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