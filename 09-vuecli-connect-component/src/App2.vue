<template>
  <div>
    <app-header></app-header>
      children
      <comp-cars></comp-cars>

      parent
      <ul>
          <li v-for="(car, index) in cars" :key="index">
              {{ car.brand }}: {{ car.model }}
          </li>
      </ul>
      <button @click="changeCar">ubah mobil</button>
    <app-footer></app-footer>

  </div>
</template>

<script>
import compCars from './components/cars/index.vue'

  export default {
    components: {
      compCars
    },
    data() {
      return {
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

<style>
 body {
  padding: 0;
  margin: 0;
 }
  .container {
    min-height: 80vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>