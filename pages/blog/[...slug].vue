<script setup>
import { compileScript } from "@vue/compiler-sfc";

const { path } = useRoute();
const isError = ref();
isError.value = true;

const router = useRouter();

const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();

  if (Object.keys(post).length > 1) {
    isError.value = false;
    return post;
  } else {
    isError.value = true;
    showError({ statusCode: 404, statusMessage: "Page Not Found" });
  }
});
</script>

<template>
  <main>
    <div v-if="!isError && data">
      <ContentDoc :key="data.title" :value="data">
        <template #empty>
          <h1>Page not found</h1>
        </template>
      </ContentDoc>
    </div>

    <!-- <ContentRenderer v-if="data" :value="data"> </ContentRenderer> -->
  </main>
</template>
