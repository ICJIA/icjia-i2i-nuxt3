<template>
  <v-app-bar color="grey darken-1" elevation="4" app fixed>
    <template #prepend>
      <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Title here</v-app-bar-title>
    <v-btn to="/" class="hidden-sm-and-down">Home</v-btn>
    <v-btn to="/about" class="hidden-sm-and-down">About</v-btn>
    <v-btn to="/contact" class="hidden-sm-and-down">Contact</v-btn>
    <v-btn to="/page" class="hidden-sm-and-down">Page</v-btn>
    <v-btn to="/sandbox" class="hidden-sm-and-down">Sandbox</v-btn>

    <template #append>
      <v-btn icon to="/search">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
const nav = useNav();
const toggleNav = () => {
  console.log("click menu icon");
  nav.value = !nav.value;
};
</script>

<style lang="scss" scoped></style>
