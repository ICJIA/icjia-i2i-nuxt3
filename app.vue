<template>
  <v-app id="i2i">
    <TheNav></TheNav>
    <NuxtLoadingIndicator color="blue" />
    <div class="markdown-body mt-12">
      <NuxtPage :transition="false"></NuxtPage>
    </div>
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
