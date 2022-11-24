<script setup>
definePageMeta({
  middleware: ["post"],
});
const { path } = useRoute();
const router = useRouter();

// const error = useError();
const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();
  return post;
});
const redirect = () => {
  router.push("/404");
};
</script>

<template>
  <main>
    <div v-if="data">
      <ContentDoc :key="data.title" :value="data">
        <template #empty></template>
      </ContentDoc>
    </div>
    <div v-else>{{ redirect() }}</div>
  </main>
</template>
