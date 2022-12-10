<template>
  <v-no-ssr>
    <div class="text-center">
      <v-dialog v-model="dialog" scroll-strategy="none">
        <v-card>
          <v-card-title
            class="text-center py-3"
            style="background: #eee; font-size: 20px; font-weight: 900"
          >
            ICJIA Website Translation Options
          </v-card-title>
          <v-card-text class="mt-3 mb-3">
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="4">
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('es')"
                    >Spanish</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('pt')"
                    >Portugese</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('fr')"
                    >French</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('pl')"
                    >Polish</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('ru')"
                    >Russian</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('it')"
                    >Italian</v-btn
                  >
                  <br />
                </v-col>
                <v-col cols="12" md="4">
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('ar')"
                    >Arabic</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('hy')"
                    >Armenian</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('de')"
                    >German</v-btn
                  >
                  <br />

                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('zh-TW')"
                    >Chinese (Traditional)</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('zh-CN')"
                    >Chinese (Simplified)</v-btn
                  >
                  <br />

                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('sr')"
                    >Serbian</v-btn
                  >
                  <br />
                </v-col>
                <v-col cols="12" md="4">
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('iw')"
                    >Hebrew</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('hu')"
                    >Hungarian</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('is')"
                    >Icelandic</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('lv')"
                    >Latvian</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('fa')"
                    >Persian</v-btn
                  >
                  <br />
                  <v-btn
                    size="small"
                    variant="text"
                    class="translate-button"
                    @click="googleTranslate('tr')"
                    >Turkish</v-btn
                  >
                  <br />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-expand-transition>
            <div class="mt-3">
              <v-card-text style="font-size: 11px; font-weight: 700">
                The Illinois Criminal Justice Information Authority ('ICJIA')
                offers translations of the content through Google Translate.
                Because Google Translate is an external website, ICJIA does not
                control the quality or accuracy of translated content. All ICJIA
                content is filtered through Google Translate which may result in
                unexpected and unpredictable degradation of portions of text,
                images and the general appearance on translated pages. Google
                Translate may maintain unique privacy and use policies. These
                policies are not controlled by ICJIA and are not associated with
                ICJIA's privacy and use policies.
                <br />
                <br />
                ICJIA would like to ensure that it provides Limited English
                Proficiency (LEP) individuals with meaningful and universal
                access to ICJIA services, programs, and activities by all
                persons, including those who self-identify as an LEP individual
                or have a preference for information and materials in a language
                other than English. To support its goals of being inclusive and
                accessible to all, ICJIA provides free language assistance
                services to individuals whose primary language is not English.
                Language assistance services include providing qualified
                interpreters and translating documents to ease access to
                important information about ICJIA programs, benefits, and
                activities.
                <div
                  class="text-center mt-3"
                  style="font-weight: 700; font-size: 11px"
                >
                  If you need additional language assistance services, please
                  email:
                  <a href="mailto:LAPRequests@illinois.gov"
                    >LAPRequests@illinois.gov</a
                  >
                </div>
                .
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-dialog>
    </div>
  </v-no-ssr>
</template>

<script setup>
const dialog = ref(false);
const show = ref(true);
const toggleState = useTranslateToggle();
const closeDialog = () => {
  dialog.value = false;
  toggleState.value = false;
};

watch(dialog, () => {
  toggleState.value = dialog.value;
});
watchEffect(() => {
  dialog.value = toggleState.value;
});

const googleTranslate = (lang) => {
  show.value = false;
  dialog.value = false;
  const { root } = useAppConfig();
  const { fullPath, href } = useRoute();
  console.log("site root: ", root);
  console.log("language target: ", lang);
  console.log("full path: ", fullPath);
  console.log("href: ", href);
  const route = `${root}${fullPath}`;
  const url =
    `https://translate.google.com/translate?hl=en&sl=en&u=${route}&tl=` + lang;
  window.open(url);
};
</script>

<style scoped>
.translate-button {
  font-weight: 900;
}
</style>
