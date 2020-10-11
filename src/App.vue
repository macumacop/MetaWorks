<template>
  <v-app>
    <v-app-bar
      app
      color="#fff"
      dark
      class="toolbar"
    >
      <div class="contenedorToolbar">
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
          <li>HOME</li>
          </router-link>
          <router-link to="/about">
          <li>ABOUT US</li>
          </router-link>
          <router-link to="/Services">
          <li>SERVICES</li>
          </router-link>
          <router-link to="/ProjectWork">
          <li>PROJECTWORK</li>
          </router-link>
          <router-link to="/Faqs">
          <li>FAQS</li>
          </router-link>
          <router-link to="/ContactUs">
          <li>CONTACT US</li>
          </router-link>
        </ul>
      </div>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  <v-footer class="footer">
  <v-row class="mw-container">
    <div class="text-footer">
      <span class="derechos-reserva">All rights reserved © 2020 FBMetalWork.com</span>
    </div>
    <div class="text-footer">
      <span class="derechos-reserva"><i class="fas fa-map-marker-alt mr-1"></i> 96 Bradwick Dr., Unit 3 Vaughan</span>
    </div>
    <div class="text-footer">
      <span class="derechos-reserva"><i class="fas fa-envelope mr-1"></i> fbmetalworks@outlook.com</span>
    </div>
    <div class="text-footer">
      <img class="imagenesFooter" src="@/assets/img/cwb-1@2x.png"/>
      <img class="imagenesFooter" src="@/assets/img/tssa-1@2x.png"/>
    </div>
    <div class="text-footer">
      <span class="derechos-reserva">Follow us on <i class="fab fa-facebook ml-1"></i></span>
    </div>
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
