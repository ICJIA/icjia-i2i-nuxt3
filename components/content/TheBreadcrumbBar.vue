<template>
  <div
    style="
      background: #143b89;
      border-bottom: 1px solid #aaa;
      font-size: 13px;
      z-index: 99999;
    "
    class="text-left pr-5 pl-5 py-1 elevation-0"
  >
    <nuxt-link to="/" class="breadcrumb-link" style="color: orange"
      >i2i HOME</nuxt-link
    >
    <span style="color: #fff; font-weight: 900"
      >&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</span
    >
    <span style="color: orange; font-weight: 300; font-size: 12px">{{
      makeTitle(route.path.toUpperCase())
    }}</span>
  </div>
</template>

<script setup>
const route = useRoute();

const makeTitle = (slug) => {
  // remove initial slash
  slug = slug.replace(/^\/+/, "");
  const words = slug.split("-");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
};
</script>
