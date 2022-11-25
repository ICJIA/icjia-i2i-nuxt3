<!-- eslint-disable vue/no-template-shadow -->
<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <div v-if="data">
            <ContentDoc path="/about">
              <template #not-found>
                <h1>Document not found</h1>
              </template>
            </ContentDoc>
            <h2>Test GraphQL</h2>
            {{ data }}
          </div>
          <div v-else>Loading</div>
        </v-col></v-row
      ></v-container
    >
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

const { data } = await useAsyncQuery(query);
// console.log("data:", data);
</script>

<style lang="scss" scoped></style>
