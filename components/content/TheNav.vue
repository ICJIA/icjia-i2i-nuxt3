<template>
  <div>
    <v-app-bar
      fixed
      app
      color="white"
      style="z-index: 50"
      size="90"
      class="pl-5 pr-10"
    >
      <div
        v-if="!nav"
        class="hover hamburger text-center hidden-md-and-up"
        @click="toggleNav"
      >
        <v-icon icon="mdi-menu" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">MENU</div>
      </div>
      <div
        v-else
        class="hover hamburger text-center hidden-md-and-up"
        @click="toggleNav"
      >
        <v-icon icon="mdi-window-close" size="large"></v-icon>
        <div style="font-size: 10px; font-weight: 900">CLOSE</div>
      </div>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <img
        alt="ICJIA Logo"
        class="hover ml-4 mr-4"
        src="/i2iSmall.png"
        width="55"
        height="55"
        @click="$router.push('/')"
      />
      <div class="hover hidden-sm-and-down">
        <span
          style="
            font-weight: 900 !important;
            font-size: 26px;
            letter-spacing: 0.004em;
          "
          class="agency"
          @click="$router.push('/')"
          >INSTITUTE 2 INNOVATE</span
        >
      </div>

      <v-spacer></v-spacer>
      <span v-if="isMounted">
        <span
          v-for="(menu, index) in navMenu"
          :key="`main-${index}`"
          style="display: inline-block"
        >
          <span v-if="menu && menu?.children">
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  variant="text"
                  size="default"
                  class="hidden-sm-and-down navItem"
                  v-bind="props"
                >
                  {{ menu.main }}
                  <v-icon right small>mdi-menu-down</v-icon></v-btn
                >
              </template>
              <v-list nav density="compact" elevation="2">
                <span
                  v-for="(child, index) in menu.children"
                  :key="`child-${index}`"
                >
                  <v-divider v-if="child.divider"></v-divider>
                  <v-list-item-title
                    v-if="child.section"
                    style="margin-top: 10px; font-weight: 900; color: #555"
                    class="pr-5"
                    >{{ child.section }}</v-list-item-title
                  >
                  <v-list-item
                    v-if="child?.link"
                    class="appNav hover"
                    :to="child?.external ? null : child?.link"
                    :href="child?.external ? child?.link : null"
                    :target="child?.external ? '_blank' : null"
                  >
                    <v-list-item-title style="font-size: 12px !important"
                      >{{ child.title }}
                      <span v-if="child?.external">External</span>
                      <v-icon v-if="child.icon" small right color="black">{{
                        child.icon
                      }}</v-icon></v-list-item-title
                    >
                  </v-list-item>
                </span>
              </v-list>
            </v-menu>
          </span>
          <span v-else class="d-flex">
            <v-btn
              :to="menu?.external ? null : menu?.link"
              :href="menu?.external ? menu.link : null"
              :target="menu?.external ? '_blank' : null"
              :aria-label="menu.main"
              variant="text"
              size="default"
              class="hidden-sm-and-down navItem"
              style="font-weight: 900 !important; font-size: 16px"
              >{{ menu.main }}&nbsp;
              <v-icon v-if="menu.icon" right small color="black">{{
                menu.icon
              }}</v-icon>
            </v-btn>
          </span>
        </span>
      </span>
      <span v-else class="text center"> <TheLoader></TheLoader></span>
    </v-app-bar>
  </div>
</template>

<script setup>
const isMounted = ref(false);
const nav = useNavToggle();
const toggleNav = () => {
  console.log("click menu icon");
  nav.value = !nav.value;
};

const appConfig = useAppConfig();
const navMenu = JSON.parse(JSON.stringify(appConfig.navMenu));

const items = ref([
  { title: "Item 1" },
  { title: "Item 2" },
  { title: "Item 3" },
  { title: "Item 4" },
]);

const isExternalUrl = (url) => {
  return true;
};

onMounted(() => {
  isMounted.value = true;
});
</script>

<style lang="scss" scoped>
.navItem {
  color: #333 !important;
  font-weight: 900;
}
</style>
