export default defineNuxtRouteMiddleware((to, from) => {
  // const isClient = process.client;
  // const isServer = process.server;
  const router = useRouter();
  // console.log("isClient: ", isClient, " isServer: ", isServer);
  // console.log("to path: ", to.path);
  // check to see if content exists
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const content = queryContent()
    .where({ _path: to.path })
    .findOne()
    .then((content) => {
      console.log("content length: ", Object.keys(content).length);
      if (Object.keys(content).length === 1) {
        console.log("Middleware 404 Error: Referrer: ", from.path);
        const URIEncodedPath = encodeURIComponent(from.path);
        return router.push({
          name: `404`,
          query: { referrer: URIEncodedPath },
        });
        // throw showError({ statusCode: 404, statusMessage: "Page Not Found" });
      }
    });
});
