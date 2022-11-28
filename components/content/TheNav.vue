<template>
  <div>
    <v-app-bar color="grey darken-1" elevation="4">
      <template #prepend>
        <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title here</v-app-bar-title>
      <v-btn to="/" class="hidden-sm-and-down">Home</v-btn>
      <v-btn to="/page/about" class="hidden-sm-and-down">About</v-btn>

      <v-btn to="/page" class="hidden-sm-and-down">Page</v-btn>
      <v-btn to="/sandbox" class="hidden-sm-and-down">Sandbox</v-btn>

      <template #append>
        <v-btn icon class="hidden-md-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
