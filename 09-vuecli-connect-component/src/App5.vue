<template>
    <div>
        <app-header></app-header>
            <div class="container">
                <button @click="this.activeComp = 'comp-orange'">Orange</button>
                <button @click="this.activeComp = 'comp-grape'">Grape</button>

                <!-- <comp-orange v-if="activeComp === 'comp-orange'"></comp-orange>
                <comp-grape v-if="activeComp === 'comp-grape'"></comp-grape> -->
                <!-- dynamic component-->
                 <keep-alive include="comp-orange,grape-comp">
                    <component :is="activeComp"></component>
                 </keep-alive>
                 <div id="dialog_ishere"></div>
            </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import compOrange from './components/fruits/orange.vue'
    import compGrape from './components/fruits/grape.vue'

    export default {
        components: {
            compOrange,
            compGrape
        },
        data() {
            return {
                activeComp: 'comp-orange'
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