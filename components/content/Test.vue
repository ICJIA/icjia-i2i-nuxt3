<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
            <template #title> This is a Vue Component </template>

            <v-card-text>
              Labore Lorem pariatur reprehenderit ipsum duis magna magna.
              Incididunt irure mollit ex enim sint exercitation in anim labore
              dolor commodo aute. Sint nisi et ullamco nostrud culpa. Est non
              dolor ut ullamco velit nulla ad qui. In duis amet proident aliqua
              proident eu tempor dolore minim sit id est Lorem. Elit ex cillum
              elit ad labore officia cillum quis anim id dolor minim ad. Quis ad
              id culpa anim nisi proident nostrud incididunt ea quis in nostrud.
            </v-card-text>
          </v-card>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
const color = useColor();

console.log("env : ", config.public.apiBase);
console.log("color: ", color.value);
</script>

<style lang="scss" scoped></style>
