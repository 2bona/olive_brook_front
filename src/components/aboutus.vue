<template>
<div style="padding:150px 0"  class="grey lighten-3">

    <v-container class="" >
        <div style="height:;display:flex" class="justify-space-between">

        <v-card outlined color="grey lighten-2" flat style="border-radius:8px!important;margin:100px 0 0 0" 
        class="objimg object overflow-hidden" width="32%" :height="$vuetify.breakpoint.smAndDown? '300px':'600px'" >
           <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018684/IMG_1119_lebgni.jpg"></v-img></v-avatar>
         
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0"  :class="$vuetify.breakpoint.smAndDown? 'pa-2':'px-6 py-5 pr-0'" :style="$vuetify.breakpoint.smAndDown? 'font-size:1.04rem!important':''" 
        style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Academic Excellence</h6></v-card>
        <v-card  class="objimg overflow-hidden object2"  style="border-radius:8px!important" width="32%" img="" :height="$vuetify.breakpoint.smAndDown? '300px':'370px'" outlined color="grey lighten-3" flat>
                       <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018688/IMG_1115_ob0ssh.jpg"></v-img></v-avatar>

          
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0"  :class="$vuetify.breakpoint.smAndDown? 'pa-1':'px-6 py-5 pr-0'" :style="$vuetify.breakpoint.smAndDown? 'font-size:0.99rem!important':''" style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Independepent Thought</h6>
        </v-card>
        <v-card class="objimg overflow-hidden object3"  style="border-radius:8px!important;margin:100px 0 0 0" width="32%" img="" :height="$vuetify.breakpoint.smAndDown? '230px':'430px'" outlined color="grey lighten-3" flat>
                                 <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018679/IMG_1096_jfanbd.jpg"></v-img></v-avatar>
     
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0"  :class="$vuetify.breakpoint.smAndDown? 'pa-2':'px-6 py-5 pr-0'" :style="$vuetify.breakpoint.smAndDown? 'font-size:1.04rem!important':''" style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Every Child's
Success</h6>
        </v-card>
        </div>
        <div class="py-8">

        <h1 style="color:#aaa332" class="text-center coreupcard hidden my-0 mb-4 jost">Our Philosophy</h1>
       <p class="font-italic jost text-center coreupcard hidden mx-auto" style="max-width:500px;font-size:19px ">
Our mission is simply to Instill Excellence in Learning & Character in Every Child 
</p> 
        </div>
  <div style=";display:flex" class="justify-space-between align-end">

        <v-card class="objimg overflow-hidden object3"  style="border-radius:8px!important;margin:0 0 100px 0" width="32%" img="" :height="$vuetify.breakpoint.smAndDown? '290px':'500px'" outlined color="grey lighten-3" flat >
                         <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018674/IMG_1065_odpvfh.jpg"></v-img></v-avatar>

                
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0" :class="$vuetify.breakpoint.smAndDown? 'pa-2':'px-6 py-5 pr-0'" :style="$vuetify.breakpoint.smAndDown? 'font-size:1.04rem!important':''" style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Excellence in Character</h6>
        </v-card>
        <v-card class="objimg overflow-hidden object2"  style="border-radius:8px!important" width="32%"  :height="$vuetify.breakpoint.smAndDown? '250px':'400px'" outlined color="grey lighten-3" flat>
           <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018711/IMG_1193_rclokc.jpg"></v-img></v-avatar>

      
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0"  :class="$vuetify.breakpoint.smAndDown? 'pa-2':'px-6 py-5 pr-0'" 
        :style="$vuetify.breakpoint.smAndDown? 'font-size:1.04rem!important':''" style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Respect</h6>
        </v-card>
        <v-card class="objimg overflow-hidden object"  style="border-radius:8px!important;margin:0 0 100px 0" width="32%"  :height="$vuetify.breakpoint.smAndDown? '300px':'650px'" outlined color="grey lighten-3" flat>
        <v-avatar tile  width="100%" height="100%"><v-img  src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018660/C0044.MP4.16_30_09_20.Still001_ly0eur.jpg"></v-img></v-avatar>
     
        <h6 class="jost grey lighten-2 text--darken-3 font-weight- grey--text mb-0"  :class="$vuetify.breakpoint.smAndDown? 'pa-2':'px-6 py-5 pr-0'"
         :style="$vuetify.breakpoint.smAndDown? 'font-size:1.04rem!important':''"
          style="    width: 100%;    text-shadow: none;

    position: absolute;z-index:9999;
    bottom: 0;">Critical
Thinking</h6>
        </v-card>
        </div>
    </v-container>
</div>
</template>

<style>
.object {
  animation: MoveUpDown 8s linear infinite;

}
.object2 {
  animation: MoveUpDown2 5.5s linear infinite;

}
.object3 {
  animation: MoveUpDown3 12s linear infinite;

}


@keyframes MoveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
}

@keyframes MoveUpDown2 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}
@keyframes MoveUpDown3 {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
<script>
export default {
    data: () => ({
        colors: [
            'grey',
            'red',
            'teal',
            'purple darken-4',
            'green',
            'pink',
        ]
    })
}
</script>