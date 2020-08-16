<template>
  <v-app>
    <v-system-bar class="sistembar">
      <div class="mainsistem">
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <span>direcccion</span>
       <v-icon>mdi-signal-cellular-outline</v-icon>
      <span>e-mail</span>
       <v-icon>mdi-signal-cellular-outline</v-icon>
      <span>horario</span>
      </div>
      <v-spacer></v-spacer>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <span>Facebook</span>
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
    <v-main class="contenedorrutas">
      <router-view></router-view>
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
*{
  padding: 0;
  margin: 0 ;
}
.contenedorrutas{
  padding: 0 !important;
  margin-top: 24px;
}
.sistembar{
  background: #000 !important;
  color: #fff !important;
  width: 100%;
  height: 40px !important;
  position: fixed;
  z-index: 10;
}
.sistembar i{
  color: #fff !important;
}
.mainsistem{
  margin-left: 50px;
}
.toolbarmain{
  margin-top: 40px !important;
}
.rutas{
  margin: 0 auto;
}
.rutas li{
  color: #000;
  list-style: none;
  display: inline-block;
  margin: 10px;
}
.footer{
  background-color: #000 !important;
  height: 100px;
  text-align: center;
  align-items: center;
}
.derechos-reserva{
  color: #fff;
  
}
.imagenesFooter{
  width: 50px;
  margin: 0 auto;
  display: inline-block !important;
}
</style>
