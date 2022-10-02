<template>
  <div class="home">
      <v-card max-width="600px" flat tile class=" mx-auto d-flex justify-center align-center" height="90vh" width="100vw">
          <v-form ref="form" class="text-center jost font-weight-black" onSubmit="return false">
<h2 class="mb-9 ">Rider Request Form</h2>
<v-text-field :loading="loading" v-model="address" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Address"></v-text-field>
<v-text-field :loading="loading" v-model="phone" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Phone"></v-text-field>
<v-text-field :loading="loading" v-model="name" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Name"></v-text-field>
<v-btn :loading="loading" color="orange darken-4" rounded dark x-large class="font-weight-black elevation-20 mt-9 mx-auto" @click="orderBtn()">request a rider</v-btn>
          </v-form>
      </v-card>
      <v-dialog max-width="300px" v-model="dialog">
          <v-sheet max-width="300px" class="text-center pa-4">
              <p>Are you sure?</p>
              <div>
                  <v-btn class="mx-2" @click="dialog = false">cancel</v-btn>
                  <v-btn :loading="loading" class="mx-2" dark @click="placeOrder()">sure</v-btn>
              </div>
          </v-sheet>
      </v-dialog>
      <v-layout  wrap class=" pb-3">
    <v-flex class="body-2 d-flex justify-center align-center pa-2" xs12 >
        <p onclick="window.location.href = 'https://edeyapp.com';"  class="caption text-capitalized text-center mb-0 font-weight-bold grey--text text--darken-3">
         <span>
            <v-avatar width="100" height="auto" tile class="mb-1  mx-auto">
    <v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1643977448/clients/E_dey_app_19.5_by_20_1_ayherr.jpg"></v-img>
</v-avatar>
</span>
</p>
    </v-flex>
      </v-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'


export default {
  name: 'Home',
  components: {

  },
  data: () => ({
    name: '',
    phone: '',
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxMSIsImp0aSI6IjllMGJhMjYzOTEzMDJiYmUwZTc3Njc1N2RiMGMwM2MwMzFmNGY3NmUwMGIxNWE0MTQ1ZTlhNTVlYjM4NjIwZGZjZjYxYjA1ZjQ4YjBjMjNmIiwiaWF0IjoxNjY0NzA2MjMwLjI5MzIwOSwibmJmIjoxNjY0NzA2MjMwLjI5MzIxMSwiZXhwIjoxNjk2MjQyMjMwLjI4NzMwMiwic3ViIjoiMzEzNCIsInNjb3BlcyI6W119.wvs-Rv2dCXNMtTylglFWEt5ba8kqHRGKSvpAfuJosJdTC2rTUqyBdbU5_nNzXzZIvLN-5tiUqCO_No1sGqFoxfNYdF1TLO8b93bsNMSwi747Zgwwd5mQZsFXx1MA3LRvS9wXIWFozVIvGzekNHq8i8tY2i8XiBjfspcrTMuW91lXL7-MMYwl1Ou5AVQnV-IiQuKMn3wULQnZfCjo9ZncOUGw6PogHi6_muKklRPgIyMC9AZis9kAh9UrWA2Jq9ljupBeg11MvCgJdw5bYTLhFnASLTR6N7CRsp3YpEGM2cY3ZsV8VWqYkQPtpDO2X7qRIKXSLvhdi58OJSzoBeqyet1nn8PWRuOODUPbkPySFT3VJtUi7Ck_t6xGrKKo1Zd_kLaK75JQ75ij1SOodGPy7KcDuBjzbkhstbHdnP_c4_5XLiFrlW0A_hLI1YAhuFw4RWzoL0Qhf5eh6XkNx2-zMl7DmNDK_xZNax97s-u-dQwRzTW0v1k-1m5mCo8pS_t3r75vj39lTjvSRu9II244qPGSwbBvatU8WtarGPT9Our1ESg4Y3iVZMhviTrZDgnGalmU_avx3tNvslOd59X9bB1ImjZZi6vQTdwdn2r6Cyzch981RN1Vf-Mjieowcg2ixZPu22fXxwbofI5KyoQfl5hSAlHciw46-By3UznqODU",
    address: '',
    dialog: false,
    loading: false,
  rules: {
      required: (value) => !!value || "Required.",
  }
  }),
  mounted(){
    this.getText()
    this.getImages()
    this.getEvents()
    this.getBlogs()
  },
  methods:{
        placeOrder(){
                this.loading = true
            
            axios.post('https://e-dey-app-test.herokuapp.com/errands/save_vendor_errand', {
                to_name: this.name,
                to_phone: this.phone,
                to_address: this.address,
                to_lat: '',
                to_lng: '',
                description: 'Foodie NG Order',
            }, {
            headers:{
                Authorization:'Bearer '+this.token
            }
            }).then(()=>{
                this.loading = false
            alert('Rider has been requested successfully')            }).catch(()=>{
                this.loading = false
              console.log('error')
            })
            
          },
  orderBtn(){
 if (this.$refs.form.validate()) {
      this.dialog = true
    }
  },
   async navb2() {
      const sn = this;
     
        sn.loading = true;
        let url2 = "/vendorpage_third_party?id=92&type=Errands";
       await axios.get(url2)
          .then((response) => {
            sn.loading = false;
              const l = response.data;
                this.names = l.name
                this.phones= l.phone
                this.addresses= l.address        
          })
          .catch(() => {
            sn.loading = false;
            alert('error fetching your details')         
          });

    },
  }
}

</script>
