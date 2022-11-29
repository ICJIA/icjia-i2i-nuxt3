<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div v-if="data">
    {{ data }}
  </div>
  <div v-else>Loading ...</div>
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
          summary
          body
          section
        }
      }
    }
  }
`;

const data = await useAsyncQuery(query);
</script>
