<template>
  <div class="mt-8">
    <v-btn
      dark
      style="background: #1626af; color: #fff; font-weight: 700"
      class="mr-5"
      @click="click('learn-more')"
      >Learn More</v-btn
    >
    <v-btn
      style="background: #fff; color: #333; font-weight: 700"
      @click="click('contact')"
      >Contact</v-btn
    >
  </div>
</template>

<script setup>
const click = (id) => {
  alert("TODO:\n\nbutton click -- scroll to section id:\n\n#" + id);
};
</script>
