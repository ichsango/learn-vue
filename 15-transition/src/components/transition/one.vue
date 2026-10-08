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
<hr />
    <Transition name="slide">
        <div 
            class="p-3 mb-2 bg-info text-white"
            v-if="display3"
            >
            Hello   
        </div>
    </Transition>
    <button class="btn btn-primary" @click="display3 = !display3">
        Change Display 3
    </button>
    <hr />
    <Transition name="slideup">
        <div 
            class="p-3 mb-2 bg-info text-white"
            v-if="display4"
            >
            Hello   
        </div>
    </Transition>
    <button class="btn btn-primary" @click="display4 = !display4">
        Change Display 4
    </button>
</template>

<hr />

<script>
    export default {
        data() {
            return {
                display: false,
                display2: false,
                display3: false,
                display4: false
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

    .slide-enter-from {
        transform: translateX(30px);
        opacity: 0;
    }
    .slide-enter-active {
        transform: all 5s ease;
    }
    .slide-enter-to {
        opacity: 1;
    }
    .slide-leave-from {
        opacity: 1;
        background-color: red !important;
    }
    .slide-leave-active {
        transition: all 1s ease-in;
    }
    .slide-leave-to {
        opacity: 0;
        background-color: black !important;
        transform: translateX(100px);
    }
    /* =====*/
    .slideup-enter-active {
        animation: slideUp 1s ease-in-out;
    }
    .slideup-leave-active {
        animation: slideDown 1s ease-in-out;
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(15px);

        } to {
            opacity: 1;
            transform: translateY(0px);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateY(0px);
        } to {
            opacity: 0;
            transform: translateY(15px);
        }
    }

</style>