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
  <v-container class="mt-6"
    ><v-row
      ><v-col>
        <div v-if="data">
          <ContentDoc :key="data.title" :value="data" class="markdown-body">
            <template #empty>Document not found</template>
            <template #not-found>Document not found</template>
          </ContentDoc>
        </div>
        <div v-else>{{ redirect() }}</div>
      </v-col></v-row
    ></v-container
  >
</template>
