<template>
  <v-main class="main">
    <div class="contenedorHome">
      <v-row class="mt-12">
        <div class="bg-steel">
          <div class="col-md-8">
            <h4 class="titulos-home">Structural Steel Erectors</h4>
            <div class="divisor-titulos"></div>
            <p class="parrafos-home">
              Certified professional welders at FB Metal Work, ensure quality
              control of welded products, ease of technical documentation
              handling, rigid application of welding procedures and technical
              standards, and monitoring of welders in their daily tasks. The
              characteristics of our welding process displays flexibility,
              allows for welding low alloy steels, and most often used for
              heat-resistant steel, leaving behind a smoother finish .
            </p>
            <p class="parrafos-home">
              In order to ensure quality services, the welding staff of FB Metal
              Work is hand selected with strict criteria and high
              qualifications. We help train our staff/employees to improve their
              specialties and strengths. Workers have the ability to easily read
              and handle documentation, apply safe procedures/standards and also
              monitor their daily welding tasks.
            </p>
            <ul>
              <li>Welding Service can be contracted separately</li>
              <li>Budget request response within 24 hours</li>
              <li>One of the best market delivery times</li>
              <li>Competitive prices</li>
            </ul>
          </div>
        </div>
      </v-row>
      <!-- carrusel -->
      <!-- Container for the image gallery -->
      <div class="container-carrusel">
        <!-- Full-width images with number text -->
        <div class="mySlides vista">
          <div class="numbertext">1 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-035.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-058.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-105.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-178.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Stouffville-High-School-Project-048.jpg"
            style="width: 100%"
          />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 6</div>
          <img
            src="@/assets/img/services/structural-steel-w/Work-Shop-Jobs-024.jpg"
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
        <div class="row">
          <div class="column">
            <img
              class="demo cursor active"
              src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-035.jpg"
              style="width: 100%"
              onclick="currentSlide(1)"
              alt="Other steel work projects"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-058.jpg"
              style="width: 100%"
              onclick="currentSlide(2)"
              alt="Other steel work projects"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-105.jpg"
              style="width: 100%"
              onclick="currentSlide(3)"
              alt="Other steel work projects"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="@/assets/img/services/structural-steel-w/Other-Steel-Work-Projects-178.jpg"
              style="width: 100%"
              onclick="currentSlide(4)"
              alt="Other steel work projects"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="@/assets/img/services/structural-steel-w/Stouffville-High-School-Project-048.jpg"
              style="width: 100%"
              onclick="currentSlide(5)"
              alt="Other steel work projects"
            />
          </div>
          <div class="column">
            <img
              class="demo cursor"
              src="@/assets/img/services/structural-steel-w/Work-Shop-Jobs-024.jpg"
              style="width: 100%"
              onclick="currentSlide(6)"
              alt="Other steel work projects"
            />
          </div>
        </div>
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