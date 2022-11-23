<template>
  <div>
    <div @click="handleError">Clear errors</div>
    {{ x }}<br />
    {{ errorObj }}<br />
  </div>
</template>

<script setup>
const x = reactive({
  foo: 1,
  bar: 10,
});
console.log(x);
const props = defineProps({
  error: Object,
});
const errorObj = ref(props);
console.log(errorObj);

const handleError = () => clearError({ redirect: "/" });
</script>
