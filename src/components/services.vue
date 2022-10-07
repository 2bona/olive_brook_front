<template>
<div id="scroller" style="background-color: #f5f5f5;padding:100px 0">

    <v-container fluid style="min-height:" class="" >
    <div >

        <p style="color:#aaa332;font-family:Jost!important" class="font-weight-regular text-center display-3  jost">Our Services</p>
<p class="px-9 mx-auto grey--text text--darken-1 text-center  jost " style="max-width:600px">We offer additional extracurricular activities and lessons in our purposeful afterschool and holiday programmes.</p>

  <v-layout style="max-width:1100px" class="mt-12 mx-auto coreupcard hidden" wrap>
<v-flex xs12 v-for="(n, i) in services" :key="i"  class="px-3  py-4" sm12 md4>
        <v-card @click="select(n, i)" hover class="pa-3 article mx-auto text-center" :style="'--order:'+(i+1)" width="310px"  height="289" style="overflow:hidden;border-radius:8px"  color="white lighten-4">
            <v-avatar class="mb-4 servo" width="150px" tile height="150"><v-img  contain :src="n.image"></v-img></v-avatar>
            <p style=" font-family:Jost!important" class="title   text-capitalize font-weight-bold"> {{n.title}}</p>
            <!-- <p class="text-capitalize grey--text jost text--darken-1 dated">{{n.description}}</p> -->
            <p class="font-weight-black  jost grey--text author">{{n.time}}</p>
            <!-- <p class="jost grey--text author">{{n.additional_desc}}</p> -->
        </v-card>
</v-flex>
  </v-layout> 

     
   </div>
   <v-dialog max-width="1200px" v-model="dialog">
       <v-sheet  max-width="1200px">
               <div
          class=" pa-3  text-right"
          style="
      background-color: #ffffffb0 !important;
    backdrop-filter: blur(2px);
  position:sticky;z-index:99; width:100%;left:0;top:0"
        >
          <v-btn icon @click="dialog = false" right><v-icon>mdi-close</v-icon></v-btn>
        </div>
           <v-layout wrap class="d-flex pa-5 align-center">
<v-flex xs12 md6>
    <v-carousel
      continuous
      cycle v-if="dialog"
       show-arrows
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      max-height="500" height="100%"
    >
      <v-carousel-item
       v-for="(n, i) in imgs[selectedService.ind].imgs2" :key="i"
      >
        <v-sheet
          height="100%"
          tile color="transparent"
        >
     <v-img height="100%" width="100%" contain :src="n"></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
</v-flex>
<v-flex xs12 md6>
    <v-sheet :class="$vuetify.breakpoint.smAndDown? 'text-center':''"  class="pa-6">

         <v-avatar class="mb-4 servo" width="80px" tile height="80"><v-img  contain :src="selectedService.image"></v-img></v-avatar>
            <p style=" font-family:Jost!important" class="title   text-capitalize font-weight-bold"> {{selectedService.title}}</p>
            <p class="text-capitalize grey--text jost text--darken-1 dated">{{selectedService.description}}</p>
            <p class="font-weight-black  jost grey--text author">{{selectedService.time}}</p>
            <p class="jost grey--text author">{{selectedService.additional_desc}}</p>
    </v-sheet>
       

</v-flex>
           </v-layout>
       </v-sheet>
   </v-dialog>

    </v-container>
</div>
</template>
<script>
export default {
          props:['events'],

    data: () => ({
        dialog:false,
        selectedService: {},
        imgs:[
            {imgs2:['https://res.cloudinary.com/crushcontest-com/image/upload/v1664358907/ie8b92kcoqhu2ygjs6if.jpg','https://res.cloudinary.com/crushcontest-com/image/upload/v1664358771/mhivbptq1gjz4ftgm7yu.jpg']},
            {imgs2:['https://res.cloudinary.com/crushcontest-com/image/upload/v1664344650/pazrruis50nzxdnzwsmd.jpg', 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664344739/x58ozunligzcvnfbdfvx.jpg']},
            {imgs2:['https://res.cloudinary.com/crushcontest-com/image/upload/v1664018701/IMG_1145_bia25o.jpg', 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664358771/mhivbptq1gjz4ftgm7yu.jpg']},
        ],
        services: [
            {
                title: 'Purposeful After School',
                time:'2:00 pm – 5:30 pm | 3 months – 11 years',
                additional_desc: 'On Saturdays, we offer sports lessons from 10:00am –1:00pm',
                description: 'swimming - ballet - tae kwon do - one-on-one lessons - music lessons - debate club - arts & craft - creative writing  - Nigerian Languages - French - Spanish - Arabic',
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664438886/kisspng-bay-laurel-bay-leaf-laurel-wreath-clip-art-olive-wreath-cliparts-5a777bfa2dc853.9444978815177799621875_zmefpk.png',
            },
            {
                title: 'Engaging Holiday Programme',
                time:'July - August | 3 months – 11 years',
                additional_desc: 'Lunch Included',
                description: 'excursions - ballet - fairs - critical thinking - beadmaking - music lessons - debate club - arts & craft - creative writing - Nigerian Languages - French - Spanish - Arabic - design - sports clubs - others',
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664436354/kisspng-olive-oil-mappa-degli-alberi-monumentali-di-sicilia-data-map-5d3fd26e2611f4.2707221315644637261559_ioiexq.png',
            },
            {
                title: 'Home Away From Home Care​',
                time:'24 / 7',
                additional_desc: '',
                description: 'We provide room and board with food and meticulous attention to children over the weekend while parents are otherwise occupied or away for short holidays and business trips.',
                image: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664441031/kisspng-portable-network-graphics-vector-graphics-olive-br-hanukkah-olive-plant-icon-transparent-png-amp-5c8051d3e736b1.4957398815519134279471_cp173g.png',
            },
        ],
        colors: [
            'grey',
            'red',
            'teal',
            'purple darken-4',
            'green',
            'pink',
        ],
        classes:[
            {name:'Creche',color:'',
        img: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664018700/IMG_1072_j2l3xn.jpg'
            }, 
        {name: 'Early Years',color:'',
            img: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500/v1664344650/pazrruis50nzxdnzwsmd.jpg'
        }, 
        {name: 'Primary 1-6',color:'',img: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664018660/C0042.MP4.16_29_36_17.Still001_by9vuj.jpg'}, 
        {name: 'JSS 1 & 2',color:'',img: 'https://res.cloudinary.com/crushcontest-com/image/upload/v1664018660/C0044.MP4.16_30_09_20.Still001_ly0eur.jpg'}]
    }),
    methods:{
        select(n, i){
            n.ind = i
            this.selectedService = n
            this.dialog = true
        }
    }
}
</script>
<style>
.v-card.article{
    transition: all 0.3s ease-in-out
}
.v-card.article .title, .datediv{
    transition: all 0.3s ease-in-out
}
.v-card.article:hover{
    background-color:#4c2a8c !important
}
.v-card.article:hover .title{
    color:#ff5aa3 !important
}
.v-card.article:hover .datediv{
    background-color:#fff !important
}
.v-card.article:hover .dateday{
    color:#4c2a8c !important
}
</style>