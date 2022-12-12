<template>
  <v-app id="appTop">
    <TheNav></TheNav>

    <TheSidebar></TheSidebar>
    <TheTranslationModal v-if="isTranslationEnabled"></TheTranslationModal>

    <NuxtLoadingIndicator color="blue" />

    <v-main class="markdown-body" style="min-height: 90vh !important">
      <!-- <TheBreadcrumbBar v-if="!isHome"></TheBreadcrumbBar> -->
      <NuxtPage></NuxtPage>
      <div></div>
    </v-main>

    <TheFooter></TheFooter>
  </v-app>
</template>

<script setup>
const { isTranslationEnabled } = useAppConfig();
const isHome = ref(true);
const route = useRoute();
watchEffect(() => {
  console.log("route.path: ", route.path);
  if (route.path === "/") {
    isHome.value = true;
  } else {
    isHome.value = false;
  }
});
useHead({
  htmlAttrs: {
    lang: "en",
  },
});

const page = useCurrentPage({ slug: "slug-here" });
console.log(page);
</script>
