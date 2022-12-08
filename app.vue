<template>
  <v-app id="appTop">
    <TheNav></TheNav>
    <TheSidebar></TheSidebar>
    <TheTranslationModal></TheTranslationModal>

    <NuxtLoadingIndicator color="blue" />
    <v-main class="markdown-body" style="min-height: 90vh !important">
      <NuxtPage></NuxtPage>
      <div></div>
    </v-main>

    <TheFooter></TheFooter>
  </v-app>
</template>

<script setup>
// import { Thumbor } from "./utils/thumbor.js";

// const thumbor = new Thumbor("TEST", "https://image.icjia.cloud");
// console.log(thumbor.setImagePath().buildUrl());

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
