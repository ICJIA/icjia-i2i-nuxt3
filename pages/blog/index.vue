<template>
  <div>BLOG</div>

  <ContentList v-slot="{ list }" path="/blog">
    <div v-for="page in list" :key="page._path">
      <NuxtLink :to="page._path">{{ page.title }}</NuxtLink>
    </div>
  </ContentList>
  <NuxtLink to="/blog/blog-post-99">Blog post 99 (error)</NuxtLink><br />
</template>
