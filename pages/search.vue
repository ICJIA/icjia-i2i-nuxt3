<template>
  <div>
    <h1>This is the search page</h1>

    <h2>Search index (from /site.json):</h2>
    <h3>Query: {{ query }}</h3>
    <div v-for="(result, index) in result" :key="`fuse-${index}`">
      <p>{{ result.item }}</p>
    </div>
  </div>
</template>

<script setup>
import Fuse from "fuse.js";
import searchIndex from "../public/searchIndex.json";
const options = {
  includeScore: true,
  // Search in `author` and in `tags` array
  keys: ["title", "summary", "body"],
};
const query = ref("");

// console.log(searchIndex);

const fuse = new Fuse(searchIndex, options);
// console.log(fuse);
const result = fuse.search((query.value = "body content"));
console.log("result: ", result);
</script>

<style lang="scss" scoped></style>
