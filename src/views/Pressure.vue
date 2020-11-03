<template>
  <v-main class="main">
    <div class="contenedorHome">
      <v-row class="mt-12">
        <div class="bg-steel">
          <v-col md="8">
            <h4 class="titulos-home">Pressure Vessels</h4>
            <div class="divisor-titulos"></div>
            <p class="parrafos-home">
              Our qualified staff have the expertise to handle and install pressure vessels accurately.  We are capable of installing vessels in all shapes and sizes and have a long track record of reliable installations for public structures, buildings, etc, because we know our customers need it done right the first time.
            </p>
            <p class="parrafos-home">
              FB Metal Work installs these vessels using some of the best tools available on the market, ensuring the satisfaction of our customers and the growth of our company.
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
            src="@/assets/img/services/pressure/Pressure-Vessel-01.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 3</div>
          <img
            src="@/assets/img/services/pressure/Pressure-Vessel-02.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 3</div>
          <img
            src="@/assets/img/services/pressure/Pressure-Vessel-03.jpg"
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
              src="@/assets/img/services/pressure/Pressure-Vessel-01.jpg"
              style="width: 100%"
              onclick="currentSlide(1)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/pressure/Pressure-Vessel-02.jpg"
              style="width: 100%"
              onclick="currentSlide(2)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/pressure/Pressure-Vessel-03.jpg"
              style="width: 100%"
              onclick="currentSlide(3)"
              alt="Other steel work projects"
            />
          </v-col>
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