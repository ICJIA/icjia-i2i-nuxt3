<template>
  <div>BLOG</div>

  <NuxtLink to="/blog/blog-post-01">Blog post 1</NuxtLink><br />
  <NuxtLink to="/blog/blog-post-02">Blog post 2</NuxtLink><br />
  <NuxtLink to="/blog/blog-post-99">Blog post 99</NuxtLink><br />

  <ContentList v-slot="{ list }" path="/blog">
    <div v-for="page in list" :key="page._path">
      {{ page }}<br />
      <NuxtLink to="/">{{ page.title }}</NuxtLink>
    </div>
  </ContentList>
</template>
