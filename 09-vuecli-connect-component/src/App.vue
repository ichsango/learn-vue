<template>
  <div>
    <app-header></app-header>
      <div class="container">
        <profil-page 
          :aka="name"
          :lastname="lastname"
          :userAge="age"
          :userParents="parents"
        ></profil-page>
        <button @click="updateName">change name</button>
      </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import profilPage from './components/user/profilPage.vue'

  export default {
    components: {
      profilPage
    },
    data() {
      return {
        name: 'Ichsan',
        lastname:'Ghofur',
        age: 20,
        parents: {
          mother: 'ibu',
          father: 'ayah'
        }
      }
    },
    methods: {
      updateName() {
        this.name = 'aing'
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