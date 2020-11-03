<template>
  <v-main class="main">
    <div class="contenedorHome">
      <v-row class="mt-12">
        <div class="bg-steel">
          <v-col md="8">
            <h4 class="titulos-home">Structural Steel Erectors</h4>
            <div class="divisor-titulos"></div>
            <p class="parrafos-home">
              Our trained team of certified professionals install steel by
              safety assembling rigging gear to erect and dismantle structural
              steel frames from buildings and other structures.
            </p>
            <p class="parrafos-home">
              We conduct all work to the very highest industry and safety
              standards and assess each site according to specific requirements.
              Removal of any potential hazards prior to the commencement of
              work.
            </p>
          </v-col>
          <v-col md="4"></v-col>  
          <v-col md="8">
            <h4 class="titulos-home">
              We have erected steel structures for many projects, including:
            </h4>
            <div class="divisor-titulos"></div>
            <ul class="iconos-lista">
              <li>
                Attaching slinging gear to hoist up equipment and objects to be
                moved using clamps, hooks, bolts & knots
              </li>
              <li>
                Creating support braces and components to reinforcing steel into
                position Attach pulleys and blocks to fixed overhead structures,
                and installing cables and attaching counterweights
              </li>
              <li>
                Attach pulleys and blocks to fixed overhead structures, and
                installing cables and attaching counterweights
              </li>
              <li>
                Setting up equipment to raise and position girders, plates,
                columns and other steel units
              </li>
              <li>
                Erecting guard rails, guy wires, ropes and clears, laying planks
                and hanging safety nets
              </li>
            </ul>
          </v-col>
          <v-col md="4"></v-col>
        </div>
      </v-row>
      <!-- carrusel -->
      <!-- Container for the image gallery -->
      <div class="container-carrusel">
        <!-- Full-width images with number text -->
        <div class="mySlides vista">
          <div class="numbertext">1 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-028.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-209.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-114.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-126.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-110.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 6</div>
          <img
            src="@/assets/img/services/structural/Other-Steel-Work-Projects-111.jpg"
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
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-028.jpg"
              style="width: 100%"
              onclick="currentSlide(1)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-209.jpg"
              style="width: 100%"
              onclick="currentSlide(2)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-114.jpg"
              style="width: 100%"
              onclick="currentSlide(3)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-126.jpg"
              style="width: 100%"
              onclick="currentSlide(4)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-110.jpg"
              style="width: 100%"
              onclick="currentSlide(5)"
              alt="Other steel work projects"
            />
          </v-col>
          <v-col>
            <img
              class="demo cursor"
              src="@/assets/img/services/structural/Other-Steel-Work-Projects-111.jpg"
              style="width: 100%"
              onclick="currentSlide(6)"
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
  components: {
    // about
  },
};
</script>

<style>
</style>