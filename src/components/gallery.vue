<template>
<div style="position:relative;background:#2a1e6f;padding:100px 0">
    <div style="position:absolute;z-index:0;    opacity: 0.07;
height:100%;width:100%;    top: 0;">
            <v-avatar  tile width="100%" height="100%"><v-img eager src="https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_1000/v1664344349/rjka9kohsnm1tj5ahbia.jpg"></v-img></v-avatar>
        </div>
<v-container class="p" fuid>
         <!-- <div style="position: relative;width:100%" class="py-12 my-8">
            <div style="
width: 100%;height: 100%;top: 0;position: ;display: flex;align-items: center;
">
                <v-avatar width="216px" class="mx-auto mb-0" height="48px" tile><v-img src="https://res.cloudinary.com/crushcontest-com/image/upload/v1663763953/pattern_circles-2_1_2_0-0_0_1__ffffff00_4d2a8d_aaa231_k9nh0m.png"></v-img></v-avatar>
            </div>
    </div> -->
    <v-card flat color="transparent" class=" ">
     <p style="  color:#aaa332;  font-family: 'Jost', sans-serif!important;
" class=" display-3  jost font-weight-regular text-center "> Olive Brook in Pictures</p> 
<p class="px-9 mx-auto grey--text text--lighten-3 text-center  jost " style="max-width:600px">A picture they say is worth a thousand words, swipe through our gallery to live in our olive moments.</p>
    <div class="pt-0 jost  font-weight-bold mt-4 ">
    <div  class=" column" style="text-align: center;z-index: 1;    z-index: 1;
        height: ;">
  <div  class="carousel">

  <div v-for="(n, i) in images" :key="i" class="carousel-item"  >
  <v-img contain height="auto" style="width: 305px;height:241px;border-radius: 4px;
    box-shadow: -2px 0px 19px -10px black;" class="grey lighten-3 heroimage" :src="n.image" :alt="n.description"></v-img>
    <h2 class="text-capitalize grey--text text--lighten-3"  style="     margin-top: 1em;
    font-size: 1.5em;margin-bottom: 1em;font-weight: 400" >{{n.description}}</h2>
  </div>
  </div>
  <!-- <h3 style="color: grey;" class="txt"></h3> -->
</div>
    </div>
<div class="text-center pt-12 ">

<v-btn depressed target="_blank" href="https://www.instagram.com/olivebrookjuniors/" class="text-capitalize jost mx-auto"  color="" x-large>See More on instagram <v-icon>mdi-instagram</v-icon></v-btn>
</div>
    </v-card>
</v-container>
</div>
</template>
<script>
// import axios from 'axios'
export default {

      mounted(){  
        this.setCarousel()

 
  
      },
      props:['images'],
      data: () => ({
        // images: []
      }),
      methods:{
          pressed(){
              alert(9)
          },
      
          setCarousel(){
      const elems = document.querySelectorAll('.carousel');
    const carousel = document.getElementsByClassName('carousel');
    // eslint-disable-next-line no-unused-vars
          var instances = 
    // eslint-disable-next-line no-undef
    M.Carousel
    .init(elems);
    // carousel.carousel();
    carousel.carousel({
      onCycleTo : function($current_item, dragged) {
        console.log($current_item);
        if (dragged) {
        stopAutoplay();
        }
        // else{
        // startAutoplay(carousel);
        // }
      }
    });

var autoplay_id;
function startAutoplay() {
   autoplay_id = setInterval(function() {
    carousel.carousel('next');
    }, 5000); // every 5 seconds
  //console.log("starting autoplay");
}

function stopAutoplay() {
  if(autoplay_id) {
    clearInterval(autoplay_id);
    //console.log("stoping autoplay");
  }
}
startAutoplay();
          }
      }
}
</script>
  <style type="text/css">

    .hidden.menu {
      display: none;
    }

    .masthead.segment {
      padding: 1em 0em;
    }
    .masthead .logo.item img {
      margin-right: 1em;
    }
    .masthead .ui.menu .ui.button {
      margin-left: 0.5em;
    }
    .masthead h1.ui.header {
      margin: 90px 0;
      font-size: 4em;
      font-weight: normal;
    }
    .masthead h2 {
      font-size: 0.5em;
      font-weight: normal;
    }

    .ui.vertical.stripe {
      padding: 8em 0em;
    }
    .ui.vertical.stripe h3 {
      font-size: 2em;
    }

    .ui.vertical.stripe .button + h3,
    .ui.vertical.stripe p + h3 {
      margin-top: 3em;
    }
    .ui.vertical.stripe .floated.image {
      clear: both;
    }
    .ui.vertical.stripe p {
      font-size: 1.33em;
    }
    .ui.vertical.stripe .horizontal.divider {
      margin: 3em 0em;
    }

    .quote.stripe.segment {
      padding: 0em;
    }
    .quote.stripe.segment .grid .column {
      padding-top: 5em;
      padding-bottom: 5em;
    }

    .footer.segment {
      padding: 5em 0em;
    }
   .ui.button{
      border-radius: 51px !important;
    }
    .secondary.pointing.menu .toc.item {
      display: none;
    }
/*.carousel{
 height: 845px;
    transform: translate(10px, -263px);
}*/
.carousel .carousel-item {
    width: 305px;
    height:325px;
    }
    .column.btns{
      width: fit-content!important;
    }
       
.carousel {width: 100%;
 transform: translateY(26px);
    height: 350px!important;}
    /*.carousel-item {
transform: translateX(0px) translateY(7px) translateX(0px) translateX(0px) translateZ(0px)}
*/
.txt{
      position: absolute;
    top: 431px;
    padding: 0 6em;
    font-weight: 100;
    width: 100%;
}
.ui.container.imager {
        padding-top:60px;
      }
  @media only screen and (max-width: 700px) {
      .carousel {width: 100%;
 transform: translateY(10px);
    height: 350px!important;}
  .masthead h3 {
    bottom: -470px;  
    }
  .ui.container.imager {
    padding-top:22px;
  }
  .txt{
      position: absolute;
    padding: 0 2em;
    top: 544px;
    font-weight: 100;
    width: 100%;
}
         .column.btns{
      width: auto!important;
    }
      /* .carousel {width: 100%;
        transform:translateY(-36px);
        height: 436px!important;
        perspective: 346px;
        } */
      .ui.fixed.menu {
        display: none !important;
      }
      .ui.container {
    width: auto!important;
    margin-left: 0em!important;
    margin-right: 0em!important;
}
      .secondary.pointing.menu .item,
      .secondary.pointing.menu .menu {
        display: none;
      }
      .secondary.pointing.menu .toc.item {
        display: block;
      }
      .masthead.segment {
        min-height: 350px;
      }
      .masthead h1.ui.header {
        font-size: 3em;
        margin-top: 1.3em;
        margin-bottom: 1.5em;
      }
      .masthead h2 {
        margin-top: 1.5em;
        font-size: 0.6em;
      }
      img.heroimage{
        margin: 13px auto;
      }
      div.ui.stackable.mainer, .ui.container.imager {
        text-align: center;
      }
    }


  </style>