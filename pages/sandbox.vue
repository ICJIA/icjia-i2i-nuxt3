<template>
  <div style="">
    <v-container
      ><v-row
        ><v-col>
          <h1>Sandbox</h1>

          <h2 id="nuxt-image">Nuxt Image (optimized)</h2>
          <div class="text-center">
            <nuxt-img
              src="https://agency.icjia-api.cloud/uploads/i2i_small_transparent_a6cfd95a04.png"
              quality="10"
              width="175"
            />
          </div>

          <h2>Application state</h2>
          {{ altState }}
          <br />
          <v-btn id="nav" @click="altToggle">Toggle mobile nav</v-btn>
          <br /><br />
          <span v-if="isTranslationEnabled">
            {{ translationState }}<br />
            <v-btn id="nav" @click="translationToggle"
              >Toggle translation modal</v-btn
            ></span
          >

          <!-- <v-menu bottom left>
            <template #activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template> -->
          <br />
          <br />
          <div v-if="isMounted">
            <div>Menu dropdown</div>
            <v-menu transition="scale-transition">
              <template #activator="{ props }">
                <v-btn v-bind="props">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <div v-else>
            <span class="flex d-flex text-left">
              <TheLoader></TheLoader>
            </span>
          </div> </v-col></v-row
    ></v-container>
    <v-container
      ><v-row
        ><v-col>
          <v-card elevation="5" class="px-12 py-5" color="grey-lighten-4">
            <h2>CSS column adjustment for cohort listings</h2>
            <p class="mb-10">
              <strong>Resize browser window to see adjustment</strong>
            </p>
            <ul class="cohort-list">
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
              <li>content</li>
            </ul>

            <pre class="mt-10" style="border: 1px solid #aaa">
ul.cohort-list {
  -webkit-columns: 1;
  -moz-columns: 1;
  columns: 1;
  padding-left: 0;
}
ul.cohort-list li {
  list-style-position: inside;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}

@media only screen and (min-width: 768px) {
  ul.cohort-list {
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    padding-left: 0;
  }
}

@media only screen and (min-width: 1024px) {
  ul.cohort-list {
    -webkit-columns: 3;
    -moz-columns: 3;
    columns: 3;
    padding-left: 0;
  }
}
</pre
            >
          </v-card>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
useHead({
  title: "Sandbox",
});
const { isTranslationEnabled } = useAppConfig();
const altState = useNavToggle();
const altToggle = () => {
  altState.value = !altState.value;
};

const translationState = useTranslateToggle();
const translationToggle = () => {
  translationState.value = !translationState.value;
};

const isMounted = ref(false);
onMounted(() => {
  isMounted.value = true;
});

const items = ref([
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
]);
</script>
