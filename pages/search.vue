<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <h1>This is the search page</h1>
          <h4>Search query</h4>
          <div v-if="query && query.length">{{ query }}</div>
          <pre v-else><strong>Please enter search query</strong></pre>

          <v-form class="pl-2 mt-4" style="margin-top: -15px">
            <v-text-field
              ref="textfield"
              v-model="query"
              clearable
              autofocus
              label="Search"
              placeholder="Enter search term"
              style="font-weight: 900"
              @input="instantSearch"
            />
          </v-form>
          <div v-if="result && query && query.length">
            <h2>Search results:</h2>
            Found: {{ result.length }}
            <div v-if="result.length">
              <v-card
                v-for="(result, index) in result"
                :key="`fuse-${index}`"
                class="px-5 py-5 mx-5 my-10 hover"
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

          <h4>Search options</h4>
          <pre>    {{ options }}</pre>
          <h4>Search index</h4>
          <pre>    {{ searchIndex }}</pre>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
import Fuse from "fuse.js";
import searchIndex from "~~/assets/json/searchIndex.json";

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
  threshold: 0.25,
  distance: 200,
  useExtendedSearch: false,
  ignoreLocation: false,
  ignoreFieldNorm: false,
  keys: ["title", "slug", "searchMeta", "rawText"],
};
const query = ref("Institute 2 Innovate");

const fuse = new Fuse(searchIndex, options);

let result = ref(fuse.search(query.value));

const instantSearch = () => {
  result = fuse.search(query.value);
};

const router = useRouter();
const navigateTo = (item) => {
  console.log("navigateTo: ", item?.path);
  router.push({ path: item.path });
};
</script>

<style lang="scss" scoped></style>
