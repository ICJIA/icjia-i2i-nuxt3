<template>
  <div>
    <v-card prepend-icon="mdi-home" style="width: 100%">
      <template #title> This is a javascript Vue Component </template>

      <v-card-text>
        Labore Lorem pariatur reprehenderit ipsum duis magna magna. Incididunt
        irure mollit ex enim sint exercitation in anim labore dolor commodo
        aute. Sint nisi et ullamco nostrud culpa. Est non dolor ut ullamco velit
        nulla ad qui. In duis amet proident aliqua proident eu tempor dolore
        minim sit id est Lorem. Elit ex cillum elit ad labore officia cillum
        quis anim id dolor minim ad. Quis ad id culpa anim nisi proident nostrud
        incididunt ea quis in nostrud.
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
console.log(config);
console.log("env apiBase: ", config.public.apiBase);
</script>

<style lang="scss" scoped></style>
