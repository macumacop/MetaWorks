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
  <v-row>
    <v-col md="6" sm="12">
      <span class="derechos-reserva">All rrrrrright reserved 2020 FBMetalWork.com</span>
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
