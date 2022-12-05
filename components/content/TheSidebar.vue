<template>
  <div class="d-flex">
    <v-navigation-drawer
      v-if="isMounted"
      v-model="drawer"
      temporary
      style="background: #fff"
    >
      <!-- <v-list>
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
      </template> -->
      <v-list v-model:opened="open">
        <!-- <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item> -->
        <v-list-item class="hover">Home</v-list-item>
        <div>
          <v-list-group>
            <template #activator="{ props }">
              <v-list-item v-bind="props" title="Test"></v-list-item>
            </template>

            <v-list-item
              v-for="(menu, i) in navMenu"
              :key="`main-${i}`"
              style="margin-left: -35px"
              >Test</v-list-item
            >
          </v-list-group>
          <!-- <v-divider></v-divider> -->
          <v-list-item @click.prevent="routeTo('/search')">Search</v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
const navMenu = JSON.parse(JSON.stringify(appConfig.navMenu));
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

const open = ref(["Users"]);
const router = useRouter();
const routeTo = (url) => {
  altState.value = false;
  router.push({ path: url });
};
</script>

<style lang="scss" scoped></style>
