<template>
  <v-main class="main">
    <v-carousel class="carrusel-home"
    :show-arrows="false"
    hide-delimiter-background
    cycle
    :delimiter-icon="this.numberBanner"
    >
    <!-- hide-delimiters
    :show-arrows="false" -->
    <v-carousel-item
      v-for="(item,i) in imgBanner"
      :key="i"
      :src="item.src"
      class="carrusel-home-imagenes"
    >
     <div class="contenedorHome">
    <div class="cont-text-banner">
      <h4>{{item.texto}}</h4>
      <h5>{{item.texto2}}</h5>
      <a :href="item.linkHome">Read more <i class="fas fa-arrow-circle-right"></i></a>
    </div>
     </div>
    </v-carousel-item>
  </v-carousel>
  <div class="contenedorHome">
  <v-row>
    <v-col cols="4" class="img-centrales-home"
      v-for="(item,i) in imagenesCentrales" 
      :key="i"
      flat>
    <v-card class="cardimg" flat>
      <v-img contain class="imagenesprueba mb-10" :src="item.src"></v-img>
      <span>{{item.texto}}</span>
    </v-card>
    </v-col>
  </v-row>
  <v-row class="home-intro">
    <v-col md="6" sm="12">
      <h4 class="titulos-home">Welcome To Our Website!</h4>
      <div class="divisor-titulos"></div>
      <p class="parrafos-home" >We are a steel erectors company that offers installation, welding and structural steel services for the construction industry. We understand the importance of work safety and quality assurance control, this is why we hand select and help skill train all of our employees and on-site operators to have expert experience in their field of service.</p>
      <h4 class="titulos-home">Our Specialisation</h4>
      <div class="divisor-titulos"></div>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Structural Steel Erectors</router-link> <br>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Structural Steel Welding</router-link > <br>
      <span class="mas-en-links">+</span><router-link to="#" class="links-home">Pressure Vessels </router-link> <br>
      <v-btn class="bottom-call mt-4" to="/ContactUs"><i class="fas fa-phone mr-2"></i> Contact us</v-btn>
    </v-col>
    <v-col md="6" sm="12">
      <v-img class="imagen-home-lateral" src="@/assets/img/foto-home@2x.png"></v-img>
    </v-col>
  </v-row>
  </div>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    numberBanner:[1,2,3,4],
    imgBanner: [
          {
            src: require('@/assets/img/banner.png'),
            texto: "Strong structure",
            texto2: "Safe instalation",
            linkHome: "https://www.youtube.com/watch?v=ihh3B4ztESg" 
          },
          {
            src: require('@/assets/img/banner-2.jpg'),
            texto: "hola mundo 2"
          },
          {
            src: require('@/assets/img/banner-3.jpg'),
          }
        ],
    imagenesCentrales: [
          {
            src: require('@/assets/img/Grupo14@2x.png'),
            texto: "''Ensure quality control of welded products''"
          },
          {
            src: require('@/assets/img/Grupo15@2x.png'),
            texto: "''we consistently meet client expectations''"
          },
          {
            src: require('@/assets/img/Grupo16@2x.png'),
            texto: "''Skilled team with expert experiencie''"
          },
        ],
  }),
}
</script>
