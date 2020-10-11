<template>
<v-main class="main">
  <v-img src="@/assets/img/banner@2x.png"></v-img>
  <div class="contenedorHome">
  <v-row class="mt-12">
    <v-col v-for="(item, i) in items" :key="i" md="4" sm="12">
      <v-img :src="item"></v-img>
      <h4>{{item.Nombre}}</h4>
      <p>{{item.Descripcion}}</p>
      <v-btn>More +</v-btn>
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
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae"
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-150.jpg'),
            Nombre:"Structural Steel Erectors",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-058.jpg'),
            Nombre:"Structural Steel Erectors",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
          {
            src: require('@/assets/Services/Other-Steel-Work-Projects-114.jpg'),
            Nombre:"Structural Steel Erectors",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
        ],
  }),

}
</script>