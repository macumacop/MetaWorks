<template>
  <v-main class="main">
    
    <v-carousel class="carrusel-home"
    cycle
    :show-arrows="false"
    hide-delimiter-background
    ref="carrouselPrueba"
    v-model="currentIndex"
    :value="this.valueCarrousel"
    hide-delimiters
    >
    <div
      class="handler-carrousel"
      >
      <a 
          v-for="(item,i) in imgBanner"
          class="banner-router"
          :class="{
            'active' : currentIndex === i
          }"
          :key="i" 
          @click="goTo(i)"
          >
        <span 
          >{{i +1}} <b         
            :style="{
               'display' : currentIndex != i ? 'none' : 'initial'
              }"
          ></b></span>
      </a>
    </div>
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
    <v-col class="img-centrales-home"
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
      <h4 class="titulos-home">Our Specialization</h4>
      <div class="divisor-titulos"></div>
      <v-expansion-panels elevation="0" flat>
          <v-expansion-panel
            elevation="0"
            
          >
            <v-expansion-panel-header class="color-panel" elevation="3">
             Structural Steel Erectors
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-icon">
              Our trained team of certified professionals install steel by safety assembling rigging gear to erect and dismantle structural steel frames from buildings and other structures. We conduct all work to the very highest industry and safety standards and assess each job site.
            </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
            <v-expansion-panel-header class="color-panel" elevation="3">
             Structural Steel Welding
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-icon">
              Certified professional welders at FB Metal Work, ensure quality control of welded products, ease of technical documentation handling, rigid application of welding procedures and technical standards, and monitoring of welders in their daily tasks.
            </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
            <v-expansion-panel-header class="color-panel" elevation="3">
             Pressure Vessels
            </v-expansion-panel-header>
            <v-expansion-panel-content class="panel-icon">
              Our qualified staff have the expertise to handle and install pressure vessels accurately. We are capable of installing vessels in all shapes and sizes and have a long track record of reliable installations for public structures, buildings, etc..
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      
      <!-- <v-btn class="bottom-call mt-4" to="/contact-us"><i class="fas fa-phone mr-2"></i> Contact us</v-btn> -->
    </v-col>
    <v-col md="6" sm="12">
      <v-img class="imagen-home-lateral" src="@/assets/img/foto-home.png"></v-img>
    </v-col>
  </v-row>
  </div>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    currentIndex: 0,
    valueCarrousel:3,
    imgBanner: [
          {
            src: require('@/assets/img/banner-01.png'),
            texto: "Strong structure",
            texto2: "Safe instalation",
            linkHome: "/services" 
          },
          {
            src: require('@/assets/img/banner-02.png'),
            texto: "About Us",
            texto2: "",
            linkHome: "/about"
          },
          {
            src: require('@/assets/img/banner-03.png'),
            texto: "Contact US",
            texto2: "",
            linkHome: "/contact-us"
          }         
        ],
    imagenesCentrales: [
          {
            src: require('@/assets/img/Grupo14@2x.png'),
            texto: "''Ensure quality control of welded products''"
          },
          {
            src: require('@/assets/img/Grupo15@2x.png'),
            texto: "''We consistently meet client expectations''"
          },
          {
            src: require('@/assets/img/Grupo16@2x.png'),
            texto: "''Skilled team with expert experiencie''"
          },
        ],
  }),
  methods: {
    goTo(ind){
      this.currentIndex = ind
    }
  }
}
</script>
