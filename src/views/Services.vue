<template>
<v-main class="main">
  <v-img src="@/assets/img/banner@2x.png"></v-img>
  <div class="contenedorHome">
  <v-row class="mt-12">
    <v-col v-for="(item, i) in items" :key="i" md="6" sm="12">
      <v-img :src="item"></v-img>
      <h4>{{item.Nombre}}</h4>
      <p>{{item.Descripcion}}</p>
      <router-link  class="routes" :to="item.path">
      <v-btn class="buttom-more" elevation="0">More <i class="fas fa-plus"></i></v-btn>
      </router-link>
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
            src: require('@/assets/Services/Other-Steel-Work-Projects-209.jpg'),
            Nombre:"Structural Steel Erectors",
            Descripcion:"Our trained team of certified professionals install steel by safety assembling rigging gear to erect and dismantle structural steel frames from buildings and other structures.",
            path: '/Services/SteelErectors'
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-150.jpg'),
            Nombre:"Reinforcement",
            Descripcion:"We have been a leading force in the steel construction industry offering bar reinforcement, reinforcing wire mesh, cutting and welding proving a fast installation service int Toronto and surrounding areas.",
            path: '/Services/Reinforcement'
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-058.jpg'),
            Nombre:"Structural Steel Welding",
            Descripcion:"Certified professional welders at FB Metal Work, ensure quality control of welded products, ease of technical documentation handling, rigid application of welding procedures and technical standards",
            path: '/Services/SteelWelding'
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Pressure Vessels",
            Descripcion:"Our qualified staff have the expertise to handle and install pressure vessels accurately.",
            path: '/Services/Pressure'
          },
        ],
  }),

}
</script>