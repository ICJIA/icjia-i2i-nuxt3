<template>
  <div>
    <v-container fluid
      ><v-row
        ><v-col>
          <h1>This is the home page</h1>
          <Test></Test></v-col></v-row
    ></v-container>
    <!-- <v-no-ssr>
      <h2>Breakpoint/Display config (client-only)</h2>

      <pre> {{ $vuetify.display }}</pre>

      <br />

      <h2>App config</h2>
      {{ appConfig }}
      <h2>Sitemap</h2>
      Click to view <a href="/sitemap.xml">sitemap.xml</a>
    </v-no-ssr> -->
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const appConfig = useAppConfig();

onMounted(() => {
  console.log("page mounted");
});
</script>

<style lang="scss" scoped></style>
