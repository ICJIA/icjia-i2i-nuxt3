<template>
  <div>
    <v-app-bar color="grey darken-1" app>
      <template #prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Title here</v-app-bar-title>
      <v-btn to="/">Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/blog">Blog</v-btn>
      <v-btn to="/redirect">404 redirect</v-btn>
      <!-- <template #append>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template> -->
    </v-app-bar>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
