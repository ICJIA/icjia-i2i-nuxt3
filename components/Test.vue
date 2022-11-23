<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" width="400" prepend-icon="mdi-home">
            <template #title> This is a title </template>

            <v-card-text> This is the content. </v-card-text>
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
