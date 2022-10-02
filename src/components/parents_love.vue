<template>
<div style="background: #2a1e6f!important;padding:0px 0" class="">
    <h2 v-if="$vuetify.breakpoint.smAndDown" :style="$vuetify.breakpoint.smAndDown?'padding-top:100px':''" style="font-size:40px!important;color:#aaa332" class=" my-0 coreupcard hidden text-center    px-5 jost">Why do our parents love us?</h2>

    <v-container :class="$vuetify.breakpoint.smAndDown?'px-0':''" class="py-0" style="overflow-y:hidden">
<v-layout wrap style="position:relative;" class="d-flex align-center ">
         <div  style="position:absolute;top:0;height:40%;background: linear-gradient(to bottom, #2a1e6f 0%, rgba(0,0,0,0) 100%);
width:100%;z-index:99"></div>
         <div  style="position:absolute;bottom:0;height:40%;background: linear-gradient(to top, #2a1e6f 0%, rgba(0,0,0,0) 100%);
width:100%;z-index:99"></div>
    <v-flex class="animatediv px-3" style="position:relative;max-height:550px;overflow-y:visible" xs12 md6 :class="$vuetify.breakpoint.smAndDown?'order-2 pt-12':'py-12'">
        <div style="margin-top:500px">

       
<v-layout  wrap v-for="(n, i) in reasons" :key="i">
    <v-flex xs6 :class="i % 2 > 0 ?'order-1':'order-2'">
        
    </v-flex>
    <v-flex   xs6 :class="i % 2 > 0 ?'order-2':'order-1'">
<div :class="$vuetify.breakpoint.smAndDown? 'pa-1':'pa-2'">

    <v-card height="170px" style="position:relative;border-radius:8px" class="elevation-0 pa-3" flat :color="n.color">
       <p style="font-size:24px;position: absolute;bottom:0;width:100%" class="jost pr-6 cardtext font-weight-regular white--text">{{n.name}}</p> 
    </v-card>
</div>
    </v-flex>
</v-layout>
 </div>
    </v-flex>
    <v-flex xs12 md6 :class="$vuetify.breakpoint.smAndDown?'order-1 text-center':'text-right'">
<h2 style="color:#aaa332" v-if="$vuetify.breakpoint.smAndUp" class=" jost">Why do our parents love us?</h2>

    </v-flex>
</v-layout>
    </v-container>
</div>
</template>
<style >
.animatediv{
      animation: moveSlideshow 22s linear infinite;
  transform: translate3d(0, 0, 0);

}
@keyframes moveSlideshow {
  100% { 
    transform: translatey(-380%);  
  }
}
</style>
<script>
export default {
    data: () => ({
    reasons:[
            {
            color: '#c5c5c5',
            name: 'We focus on Academic Excellence',
            },
            {
                color: '#aaa332',
            name: 'We have small class sizes',
            },
            {
                color: '#cd4481',
            name: 'Our Teachers are Professionally Trained',
            },
            {
                color: 'teal',
                name: 'We have 2 Large outdoor play areas',
            },
            {
            color: 'green',
            name: 'Our environment is Safe, Clean  and Serene',
            },
            {
                color: 'red',
                name: 'We have a Robust After school club',
            },
            {
            color: '#aaa332',
            name: 'We offer Special Needs Education',
            },
            {
                color: 'teal',
                name: 'We keep our kids healthy',
            },
            {
            color: '#c5c5c5',
                name: "There's No Development Fee",
            }
        ]
    })
}
</script>