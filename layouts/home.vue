<template>
  <div class="bg_black">
    <HomeSplash> </HomeSplash>
    <!-- <v-img
      src="https://r3.icjia-api.cloud/uploads/i2i_small_transparent_removebg_preview_b5502a4acd.png"
      width="125"
      alt="i2i logo"
      class="mx-auto logo"
    /> -->

    <slot />
  </div>
</template>

<style>
.bg_black {
}
.logo {
  background: none;
}
</style>
