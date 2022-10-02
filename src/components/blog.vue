<template>
    <div style="position:relative;background-color:rgb(170,163,50);padding:100px 0" >
         <div style="position:absolute;z-index:0;    opacity: 0.07;
height:100%;width:100%;    top: 0;">
            <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664344702/spdnlbygudouqgz0vxv6.jpg"></v-img></v-avatar>
        </div>
    <v-container 
    class="" >
    <div>

        <h1 style="color:#fefefe;font-family:Jost!important" class="coreupcard hidden font-weight-regular text-center display-3 my-0 jost">Olive Blog</h1>

  <v-layout wrap class="mt-12 coreupcard hidden">
<v-flex xs12 v-for="(n, i) in blogs" :key="i" class="px-2 py-4" sm6 md4>
        <v-card href="" hover width="100%" style="overflow:hidden" class="article " :style="'--order:'+(i+1)"  color="grey lighten-4">
            <v-avatar width="100%" tile height="200"><v-img eager :src="n.image"></v-img></v-avatar>
            <div class="px-3 pt-3 pb-0 justify-space-between align-center d-flex">

            <p style="width:calc(100%-30px); font-family:Jost!important" class="title text-truncate text-capitalize font-weight-bold mb-0"> {{n.title}}</p>
            <p style="font-family:Jost!important;    width: 64px;
    text-align: right;" class="dated caption font-weight-black text-capitalize purple--text text--lighten-4 mb-0">{{n.created_at | filterDate}}</p>
            </div>

            <p style="font-family:Jost!important"  class="px-3 pb-0 pt-1 grey--text text--darken-1 mb-0 body-2">{{n.content | desc}}</p>
            <p class="px-3 author font-italic jost pb-3 pt-2  mb-0 text--lighten-2 font-weight-bold grey--text">- {{n.author}}</p>
        </v-card>
</v-flex>
  </v-layout> 

  <div class="text-center">

  <v-btn x-large color="" target="_blank" href="www.medium.com" depressed class="jost text-capitalize mt-8 mx-auto">see more</v-btn>
  </div>    
   </div>

    </v-container>
    </div>
</template>
<script>
export default {
          props:['blogs'],

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
    background-color:#2a1e6f !important
}
.v-card.article:hover .title{
    color:#ff5aa3 !important
}
.v-card.article:hover .classname{
    color:#ff5aa3 !important
}
.v-card.article:hover .author{
    color:white !important;
    opacity: 0.6;
}
.v-card.article:hover .dated{
    color:#fff !important;
    opacity:0.7;
}
.v-card.article:hover .body-2{
    color:#fff !important;
    opacity:0.7;
}
.v-card.article:hover .datediv{
    background-color:#fff !important
}
.v-card.article:hover .dateday{
    color:#4c2a8c !important
}
</style>