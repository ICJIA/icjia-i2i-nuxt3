<template>
  <div>
    <h1>Test GraphQL</h1>
    {{ data }}
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

const { data } = await useAsyncQuery(query);
console.log("data:", data);
</script>

<style lang="scss" scoped></style>
