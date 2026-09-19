<template>
    <app-header></app-header>
      <div class="container">
        <compContact></compContact>
      </div>
</template>

<script>
  import compContact from './components/contact/index.vue'

  export default {
    components: {
      compContact
    }
  }
</script>