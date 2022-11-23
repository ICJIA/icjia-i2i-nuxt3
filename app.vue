<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<script setup>
// Get all request headers
const headers = useRequestHeaders();
console.log(headers);
</script>
