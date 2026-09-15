<template>
    <div>
        <h3>Brand car</h3>
        <slot></slot>
        <slot name="brand"></slot>
        <slot name="other"></slot>
        <slot name="bottom"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>
