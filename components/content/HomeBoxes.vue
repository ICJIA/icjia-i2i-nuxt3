<template>
  <div>
    <v-container fluid style="margin: 0 !important; padding: 0 !important">
      <v-row no-gutters>
        <v-col cols="12" md="4">
          <v-card
            color="#3B5984"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="click({ id: 'about', type: 'scrollTo' })"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-home</v-icon
                  >
                  <h2 id="aboutUs" class="boxHeader">About Us</h2>
                  <p style="color: #fff; font-size: 20px !important">
                    i2i supports new and emerging localized “grassroots”
                    community organizations.
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card></v-col
        >

        <v-col cols="12" md="4">
          <v-card
            color="#10366B"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="click({ id: 'services', type: 'scrollTo' })"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-pencil-ruler</v-icon
                  >
                  <h2 id="our-approach" class="boxHeader">Our Approach</h2>
                  <p style="color: #fff; font-size: 20px">
                    Find out more about our evidence-informed approach.
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            color="#3B5984"
            style="height: 300px"
            class="py-5 px-2 text-center info-card hover"
            :class="{ boxGutter: gutter }"
            @click="click({ id: 'cohorts', type: 'scrollTo' })"
          >
            <v-container fill-height fluid>
              <v-row align="center" justify="center">
                <v-col>
                  <v-icon
                    icon="mdi-menu"
                    style="font-size: 50px; color: #fff"
                    dark
                    >mdi-account-group</v-icon
                  >
                  <h2 id="cohorts" class="boxHeader">Cohorts</h2>
                  <p style="color: #fff; font-size: 20px !important">
                    Find out who's who.
                  </p></v-col
                >
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    boxes: {
      type: Number,
      default: 3,
    },
    secondRow: {
      type: Boolean,
      default: false,
    },
    gutter: {
      type: Boolean,
      default: true,
    },
    showTeaser: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colors: ["#333", "#555"],
      icons: ["fact_check", "leaderboard", "map", "contact_mail"],
    };
  },
  computed: {
    boxColumns() {
      return 12 / this.boxes;
    },
  },
  methods: {
    getColor() {
      return this.colors[1];
    },
    click({ id, type }) {
      const offset = 100;
      const el = document.getElementById(id);
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      console.log("scrollTo: ", y);
      if (type === "scrollIntoView") {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scroll({
          top: y,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
/* .boxGutter {
  margin-right: 2px;
  margin-left: 2px;
} */

.boxHeader {
  color: #fff;
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 24px;
}
</style>
