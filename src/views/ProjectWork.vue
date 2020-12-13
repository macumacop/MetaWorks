<template>
<v-main class="main">
  <div class="contenedorHome mt-12">
    <h4 class="titulos-home">PROJECT</h4>
    <div class="divisor-titulos"></div>
  <v-row class="mt-12">
    <v-col class="mb-5" v-for="(item, i) in items" :key="i" md="4" sm="6" xs="12">
      <div class="cont-img">
      <v-img class="imagen-animada" width="100%" style="cursor: pointer" @click="openDialog(i)" :src="item.src"/>
      </div>
      <h4
      style="cursor: pointer"
      @click="openDialog(i)"
      class="mt-5">{{item.Nombre}}
      <i class="fas fa-arrow-circle-right siguiente">
        </i>
      </h4>
    </v-col>
  </v-row>
  <v-dialog
    v-model="dialog"
    max-width="960px"
    >
    <v-carousel >
    <div class="cerrar-dialog" @click="openDialog(i)"><i class="fas fa-times-circle"></i></div>
      <v-carousel-item
      width="100%"
      max-width="960px"
      class="imagenesDialog"
      v-for="(item, i) in fotosDialog" :key="i" :src="item">
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
    </div>
    </v-main>
</template>
<script class="main">
export default {
  data: () => ({
    dialog: false,
    fotosDialog: [],
    items: [
          {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-Project-024.jpg'),
            Nombre:"Canadian Tire Project"
          },
          {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-013.jpg'),
            Nombre:"Church Renovation Project"
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-07.jpg'),
            Nombre:"Custom Railings"
          },
          {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project.png'),
            Nombre:"Gold Line Interior Reno Project"
          },
          {
            src: require('@/assets/ProjectWork/Other-Steel-Work-Projects/Other-Steel-Work-Projects.png'),
            Nombre:"Other Steel Work Projects"
          },
          {
            src: require('@/assets/ProjectWork/staff/staff.jpg'),
            Nombre:"Staff"
          },
          {
            src: require('@/assets/ProjectWork/Stouffville-High-School-Project/Stouffville-High-School-Project.png'),
            Nombre:"Stouffville High School Project"
          },
          {
            src: require('@/assets/ProjectWork/Waterloo-University-Project/Waterloo-University-Project.png'),
            Nombre:"Waterloo University Project"
          },
          {
            src: require('@/assets/ProjectWork/Work-Shop-Jobs/Work-Shop-Jobs.png'),
            Nombre:"Work Shop Jobs"
          },
        ],
  }),
  methods:{
    openDialog(i){
      this.dialog =! this.dialog
      //Canadian-tire-project
          if(i == 0){
            this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-project.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-Project-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-Project-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Canadian-tire-project/Canadian-Tire-Project-003.jpg')
          }
        ]
      } else if(i == 1){
        //Church-Renovation-Project
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-003.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Church-Renovation-Project/Church-Renovation-Project-004.jpg')
          }
        ]
      } else if(i == 2){
        //Custom-Railings
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-01.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-02.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-03.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Custom-Railings/Custom-Railings-1-05.jpg')
          }
        ]
      } else if(i == 3){
        //Gold-Line-Interior-Reno-Project
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project-003.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Gold-Line-Interior-Reno-Project/Gold-Line-Interior-Reno-Project-004.jpg')
          }
        ]
      } else if(i == 4){
        //Other-Steel-Work-Projects
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Other-Steel-Work-Projects/Other-Steel-Work-Projects-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Other-Steel-Work-Projects/Other-Steel-Work-Projects-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Other-Steel-Work-Projects/Other-Steel-Work-Projects-003.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Other-Steel-Work-Projects/Other-Steel-Work-Projects-129.jpg')
          }
        ]
      } else if(i == 5){
        //staff
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/staff/Employees-1.jpg')
          },
          {
            src: require('@/assets/ProjectWork/staff/Employees-2.jpg')
          },
          {
            src: require('@/assets/ProjectWork/staff/Employees-3.jpg')
          },
          {
            src: require('@/assets/ProjectWork/staff/Workers-1.jpg')
          }
        ]
      } else if(i == 6){
        //Stouffville-High-School-Project
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Stouffville-High-School-Project/Stouffville-High-School-Project-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Stouffville-High-School-Project/Stouffville-High-School-Project-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Stouffville-High-School-Project/Stouffville-High-School-Project-003.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Stouffville-High-School-Project/Stouffville-High-School-Project-084.jpg')
          }
        ]
      } else if(i == 7){
        //Waterloo-University-Project
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Waterloo-University-Project/Waterloo-University-Project-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Waterloo-University-Project/Waterloo-University-Project-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Waterloo-University-Project/Waterloo-University-Project-003.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Waterloo-University-Project/Waterloo-University-Project-041.jpg')
          }
        ]
      } else if(i == 8){
        //Work-Shop-Jobs
        this.fotosDialog= [
            {
            src: require('@/assets/ProjectWork/Work-Shop-Jobs/Work-Shop-Jobs-001.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Work-Shop-Jobs/Work-Shop-Jobs-002.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Work-Shop-Jobs/Work-Shop-Jobs-022.jpg')
          },
          {
            src: require('@/assets/ProjectWork/Work-Shop-Jobs/Work-Shop-Jobs-003.jpg')
          }
        ]
      }
    }
  }

}
</script>