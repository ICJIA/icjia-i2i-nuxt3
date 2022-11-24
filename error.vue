<template>
  <div>
    <div>
      <NuxtLink to="/">Home</NuxtLink> |
      <NuxtLink to="/about/">About</NuxtLink> |
      <NuxtLink to="/blog/">Blog</NuxtLink> |
      <NuxtLink to="/sandbox/">Sandbox</NuxtLink>
    </div>

    <v-container
      class="text-center"
      fill-height
      fluid
      style="background: #eee; min-height: 100vh"
    >
      <v-row align="center" justify="center"
        ><v-col>
          <h1 style="font-size: 80px">{{ errorObj.error.statusCode }}</h1>
          <p>{{ errorObj.error.statusMessage.split(":")[0] }}</p>

          <v-btn class="mt-8" @click="handleError">Go Home</v-btn>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
console.log("Error: ", props.error.statusCode);
console.log("Error URL: ", props.error.url);
const errorObj = ref(props);

const handleError = () => clearError({ redirect: "/" });
</script>
