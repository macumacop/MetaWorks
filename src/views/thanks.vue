<template>
    <div class="contenedorHome">
                <h1 class="thanks-title">Thanks You</h1>
                <v-img class="logo" width="70%" src="../assets/Logo-brand.jpg"></v-img>
        <v-row>
            <v-col offset="2">
                <v-btn class="success btn-back" onclick="window.location.href='https://fbmetalworks.com/';">Come To Our Site</v-btn>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.text{
    width: 100%;
    text-align: center !important;
    margin: 0 auto;
}
.btn-back{
    text-align: center;
    margin-top: 50px;
    width: 80%;
}
.thanks-title{
margin-top: 50px;
   text-align: center;
}
.logo{
    margin: 0 auto;
    margin-top: 100px;
}
</style>