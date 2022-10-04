<template>
<div style="background:#2a1e6f;padding:100px 0">

<v-container class="pr-0" fluid>
   
    <div style="overflow-x:scroll;">
    <section
      style="overflow: hidden;
    padding: 22px 9px 28px 22px;    width: auto;
"
      class="card-list"
      v-click-outside="nuller"
    >
    <div 
     :style="$vuetify.breakpoint.smAndDown?'max-width:200px':'max-width:304px'"
        @click="selected = null"
    style=" 
              left: -11px;
              position: relative;width: 304px;
              height: fit-content;
              margin: auto;">

      <h1
        style="color:#aaa332;max-width:300px;font-family:Jost!important;
             "
        class="display-3 coreupcard hidden font-weight-regular jost "
      >
    Our Staff, Our Pride.
      </h1>
      <p style="color:rgb(199 199 199)" class="jost coreupcard hidden "> Our teachers undergo a rigorous multi-stage selection process to ensure high standards of education delivery to our students, continuous teacher development is a vital part of the school policy to maintain quality education delivery.</p>
        </div>
  <div style="padding: 15px 23px;border-radius: 5px;"  class="coreallcard hidden d-flex">
      <div
        @click="select(n, i, 0)"
        v-for="(n, i) in teachers"
        :key="i"
        :class="
          selected === i && selected !== null
            ? 'selected'
            : i > selected && selected !== null
            ? 'afterselected'
            : ''"
        style="overflow:hidden!important;position:relative;
          background-position: center;
    background-size: cover;border-radius:8px !important;
    -webkit-border-radius: 8px !important;
-moz-border-radius: 8px !important;
border-radius: 8px !important;"
        class="card white"
      >
        <v-img  :alt="n.name + 'Olive Brook Teachers'"
                              style=""
                              class="ma-auto" width="100%" height="100%"
                                :src="n.img">
        </v-img>

        <div
          style="    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0,0,0,0.9) 100%);
    z-index: 0;
    border-radius: 0px 0px 8px 8px;"
          class="shadow2"
        ></div>


        <div class="px-3 white--text card-author">
     
    <p style="font-family:Jost!important" class="jost text-capitalize mb-2 title">{{n.name}}</p>
    <p class="font-italic caption" style="opacity:0.7">-{{n.role}}</p>
        </div>
      </div>
      <div  :style="$vuetify.breakpoint.smAndDown?'width:0px':'width:70px'"></div></div>
    </section>
  </div></v-container>
</div>
</template>


<script>
export default {
  props: ["deals", 'name' ],
  methods: {
    nuller() {
      this.selected = null;
    },
    select(x, y) {
      if (y === this.selected) {
        this.selected = null;
     
      } else {
        this.selected = y;
      }
    },
  },
      data: () => ({
        teachers:[
              {
              name: 'Mrs Grace',
              img:'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018700/IMG_1072_j2l3xn.jpg',
              role: 'Teacher'
            },
          {
            name: 'Mr Akpan',
            img:'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664018706/IMG_1226_juc6es.jpg',
            role: 'Logistics'
          },
                {
            name: 'Mr Chinwe',
            img:'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664434663/IMG_1056_lv62r9.jpg',
            role: 'Teacher'
          },
          {
            name: 'Mr Nonso',
            img:'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664431801/IMG_1109_dvzgr0.jpg',
            role: 'Teacher'
          },
        
    
          {
            name: 'Mr Ebuka',
            img:'https://res.cloudinary.com/crushcontest-com/image/upload/c_fit,w_700/v1664433983/IMG_1261_laygjp.jpg',
            role: 'Security'
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
      selected: null,
    })

};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
  background-color: #17141d;
  color: white;
  font-family: "DM Mono", monospace;
}

a {
  text-decoration: none;
}

.card-list {
  display: inline-flex;
  padding: 3rem;
}

/* .card-list::-webkit-scrollbar {
    width: 10px;
    height: 19px;
}
.card-list::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    border-radius: 10px;
} */

.card {
  background-position: center;
  background-size: cover;
  height: 600px;
  width: 350px;
  transform: rotateZ(-0deg);
  background: #ffffff;
  box-shadow: -24px 0px 25px -12px #000000a6;
  transition: 0.3s;
  margin: 0;
  scroll-snap-align: start;
}

.afterselected {
  transform: translateX(80px) rotateZ(0deg) !important;
}

.selected {
  transform: translateX(-120px) translateY(-0.0rem) !important;
}

.card:not(:first-child) {
  margin-left: -190px;
}

.card-header {
  margin-bottom: auto;
}

.card-header p {
  font-size: 14px;
  margin: 0 0 auto;
  color: #7a7a8c;
}

.card-header h2 {
  font-size: 16px;
  line-height: 1.3;
  margin: 0rem 0 auto;
  text-decoration: none;
  color: inherit;
  border: 0;
  display: inline-block;
  cursor: pointer;
}

.card-author {
  align-items: center;
  position: absolute;
  bottom: 0.6rem;
      width: 100%;
}

.author-avatar {
  grid-area: auto;
  align-self: start;
  position: relative;
  box-sizing: border-box;
}

.author-avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  display: block;
  overflow: hidden;
  margin: 16px 10px;
}

.author-name-prefix {
  font-style: normal;
  font-weight: 700;
  color: #7a7a8c;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
}

.tags {
  margin: 1rem 0 2rem;
  padding: 0.5rem 0 1rem;
  line-height: 2;
  margin-bottom: 0;
}

.tags a {
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #7a7a8c;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 3px solid #28242f;
  border-radius: 2rem;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;
}

.tags a:hover {
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  text-shadow: none;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  box-decoration-break: clone;
  background-clip: text;
  border-color: white;
}
  @media only screen and (max-width: 700px) {
.card {
  background-position: center;
  background-size: cover;
  height: 600px;
  width: 300px;
  transform: rotateZ(-0deg);
  background: #ffffff;
  box-shadow: -24px 0px 25px -12px #000000a6;
  transition: 0.3s;
  margin: 0;
  scroll-snap-align: start;
}

.afterselected {
  transform: translateX(50px) rotateZ(0deg) !important;
}

.selected {
  transform: translateX(-120px) translateY(-0.0rem) !important;
}

.card:not(:first-child) {
  margin-left: -160px;
}
  }
</style>
