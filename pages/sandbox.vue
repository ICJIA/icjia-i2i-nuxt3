<template>
  <div>
    <v-container fluid
      ><v-row
        ><v-col>
          <h1>Sandbox here</h1>

          <!-- <h2>Global state test</h2>
          {{ state.navToggle }}
          <br />
          <v-btn id="nav" @click="toggle">Click me to toggle nav state</v-btn> -->
          <h2>Alt state with composable</h2>
          {{ altState }}
          <br />
          <v-btn id="nav" @click="altToggle">Click me to toggle nav state</v-btn
          ><br />
          {{ counter }}
          <br />
          <v-btn id="nav" @click="counterUpdate">Click me</v-btn>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
import { useGlobalState } from "~/global.js";

useHead({
  title: "Sandbox",
});
const state = useGlobalState();

const toggle = () => {
  state.navToggle.value = !state.navToggle.value;
};
const altState = useNav();
const altToggle = () => {
  altState.value = !altState.value;
};
const counter = useSimpleCounter(15);
const counterUpdate = () => {
  counter.value = counter.value + 1;
};
console.log("counter: ", counter.value);
</script>

<style lang="scss" scoped></style>
