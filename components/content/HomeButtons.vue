<template>
  <div class="mt-8">
    <v-btn
      dark
      style="background: #10366b; color: #fff; font-weight: 700"
      class="mr-5"
      to="/about"
      >Learn More</v-btn
    >
    <v-btn style="background: #fff; color: #333; font-weight: 700" to="/contact"
      >Contact</v-btn
    >
  </div>
</template>

<script setup>
const click = ({ id, type }) => {
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
};
</script>
