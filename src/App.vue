<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>
<style >
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
    transform:translateX(10%);
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
  font-size:40px!important
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

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted(){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry)
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('show');          
        }
      })
    })

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> {
      observer.observe(el);
        el.addEventListener('animationend', function () {
          el.classList.remove('show');
        });
        });
  }
};

</script>
