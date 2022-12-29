<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <h1>Translation Options</h1>
          <div class="mt-3 mb-3">
            <v-container>
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
          </div>

          <v-divider></v-divider>

          <div class="mt-3">
            <div style="font-size: 16px; font-weight: 400">
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
              Proficiency (LEP) individuals with meaningful and universal access
              to ICJIA services, programs, and activities by all persons,
              including those who self-identify as an LEP individual or have a
              preference for information and materials in a language other than
              English. To support its goals of being inclusive and accessible to
              all, ICJIA provides free language assistance services to
              individuals whose primary language is not English. Language
              assistance services include providing qualified interpreters and
              translating documents to ease access to important information
              about ICJIA programs, benefits, and activities.
              <div
                class="text-center mt-3"
                style="font-weight: 700; font-size: 16px"
              >
                If you need additional language assistance services for this
                website, please email:
                <a href="mailto:LAPRequests@illinois.gov"
                  >LAPRequests@illinois.gov</a
                >
              </div>
              .
            </div>
          </div>
        </v-col></v-row
      ></v-container
    >
  </div>
</template>

<script setup>
// const googleTranslate = (lang) => {
//   alert("Trigger translation here. \n\n" + "Language: " + lang);
// };
const googleTranslate = (lang) => {
  const { root } = useAppConfig();
  const { fullPath, href } = useRoute();
  // console.log("site root: ", root);
  // console.log("language target: ", lang);
  // console.log("full path: ", fullPath);
  // console.log("href: ", href);
  // const route = `${root}${fullPath}`;
  const route = `${root}`;
  const url =
    `https://translate.google.com/translate?hl=en&sl=en&u=${route}&tl=` + lang;
  window.open(url);
  // console.log(url);
  // alert("Trigger Google translation here. \n\n" + "URL: " + url);
};
</script>

<style lang="scss" scoped></style>
