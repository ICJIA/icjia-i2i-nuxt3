<template>
  <v-app id="i2i">
    <div>
      <NuxtLink to="/">Home</NuxtLink> | <NuxtLink to="/about/">About</NuxtLink>
    </div>
    <NuxtPage></NuxtPage>
  </v-app>
</template>

<script setup>
// Get all request headers
const headers = useRequestHeaders();
</script>
