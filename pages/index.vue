<template>
  <v-no-ssr>
    <div>
      <v-container fluid
        ><v-row
          ><v-col>
            <h1>This is the home page</h1>
            <Test></Test></v-col></v-row
      ></v-container>
      <h2>Display config (resize to see reactive changes)</h2>

      <pre> {{ $vuetify.display }}</pre>

      <br />
      <!-- Screen xxl: {{ xxl }}<br />
    Screen xl: {{ xl }}<br />
    Screen lg: {{ lg }}<br />
    Screen md: {{ md }}<br />
    Screen sm: {{ sm }}<br />
    Screen xs: {{ xs }}<br /> -->
      <h2>App config</h2>
      {{ appConfig }}
      <h2>Sitemap</h2>
      Click to view <a href="/sitemap.xml">sitemap.xml</a>
    </div>
  </v-no-ssr>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { onMounted } from "vue";
const { xs, sm, md, lg, xl, xxl } = useDisplay();
const appConfig = useAppConfig();
</script>

<style lang="scss" scoped></style>
