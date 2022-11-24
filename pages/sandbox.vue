<template>
  <div>
    <h1>Sandbox</h1>
    <div>{{ redirect() }}</div>
  </div>
</template>

<script setup>
const router = useRouter();
const redirect = () => {
  router.push("/404");
};
</script>

<style lang="scss" scoped></style>
