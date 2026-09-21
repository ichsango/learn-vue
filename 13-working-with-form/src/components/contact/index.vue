<template>
    <form>
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
                        <input class="form-check-input" type="checkbox" value="newsletter" id="newsletter">
                    </div>
                </div>

                <button class="btn btn-primary"
                @click.prevent="submitForm" 
                >
                    Submit
                </button>
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
                formData: {
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }
                
            }
        },
        methods: {
            submitForm() {
                console.log(this.formData)
            },
            //getData() {
            //    this.formData.name = 'New Name'
            //}
        }
    }
</script>