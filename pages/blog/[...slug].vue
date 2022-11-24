<script setup>
definePageMeta({
  middleware: ["post"],
});
const { path } = useRoute();

// const error = useError();
const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();
  return post;
});
</script>

<template>
  <main>
    <div v-if="data">
      <ContentDoc :key="data.title" :value="data">
        <template #empty>Empty</template>
      </ContentDoc>
    </div>
    <div v-else>Error</div>
  </main>
</template>
