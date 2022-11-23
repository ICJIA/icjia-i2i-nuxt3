<template>
  <div>
    {{ x }}<br />
    {{ errorObj }}<br />
    <nuxt-link
      style="font-weight: 900; cursor: pointer"
      @click.prevent="handleError"
      >Clear errors</nuxt-link
    ><br />
  </div>
</template>

<script setup>
const x = reactive({
  foo: 1,
  bar: 10,
});
console.log(x);
const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object,
});
const errorObj = ref(props);
console.log(errorObj);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError = () => clearError({ redirect: "/" });
</script>
