<template>
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
          <!-- <v-col cols="12" md="6" class="text-center mt-2">
            <img src="/icjia-logo.png" alt="Footer logo" />
          </v-col> -->
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
            <!-- <div class="pb-6">
              <v-btn
                variant="text"
                aria-label="Link to ICJIA on Twitter"
                href="https://twitter.com/icjia_illinois?lang=en"
                target="_blank"
                size="small"
                ><v-icon style="color: #fff; font-size: 20px"
                  >mdi-twitter</v-icon
                ></v-btn
              >
              <v-btn
                variant="text"
                target="_blank"
                aria-label="Link to ICJIA on Facebook"
                href="https://www.facebook.com/ICJIA/"
                ><v-icon style="color: #fff">mdi-facebook</v-icon></v-btn
              >
              <v-btn
                variant="text"
                target="_blank"
                aria-label="Link to ICJIA on YouTube"
                href="https://www.youtube.com/c/illinoiscriminaljusticeinformationauthority"
                ><v-icon style="color: #fff"> mdi-youtube </v-icon></v-btn
              >
            </div> -->
            <div style="font-size: 12px; font-weight: 400">
              <router-link to="/about" style="color: #fff; background: none"
                >About</router-link
              >

              |
              <router-link to="/contact" style="color: #fff; background: none"
                >Contact</router-link
              >
              |
              <a
                href="https://visitor.r20.constantcontact.com/manage/optin?v=001MqUcqqvjwLCJXlLMSWbTe3zHHmEQgFeBuHvBcJWTbwgrxFbDSGx4HSUPpI6DJWMUPgbljtLxffqIcGFTgCnr-auak88ybvRxpoJlTMGPtZs%3D"
                style="color: #fff; background: none"
                target="_blank"
                >Subscribe to CJ Dispatch</a
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
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  setup() {
    const routeToSite = () => {
      // open new site in new tab
      window.open("https://icjia.illinois.gov", "_blank");
    };
    return { routeToSite };
  },
};
</script>

<style lang="scss" scoped></style>
