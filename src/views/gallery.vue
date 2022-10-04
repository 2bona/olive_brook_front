<template>
  <div style="padding-top:100px" class="gallery">
        <p style="  color:#aaa332;  font-family: 'Jost', sans-serif!important;
" class=" display-3 mb-3 jost font-weight-regular text-center ">Gallery</p> 
   
      <div v-if="loading" class="d-flex justify-center align-center py-">
    <v-progress-circular indeterminate color="#2a1e6f"></v-progress-circular>


      </div>
<v-container>
      <v-layout wrap class="mt-6 ">
<v-flex xs12 v-for="(n, i) in images" :key="i" class="px-2 py-4" sm6 md3>
        <v-card @click="galleryBtn(n)" hover width="100%" style="overflow:hidden" class="article " :style="'--order:'+(i+1)"  color="grey lighten-4">
            <v-avatar width="100%" tile height="200"><v-img  :alt="n.description" :src="n.image"></v-img></v-avatar>
            <div class="px-3 pt-3 pb-0 justify-space-between align-center d-flex">

            <p style="width:calc(100%-30px); font-family:Jost!important" class="title text-truncate text-capitalize font-weight-bold "> {{n.description}}</p>
          </div>
 </v-card>
</v-flex>
  </v-layout> 
</v-container>
    <contact id="contact"/>

    <footers />

    <v-dialog
      
      max-height="500"
      style="position:relative;"
      max-width="600"
      v-model="showdialog"
    >
        <v-slide-y-reverse-transition>

      <v-card
        ref="scrolldiv"
        style="overflow:scroll;position:relative;"
        max-width="650"
        max-height="87vh"
        flat
        class=" mx-auto"
      >
        <div
          class=" pa-3  text-right"
          style="
      background-color: #ffffffb0 !important;
    backdrop-filter: blur(2px);
  position:sticky;z-index:99; width:100%;left:0;top:0"
        >
          <v-btn icon @click="showdialog = false" right><v-icon>mdi-close</v-icon></v-btn>
        </div>
        <div class="px-3 jost" style="  position:relative;padding-bottom:90px">
          <v-img
            max-width="500px"
            width="100%" height="auto"
            max-height="90vh"
            :src="selectedItem.image"
            class="elevation-2  mx-auto"
          >
          </v-img>
          <div class="px-1">
            <p
              style="font-size:1.4rem;line-height:1.2"
              id="mont"
              xs12
              class="text-capitalize text-center grey--text mt-4 mb-0 text-wrap text--darken-2 font-weight-medium"
            >
              {{ selectedItem.description }}
            </p>
          

   
            
          </div>
        </div>
      <div
        style="position:sticky;width:100%;
      z-index: 999;
    bottom: 0px;"
      >
        <v-slide-y-reverse-transition>
          <v-layout
            v-if="showbtns"
            wrap
            style="    background-color: #ffffffb0 !important;
    backdrop-filter: blur(2px);width: 100%;margin: auto;
  "
            class=" px-3 py-4"
          >
            <v-flex xs6 class="px-2">
              <v-btn
                :disabled="images.length === 1"
                @click="picBtn(0)"
                block
                
                x-large
                id="mont"
                class="grey--text jost text--darken-2 mx-auto elevation-2"
                color="grey lighten-5"
                >prev</v-btn
              >
            </v-flex>
            <v-flex xs6 class="px-2">
              <v-btn
                :disabled="images.length === 1"
                @click="picBtn(1)"
                block
                
                x-large
                id="mont"
                class="grey--text jost text--darken-2 mx-auto elevation-2"
                color="grey lighten-5"
                >next</v-btn
              >
            </v-flex>
          </v-layout>
        </v-slide-y-reverse-transition>
      </div>
      </v-card>
        </v-slide-y-reverse-transition>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import footers from '@/components/footer.vue'
import contact from '@/components/contact.vue'


export default {
  name: 'Gallery',
  components: {
    contact,
    footers
  },
  data: () => ({
    images: [],
    blogs: [],
    loading: false,
    events: [],
    eventdates: [],
    text: {},
     selectedItem: '',
        item_no: 0,
      showdialog: false,
      showbtns: false,
  }),
   computed: {
    max_no(){
      return this.images.length - 1
    },
    },
  mounted(){
    this.getImages()
    this.observe()

  },
  methods:{
      observe(){
      const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry)
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('show');          
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> {
      observer.observe(el);
        el.addEventListener('animationend', function () {
          el.classList.remove('show');
        });
        });
},
        getImages(){
            this.loading = true
            axios.get('/gallery').then((res)=>{
                this.images = res.data.success.gallery
            this.loading = false
            }).catch(()=>{
               alert('an error occured')
            this.loading = false
            })
          },

    galleryBtn(n){
        this.selectedItem = n;
        this.showdialog = true;
        setTimeout(() => {
          this.showbtns = true;
        }, 500);
},

     picBtn(x) {
      const sn = this;
      if (x) {
        if (sn.max_no === sn.item_no) {
          sn.item_no = 0;
          let n = sn.images[sn.item_no];
          sn.selectedItem = n;
        } else {
          sn.item_no++;
          let n = sn.images[sn.item_no];
          sn.selectedItem = n;
        }
      } else {
        if (sn.item_no === 0) {
          sn.item_no = sn.max_no;
          let n = sn.images[sn.item_no];
          sn.selectedItem = n;
        } else {
          sn.item_no--;
          let n = sn.images[sn.item_no];
          sn.selectedItem = n;
        }
      }
            console.log(sn.selectedItem)
                  //
    },
  }
}

</script>
