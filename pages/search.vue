<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <h1>This is the search page</h1>
          <h4>Search query</h4>
          <pre v-if="query && query.length">    {{ query }}</pre>
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
                class="px-5 py-5 mx-5 my-10"
                elevation="5"
              >
                <p>{{ result.item }}</p>
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
import searchIndex from "../public/searchIndex.json";
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
  keys: ["title", "summary"],
};
const query = ref("Institute 2 Innovate");

// console.log(searchIndex);

const fuse = new Fuse(searchIndex, options);
// console.log(fuse);
let result = ref(fuse.search(query.value));

const instantSearch = () => {
  console.log("query: ", query.value);
  result = fuse.search(query.value);
  console.log("result: ", result);
};
</script>

<style lang="scss" scoped></style>
