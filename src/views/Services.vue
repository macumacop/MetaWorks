<template>
    <div>
        <v-carousel
     class="carrusel"
     >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <v-row>
    <v-col md="6" sm="12">
      <v-img src="@/assets/img/Mesadetrabajo2 copia4@2x.png"></v-img>
      <h4>Structural Steel Erectors</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae</p>
      <v-btn>More +</v-btn>
    </v-col>
    <v-col md="6" sm="12">
      <v-img src="@/assets/img/Mesadetrabajo2 copia4@2x.png"></v-img>
      <h4>Structural Steel Erectors</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae</p>
      <v-btn>More +</v-btn>
    </v-col>
    <v-col md="6" sm="12">
      <v-img src="@/assets/img/Mesadetrabajo2 copia4@2x.png"></v-img>
      <h4>Structural Steel Erectors</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae</p>
      <v-btn>More +</v-btn>
    </v-col>
    <v-col md="6" sm="12">
      <v-img src="@/assets/img/Mesadetrabajo2 copia4@2x.png"></v-img>
      <h4>Structural Steel Erectors</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae</p>
      <v-btn>More +</v-btn>
    </v-col>
  </v-row>
    </div>
</template>
<script>
export default {
  data: () => ({
    items: [
          {
            src: require('@/assets/img/banner@2x.png'),
          },
          {
            src: require('@/assets/img/banner@2x.png'),
          },
          {
            src: require('@/assets/img/banner@2x.png'),
          },
          {
            src: require('@/assets/img/banner@2x.png'),
          },
        ],
  }),

}
</script>