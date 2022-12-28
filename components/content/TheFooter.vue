<template>
  <div>
    <the-context-footer></the-context-footer>
    <v-footer dark class="" style="margin: 0; padding: 0">
      <v-card
        flat
        tile
        width="100%"
        class="text-center markdown-body pb-4"
        style="background: #0e4474"
      >
        <v-container class="mt-0" fill-height>
          <v-row align="center" justify="center">
            <v-col
              cols="12"
              md="12"
              class="text-center mt-2"
              style="color: white"
            >
              <div style="font-size: 12px; font-weight: 400">
                <strong
                  >&#169; 2023
                  <a
                    href="https://www.illinois.gov"
                    target="_blank"
                    style="color: #fff"
                    >State of Illinois</a
                  >
                </strong>
                &nbsp;|&nbsp;
                <strong>
                  <a
                    href="https://www2.illinois.gov/sites/gov/Pages/default.aspx"
                    target="_blank"
                    style="color: #fff"
                    >Governor JB Pritzker
                  </a>
                </strong>
                &nbsp;|&nbsp;
                <strong>
                  <a
                    href="https://coronavirus.illinois.gov/"
                    target="_blank"
                    style="color: #fff"
                    >Statewide Coronavirus Response
                  </a>
                </strong>
                &nbsp;|&nbsp;
                <strong>
                  <nuxt-link to="/privacy" style="color: #fff"
                    >Privacy
                  </nuxt-link>
                </strong>
                &nbsp;|&nbsp;
                <nuxt-link to="/contact" style="color: #fff; background: none"
                  >Contact</nuxt-link
                >&nbsp;

                <span>
                  &nbsp;|&nbsp;
                  <nuxt-link
                    style="color: #fff; background: none; cursor: pointer"
                    class="hover-anchor"
                    to="/translate"
                  >
                    Translate
                  </nuxt-link>
                </span>
              </div>
            </v-col>
          </v-row>
          <!-- <v-row
            ><v-col class="text-center" @click="scrollTop"
              ><span class="goToTop"> BACK TO TOP </span
              ><v-icon small right style="color: #fff; font-size: 10px"
                >mdi-chevron-up</v-icon
              ></v-col
            ></v-row
          > -->
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  setup() {
    const { isTranslationEnabled } = useAppConfig();
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    const translate = () => {
      const toggleState = useTranslateToggle();
      toggleState.value = true;
    };

    const routeToSite = () => {
      // open new site in new tab
      window.open("https://icjia.illinois.gov", "_blank");
    };
    return { routeToSite, scrollTop, translate, isTranslationEnabled };
  },
};
</script>

<style lang="scss" scoped>
.goToTop {
  margin: 0;
  font-size: 10px;
  color: #fff;
  text-decoration: none;
  background: none;
  cursor: pointer;
}

.goToTop:hover {
  text-decoration: underline;
  color: #aaa;
}
</style>
