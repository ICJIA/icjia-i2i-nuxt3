<template>
  <v-app id="appTop">
    <TheNav></TheNav>

    <TheSidebar></TheSidebar>
    <TheTranslationModal v-if="isTranslationEnabled"></TheTranslationModal>

    <NuxtLoadingIndicator color="blue" />

    <v-main class="markdown-body" style="min-height: 90vh !important">
      <NuxtPage></NuxtPage>
      <div></div>
    </v-main>

    <TheFooter></TheFooter>
  </v-app>
</template>

<script setup>
const { isTranslationEnabled } = useAppConfig();
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
