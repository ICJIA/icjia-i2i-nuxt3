<template>
  <v-app id="appTop">
    <TheNav></TheNav>
    <TheSidebar></TheSidebar>

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
const key = useThumbor("test");
console.log(key);
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
