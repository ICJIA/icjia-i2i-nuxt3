<template><div></div></template>

<script setup>
const route = useRoute();
const router = useRouter();

const URIEncodedPath = encodeURIComponent(route.path);
console.log("URIEncodedPath:", URIEncodedPath);

(function () {
  router.push({
    name: `404`,
    query: { referrer: URIEncodedPath },
  });
})();
</script>

<style lang="scss" scoped></style>
