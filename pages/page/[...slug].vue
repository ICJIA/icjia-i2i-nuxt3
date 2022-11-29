<script setup>
definePageMeta({
  middleware: ["is-valid-content"],
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
  <div>
    <v-container fluid
      ><v-row
        ><v-col>
          <div v-if="data" class="mt-6">
            <ContentDoc :key="data?.title" :value="data" class="markdown-body">
              <template #empty>Document not found</template>
              <template #not-found>Document not found</template>
            </ContentDoc>
          </div>
          <div v-else>{{ redirect() }}</div>
          <!-- <div v-if="data">
            {{ data }}
          </div> -->
        </v-col></v-row
      ></v-container
    >
  </div>
</template>
