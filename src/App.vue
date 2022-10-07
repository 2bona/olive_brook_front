<template>
  <v-app style="position:relative;overflow:hidden">
 <v-app-bar   color="transparent"
     fixed flat
       style="backdrop-filter: blur(5px);"
       tile :height="$vuetify.breakpoint.smAndDown? '105':'100'"
      scroll-target="#scroller"
    >

      <v-toolbar-title><v-avatar @click="$router.push('/')" tile :width="$vuetify.breakpoint.smAndDown? '100':'100'"  height="auto">
      <v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_400/v1665065309/Olive_Brook_Juniors_International_School_a_xi8xzg.png"></v-img></v-avatar></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon dark color="grey lighten-1" @click="drawer = !drawer" class="d-md-none"></v-app-bar-nav-icon>



      <v-btn href="http://localhost:8081/#classes" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       Our Classes
      </v-btn>
      <v-btn href="http://localhost:8081/#services" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       Extra services
      </v-btn>
      <v-btn href="http://localhost:8081/#about" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       About us
      </v-btn>
      <v-btn href="http://localhost:8081/#events" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       events
      </v-btn>
      <v-btn href="http://localhost:8081/#gallery" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       gallery
      </v-btn>

      <v-btn href="http://localhost:8081/#contact" class=" jost grey--text text--lighten-1 font-weight-bold hidden-sm-and-down" text>
       contact
      </v-btn>

    </v-app-bar>  
  <div
      style="     position: fixed;
    margin: auto;
    bottom: 25px;
    width: 100%;
    z-index: 9;
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
;z-index:3;margin-bottom: 20px;"
        >
          <v-icon size="28" color="grey darken-4">mdi-chevron-up</v-icon>
        </v-btn>
      </v-scale-transition>
    </div>
    <v-main>
      <!-- <div  style="position:absolute;bottom:0;height:30%;background: linear-gradient(to top, #f5f5f5 5%, rgba(0,0,0,0) 100%);
width:100%;z-index:99"></div> -->
        <!-- <div  style="z-index:99;background: linear-gradient(0deg,rgba(0,0,0,0),#a9a2311a);left:0;top:0;height:50vh;position:absolute;width:100%"></div>
        <div style="z-index:99;background: linear-gradient(180deg,rgba(0,0,0,0),#a9a2311a);left:0;bottom:0;height:50vh;position:absolute;width:100%"></div> -->

 <v-navigation-drawer tile
      v-model="drawer"
     fixed
       dark height="100vh"
      temporary color="#2a1e6f" style=""
    >
      <v-list-item @click="$router.push('/')" class="py-3 px-0 d-flex align-center" >
        <v-list-item-avatar  class="my-2" width="160px" height="auto">
          <v-img contain eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_400/v1665065309/Olive_Brook_Juniors_International_School_a_xi8xzg.png"></v-img>
        </v-list-item-avatar>
         <span style="line-height:1.21;color:#aaa332;font-family:Jost!important;"  class="title font-weight-bold">
            <h5 style="color:#cd4481;font-size:1.34rem" class="ml-0 krist  font-weight-medium">
        <span style="color: #aaa332">O</span>
    <span>l</span>
    <span style="color: #1b1920">i</span>
    <span style="color: #762017">v</span>
    <span style="color: #3189b8">e</span>
    <span > Brook </span>
    <span style="color: #1b1920">I</span>
    <span style="color: #aaa332">n</span>
    <span>t</span>
    <span style="color: #1b1920">e</span>
    <span style="color: #1b1920">r</span>
    <span style="color: #3189b8">n</span>
    <span>a</span>
    <span style="color: #aaa332">t</span>
    <span style="color: #762017">i</span>
    <span style="color: #3189b8">o</span>
    <span style="color: #1b1920">n</span>
    <span>a</span>
    <span style="color: #3189b8">l</span>
    <span> School </span>
