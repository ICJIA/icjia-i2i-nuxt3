<script setup>
definePageMeta({
  middleware: ["is-valid-content"],
});
const { path } = useRoute();
const router = useRouter();

const showTOC = ref(false);
const cols = ref(12);

// const error = useError();
const { data } = await useAsyncData(`content-${path}`, async () => {
  const post = await queryContent().where({ _path: path }).findOne();
  return post;
});
const redirect = () => {
  router.push("/404");
};

onMounted(() => {
  if (data.value.showTableOfContents) {
    showTOC.value = true;
    cols.value = 9;
    console.log("showTOC", showTOC.value);
  }
});
</script>

<template>
  <div>
    <v-container fluid
      ><v-row
        ><v-col cols="12" :md="cols">
          <div v-if="data" class="mt-6">
            <h1>{{ data.title }}</h1>
            <ContentDoc :key="data?.title" :value="data" class="markdown-body">
              <template #empty>Document not found</template>
              <template #not-found>Document not found</template>
            </ContentDoc>
          </div>
          <div v-else>{{ redirect() }}</div>
        </v-col>

        <v-col
          v-if="showTOC"
          cols="12"
          md="3"
          style="
            min-height: 110vh !important;
            background: #fafafa;
            margin-top: -25px;
            margin-bottom: -50px;
            border-left: 1px solid #e9e9e9;
          "
          class="hidden-sm-and-down"
        >
          <!-- TOC HERE -->
          <TheTableOfContents :data="data.body.toc" class="toc" />
        </v-col> </v-row
    ></v-container>
  </div>
</template>
