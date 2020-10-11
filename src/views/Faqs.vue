<template>
    <v-main class="main">
        <div class="contenedorHome mt-12">
        <h4 class="titulos-home">OUR PROJECTS</h4>
        <div class="divisor-titulos"></div>
    </div>
    <div class="bgImage">
        <!-- <v-img  contain src="@/assets/img/banner@2x.png"></v-img> -->
        <v-expansion-panels class="expansionPanel">
            <v-expansion-panel
            v-for="(item, i) in items" :key="i" >
            <v-expansion-panel-header>
                {{item.Nombre}}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                {{item.Descripcion}}
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</v-main>
</template>
<script>
export default {
    data: () => ({
    items: [
          {
            Nombre:"Pregunta1",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestiae"
          },
          {
            Nombre:"Pregunta2",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
          {
            Nombre:"Pregunta3",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
          {
            Nombre:"Pregunta4",
            Descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere modi recusandae tempore vitae sit nam atque beatae molestia"
          },
        ],
  }),    
}
</script>