<template>
  <div>
    <h1>Test GraphQL</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div v-else>Loading</div>
  </div>
</template>

<script setup>
const query = gql`
  query getPages {
    pages {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`;

const { data } = await useLazyAsyncQuery(query);
// console.log("data:", data);
</script>

<style lang="scss" scoped></style>
