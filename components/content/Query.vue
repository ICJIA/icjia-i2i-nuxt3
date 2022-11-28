<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
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
