<template>
    <Transition>
        <div 
            class="p-3 mb-2 bg-success text-white"
            v-if="display"
            >
            Hello   
        </div>
        
    </Transition>
    <button class="btn btn-primary" @click="display = !display">
        Change Display
    </button>
<hr />
    <Transition>
        <div 
            class="p-3 mb-2 bg-warning text-white"
            v-if="display2"
            >
            Hello   
        </div>
        
    </Transition>
    <button class="btn btn-primary" @click="display2 = !display2">
        Change Display 2
    </button>
</template>

<script>
    export default {
        data() {
            return {
                display: false,
                display2: false
            }
        }
    }
</script>

<style>
    .v-enter-from,
    .v-leave-to {
      opacity: 0;  
    }

    .v-enter-active,
    .v-leave-active {
        transition: 4s;
    }

    .v-enter-to,
    .v-leave-from {
      opacity: 1;  
    }

</style>