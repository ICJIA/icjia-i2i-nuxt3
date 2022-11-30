<template>
  <v-app id="i2i">
    <!-- <TheNav></TheNav> -->
    <AltNav></AltNav>
    <TheSidebar></TheSidebar>

    <NuxtLoadingIndicator color="blue" />
    <v-main class="markdown-body">
      <NuxtPage></NuxtPage>
      <div></div>
    </v-main>
  </v-app>
</template>

<script setup>
// Get all request headers
// const headers = useRequestHeaders();
useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const altState = useNavToggle();

const click = () => {
  console.log("click");
  // if (altState.value) altState.value = false;
};
</script>
