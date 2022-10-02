<template>
  <div class="home">
      <v-card max-width="600px" flat tile class=" mx-auto d-flex justify-center align-center" min-height="90vh" width="100vw">
          <v-form ref="form" class="text-center pa-4 jost font-weight-black" onSubmit="return false">
<h4 class="mb-9 ">Rider Request Form</h4>
<v-text-field :loading="loading" v-model="address" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Address"></v-text-field>
<v-text-field :loading="loading" v-model="phone" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Phone"></v-text-field>
<v-text-field :loading="loading" v-model="name" :rules="[rules.required]" rounded outlined filled class="grey--text text--darken-2" placeholder="Name"></v-text-field>
<v-btn :loading="loading" color="orange darken-4" rounded dark x-large class="font-weight-black elevation-0 mt-9 mx-auto" @click="orderBtn()">request a rider</v-btn>
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
            
            axios.post('/errands/save_vendor_errand', {
                to_name: this.name,
                to_phone: this.phone,
                to_address: this.address,
                to_lat: '',
                to_lng: '',
                description: 'Foodie NG Order',
            },
            ).then(()=>{
                this.loading = false
                this.dialog = false
            alert('Rider has been requested successfully')            }).catch(()=>{
                this.loading = false
                this.dialog = false
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
