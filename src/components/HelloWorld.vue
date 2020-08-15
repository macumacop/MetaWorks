<template>
  <v-main>
    <v-carousel
     class="carrusel"
     >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <div class="contenedor-contenido">
  <v-row>
    <v-col md="4" sm="6">
    <v-card class="cardimg">
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo16@2x.png"></v-img>
    </v-card>
    </v-col>
    <v-col md="4" sm="6">
    <v-card class="cardimg">
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo14@2x.png"></v-img>
    </v-card>
    </v-col>
    <v-col md="4" sm="6">
    <v-card class="cardimg">
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo15@2x.png"></v-img>
    </v-card>
    </v-col>
  </v-row>
  <v-row class="mt-12">
    <v-col cols="6">
      <h4 class="titulos-home">Titulo Prueba</h4>
      <router-link to="/prueba">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id necessitatibus quos, perferendis in laudantium quo facere. Repudiandae, amet. Aut corrupti sequi voluptate id repellat, a magnam omnis perferendis et?</p>
      </router-link>
    </v-col>
    <v-col cols="6">
      <v-img src="@/assets/img/foto-home@2x.png"></v-img>
    </v-col>
  </v-row>
  </div>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
  }),

}
</script>

<style>
.contenedor-contenido{
  margin: 0px 200px;
}
.v-carousel{
  margin: 0 !important;
  width: 100%;
}
.cardimg{
  width: 250px;
  height: 250px;
  margin: 0 auto;
}
  .carrusel{
    height: auto;
    max-height: 450px;
  }
  .titulos-home{
    color: #ffa500;
    font-size: 16px !important;
  }
@media (max-width: 1050px) {
  .contenedor-contenido{
  margin: 0px;
  }
  .carrusel{
    height: 100% !important;    /* height: 300px !important; */
  }
  .cardimg{
    width: 80%;
    height: 100%;
    margin: 40px auto;
}
}

</style>