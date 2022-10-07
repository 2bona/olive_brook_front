<template>
    <v-container style="min-height:" class="" >
    <div >

        <div style="position: relative;" class="py-8">
     
             <h1 style="  color:#aaa332;  font-family: 'Jost', sans-serif!important;
" class=" coreupcard hidden  display-3  jost font-weight-regular text-center"> We would love to hear from you</h1> 
<p class=" coreupcard hidden px-9 mx-auto text-center jost " style="max-width:600px">Kindly reach out to us with your inquiries, questions or suggestions, our mail is always available, we would respond within the day.</p>

    </div>
<v-card color="#fefefe" style="border-radius: 8px;" class="coreupcard hidden pa-0">

  <v-layout class="my-8" wrap>
<v-flex xs12 class="py-8 px-4" md6>
    <v-form ref="form">
        <v-layout wrap>
<v-flex xs12 sm6 class="px-3">

<v-text-field  filled :loading="loading" 
          :rules="[rules.required]"
v-model="first_name"  color="#aaa332" class="jost" placeholder="First Name"></v-text-field>
</v-flex>
<v-flex xs12 sm6 class="px-3">

<v-text-field  filled :loading="loading" 
          :rules="[rules.required]"
v-model="last_name"  color="#aaa332" class="jost" placeholder="Last Name"></v-text-field>
</v-flex>
<v-flex xs12 sm6 class="px-3">

<v-text-field  filled :loading="loading" 
          :rules="[rules.required]"
v-model="phone"  color="#aaa332" class="jost" placeholder="Phone Number"></v-text-field>
</v-flex>
<v-flex xs12 sm6 class="px-3">

<v-text-field  filled :loading="loading" 
          :rules="[rules.required]"
v-model="email"  color="#aaa332" class="jost" placeholder="Email"></v-text-field>
</v-flex>
<v-flex xs12  class="px-3">

<v-textarea auto-grow rows="4" filled :loading="loading" 
          :rules="[rules.required]"
v-model="message"  color="#aaa332" class="jost" placeholder="Message"></v-textarea>
</v-flex>
        </v-layout>
<div class="text-center"><v-btn :loading="loading" @click="sendMail()" dark color="#2a1e6f" depressed class="jost mx-auto text-capitalize" x-large>submit</v-btn></div>
    </v-form>
</v-flex>
<v-flex xs12  style="position:relative" md6>
       <div v-if="$vuetify.breakpoint.smAndUp" style="position:absolute;background: linear-gradient(to right, #fefefe 0%, rgba(0,0,0,0) 100%);
height:100%;width:80%;left:0;z-index:99"></div>
       <div v-else style="position:absolute;background: linear-gradient(to bottom, #fefefe 0%, rgba(0,0,0,0) 100%);
height:70%;width:100%;top:0;z-index:99"></div>
    <v-avatar tile width="100%" height="100%" ><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1665062979/IMG_8393_a5cdjg.jpg"></v-img></v-avatar>
     </v-flex>
  </v-layout> 
</v-card>

  
   </div>

    </v-container>
</template>
<script>
import axios from "axios"
export default {
    data: () => ({
        colors: [
            'grey',
            'red',
            'teal',
            'purple darken-4',
            'green',
            'pink',
        ],
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        loading: false,
            rules: {
      required: (value) => !!value || "Required.",
  },
    }),
    methods:{
        sendMail(){
            this.loading = true
            if (this.$refs.form.validate()) {
                
                axios.post('sendMail', {
                    first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
                email: this.email,
                message: this.message
            }).then(()=>{
                this.loading = false
                alert('Your message has been sent successfully')
            }).catch(()=>{
                alert('An error has occurred')
                this.loading = false
            })
            }
        }
    }
}
</script>
<style>

.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
    background:rgb(245 245 245)!important;
    border-radius:4px
}
input[type=text]:not(.browser-default){
    border:none!important;
    box-shadow: none!important;
}
input[type=text]:not(.browser-default):focus{
    border:none!important;
    box-shadow: none!important;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border: none!important;
}
.v-text-field > .v-input__control > .v-input__slot:after {
border: none!important;
}
</style>