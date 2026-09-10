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
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['aka', 'lastname'],
        data() {
            return {
                name: 'Ghof123'
            }
        }
    }
</script>