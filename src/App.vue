<template>
  <v-app>
    <v-system-bar class="sistembar">
      <div class="mainsistem">
      <v-icon class="ml-12">mdi-signal-cellular-outline</v-icon>
      <span>carrera 13 calle 23</span>
       <v-icon class="ml-12">mdi-signal-cellular-outline</v-icon>
      <span>correoprueba@gmail.com</span>
       <v-icon class="ml-12">mdi-signal-cellular-outline</v-icon>
      <span>7:30 - 9:30</span>
      </div>
      <v-spacer></v-spacer>
      <span class="mr-2"> Facebook</span>
      <i class="fa fa-facebook mr-12"></i>
    </v-system-bar>
    <v-app-bar
    class="toolbarmain"
      app
      color="#fff"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/Logo-brand.jpg"
          transition="scale-transition"
          width="150"
        />
      </div>
      <div class="rutas">
        <ul>
          <router-link to="/">
          <li>Home</li>
          </router-link>
          <router-link to="/about">
          <li>About Us</li>
          </router-link>
          <router-link to="/prueba">
          <li>Services</li>
          </router-link>
          <li>Project Work</li>
          <li>FAQS</li>
          <li>Contact Us</li>
        </ul>
      </div>

    </v-app-bar>
    <v-main>
      <router-view class="contenedor-contenido contenedorrutas mt-10"></router-view>
    </v-main>
  <v-footer class="footer">
  <v-row>
    <v-col md="6" sm="12">
      <span class="derechos-reserva">All right reserved 2020 FBMetalWork.com</span>
    </v-col>
    <v-col md="6" sm="12">
      <v-img class="imagenesFooter" src="@/assets/img/cwb-1@2x.png"></v-img>
      <v-img class="imagenesFooter" src="@/assets/img/tssa-1@2x.png"></v-img>
      <v-icon color="white"> mdi-android </v-icon>
      
    </v-col>
  </v-row>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  @import './assets/styles/estilosgenerales.scss';

  

</style>
