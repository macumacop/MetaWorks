<template>
  <v-app>
    <v-app-bar app color="#fff" dark class="toolbar">
      <div class="contenedorToolbar">
        <div class="logo-menu">
          <img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/img/LOGO-METAL-WORKS.png"
            transition="scale-transition"
          />
        </div>
      </div>
      <div class="rutas">
        <div class="menu-responsive" @click="drawer = !drawer">
          <i class="fas fa-bars"></i>
        </div>
        <ul>
          <router-link to="/">
            <li>HOME</li>
          </router-link>
          <router-link to="/about">
            <li>ABOUT US</li>
          </router-link>
          <router-link to="/services">
            <li>SERVICES</li>
          </router-link>
          <router-link to="/project-work">
            <li>PROJECTWORK</li>
          </router-link>
          <router-link to="/faqs">
            <li>FAQS</li>
          </router-link>
          <router-link to="/contact-us">
            <li>CONTACT US</li>
          </router-link>
        </ul>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item class="cont-menu-mob">
            <v-list-item-icon>
              <i class="fas fa-home"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/">HOME</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-address-card"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/about">ABOUT US</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-tasks"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/Services">SERVICES</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-briefcase"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/Project-Work">PROJECTWORK</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <i class="fas fa-question"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/Faqs">FAQS</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <i class="far fa-envelope-open"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" to="/Contact-us">CONTACT US</router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer class="footer">
      <v-row class="mw-container">
        <div class="text-footer">
          <span class="derechos-reserva"
            >All rights reserved © 2020 FBMetalWork.com</span
          >
        </div>
        <div class="text-footer">
          <span class="derechos-reserva"
            ><i class="fas fa-map-marker-alt mr-1"></i> 96 Bradwick Dr., Unit 3
            Vaughan</span
          >
        </div>
        <div class="text-footer">
          <span class="derechos-reserva"
            ><i class="fas fa-envelope mr-1"></i> fbmetalworks@outlook.com</span
          >
        </div>
        <div class="text-footer">
          <img class="imagenesFooter" src="@/assets/img/cwb-1@2x.png" />
          <img class="imagenesFooter" src="@/assets/img/tssa-1@2x.png" />
        </div>
        <div class="text-footer">
          <span class="derechos-reserva"
            >Follow us on <i class="fab fa-facebook ml-1"></i
          ></span>
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style>
@import "./assets/styles/estilosgenerales.scss";
</style>
