<template>
    <div>
        <h3> {{ text }} </h3>>
    </div>
    <button @click="this.text = 'changedtext'">change text</button>
</template>

<script>
    export default {
        data() {
            return {
                text: 'Lifecycle hook'
            }
        },
        beforeCreate() {
            console.log('1-beforeCreate')
        },
        created() {
            console.log('2-created')
        },
        beforeMount() {
            console.log('3-beforeMount')
        },
        mounted() {
            console.log('4-mount')
        },
        beforeUpdate() {
            console.log('U1-update')
        },
        updated() {
            console.log('U2-updated')
        },

        beforeUnmount() {
            console.log('03-beforeUnmount')
        },
        unmounted() {
            console.log('02-unmounted')
        }
    }
</script>