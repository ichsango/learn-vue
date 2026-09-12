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
            aka: {
                type: String,
                required: true,
                default: 'N/A'
            },
            lastname: {
                type: String,
                //validator(value) {
                //    if(value === 'Ghofur') {
                //        return true
                //    } else {
                //        return false
                //    }
                //}
            },
            userAge: {Number, String},
            userParents: Object,
            updateAge: Function
        },
        emits: {
                'update-last': function(last) {
                    if (last === 'syahab') {
                        return true
                    } else {
                        alert('wrong last name !!')
                        return false
                    }
                }
            },
        data() {
            return {
                name: 'Ghof123'
            }
        },
        methods: {
            updateLastName() {
                this.$emit('update-last', 'syahabb')
            },
            sayHello() {
                this.$emit('say-hello')
            }
        }
    }
</script>