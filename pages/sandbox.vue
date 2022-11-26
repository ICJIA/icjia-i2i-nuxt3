<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <h1>Sandbox here</h1>

          <h2>Global state test</h2>
          {{ state.navToggle }}
          <br />
          <v-btn id="nav" @click="toggle">Click me to toggle nav state</v-btn>
          <h2>Alt test with composable</h2>
          {{ altState }}
          <br />
          <v-btn id="nav" @click="altToggle"
            >Click me to toggle nav state</v-btn
          >
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
import { useGlobalState } from "~/global.js";

useHead({
  title: "My App",
});
const state = useGlobalState();

const toggle = () => {
  state.navToggle.value = !state.navToggle.value;
};
const altState = useNav();
const altToggle = () => {
  altState.value = !altState.value;
};
</script>

<style lang="scss" scoped></style>
