<template>
  <div>
    <v-container
      class="text-center"
      fill-height
      fluid
      style="background: #eaeaea; min-height: 100vh"
    >
      <v-row align="center" justify="center"
        ><v-col class="mt-12">
          <h1 style="font-size: 120px; color: #bbb">
            {{ errorObj.error.statusCode }}
          </h1>
          <p>
            <strong>{{ errorObj.error.statusMessage.split(":")[0] }}</strong>
          </p>

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
