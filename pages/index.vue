<template>
  <NuxtLayout name="home">
    <v-container
      ><v-row
        ><v-col>
          <h1>This is the home page</h1>
          <Test></Test></v-col></v-row
    ></v-container>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const appConfig = useAppConfig();

onMounted(() => {
  console.log("page mounted");
});
</script>

<style lang="scss" scoped></style>
