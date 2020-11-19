<template>
  <v-main class="main">
    <div class="contenedorHome mt-12">
      <h4 class="titulos-home">Contact Us</h4>
      <div class="divisor-titulos"></div>
    </div>
    <div class="bgImage">
      <div class="contenedorHome">
        <v-row>
        <v-col cols="12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8555414159896!2d-79.48913998427317!3d43.81735574981764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2e96821d910d%3A0x4e60b0e43060df1e!2sMETAL%20WORKS!5e0!3m2!1ses!2sco!4v1605741711843!5m2!1ses!2sco" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </v-col>
        </v-row>
        <v-row>
        <v-col md="6">
          <h2 class="tittle-form">Location & Contact Details</h2>
          <p class="tittle-form-2">Address:</p>
          <p class="span-form">3-96 Brandwick Dr. Concord ON L4K 1K8</p>
          <p class="tittle-form-2">Phone numbers:</p>
          <p class="span-form">Office: (416) 990-6531</p>
          <p class="tittle-form-2">Fax:</p>
          <p class="span-form">(905) 761-9461</p>
          <p class="tittle-form-2">We are open:</p>
          <p class="span-form">Monday - Friday 7:00 am to 5:00 pm</p>
          <p class="tittle-form-2">Email:</p>
          <p class="span-form">service@fbmetalworks.com</p>
        </v-col>
        <v-col md="6">
          <div id="formulario">
            <form name="contactform" method="post" action="send_form_email.php">
                <v-text-field label="Name" outlined name="first_name" required color="orange" ></v-text-field>
                <v-text-field label="Phone" outlined name="cel" color="orange"></v-text-field>
                <v-text-field label="E-mail" outlined name="email" required color="orange"></v-text-field>
                <v-textarea outlined name="cuentanos" label="message" class="text-input" maxlength="200" color="orange" ></v-textarea>
                <v-btn type="submit" value="Enviar" id="enviar" class="success mt-2">SEND</v-btn>
            </form>
        </div>
        </v-col>
        </v-row>
    </div>
    </div>
  </v-main>
</template>
<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    rules: [v => v.length <= 25 || 'Max 25 characters'],
    value: 'Comunicanos tus intereses!',
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({

      name: '',
      email: '',
      select: null
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {
        console.log(validationMixin)
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>