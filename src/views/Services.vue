<template>
<v-main class="main">
  <div class="cabezote">
    <div class="fondo-negro">
      <div class="contenedorHome">
        <v-row>
        <v-col md="12" sm="12" xs="12">
          <h4 class="titulos-home"
          style="text-align: center;"
          >Our Company Services</h4>
          <p class="txt-blanco">
            FB Metal Work is well known in the industry as a company that consistently meets client expectations and their growing demands for steel erection. Our company can cut and weld steel work for specific projects and our team of enthusiastic individuals are determined to get the job done right the first time.</p>
            <p class="txt-blanco">
             For more information feel free to Contact Us at (416)-990-6531
          </p>
        </v-col>
        <!-- <v-col md="4" sm="12" xs="12">
          <v-img src="@/assets/img/otros-proyectos.png"/>
        </v-col> -->
        </v-row>
      </div>
    </div>
  </div>
  <div class="contenedorHome">
  <v-row class="mt-12">
    <v-col v-for="(item, i) in items" :key="i" md="4" sm="12"  xs="12" class="col-services">
      <v-img class="imagen-animada" :src="item.src" />
      <h4>{{item.Nombre}}</h4>
      <p>{{item.Descripcion}}</p>
      <router-link  @click.native="scrollToTop" class="routes" :to="item.path">
      <v-btn class="buttom-more" elevation="0">More <i class="fas fa-plus"></i></v-btn>
      </router-link>
    </v-col>
  </v-row>
    </div>
    </v-main>
</template>
<script class="main">
export default {
  data: () => ({
    items: [
          {
            src: require('@/assets/img/services-01.png'),
            Nombre:"Structural Steel Erectors",
            Descripcion:"Our trained team of certified professionals install steel by safety assembling rigging gear to erect and dismantle structural steel frames from buildings and other structures.",
            path: '/services/steel-erectors'
          },
          {
            src: require('@/assets/img/services-02.png'),
            Nombre:"Reinforcement",
            Descripcion:"We have been a leading force in the steel construction industry offering bar reinforcement, reinforcing wire mesh, cutting and welding proving a fast installation service int Toronto and surrounding areas.",
            path: '/services/reinforcement'
          },
          {
            src: require('@/assets/img/services-03.png'),
            Nombre:"Structural Steel Welding",
            Descripcion:"Certified professional welders at FB Metal Work, ensure quality control of welded products, ease of technical documentation handling, rigid application of welding procedures and technical standards",
            path: '/services/steel-welding'
          },
          /* {
            src: require('@/assets/img/services-04.png'),
            Nombre:"Pressure Vessels",
            Descripcion:"Our qualified staff have the expertise to handle and install pressure vessels accurately.",
            path: '/services/pressure'
          }, */
        ],
  }),
    methods: { 
      scrollToTop() {
      window.scrollTo(0,0);
      }
  }
}
</script>