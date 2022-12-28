<template>
  <div>
    <keep-alive>
      <v-container class="mb-12"
        ><v-row
          ><v-col>
            <h1>Search</h1>
            <div class="text-right">Found: {{ result.length }}</div>

            <v-form class="pl-2 mt-4" style="margin-top: -15px">
              <v-text-field
                id="textfield"
                ref="textfield"
                v-model="query"
                clearable
                label="Search i2i"
                placeholder="Enter search term"
                style="font-weight: 900"
                @input="instantSearch"
              />
            </v-form>

            <div class="text-center">
              <v-btn
                class="mr-3"
                color="blue-darken-4"
                @click.prevent="clearAll"
                >Clear</v-btn
              >
            </div>
            <div v-if="result && query?.length" class="mt-10">
              <!-- <div class="text-center">
                <h2>Search results:</h2>
              </div> -->
              <div v-if="result.length">
                <v-card
                  v-for="(result, index) in result"
                  :key="`fuse-${index}`"
                  class="px-5 py-5 mx-5 my-10 hover text-left info-card"
                  elevation="2"
                  color="grey-lighten-4"
                  @click="navigateTo(result.item)"
                >
                  <div
                    class="text-right mb-8"
                    style="font-weight: 900; font-size: 11px; color: #0657a8"
                  >
                    {{ result.item.url }}
                  </div>
                  <h2 style="border-bottom: 0px">{{ result.item.title }}</h2>
                  <p class="mt-2">{{ result.item.summary }}</p>
                  <!-- <p>{{ result.item }}</p> -->
                  <!-- <p
                    style="
                      font-size: 11px;
                      font-weight: 900;
                      border: 1px solid #ccc;
                      display: inline-block;
                      float: right;
                      padding: 5px;
                      background: #ddd;
                      color: #000;
                    "
                    class="mt-2"
                  >
                    Score: {{ result.score }}
                  </p> -->
                </v-card>
              </div>
            </div>
          </v-col></v-row
        ></v-container
      >
    </keep-alive>
  </div>
</template>

<script setup>
import Fuse from "fuse.js";
import searchIndex from "~/assets/json/searchIndex.json";

useHead({
  title: "Search",
});

const options = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  findAllMatches: true,
  minMatchCharLength: 2,
  location: 0,
  threshold: 0.4,
  distance: 500,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  keys: ["title", "slug", "summary", "searchMeta", "rawText"],
};
const query = ref("");

const fuse = new Fuse(searchIndex, options);

const result = ref(fuse.search(query.value.toLowerCase));

const instantSearch = () => {
  result.value = fuse.search(query.value);
};

const showIndex = ref(false);
const toggleIndex = () => {
  showIndex.value = !showIndex.value;
};

watch(query, (val) => {
  if (!val) {
    result.value = [];
  }
});

const router = useRouter();
const navigateTo = (item) => {
  console.log("navigateTo: ", item?.path);
  router.push({ path: item.path });
};

const clearAll = () => {
  query.value = "";
  result.value = [];
  showIndex.value = false;
  const el = document.getElementById("textfield");
  el.focus();
};

onMounted(() => {
  const el = document.getElementById("textfield");
  el.focus();
});
</script>

<style lang="scss" scoped></style>
