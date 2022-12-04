<template>
  <!-- <div style="border-top: 1px solid #ddd">
    <v-app-bar height="35" scroll-threshold="0" color="#11568e" app>
      <v-tabs
        v-model="contextTab"
        show-arrows
        centered
        center-active
        height="35"
        optional
        dark
        class="context px-3"
      >
        <v-tabs-slider color="white"></v-tabs-slider>

        <v-tab
          v-for="(item, index) in contextMenu[0].items"
          :key="index"
          style="background: #11568e !important; color: #fff !important"
        >
          {{ item.label }}
          <v-icon v-if="item.icon" right small>{{ item.icon }}</v-icon>
        </v-tab>
      </v-tabs>
      {{ navMenu }}
    </v-app-bar>
  </div> -->
  <div>
    <div
      variant="text"
      class="text-center pt-2 pb-2 footer-bg"
      style="justify-content: space-around"
    >
      <span v-for="(item, index) in navMenu" :key="index" class="context-link">
        <NuxtLink :to="item.link" class="context-link">{{
          item.main
        }}</NuxtLink>
        <span v-if="menuLength - 1 !== index"> | </span>
      </span>
    </div>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
const navMenu = JSON.parse(JSON.stringify(appConfig.footerMenu));
const menuLength = navMenu.length;
</script>

<style scoped>
a.context-link {
  font-family: "Raleway" !important;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  padding: 0 5px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

a.context-link:hover {
  /* text-decoration: underline; */
  color: #aaa;
}
.footer-bg {
  background: #11568e;
  min-width: 100%;
  color: #fff;
  font-size: 12px;
  font-weight: 900;
}
</style>
