<template>
<div  style="background-color: #ab396b;padding:100px 0">

    <v-container style="min-height:" class="" >
    <div >

     
        <h1 style="color:#fff;font-family:Jost!important" class="font-weight-regular text-center display-3 my-0 jost">Olive Events</h1>

  <v-layout class="mt-12  coreupcard hidden" wrap>
<v-flex xs12 v-for="(n, i) in events" :key="i"  class="px-2  py-4" sm6 md4>
        <v-card hover class="article" :style="'--order:'+(i+1)" width="100%" style="overflow:hidden"  color="grey lighten-4">
            <v-avatar width="100%" tile height="200"><v-img :src="n.image"></v-img></v-avatar>
            <div class="pl-0 pr-3 pt-0 pb-0 justify-space-between align-center d-flex">
            <div style="    width: 145px;background-color:#aaa332" class="pa-2 datediv ">
            <p style="opacity:0.7;font-family:Jost!important;color:#aaa332" class="overline font-weight-black grey--text text-left text--lighten-1 mb-0">{{JSON.parse(n.date)[0] | getDay}}</p>
            <p style="font-family:Jost!important" class="headline font-weight-black dateday white--text text-left text--darken-4 mb-0">{{JSON.parse(n.date)[0] | filterDate}}</p>
            </div>

            <p style="width:calc(100%-30px); font-family:Jost!important" class="title text-wrap pt-4 text-right pl-2 text-capitalize font-weight-bold mb-0"> {{n.title}}</p>

            </div>
        </v-card>
</v-flex>
  </v-layout> 

  <div class="text-center">

  <v-btn target="_blank" href="https://www.eventbrite.com/" x-large color="" depressed class="jost text-capitalize mt-8 mx-auto">see more</v-btn>
  </div>    
   </div>

    </v-container>
</div>
</template>
<script>
export default {
          props:['events'],

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