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
  <div>
  <v-row>
    <v-col cols="4">
    <v-card class="cardimg" flat>
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo16@2x.png"></v-img>
      <span>"prueba de Miguel Ensure quality control of welded products"</span>
    </v-card>
    </v-col>
    <v-col cols="4">
    <v-card class="cardimg" flat>
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo14@2x.png"></v-img>
      <span>"Ensure quality control of welded products"</span>
    </v-card>
    </v-col>
    <v-col cols="4">
    <v-card class="cardimg" flat>
      <v-img contain class="imagenesprueba" src="@/assets/img/Grupo15@2x.png"></v-img>
      <span>"Ensure quality control of welded products"</span>
    </v-card>
    </v-col>
  </v-row>
  <v-row class="mt-12">
    <v-col cols="6">
      <h4 class="titulos-home">Welcome To Our Website!</h4>
      <div class="divisor-titulos"></div>
      <p class="parrafos-home" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id necessitatibus quos, perferendis in laudantium quo facere. Repudiandae, amet. Aut corrupti sequi voluptate id repellat, a magnam omnis perferendis et?</p>
      <h4 class="titulos-home">Welcome To Our Website!</h4>
      <div class="divisor-titulos"></div>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Structural Steel Erectors</router-link> <br>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Structural Steel Welding</router-link > <br>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Pressure Vessels </router-link> <br>
      <v-btn class="bottom-call mt-4"><i class="fas fa-phone"></i> Call Now</v-btn>
    </v-col>
    <v-col cols="6">
      <v-img class="imagen-home-lateral" src="@/assets/img/foto-home@2x.png"></v-img>
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
