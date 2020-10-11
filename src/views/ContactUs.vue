<template>
    <v-main class="main">
        <div class="contenedorHome mt-12">
        <h4 class="titulos-home">Contact Us</h4>
        <div class="divisor-titulos"></div>
    <div class="bgImage pl-12 pr-12"  >
        <v-row>
          <v-col md="12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5757.672488219479!2d-79.48735!3d43.817756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e96b6de35f9%3A0xdef394cb2d47fddf!2s296%20Bradwick%20Dr%2C%20Concord%2C%20ON%20L4K%201K8!5e0!3m2!1ses-419!2sca!4v1602384718864!5m2!1ses-419!2sca" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </v-col>
          <v-col md="6" xs="12" sm="12">
            <h2 class="tittle-form">Location & conact Details</h2>
            <h2 class="tittle-form">Address:</h2>
            <h3 class="span-form">96 Bradwick Dr., Unit 3 Vaughan, L4K 1k8</h3>
            <h2 class="tittle-form">Phone numbers:</h2>
            <h3 class="span-form">Office: (416) 990-6531 </h3>
            <h2 class="tittle-form">Email:</h2>
            <h3 class="span-form">fbmetalworks@outlook.com</h3>
            <h2 class="tittle-form"> We are open:</h2>
            <h3 class="span-form">Monday - Friday 7:00 am to 5:00 pm </h3>
            <h2 class="tittle-form">Fax:</h2>
            <h3 class="span-form">(905) 761-9461 </h3>
          </v-col>
          <v-col md="6" xs="12" sm="12">
            <form>
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
              ></v-text-field>
              <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
              ></v-select>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>

              <v-btn
                class="mr-4"
                @click="submit"
              >
                submit
              </v-btn>
              <v-btn @click="clear">
                clear
              </v-btn>
            </form>
          </v-col>
        </v-row>
    </div>
  </div>
</v-main>
</template>
<script>
export default {
    data: () => ({
  }),    
}
</script>