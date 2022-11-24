export default defineNuxtRouteMiddleware((to, from) => {
  const isClient = process.client;
  const isServer = process.server;
  const router = useRouter();
  console.log("isClient: ", isClient, " isServer: ", isServer);
  // check to see if content exists
  const post = queryContent()
    .where({ _path: to.path })
    .findOne()
    .then((post) => {
      console.log("post length: ", Object.keys(post).length);
      if (Object.keys(post).length === 1) {
        console.log("404 Error");
        return router.push({ path: "/404" });
        // throw showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    });
});
