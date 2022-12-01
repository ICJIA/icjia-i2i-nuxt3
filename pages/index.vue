<template>
  <NuxtLayout name="home">
    <div v-if="data && isMounted">
      <ContentDoc :key="data?.title" :value="data" class="markdown-body mt-12">
        <template #empty>Document not found</template>
        <template #not-found>Document not found</template>
      </ContentDoc>
    </div>
  </NuxtLayout>
</template>

<script setup>
const { path } = useRoute();
const router = useRouter();
const isMounted = ref(false);

// const error = useError();
const { data } = await useAsyncData(`content-home`, async () => {
  const post = await queryContent().where({ _path: "/" }).findOne();
  return post;
});
const redirect = () => {
  router.push("/404");
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<style>
.white-heading {
  color: #fff !important;
}
.dark-rule {
  border-bottom: 1px solid #000 !important;
}
.cohort-box {
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 50px 25px 50px 25px;
  background: #eee;
  color: #222;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.cohort-header {
  font-size: 34px !important;
  font-weight: 900 !important;
}
</style>
