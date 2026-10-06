<template>
    <Form @submit="onSubmit">
        <label for="name">Name</label>
        <Field 
         name="name" 
         :rules="validateName"
         placeholder="Input your name"
         class="form-control"
         />
        <ErrorMessage name="name" as="div" v-slot="{ message }">
            <div class="alert alert-danger" role="alert">
                {{ message }}   
            </div>
        </ErrorMessage>

        <label for="email">Email</label>
        <Field 
         name="email" 
         :rules="validateEmail"
         v-slot="{ field, errors, errorMessage }"
        >
           <input 
                type="text" 
                id="email" 
                class="form-control"
                v-bind="field"
                :class="{'is-invalid': errors.length !== 0}"
            >
           <div 
           class="alert 
           alert-danger" 
           role="alert"
           v-if="errors.length !== 0"
           >
                {{ errorMessage }}

           </div>
        </Field>
        
        <div class="form-group">
            <label for="message">Message</label>
            <Field name="message" :rules="validateMessage" v-slot="{ field, errors, errorMessage}">
                <textarea 
                    id="message" 
                    rows="3"
                    class="form-control" 
                    v-bind="field"
                    :class="{'is-invalid': errors.length !== 0}"
                ></textarea>
                <div 
                class="alert alert-danger" 
                role="alert"
                v-if="errors.length !== 0"
                >
                    {{ errorMessage }}
                </div>
            </Field>
        </div>

        <hr>
        <button class="btn btn-primary">Submit</button>
    </Form>
</template>

<script>
    import { Field, Form, ErrorMessage } from 'vee-validate'
    import { errorMessages } from 'vue/compiler-sfc';

    export default {
        components: {
            Field,
            Form,
            ErrorMessage
        },
        methods: {
            isRequired(value) {
                if(!value) {
                    return 'Name is required'
                }
                return true
            },
            validateName(value) {
                if(!value) {
                    return 'Name is required'
                }
                if(value.length < 3) {
                    return 'Name must be at least 3 characters'
                }
                return true
            },
            validateEmail(value) {
                if(!value) {
                    return 'Email is required'
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                if(!emailRegex.test(value)) {
                    return 'Email must be valid'
                }
                return true;
            },
            onSubmit(values, { resetForm }) {
                console.log('Form submitted with values:', values)
                resetForm()
            },
            validateMessage(value) {
                if(!value) {
                    return 'Message is required'
                }
                if(value.length < 3) {
                    return 'Name must be at least 3 characters'
                }
                return true
            },
        }
    }
</script>