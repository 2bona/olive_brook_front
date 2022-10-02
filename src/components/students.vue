<template>
<div style="background:#f5f5f5;padding:100px 0">

    <v-container  :style="$vuetify.breakpoint.smAndDown?'pt-0':''">
                 <!-- <div style="position: relative;width:100%" class="pb-12 mb-6">
            <div style="
width: 100%;height: 100%;top: 0;position: ;display: flex;align-items: center;
">
                <v-avatar width="216px" class="mx-auto mb-0" height="48px" tile><v-img src="https://res.cloudinary.com/crushcontest-com/image/upload/v1663763953/pattern_circles-2_1_2_0-0_0_1__ffffff00_4d2a8d_aaa231_k9nh0m.png"></v-img></v-avatar>
            </div>
    </div> -->
        <h1 style="color:#aaa332;font-family: Jost!important" class="text-center coreupcard hidden display-3 my-0 mb-4 font-weight-regular px-3 jost">Testimonials</h1>
       <p class="font-italic jost text-center coreupcard hidden mx-auto" style="max-width:500px; ">
The academics are great and the school really feels like family.  For me, I've already found all I'm looking for in a school and I'm not going anywhere else!</p>
<p class=" jost text-center mx-auto">— Mrs O, Olive Brook Juniors Parent</p>
        <div style="
    overflow-x: scroll;
">

<v-layout style=" 
    display: inline-flex;overflow-y:hidden;
    overflow-x: scroll;
">
    <v-flex class="pa-2 " v-for="(n,i) in testimonials" :key="i"  xs5 sm4>
        <v-card :width="$vuetify.breakpoint.smAndDown? '300px':'350px'" :color="colors[i]" :style="'--order:'+(i+1)" style="height:calc(100vh - 280px);overflow-y:hidden" class="corestudentcard hidden rounded-l px-4 pt-4">
            <p style="opacity:0.9;font-family: Jost!important" class="white--text font-weight-bold title">
                {{n.name}}
            </p>
            <p class="white--text" style="opacity:1;font-family: Jost!important ">{{n.comment}}</p>

        <p style="opacity:0.4;font-family: Jost!important" class="font-weight-black font-italic">-{{n.tag}}</p>
        <v-img eager :src="n.image"></v-img>
        </v-card>
    </v-flex>
</v-layout>
</div>

    </v-container></div>

</template>
<script>
export default {
    data: () => ({
        colors: [
            'grey',
            'red',
            'teal',
            'purple darken-4',
            'green',
            'pink',
        ],
        testimonials:[
            {
                image:'https://res.cloudinary.com/crushcontest-com/image/upload/v1663598536/My_project_23_j8mmvn.png',
                name: 'Nnenna',
                tag: 'Student, JS 1',
                comment: 'Olive Brook has brought out the best in me by teaching me values and principles i need to grow as a person.'
            },
            {
                image:'https://res.cloudinary.com/crushcontest-com/image/upload/v1663598536/My_project_23_j8mmvn.png',
                name: 'Nnenna',
                tag: 'Student, JS 1',
                comment: 'Olive Brook has brought out the best in me by teaching me values and principles i need to grow as a person.'
            },
            {
                image:'https://res.cloudinary.com/crushcontest-com/image/upload/v1663598536/My_project_23_j8mmvn.png',
                name: 'Nnenna',
                tag: 'Student, JS 1',
                comment: 'Olive Brook has brought out the best in me by teaching me values and principles i need to grow as a person.'
            },
        ]
    })
}
</script>