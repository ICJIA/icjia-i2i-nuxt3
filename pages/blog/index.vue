<template>
  <div>
    <v-container
      ><v-row
        ><v-col>
          <h1>Blog List</h1>
          <ContentList v-slot="{ list }" path="/blog">
            <div v-for="page in list" :key="page._path">
              <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
            </div>
          </ContentList>
          <NuxtLink to="/blog/blog-post-99">Blog post 99 (error)</NuxtLink
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
