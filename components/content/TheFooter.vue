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
              <div>
                <img
                  src="/icjia-logo.png"
                  alt="Footer logo"
                  width="100"
                  style="border: 0px solid #ddd; display: inline"
                  class="hover"
                  @click.prevent="routeToSite"
                />
              </div>

              <div style="font-size: 12px; font-weight: 400">
                <!-- <router-link to="/about" style="color: #fff; background: none"
                  >About</router-link
                >

                |
                <router-link to="/contact" style="color: #fff; background: none"
                  >Contact</router-link
                >
                | -->

                <router-link to="/contact" style="color: #fff; background: none"
                  >Contact Us</router-link
                >
                |
                <a
                  href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D"
                  style="color: #fff; background: none"
                  target="_blank"
                  >Subscribe to the CJ Dispatch</a
                >
              </div>

              <div
                class="mt-3"
                style="font-size: 12px; font-weight: 300; color: #ccc"
              >
                <strong
                  >&#169; 2023
                  <a
                    href="https://icjia.illinois.gov"
                    target="_blank"
                    style="color: #aaa"
                    >Illinois Criminal Justice Information Authority</a
                  >
                </strong>
              </div></v-col
            >
          </v-row>
          <v-row
            ><v-col
              class="text-center"
              style="margin-bottom: -22px"
              @click="scrollTop"
              ><span class="goToTop"> BACK TO TOP </span
              ><v-icon small right style="color: #fff; font-size: 10px"
                >mdi-chevron-up</v-icon
              ></v-col
            ></v-row
          >
        </v-container>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  setup() {
    const scrollTop = () => {
      window.scrollTo(0, 0);
    };

    const routeToSite = () => {
      // open new site in new tab
      window.open("https://icjia.illinois.gov", "_blank");
    };
    return { routeToSite, scrollTop };
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
