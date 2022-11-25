<template>
  <v-app id="i2i">
    <TheNav></TheNav>
    <v-main class="markdown-body">
      <NuxtLoadingIndicator color="blue" :height="2" />
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
// Get all request headers
// const headers = useRequestHeaders();
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
