<template>
  <v-app id="i2i">
    <TheNav></TheNav>

    <NuxtLoadingIndicator color="blue" />
    <v-main class="markdown-body">
      <NuxtPage></NuxtPage>
      <div></div>
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


