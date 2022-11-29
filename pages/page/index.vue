<template>
  <div>
    <v-container fluid
      ><v-row
        ><v-col>
          <h1>Page List</h1>
          <ContentList v-slot="{ list }" path="/page">
            <div v-for="page in list" :key="page._path">
              <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
            </div>
          </ContentList>
          <NuxtLink to="/page/page-foobar">Page (error)</NuxtLink
          ><br /> </v-col></v-row
    ></v-container>
    <!-- <ContentList v-slot="{ list }" path="/blog">
    <div v-for="page in list" :key="page._path">
      <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
    </div>
  </ContentList>
  <NuxtLink to="/blog/blog-post-99">Blog post 99 (error)</NuxtLink><br /> -->
  </div>
</template>

<script setup></script>
