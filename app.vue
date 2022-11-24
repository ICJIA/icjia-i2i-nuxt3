<template>
  <v-app id="i2i">
    <div>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about/">About</NuxtLink> |
      <NuxtLink to="/blog/">Blog</NuxtLink> |
      <NuxtLink to="/sandbox/">Sandbox</NuxtLink>
    </div>
    <div class="markdown-body">
      <NuxtPage></NuxtPage>
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