</h5></span>

      </v-list-item>

      <v-divider></v-divider>

      <v-list style="height: calc(100vh - 327.7px);overflow: scroll;">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.route"
        >
         

          <v-list-item-content>
            <v-list-item-title style="font-family:Jost!important" class="headline grey--text text--lighten-1 text-capitalize font-weight-medium  jost">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div class="pb-0   grey lighten-2" style="position:absolute;z-index;99;bottom:0;width:100%">

        <div  class="py-5 pa-3 ">

       <p class="d-flex footp align-center jost" style="font-size:15px">18 Patrick O. Bokkor Street, 900108, Jabi, Abuja, Nigeria.</p>


          <p class=" mt-8 text-left footp  grey--text jost mb-0" style="font-size:12px"> &copy; Copyright <span class="krist mx-1" style="color:#cd4481">
           <span style="color: #aaa332"> O</span>
    <span>l</span>
    <span style="color: #1b1920">i</span>
    <span style="color: #762017">v</span>
    <span  class="mr-1" style="color: #3189b8">e</span>
    <span  class="mr-1" > Brook </span>
    <span style="color: #1b1920"> I</span>
    <span style="color: #aaa332">n</span>
    <span>t</span>
    <span style="color: #1b1920">e</span>
    <span style="color: #1b1920">r</span>
    <span style="color: #3189b8">n</span>
    <span>a</span>
    <span style="color: #aaa332">t</span>
    <span style="color: #762017">i</span>
    <span style="color: #3189b8">o</span>
    <span style="color: #1b1920">n</span>
    <span>a</span>
    <span class="mr-1" style="color: #3189b8">l </span>
    <span> School </span></span>  2022.</p>

        </div>
              <v-layout class="d-flex justify-space-between">
          <v-flex xs4 class="text-center"> <v-btn block href="tel:+2348033685498" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-phone</v-icon></v-btn></v-flex>
          <v-flex xs4 class="text-center"> <v-btn block href="https://www.instagram.com/olivebrookjuniors/" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-instagram</v-icon></v-btn></v-flex>
          <v-flex xs4 class="text-center"> <v-btn block href="mailto:admin@olivebrookinternational.com" target="_blank" tile x-large depressed color="#aaa332"><v-icon>mdi-email</v-icon></v-btn></v-flex>
       
        </v-layout>
      </div>
      
    </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>
<style>
@font-face {
  font-family: "krist";
  src: url('./ITCKRIST.ttf');
}
.krist{
  font-family: krist!important;
}
html {
  scroll-behavior: smooth;
}
.coreeventcard.hidden{
    opacity: 0;
    filter: blur(5px);
    transform:translateY(20%);
    transition: all calc(200ms * var(--order))
}
.coreeventcard.show{
    opacity: 1;
        filter: blur(0);

    transform:translateY(0%);
}
.corestudentcard.hidden{
    opacity: 0;
    filter: blur(5px);
    transform:translateY(20%);
    transition: all calc(250ms * var(--order))
}
.corestudentcard.show{
    opacity: 1;
    filter: blur(0px);
    transform:translateY(0%);
}

.corecard.hidden{
    opacity: 0;
    scale: 0.5;
    filter: blur(5px);
    transform:translateX(-40%);
    transition: all calc(250ms * var(--order))
}
.corecard.show{
    opacity: 1;
    filter: blur(0px);
    transform:translateX(0%);
    scale: 1
}
.coreupcard.hidden{
    opacity: 0;
    filter: blur(5px);
    transform:translateY(20%);
    transition: all 550ms
}
.coreupcard.show{
    opacity: 1;
    filter: blur(0px);
    transform:translateY(0%);
}
.coreallcard.hidden{
    opacity: 0;
    filter: blur(5px);
    transform:translateX(5%);
    transition: all 1s
}
.coreallcard.show{
    opacity: 1;
    filter: blur(0px);
    transform:translateX(0%);
}

@media(prefers-reduced-motion){
    .hidden{
        transition: none
    }
}
.objimg.v-card:hover   .v-image__image{
      scale: 1.2!important;
}
.objimg.v-card   .v-image__image{
      scale: 1!important;
    transition: 2s all ease;
}
.article.v-card:hover  .v-image__image{
      background-size: 115%!important;
}
.v-card.corehov:hover{
box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)!important;
}
.article.v-card .v-image__image{
      background-size: 100%!important;
    transition: 0.9s all ease;
     filter: invert(0);
    opacity: 1;
}
.article.v-card:hover .servo .v-image__image{
      background-size: 105%!important;
    transition: 0.9s all ease;
        filter: invert(1);
    opacity: 0.6;
}
.v-application .jost{font-family: 'Jost', sans-serif!important;
}
  @media only screen and (max-width: 700px) {
 h1{
  font-size:40px!important
}
.cardtext{

  font-size:20px!important
  
}
.v-application .jost.display-3{
  font-size:36px!important
}
.v-application .krist.display-3{
  font-size:36px!important
}
  }
  .v-btn.v-size--x-large{
    transition: all 0.3s ease-in-out
  }
   .v-btn.v-size--x-large:hover{
        background-color: #4c2a8c!important;
  }
  .v-btn.v-size--x-large:hover span{
        color: #fff;
  }
  
</style>
<script>
import _ from 'lodash'

export default {
  name: 'App',
  data: () => ({
          upBtn: false,
    drawer: null,
        items: [
          { title: 'Our Classes', route: 'http://localhost:8081/#classes' },
          { title: 'Extra Services', route: 'http://localhost:8081/#services' },
          { title: 'About us', route: 'http://localhost:8081/#about' },
          { title: 'Gallery', route: 'http://localhost:8081/#gallery' },
          { title: 'Contact us', route: 'http://localhost:8081/#contact' },
          { title: 'Events', route: 'http://localhost:8081/#events' },
        ],
     
  }),
  mounted(){
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
    }, 1000),
    scrollAction() {
      const sn = this;
      if (document.documentElement.scrollTop > 1500) {
        sn.upBtn = true;
      } else {
        sn.upBtn = false;
      }
    },
  }
};

</script>
