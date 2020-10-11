<template>
    <v-main class="main">
        <div class="contenedorHome mt-12">
        <h4 class="titulos-home">Contact Us</h4>
        <div class="divisor-titulos"></div>
    </div>
    <div class="bgImage">
        <v-img  contain src="@/assets/ContactUs/Grupo42.png"></v-img>
        <div class="Form">
        <v-img  height="200px" cover src="@/assets/img/mymaps-desktop-16x9.png"></v-img>
        <v-row>
          <v-col>
            <h4>Location & conact Details</h4>
          </v-col>
          <v-col>
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