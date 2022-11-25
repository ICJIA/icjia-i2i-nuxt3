<template>
  <div>
    <h1>Sandbox here</h1>

    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>

    <v-btn id="button">Click me to hide paragraphs</v-btn>
  </div>
</template>

<script>
export default {
  setup() {
    console.log("Setup");
    useHead({
      title: "My App",
    });

    return {};
  },
  mounted() {
    console.log("Mounted");
    // jquery test
    $(document).ready(function () {
      $("button").click(function () {
        $("p").hide();
      });
    });
  },
};
</script>

<style lang="scss" scoped></style>
