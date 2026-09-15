<template>
  <div>
    <app-header></app-header>
      <div class="container">
          <comp-brand>
            <h3>ini ada di top content</h3>
            <template v-slot:brand>
              <ul>
              <li v-for="(brand, index) in brands" :key="index">{{ brand }}</li>
            </ul>
            </template>
            <template v-slot:other>
              <h3>other slot</h3>
            </template>
            <template v-slot:bottom>
              <strong>default slot</strong>
            </template>
          </comp-brand>
          
      </div>
    <app-footer></app-footer>
  </div> 
</template>

<script>
import compBrand from './components/cars/brand.vue'

  export default {
    components: {
      compBrand
    },
    data() {
      return {
        brands: ['Honda', 'Toyota', 'Ford'],
        cars: [
          {model: 'jaz', brand: 'Honda'},
          {model: 'Yariz', brand: 'Toyota'},
          {model: 'Airev', brand: 'Wulling'},
        ],
      }
    },
    provide() {
      return {
        cars: this.cars,
        changeCar : this.changeCar
      }
    },
    methods: {
      changeCar() {
        this.cars[0].brand = 'ferarri'
      }
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