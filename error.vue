<template>
  <div style="background: #eee; min-height: 100vh">
    <v-container class="text-center" fill-height fluid>
      <v-row align="center" justify="center"
        ><v-col>
          <h1 style="font-size: 80px">{{ errorObj.error.statusCode }}</h1>
          <p>{{ errorObj.error.statusMessage }}.</p>

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
const errorObj = ref(props);

const handleError = () => clearError({ redirect: "/" });
</script>
