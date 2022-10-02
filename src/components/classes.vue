<template>
<div  style="background-color: #2a1e6f;padding:100px 0">

    <v-container fluid style="min-height:" class="" >
    <div >

     
        <p style="color:#aaa332;font-family:Jost!important" class="font-weight-regular text-center display-3   jost">Our Classes</p>
<p class="px-9 mx-auto grey--text text--lighten-1 mb-12 text-center  jost " style="max-width:600px;">We target the critical stages in the development of kids capable of effective expression of ideas and critical thinking.</p>

<v-layout style="padding-bottom:" wrap>
    <v-flex class="pa-4" v-for="n in classes" :key="n" xs12 sm4 md3>
        <v-card height="190px" :class="!$vuetify.breakpoint.smAndDown?' headline':'title'" class="overflow-hidden article" dark color="grey darken-3" style="font-family:Jost!important;border-radius:8px" >
            <v-img eager width="100%" height="120px" :src="n.img"></v-img>
            <div class="classname d-flex align-center justify-center pa-4 text-center jost  text-uppercase font-weight-medium" style="color:#f5f5f5">
                <span>
                {{n.name}}
                </span>
                </div>
            </v-card>
    </v-flex>
    <div class="mx-auto text-center pt-12" style="max-width:300px;width:100%">
        <v-btn href="https://wa.me/+234833685498?text=Hello" depressed class="mx-auto  jost text-capitalize " x-large style="border-radius:8px"  >Enroll now</v-btn>
    </div>
</v-layout> 
   </div>

    </v-container>
</div>
</template>
<script>
export default {
          props:['events'],

    data: () => ({
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
        img: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500/v1664344857/slzabbl4dg8mhfjbjmnk.jpg'
            }, 
        {name: 'Early Years',color:'',
            img: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500/v1664344650/pazrruis50nzxdnzwsmd.jpg'
        }, 
        {name: 'Primary 1-6',color:'',img: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500/v1664018660/C0042.MP4.16_29_36_17.Still001_by9vuj.jpg'}, 
        {name: 'JSS 1 & 2',color:'',img: 'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_500/v1664018660/C0044.MP4.16_30_09_20.Still001_ly0eur.jpg'}]
    })
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