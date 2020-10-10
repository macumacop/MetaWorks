<template>
<v-main class="main">
  <div class="contenedorHome mt-12">
    <h4 class="titulos-home">OUR PROJECTS</h4>
    <div class="divisor-titulos"></div>
  <v-row class="mt-12">
    <v-col class="mb-5" v-for="(item, i) in items" :key="i" md="4" sm="12">
      <v-img :src="item"></v-img>
      <h4 class="mt-5">{{item.Nombre}} <i class="fas fa-arrow-circle-right next"></i></h4>
    </v-col>
  </v-row>
    </div>
    </v-main>
</template>
<script class="main">
export default {
  data: () => ({
    items: [
          {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-Project-024.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-013.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-07.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-14.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project-039.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
          },
        ],
  }),

}
</script>