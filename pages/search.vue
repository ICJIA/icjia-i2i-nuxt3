<template>
  <div>
    <keep-alive>
      <v-container class="mb-12"
        ><v-row
          ><v-col>
            <h1>This is the search page</h1>
            <div class="text-right">Found: {{ result.length }}</div>

            <v-form class="pl-2 mt-4" style="margin-top: -15px">
              <v-text-field
                id="textfield"
                ref="textfield"
                v-model="query"
                clearable
                label="Search"
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
            <div v-if="result && query?.length">
              <div class="text-center">
                <h2>Search results:</h2>
              </div>
              <div v-if="result.length">
                <v-card
                  v-for="(result, index) in result"
                  :key="`fuse-${index}`"
                  class="px-5 py-5 mx-5 my-10 hover text-left info-card"
                  elevation="5"
                  @click="navigateTo(result.item)"
                >
                  <p>{{ result.item }}</p>
                  <p
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
                    Search score: {{ result.score }}
                  </p>
                </v-card>
              </div>
            </div>

            <div class="text-center">
              <br /><br />
              <v-btn v-if="!showIndex" @click.prevent="toggleIndex"
                >DEBUG: Show search index<v-icon right
                  >mdi-chevron-down</v-icon
                ></v-btn
              >
              <v-btn v-if="showIndex" @click.prevent="toggleIndex"
                >DEBUG: Hide search index<v-icon right
                  >mdi-chevron-up</v-icon
                ></v-btn
              >

              <div v-if="showIndex" class="text-left">
                <h4>Search index</h4>
                <pre style="text-left">{{ searchIndex }}</pre>
                <h4>Search options</h4>
                <pre>{{ options }}</pre>
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
  threshold: 0.5,
  distance: 200,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  keys: ["title", "slug", "summary", "searchMeta", "rawText"],
};
const query = ref("");

const fuse = new Fuse(searchIndex, options);

const result = ref(fuse.search(query.value));

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
