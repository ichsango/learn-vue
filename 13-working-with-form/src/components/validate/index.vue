<template>
    <Form @submit="onSubmit" :validation-schema="formSchema">
        <label for="name">Name</label>
        <Field 
         name="name" 
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
            <Field name="message" v-slot="{ field, errors, errorMessage}">
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
    import * as yup from 'yup'
    import { errorMessages } from 'vue/compiler-sfc';

    export default {
        components: {
            Field,
            Form,
            ErrorMessage
        },
        data() {
            return {
                formSchema: {
                    name:yup.string().required('Name harus diisi').min(3, 'Name minimal 3 karakter'),
                    email:yup.string().required('Email harus diisi').email('email tidak valid'),
                    //email(value) {
                    //    if(!value) {
                    //        return 'Email is required'
                    //    }
                    //    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    //    if(!emailRegex.test(value)) {
                    //        return 'Email must be valid'
                    //    }
                    //    return true;
                    //},
                    message(value) {
                        if(!value) {
                            return 'Message is required'
                        }
                        if(value.length < 3) {
                            return 'Message must be at least 3 characters'
                        }
                        return true
                    },
                    //opsi pakai yup
                }
            }
        },
        methods: {
            onSubmit(values, { resetForm }) {
                console.log('Form submitted with values:', values)
                resetForm()
            },
        }
    }
</script>