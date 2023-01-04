<template>
  <div
    style="
      background: #e5910b;

      font-size: 14px;
      z-index: 99999;
    "
    class="text-left pr-5 pl-5 py-1 elevation-5"
  >
    <nuxt-link to="/" class="breadcrumb-link" style="color: #000"
      >i2i HOME</nuxt-link
    >
    <span style="color: #000; font-weight: 900"
      >&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</span
    >
    <span style="color: #000; font-weight: 400; font-size: 13px">{{
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
