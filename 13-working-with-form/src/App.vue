<template>
    <app-header></app-header>
      <div class="container">
        <comp-validate></comp-validate>
      </div>

</template>

<script>
  //import compContact from './components/contact/index.vue'
  import compValidate from './components/validate/index.vue'

  export default {
    components: {
      compValidate
    }
  }
</script>