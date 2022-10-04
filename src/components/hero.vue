<template>
  <v-card  flat min-height="90vh" color="rgb(42 30 111)" tile class="overflow-hidden scrolling-techniques-4">
   
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
 

      <v-container style="max-width:1250px" fluid id="scroller">
        <div class="d-flex align-center" style="min-height:86vh">

    <v-layout wrap >

      <v-flex xs12 class="d-flex align-center" style="min-height:50vh" md6>
       <div :class="$vuetify.breakpoint.smAndDown? 'text-center mb-6 mt-12 py-6':''">
          <p :class="$vuetify.breakpoint.smAndDown? 'my-12':'mb-3'" class="text-capitalize font-weight-black jost grey--text text--lighten-2 coreupcard hidden" style="letter-spacing:3px!important">our motto</p>
        <h1 :class="$vuetify.breakpoint.smAndDown? 'my-3':'my-5'" style="color:#aaa332;letter-spacing:4px!important;font-family:Jost!important;line-height:1.2" class="coreupcard hidden krist display-3 my-4 text-uppercase font-weight-medium ">Excellence in learning and character</h1>
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
export default {
  name: 'hero',
  mounted(){
      // var video = document.getElementById('heroVideo')
      // setTimeout(() => {
      //     video.play()
          
      // }, 3000);
  },
  
  props:['text'],
  data: () => ({
 
      selectedItem: '',

  }),
};

</script>