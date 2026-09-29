<template>
    <form @submit="checkForm($event)">
        <div class="row">
            <div class="col-xl-12">
                <h1>contatc Person</h1>
                <hr>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        class="form-control"
                        v-model.lazy="formData.name"
                    />
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="form-control"
                        v-model="formData.email"
                    />
                    
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        class="form-control"
                        v-model="formData.subject"
                    />
                </div>
                <div class="form-group">
                        <label for="message">Message</label>
                        <textarea
                            rows="3"
                            id="message" 
                            class="form-control"
                            v-model="formData.message"
                        ></textarea>
                </div>

                <div class="form-group">
                    <h4>Want to promotion ?</h4>
                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="newsletter" 
                            id="newsletter"
                            v-model="formData.extras">
                        <label class="form-check-label" for="newsletter" >Neews</label>
                    </div>
                </div>
                
                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            value="Promotions" 
                            id="promotions"
                            v-model="formData.extras">
                        <label class="form-check-label" for="newsletter" >Promotions</label>
                    </div>

                <div class="form-group">
                    <h4>What are you ?</h4>
                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="radio" 
                            value="male" 
                            id="male"
                            v-model="formData.gender">
                        <label class="form-check-label" for="male" >Male</label>
                    </div>

                    <div class="form-check">
                        <input 
                            class="form-check-input" 
                            type="radio" 
                            value="female" 
                            id="female"
                            v-model="formData.gender">
                        <label class="form-check-label" for="newsletter" >Female</label>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="country">Country</label>
                    <select v-model="formData.country" class="form-control" id="country">
                        <option v-for="(country, index) in listCountry" :key="(index+country)">
                            {{ country }}
                        </option> 
                    </select>
                </div>
                
            
                <button class="btn btn-primary"
                 
                >
                    Submit
                </button>
                <div v-if="this.errors.length">
                    <p>Please fix this error:</p>
                    <ul>
                        <li v-for="error in errors" :key="error">
                            {{ error }}
                        </li>
                    </ul>
                </div>
               <!--  <button class="btn btn-primary" -->
               <!--  @click.prevent="getData"  -->
               <!--  > -->
               <!--      get -->
               <!--  </button> -->
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                errors: [],
                formData: {
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    extras: [],
                    gender: 'male',
                    country: '',
                    //newsletter: true,
                    //promotions: false
                },
                listCountry: [
                    'Indonesia',
                    'Malaysia',
                    'Thailand',
                    'Filiphina'
                ]
                
            }
        },
        methods: {
            checkForm(e) {
                e.preventDefault();
                this.errors = [];

                if(!this.formData.name) {
                    this.errors.push('name is required')
                }
                if(!this.formData.email) {
                    this.errors.push('email is required')
                } else if(!this.validEmail(this.formData.email)) {
                    this.errors.push('email tidak valid')
                }

                if(!this.errors.length) {
                    this.submitForm()
                }

                console.log(this.errors)
            },
            submitForm() {
                console.log(this.formData)
            },
            validEmail(email) {
                const re = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm
                return re.test(email)
            }
            //getData() {
            //    this.formData.name = 'New Name'
            //}
        }
    }
</script>