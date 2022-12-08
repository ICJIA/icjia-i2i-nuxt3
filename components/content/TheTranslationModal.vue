<template>
  <v-no-ssr>
    <div class="text-center">
      <v-dialog v-model="dialog" scroll-strategy="none">
        <v-card>
          <v-card-text
            ><strong>Google Translate options here</strong>
          </v-card-text>
          <v-card-actions class="text-center">
            <v-spacer></v-spacer>
            <v-btn color="primary" @click.prevent.stop="closeDialog"
              >Close</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-no-ssr>
</template>

<script setup>
const dialog = ref(false);
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
</script>
