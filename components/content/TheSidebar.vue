<template>
  <v-navigation-drawer v-model="drawer" theme="dark" permanent>
    <v-list color="transparent">
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
      ></v-list-item>
      <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
      <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
    </v-list>

    <template #append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
const drawer = ref(false);
const altState = useNav();
// watch(altState, (val) => {
//   drawer.value = val;
// });
watchEffect(() => {
  drawer.value = altState.value;
});
const click = () => {
  console.log("click sidebar");
  altState.value = false;
};
</script>

<style lang="scss" scoped></style>
