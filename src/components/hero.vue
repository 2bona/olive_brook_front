<template>
  <v-card  flat min-height="80vh" color="rgb(42 30 111)" tile class="overflow-hidden scrolling-techniques-4">
     <div
      style="     position: fixed;
    margin: auto;
    bottom: 45px;
    width: 100%;
    z-index: 99999;
"    >
  
      <v-scale-transition origin="center center">
        <v-btn
          absolute
          @click="
            $vuetify.goTo(0, { easing: 'easeInQuad', offset: 0, duration: 250 })
          "
          fab
          bottom
          right
          v-if="upBtn"
          color="white"
          class="elevation-24"
          :size="'20px'"
          style="background: linear-gradient(315deg, #ffffff, #e6e6e6);
;z-index:999;margin-bottom: 60px;"
        >
          <v-icon size="28" color="grey darken-4">mdi-chevron-up</v-icon>
        </v-btn>
      </v-scale-transition>
    </div>
   <div v-if="true" style="position:absolute;z-index:0;    opacity: 0.3;
height:100%;width:100%;">
     <video  id="heroVideo"
     :style="$vuetify.breakpoint.smAndDown? ' width: 1365px ':' width: 100%'"
      style="
 position: absolute;
  bottom: 0;scale:1.2;
 
height: 100%;
    z-index: 1;
" autoplay muted   loop >
<source src="https://res.cloudinary.com/crushcontest-com/video/upload/v1664322705/VID-20220927-WA0001_b4xkns.mp4">
</video>
            <!-- <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"></v-img></v-avatar> -->
        </div>
    <v-container>

      <!-- <div  style="position:absolute;bottom:0;height:30%;background: linear-gradient(to top, #f5f5f5 5%, rgba(0,0,0,0) 100%);
width:100%;z-index:99"></div> -->
        <!-- <div  style="z-index:99;background: linear-gradient(0deg,rgba(0,0,0,0),#a9a2311a);left:0;top:0;height:50vh;position:absolute;width:100%"></div>
        <div style="z-index:99;background: linear-gradient(180deg,rgba(0,0,0,0),#a9a2311a);left:0;bottom:0;height:50vh;position:absolute;width:100%"></div> -->
 <v-app-bar   :color="!upBtn? 'transparent':'rgb(42 30 111 / 44%)'"
      elevate-on-scroll
      fixed style="backdrop-filter: blur(5px);"
       tile :height="$vuetify.breakpoint.smAndDown? '105':'100'"
      scroll-target="#scroller"
    >

      <v-toolbar-title><v-avatar tile :width="$vuetify.breakpoint.smAndDown? '100':'100'"  height="auto"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/v1663335049/hmwlkskroxqkoivogpyr.webp"></v-img></v-avatar></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon dark color="" @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>



      <v-btn href="#services" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       our services
      </v-btn>
      <v-btn href="#about" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       About us
      </v-btn>
      <v-btn href="#events" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       events
      </v-btn>
      <v-btn href="#gallery" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       gallery
      </v-btn>

      <v-btn href="#contact" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       contact
      </v-btn>

    </v-app-bar>  
  </v-container>

 <v-navigation-drawer tile
      v-model="drawer"
     
      absolute dark height="100vh"
      temporary color="#2a1e6f" style=""
    >
      <v-list-item class="py-3 px-0 d-flex align-center" >
        <v-list-item-avatar class="my-5" width="130px" height="auto">
          <v-img contain eager src="https://res.cloudinary.com/crushcontest-com/image/upload/v1663335049/hmwlkskroxqkoivogpyr.webp"></v-img>
        </v-list-item-avatar> <span style="line-height:1.11;color:#aaa332;font-family:Jost!important;"  class="title font-weight-bold"> Olive Brook Intl. School.</span>

      </v-list-item>

      <v-divider></v-divider>

      <v-list >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.route"
        >
         

          <v-list-item-content>
            <v-list-item-title style="font-family:Jost!important" class="headline grey--text text--lighten-1 text-capitalize font-weight-bold  jost">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="pb-0   grey lighten-2" style="position:absolute;z-index;99;bottom:0;width:100%">

        <div  class="py-5 pa-3 ">

       <p class="d-flex footp align-center jost" style="font-size:15px">18 Patrick O. Bokkor Street, 900108, Jabi, Abuja, Nigeria.</p>


       <p class="d-flex footp align-center grey--text text--darken-2 jost mb-0" style="font-size:12px"> &copy; Copyright Olive Brook International 2022.</p>
        </div>
              <v-layout class="d-flex justify-space-between">
          <v-flex xs4 class="text-center"> <v-btn block href="tel:+2348033685498" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-phone</v-icon></v-btn></v-flex>
          <v-flex xs4 class="text-center"> <v-btn block href="https://www.instagram.com/olivebrookjuniors/" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-instagram</v-icon></v-btn></v-flex>
          <v-flex xs4 class="text-center"> <v-btn block href="mailto:admin@olivebrookinternational.com" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-email</v-icon></v-btn></v-flex>
       
        </v-layout>
      </div>
      
    </v-navigation-drawer>
      <v-container style="max-width:1250px" fluid id="scroller">
        <div class="d-flex align-center" style="min-height:86vh">

    <v-layout wrap >

      <v-flex xs12 class="d-flex align-center" style="min-height:50vh" md6>
       <div :class="$vuetify.breakpoint.smAndDown? 'text-center my-6 py-6':''">
          <p :class="$vuetify.breakpoint.smAndDown? 'my-6':'mb-3'" class="text-capitalize font-weight-black jost grey--text text--lighten-2 coreupcard hidden" style="letter-spacing:3px!important">our motto</p>
        <h1 :class="$vuetify.breakpoint.smAndDown? 'my-3':'my-5'" style="color:#aaa332;letter-spacing:4px!important;font-family:Jost!important;line-height:1.2" class="coreupcard hidden jost display-3 my-4 text-uppercase font-weight-medium ">Excellence in learning and character</h1>
         <v-btn href="tel:+2348033685498" icon target="_blank" x-large class="mx-1 coreupcard hidden"><v-icon color="blue">mdi-phone</v-icon></v-btn>
         <v-btn href="https://wa.me/+234833685498?text=Hello" icon target="_blank" x-large class="mx-1 coreupcard hidden"><v-icon color="green">mdi-whatsapp</v-icon></v-btn>
         </div>
      </v-flex>
      <v-flex class="d-flex align-center " :class="$vuetify.breakpoint.smAndDown? 'pb-12':''"  xs12 md6>
        <v-card style="scale:1.0;border-radius:8px;position:relative" :width="$vuetify.breakpoint.smAndDown? '336px':'580px'" :height="$vuetify.breakpoint.smAndDown? '191px':'328px'"  class="coreupcard overflow-hidden hidden d-flex mx-auto  align-center justify-center elevation-0">
           <video
           poster="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664318468/C0042.MP4.16_29_36_17.Still001_1_br9fzu.jpg"
            id="heroVideo" style="
 position: absolute;
  right: 0;
  bottom: 0;
  width: 100%; 
