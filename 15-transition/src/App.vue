<template>
  <app-header></app-header>
    <div class="container">
      <comp-transition></comp-transition>
    </div>
  <app-footer></app-footer>
</template>

<script>
  import compTransition from './components/transition/one.vue'
  import appHeader from './components/generals/header.vue'
  import appFooter from './components/generals/footer.vue'

  export default {
    components: {
      appHeader,
      appFooter,
      compTransition
    }
  }
</script>
