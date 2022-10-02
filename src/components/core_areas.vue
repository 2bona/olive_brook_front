<template>
    <div class="" style="background-color: #ab396b ; padding:90px 0">
       <v-container>
           <v-card color="transparent" flat class=" ">

           <h2 style="color:#f5f5f5;font-family:Jost!important" class="jost display-3 font-weight-regular mt-0 mb-5 text-center coreupcard hidden">Core areas of interest</h2>
           <p :class="$vuetify.breakpoint.smAndDown? 'px-3':'px-8'" class=" mx-auto grey--text text--lighten-3 text-center coreupcard hidden jost " style="max-width:600px">We focus on these aspects of human development in accordance with the updated British based curriculum. </p>

           <v-layout wrap class="mt-12">
               <v-flex :class="$vuetify.breakpoint.smAndDown? 'pa-2':'pa-3'" xs6 sm3 v-for="(n,i) in areas" :key="i">
                   <v-card  :height="$vuetify.breakpoint.smAndDown? '132':''" :style="'--order:'+i" flat style="border-radius:8px"  :class="$vuetify.breakpoint.smAndDown? 'pa-2':'pa-3'" class=" corecard corehov hidden  grey lighten-4">
                   <v-avatar size="40" style="border-radius:8px!important" tile  :color="n.color">
                       <span  class="title text-uppercase white--text">{{n.name[0]}}</span>
                   </v-avatar>
                   <p 
                   :class="$vuetify.breakpoint.smAndDown? 'body-2':'title'"
                    class="mt-2 mb-0 title font-weight-regular text-uppercase " style="  font-family: 'Jost', sans-serif!important">  {{n.name}}</p>
                   <p style="font-size:12px!important" class="mb-0 jost grey--text text--darken-2 ">{{n.desc}}</p>
                       
                   </v-card>
               </v-flex>
           </v-layout>
           </v-card>
       </v-container> 
    </div>
</template>
<style>
/* .corecard{
    transition-delay: 

} */


</style>
<script>
export default {
    data: () => ({
        colors: [
            'red',
            'teal',
            'purple darken-4',
            'green',
            'pink',
        ],
        areas:[
            {
            color: 'purple darken-4',
            name: 'eyfs',
            desc: 'Early Years Foundation Stage Framework'
            },
            {
            color: 'red',
            name: 'English Language',
            desc: 'Creative Writing | Literature'
            },
            {
            color: 'teal',
            name: 'Mathematics',
            desc: 'Mental Maths | Logical Reasoning'
            },
            {
            color: '#aaa332',
            name: 'Science',
            desc: 'Basic Science'
            },
            {
            color: 'green',
            name: 'Geography',
            desc: 'Nigerian Geography | Foreign Geography'
            },
            {
            color: '#aaa332',
            name: 'PHSE',
            desc: 'Nigerian History | Foreign History'
            },
            {
            color: 'red',
            name: 'History',
            desc: 'Early Years Foundation Stage Framework'
            },
            {
                color: 'teal',
                name: 'Art',
            desc: 'Fine Art | Design'
            },
            {
            color: 'purple darken-4',
                name: 'ICT',
            desc: 'Information & Communication Technology'
            },
            {
                color: 'pink',
            name: 'Languages',
            desc: 'Nigerian Languages | Foreign Languages'
            },
            {
                color: 'grey',
            name: 'P.E.',
            desc: 'Physical Health Education'
            },
        ]
    })
}
</script>