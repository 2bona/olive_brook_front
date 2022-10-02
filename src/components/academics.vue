<template>
<div style="min-height:" class="  align-center">

<div :style="$vuetify.breakpoint.smAndDown? 'padding-top:100px':''" style=";background-color:#ab396b;" class="d-flex  align-center">

    <v-container class="py-0 px-0" fluid>
       <v-layout wrap>
           <v-flex  xs12 :class="$vuetify.breakpoint.smAndDown? 'text-center ':''" class="pb-8 d-flex align-center justify-center" md6>
             <div class="px-4" style="max-width: 560px;">

               <p style=""  class="mb-0 jost grey--text text--lighten-2 font-weight-black overline">est</p>
               <p class="grey--text text--lighten-3 coreupcard hidden font-weight-thin" :style="$vuetify.breakpoint.smAndDown?'font-size:80px':'font-size:120px'" style="font-family:Jost!important;">2016</p>
               <p style="opacity:0.8" class=" coreupcard hidden grey--text mb-0 font-weight-medium text--lighten-2 jost">We run the most updated British based curriculum with relevant blends of the Nigerian curriculum and the Montessori method. Our teachers are professionally trained and exceptionally qualified, and use modern methods of teaching to promote critical thinking skills in our children. Our teaching and learning resources are carefully picked and recommended by experts in Britain and Nigeria.</p>
             </div>
           </v-flex>
           <v-flex  style="position:relative;overflow:hidden" class="d-flex align-center" xs12 md6> 
               <div v-if="$vuetify.breakpoint.smAndUp" style="position:absolute;background: linear-gradient(to right, #ab396b 0%, rgba(0,0,0,0) 100%);
height:100%;width:80%;left:0;z-index:99"></div>
               <div v-else style="position:absolute;background: linear-gradient(to bottom, #ab396b 0%, rgba(0,0,0,0) 100%);
height:70%;width:100%;top:0;z-index:99"></div>
               <v-avatar  style="transform: scaleX(-1);" width="100%" tile :height="$vuetify.breakpoint.smAndDown? 'auto':'100%'" 
               
               ><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000,h_1000/v1664000197/IMG_1145_yz3mzu.jpg"></v-img></v-avatar></v-flex>
       </v-layout>
    </v-container>
</div></div>

</template>