<template>
    <div class="user_profile">
        <h3>User Information</h3>
        <ul>
            <li>
                <span>Name: </span> {{ name }}
            </li>
            <li>
                <span>aKa: </span> {{ aka }}
            </li>
            <li>
                <span>Last Name: </span> {{ lastname}}
            </li>
            <li>
                <span>umur: </span> {{ userAge }}
            </li>
            <ul>
                <li v-for="(value, key, index) in userParents" :key="index">
                    {{ key }} : {{ value }}
                </li>
            </ul>
        </ul>
        <button @click="updateLastName">Child Update name</button>
        <button @click="sayHello">child Say Hello</button>
        <button @click="updateAge(35)">child update age</button>
    </div>
</template>

<script>
    export default {
        props: {
            aka: String,
            lastname: String,
            userAge: Number,
            userParents: Object,
            updateAge: Function
        },
        
        data() {
            return {
                name: 'Ghof123'
            }
        },
        methods: {
            updateLastName() {
                this.$emit('update-last', 'syahab')
            },
            sayHello() {
                this.$emit('say-hello')
            }
        }
    }
</script>