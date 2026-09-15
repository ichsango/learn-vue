<template>
    <div>
        <h3>
            Grape Component
        </h3>
        <teleport to="#dialog_ishere">
            <comp-modal></comp-modal>
        </teleport>
        
    </div>
</template>

<script>
    import compModal from '../utils/modal.vue';

    export default {
        components: {
            compModal
        },
        name: 'grape-comp',
        //mounted() {
        //    console.log('mounted')
        //},
        unmounted() {
            console.log('grape unmounted')
        }
    }
</script>