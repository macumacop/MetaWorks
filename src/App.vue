<template>
  <v-app>
    <v-app-bar app color="#fff" dark class="toolbar">
      <div class="contenedorToolbar">
        <div class="logo-menu">
          <router-link @click.native="scrollToTop" class="menu-mob" to="/">
          <img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/img/LOGO-METAL-WORKS.png"
            transition="scale-transition"
          />
          </router-link>
        </div>
      </div>
      <div class="rutas">
        <div class="menu-responsive" @click="drawer = !drawer">
          <i class="fas fa-bars"></i>
        </div>
        <ul>
          <router-link @click.native="scrollToTop" v-for="(route, index) in routes" :key="index" :to="route.to">
            <li>{{route.text}}</li>
          </router-link>
        </ul>
      </div>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" position="absolute" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="(route,index) in routes" :key="index" class="cont-menu-mob">
            <v-list-item-icon>
              <i :class="route.class"></i>
            </v-list-item-icon>
            <v-list-item-title>
              <router-link class="menu-mob" :to="route.to">{{route.text}}</router-link>
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
          <span class="derechos-reserva"><i class="far fa-copyright"></i> All rights reserved © 2020 </span>
        </div>
        <div class="text-footer">
          <span class="derechos-reserva"><i class="fas fa-map-marker-alt mr-1"></i> 3-96 Brandwick Dr. Concord ON L4K 1K8
            </span>
        </div>
        <div class="text-footer">
          <span class="derechos-reserva"><a class="correo" href="mailto:service@fbmetalworks.com"><i class="fas fa-envelope mr-1" mailto ></i> service@fbmetalworks.com</a></span
          >
        </div>
        <div class="text-footer">
          <img class="imagenesFooter" src="@/assets/img/cwb-blanco.png" />
          <img class="imagenesFooter" src="@/assets/img/tssa-blanco.png" />
        </div>
        <div class="text-footer">
          <span class="derechos-reserva">
            Follow us on 
            <a class="redes" href="https://www.facebook.com/FB-METAL-WORKS-116247048484063" target="_blank"><i class="fab fa-facebook ml-1"></i></a>
            <a class="redes" href="https://instagram.com/fbmetalworks.ca?igshid=1jeujtj9h7ltx" target="_blank"><i class="fab fa-instagram"></i></a>
          </span>
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
  methods: { 
    scrollToTop() {
    window.scrollTo(0,0);
    }
  },

  data: () => ({
    drawer: false,
    group: null,
    routes:[
      {to: '/', text: 'HOME', class: 'fas fa-home'},
      {to: '/about', text: 'ABOUT', class: 'fas fa-address-card'},
      {to: '/services', text: 'SERVICES', class: 'fas fa-tasks'},
      {to: '/project-work', text: 'PROJECT WORK', class: 'fas fa-briefcase'},
      {to: '/faqs', text: 'FAQS', class: 'fas fa-question'},
      {to: '/contact-us', text: 'CONTACT US', class: 'far fa-envelope-open'}
      ]
  }),
};
</script>
<style>
@import "./assets/styles/estilosgenerales.scss";
</style>
