<template>
  <v-main class="main">
    <div class="contenedorHome">
      <v-row class="mt-12">
        <div class="bg-steel">
          <v-col md="8">
            <h4 class="titulos-home">Reinforcement</h4>
            <div class="divisor-titulos"></div>
            <p class="parrafos-home">
              We have been a leading force in the steel construction industry offering bar reinforcement, reinforcing wire mesh, cutting and welding proving a fast installation service int Toronto and surrounding areas.</p>
              <p class="parrafos-home">
Our years of experience in the steel industry will help accelerate your construction project – saving you time and money.</p>
              <p class="parrafos-home">
Our take pride in having high product quality standards to help meet today’s challenges of shortening project times and pressure.
            </p>
          </v-col>
          <v-col md="4"></v-col>
        </div>
      </v-row>
      <!-- carrusel -->
      <!-- Container for the image gallery -->
      <div class="container-carrusel">
        <!-- Full-width images with number text -->
        <div class="mySlides vista">
          <div class="numbertext">1 / 3</div>
          <img
            src="@/assets/img/services/reinforcement/Church-Renovation-Project-019.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 3</div>
          <img
            src="@/assets/img/services/reinforcement/Other-Steel-Work-Projects-150.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 3</div>
          <img
            src="@/assets/img/services/reinforcement/Other-Steel-Work-Projects-181.jpg"
            style="width: 100%"
          />
        </div>
        <!-- Next and previous buttons -->
        <a class="prev blanco" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next blanco" onclick="plusSlides(1)">&#10095;</a>

        <!-- Image text -->
        <div class="caption-container">
          <p id="caption">Other steel work projects</p>
        </div>

        <!-- Thumbnail images -->
        <v-row>
          <v-col>
            <img
              class="demo cursor active"
              src="@/assets/img/services/reinforcement/Church-Renovation-Project-019.jpg"
              style="width: 100%"
              onclick="currentSlide(1)"
              alt="Other steel work projects"
            />
          </v-col >
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/reinforcement/Other-Steel-Work-Projects-150.jpg"
              style="width: 100%"
              onclick="currentSlide(2)"
              alt="Other steel work projects"
            />
          </v-col >
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/reinforcement/Other-Steel-Work-Projects-181.jpg"
              style="width: 100%"
              onclick="currentSlide(3)"
              alt="Other steel work projects"
            />
          </v-col >
        </v-row>
      </div>
      <!-- fin carrusel -->
    </div>
  </v-main>
</template>


<script>

// import about from '@/views/About.vue'

export default {
  components:{
    // about
  }

}
</script>

<style>

</style>