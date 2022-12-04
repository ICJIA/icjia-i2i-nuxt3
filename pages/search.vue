<template>
  <div>
    <h1>This is the search page</h1>

    <h2>Search index (from /site.json):</h2>
    {{ siteContent }}
  </div>
</template>

<script setup>
import siteContent from "../public/site.json";
</script>

<style lang="scss" scoped></style>
