<template>
  <div class="d-flex">
    <v-navigation-drawer
      v-if="isMounted"
      v-model="drawer"
      temporary
      style="background: #fff"
    >
      <v-list>
        <v-list-item prepend-icon="mdi-view-dashboard" to="/">Home</v-list-item>
        <v-list-item prepend-icon="mdi-view-dashboard" to="/about"
          >About</v-list-item
        >
        <v-list-item prepend-icon="mdi-view-dashboard" to="/page"
          >Page</v-list-item
        >
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
const isMounted = ref(false);
const drawer = ref(false);
const altState = useNavToggle();
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

onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss" scoped></style>
