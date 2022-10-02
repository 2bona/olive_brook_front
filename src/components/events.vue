<template>
<div style="background-color: #f5f5f5 ">

<v-container  style="; padding:90px 0" class="" fluid>

    <div style="border-radius:8px" class="  ">
 
     <h1 style="  color:#aaa332;  font-family: 'Jost', sans-serif!important;
" class=" display-3  jost font-weight-regular text-center coreupcard hidden "> Olive Brook Event Calendar</h1> 
<p class="px-9 mx-auto text-center coreupcard hidden  jost " style="max-width:600px">We engage our staff and students regularly to get feedback on the impact of our school on them,
     and also to guage our performance to know how to improve our core development models.</p>

    <v-calendar 
              class="mt-9 coreupcard hidden piv mx-auto headline "
              color=""  :events="eventdates"
              width="100%" style="border-radius: 8px;overflow:hidden;max-width:850px"
              v-model="date"
              event-color="pink"
              multiple
            ></v-calendar>
<div class="text-center mb-5">
<v-btn target="_blank" href="https://www.eventbrite.com/" style="color: rgb(55 35 123);" depressed class="text-capitalize jost my-12 mx-auto" outlined color="background-color: #ab396b " x-large>See Events</v-btn>
</div>
    </div>
</v-container>
</div>

</template>

<script>
export default {

      mounted(){  
        
        

      },
      data: () => ({
          dates: [],
          date: ''
      }),
            props:['eventdates'],

      methods:{
          pressed(){
              alert(9)
          }
      }
}
</script>
  <style type="text/css">
 .v-date-picker-header .v-btn--icon.v-size--default .v-icon, .v-btn--fab.v-size--default .v-icon {
    font-size: 64px;
}
.v-picker.v-card.v-picker--date {
    background-color: transparent;
}
.v-date-picker-header__value button {
    font-family: Jost!important;
}
.v-calendar-weekly__head-weekday.v-future{
color:#fff!important;
}
.v-calendar-weekly__head-weekday.v-future.v-outside{
color:#000!important;
}
.v-calendar-weekly__head-weekday.v-past.v-outside{
color:#000!important;
}
.v-calendar-weekly__head-weekday.v-present.v-outside{
color:#000!important;
}
.v-calendar-weekly__head-weekday.v-present.v-outside.transparent--text{
color:#000!important;
}
.piv .v-picker__body {
    background: #42424200!important;
    height: 608px!important;
}
.v-date-picker-table--date th {
    font-family: Jost!important;
}
.theme--light.v-calendar-weekly {
    background-color: #4c2a8c!important;
}
 .v-past .v-btn  {
   color: #fff!important;
}
 .v-present .v-btn  {
   color: #fff!important;
}
 .v-future .v-btn  {
   color: #fff!important;
}
 .v-outside .v-btn  {
   color: #000!important;
}
.v-calendar .v-btn.v-btn--has-bg {
    background-color: #2a1e6f;
    border-radius:4px;
    font-size:28px!important
}
.v-calendar-weekly__day-label .v-btn {
    z-index: auto;
    font-family: Jost;
    margin: 8px 0;
    font-size: 36px;
    opacity:0.6;
}
  @media only screen and (max-width: 700px) {
.v-calendar-weekly__day-label .v-btn {
    z-index: auto;
    font-family: Jost;
    margin: 8px 0;
    font-size: 18px;
    opacity:0.6;
}
.v-calendar .v-btn.v-btn--has-bg {
    background-color: #2a1e6f;
    border-radius:4px;
    font-size:14px!important
}

  }
.v-calendar-weekly__day-label .v-btn:hover , .v-btn:focus {
  
    opacity:1
}
tr {
    border-bottom: 3px solid rgb(255 255 255 / 12%)!important;
}
.v-picker__title{
    display: none
}
</style>