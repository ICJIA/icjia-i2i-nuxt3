<template>
  <v-img
    width="100%"
    :height="550"
    cover
    src="https://agency.icjia-api.cloud/uploads/markus_winkler_a_Y_Pt_Ekn_Qm_XE_unsplash_0f61baccac.jpg"
    lazy-src="https://agency.icjia-api.cloud/uploads/thumbnail_markus_winkler_a_Y_Pt_Ekn_Qm_XE_unsplash_0f61baccac.jpg"
  >
    <template #placeholder>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular
          indeterminate
          color="blue darken-3"
          aria-label="Progress bar: Loading"
        ></v-progress-circular>
      </v-row>
    </template>

    <v-row align="center">
      <div class="banner">
        <v-col cols="12" class="text-center">
          <h1
            style="color: #fff; font-size: 40px !important; margin-top: 0px"
            class="hidden-sm-and-down"
          >
            <slot name="title">Main Title here</slot>
          </h1>

          <h1
            style="
              color: #fff;
              font-size: 25px !important;
              border-bottom: 0 !important;
            "
            class="hidden-md-and-up"
          >
            <slot name="title">Main Title here</slot>
          </h1>

          <div style="color: #fff; font-size: 16wpx; font-weight: 700" class="">
            <slot name="tagline">Tagline here</slot>
            <br />
            <slot name="call-to-action"><HomeButtons></HomeButtons></slot>
          </div>
        </v-col>
      </div>
    </v-row>
  </v-img>
</template>

<script setup lang="ts">
const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});
</script>

<style>
.splash-caption {
  font-size: 12px;
  margin-top: -15px;
  margin-bottom: 25px;
  color: #333;
}
.banner {
  width: 100%;
  background: rgba(79, 80, 79, 0.5);
  padding: 30px;
  margin-top: 150px;
}
@media only screen and (max-width: 600px) {
  .banner {
    height: 100%;
    background: rgba(79, 80, 79, 0.5);
  }
}
</style>
