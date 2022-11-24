<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
    <h1>Test GraphQL</h1>

    <div v-if="data">
      {{ data }}
      <ContentDoc path="/about">
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
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
