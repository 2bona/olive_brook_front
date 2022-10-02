<template>
  <div class="home">
    <hero v-bind:text="text"/>
    <classes id="classes"/>
    <services id="services"/>
    <academics id="about"/>
    <parentslove />
    <aboutus id="philosophy"/>
    <coreareas />
    <gallery id="gallery" v-if="images.length > 0" v-bind:images="images"/>
    <!-- <students /> -->
    <blog id="blog" v-bind:blogs="blogs"/>
    <teachers />
    <event  v-bind:eventdates="eventdates"/>
    <eventcards id="events" v-bind:events="events"/>
    <contact id="contact"/>
    <footers />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import hero from '@/components/hero.vue'
import academics from '@/components/academics.vue'
import parentslove from '@/components/parents_love.vue'
import aboutus from '@/components/aboutus.vue'
import coreareas from '@/components/core_areas.vue'
import gallery from '@/components/gallery.vue'
// import students from '@/components/students.vue'
import event from '@/components/events.vue'
import footers from '@/components/footer.vue'
import teachers from '@/components/teachers.vue'
import contact from '@/components/contact.vue'
import blog from '@/components/blog.vue'
import services from '@/components/services.vue'
import eventcards from '@/components/eventcards.vue'
import classes from '@/components/classes.vue'

export default {
  name: 'Home',
  components: {
    hero,
    academics,
    parentslove,
    classes,
    aboutus,
    services,
    coreareas,
    gallery,
    //  students, 
    contact,
    blog,
    eventcards,
    event,
    footers, 
     teachers
  },
  data: () => ({
    images: [],
    blogs: [],
    events: [],
    eventdates: [],
    text: {},
  }),
  mounted(){
    this.getText()
    this.getImages()
    this.getEvents()
    this.getBlogs()
  },
  methods:{
        getImages(){
            axios.get('/gallery').then((res)=>{
              this.images = res.data.success.gallery
            }).catch(()=>{
              console.log('error')
            })
          },
        getBlogs(){
            axios.get('/post').then((res)=>{
              this.blogs = res.data.success.post
            }).catch(()=>{
              console.log('error')
            })
          },
        getText(){
            axios.get('/school?id=2').then((res)=>{
              this.text = res.data.success.school
            }).catch(()=>{
              console.log('error')
            })
          },
        getEvents(){
            axios.get('/event').then((res)=>{
              this.events = res.data.success.event
              const newarr = []
             this.events.forEach((el)=>{
              JSON.parse(el.date).forEach((el2)=>{
                  newarr.push({start: el2, name: el.title})
                })

              })
                this.eventdates = newarr
              console.log(this.eventdates)
            }).catch(()=>{
              console.log('error')
            })
          },
  }
}

</script>
