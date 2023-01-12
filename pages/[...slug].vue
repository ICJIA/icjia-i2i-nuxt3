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

const desc = ref(data.value.summary);

useHead({
  meta: [
    {
      hid: "og-image",
      property: "og:image",
      content:
        "https://i2i.icjia-api.cloud/uploads/thumbnail_i2i_logo_text_small_3c874143bd.png?updated_at=2022-12-06T17:57:54.755Z",
    },
    {
      hid: "og-image-width",
      property: "og:image:width",
      content: "1200",
    },
    {
      hid: "og-image-height",
      property: "og:image:height",
      content: "630",
    },
    {
      hid: "description",
      name: "description",
      content: desc,
    },
    {
      hid: "og-desc",
      property: "og:description",
      content: desc,
    },
  ],
});
</script>

<template>
  <div class="pb-12" data-aos="fade-in">
    <v-container fluid style="margin: 0; padding: 0"
      ><v-row
        ><v-col cols="12" :md="cols" class="px-12">
          <div v-if="data" class="mt-6">
            <h1>{{ data.title.toUpperCase() }}</h1>
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
            margin-top: 12px;
            margin-bottom: -35px;
            border-left: 1px solid #ddd;
            z-index: 1;
            margin-right: 0;
            padding-right: 0;
          "
          class="hidden-sm-and-down elevation-0"
        >
          <!-- TOC HERE -->
          <TheTableOfContents :data="data.body.toc" class="toc" />
        </v-col> </v-row
    ></v-container>
  </div>
</template>