height: 100%;
    z-index: 1;
"   controls playsinline  >
<source src="https://res.cloudinary.com/crushcontest-com/video/upload/v1664322705/VID-20220927-WA0001_b4xkns.mp4">
</video>

<!-- <v-btn style="z-index:99" color="#2a1e6f"  class="elevation-20 pa-8" fab dark><v-icon size="29">mdi-play</v-icon></v-btn> -->
        </v-card>
      </v-flex>
     </v-layout> 
    </div>
      </v-container>
<div style="width:auto;position:relative;background:#aaa332;height:52px;border-radius:0px" class="elevation-0 d-flex overflow-hidden mb-0">
    <marquee scrollamount="5" behavior="scroll" direction="left">
<div style="width: max-content;
    box-sizing: content-box;
    height: 100%;"  class="">

 <div style="height:100%"  class=" px-12 d-flex align-center justify-content-around">

   <p v-if="text.id" style="line-height:1.2" class="jost mb-0 px-3 pa-4 font-weight-bold white--text">{{text.message}}</p>
   <v-btn v-if="text.id" target="_blank" :href="text.message_button_link" style="border-radius:8px;color:#aaa332" class="font-weight-bold mr-4" depressed color="#fefefe" > {{text.message_button_description}}</v-btn>
 <div style="height:100%" class=" d-flex mx-12 align-center justify-content-around">  
   <p style="line-height:1.2" class="jost mb-0 px-3 pa-4 font-weight-bold white--text">Admission curently on going, call us to enrol your child now</p>
   <v-btn href="tel:+6494461709" target="_blank" style="border-radius:8px;color:#aaa332" class="font-weight-bold mr-4" depressed color="#fefefe" ><v-icon size="17" color="#aaa332" class="mr-2">mdi-phone</v-icon> call now</v-btn>
</div>
</div></div>
      </marquee>

</div>
  
<!-- // pink #cd4481 -->
<!-- olive #aaa332 -->
<!-- purple #2a1e6f -->
    </v-card>
</template>
<style>
  .marquee {
    bottom: 0;
    width: auto;
    overflow: hidden;
    position: relative;
    white-space: nowrap;
    animation: marquee 30s linear infinite;
  }

@keyframes marquee {
  0% {
    left: 30%;
  }
  100% {
    left: -100%
  }
}
</style>
<script>
import _ from 'lodash';
export default {
  name: 'hero',
  mounted(){
      var video = document.getElementById('heroVideo')
      setTimeout(() => {
          video.play()
          
      }, 3000);
 this.navb2()
  },
  methods:{
    async navb2() {
  
      window.onscroll = () => {
        this.scrollActionFn(this.scrollAction);
      };
    },
    scrollActionFn: _.debounce((scrollAction) => {
      scrollAction();
    }, 300),
    scrollAction() {
      const sn = this;
      if (document.documentElement.scrollTop > 1500) {
        sn.upBtn = true;
      } else {
        sn.upBtn = false;
      }
    }
  },
  props:['text'],
  data: () => ({
    upBtn: false,
    drawer: null,
        items: [
          { title: 'Our Services', route: '#services' },
          { title: 'About us', route: '#about' },
          { title: 'Gallery', route: '#gallery' },
          { title: 'Contact us', route: '#contact' },
          { title: 'Events', route: '#events' },
        ],
      selectedItem: '',

  }),
};

</script>