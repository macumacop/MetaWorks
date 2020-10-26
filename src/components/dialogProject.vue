<template>
    <div>
        {{dialog}}
        <v-dialog v-model="dialog">

        </v-dialog>
    </div>
</template>
<script>
export default {
    props:
    'dialog'
}
</script>