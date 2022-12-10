<template>
  <v-img
    width="100%"
    :height="650"
    aspect-ratio="1"
    cover
    src="https://i2i.icjia-api.cloud/uploads/home_splash_01_min_00ad8df985.jpg?updated_at=2022-12-10T20:09:17.582Z"
    lazy-src="https://i2i.icjia-api.cloud/uploads/thumbnail_home_splash_01_min_00ad8df985.jpg?updated_at=2022-12-10T20:09:17.582Z"
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
          <div class="bg">
            <v-img
              width="100"
              class="mx-auto"
              src="https://i2i.icjia-api.cloud/uploads/small_i2i_Small_5fb05c84d5.png?updated_at=2022-12-10T20:08:14.156Z"
              lazy-src="https://i2i.icjia-api.cloud/uploads/thumbnail_i2i_Small_5fb05c84d5.png?updated_at=2022-12-10T20:08:14.156Z"
            />
          </div>
          <h1
            style="color: #fff; font-size: 55px !important; margin-top: 0px"
            class="hidden-sm-and-down"
          >
            Institute 2 Innovate
          </h1>

          <h1
            style="
              color: #fff;
              font-size: 25px !important;
              border-bottom: 0 !important;
            "
            class="hidden-md-and-up"
          >
            Institute to Innovate
          </h1>

          <div style="color: #fff; font-size: 16wpx; font-weight: 700" class="">
            <slot name="tagline"
              >Investing in Public Safety by Investing in You</slot
            >
            <br />
            <slot name="call-to-action">
              <span class="hidden-sm-and-down"><HomeButtons></HomeButtons></span
            ></slot>
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
  margin-top: 100px;
}

.bg {
  background-color: none;
}
.bg img {
  background: none;
}

@media only screen and (max-width: 600px) {
  .banner {
    height: 100%;
    background: rgba(79, 80, 79, 0.5);
  }
}
</style>
