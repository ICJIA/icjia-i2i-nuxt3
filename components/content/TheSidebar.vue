<template>
  <div class="d-flex">
    <v-navigation-drawer
      v-if="
        $vuetify.display.md ||
        $vuetify.display.lg ||
        $vuetify.display.xl ||
        $vuetify.display.xxl
      "
      v-model="drawer"
      permanent
    >
      <v-list color="transparent">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-box"
          title="Account"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template #append>
        <div class="pa-2">
          <v-btn block> {{ drawer }} </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-navigation-drawer v-else v-model="drawer" temporary>
      <v-list color="transparent">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-box"
          title="Account"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
      </v-list>

      <template #append>
        <div class="pa-2">
          <v-btn block>{{ drawer }} </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const drawer = ref(false);
const altState = useNav();
watch(drawer, (val) => {
  altState.value = drawer.value;
});
watchEffect(() => {
  drawer.value = altState.value;
});
const click = () => {
  console.log("click sidebar");
  altState.value = false;
};
</script>

<style lang="scss" scoped></style>
