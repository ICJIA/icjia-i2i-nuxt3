<template>
  <div class="d-flex">
    <v-navigation-drawer v-model="drawer" temporary color="purple darken-4">
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
          <v-btn block>LOGOUT </v-btn>
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
