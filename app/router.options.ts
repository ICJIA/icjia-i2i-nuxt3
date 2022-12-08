/* eslint-disable require-await */
import { useNuxtApp } from "#imports";
export default {
  async scrollBehavior(to: any, from: any, savedPosition: any) {
    return new Promise((resolve, reject) => {
      const nuxtApp = useNuxtApp();

      if (to.hash) {
        setTimeout(
          () => {
            resolve({ top: 0, left: 0, behavior: "smooth" });
          },
          !from || to.path !== from.path ? 10 : 1
        );
      } else if (savedPosition) {
        nuxtApp.hooks.hook("page:finish", async () => {
          await nextTick();
          //   console.log("router.config.ts: saved position", {
          //     ...savedPosition,
          //     behavior: "smooth",
          //   });
          setTimeout(() => {
            // resolve({ ...savedPosition, behavior: 'smooth' })
            resolve({ top: 0, left: 0, behavior: "smooth" });
          }, 500);
        });
      } else {
        nuxtApp.hooks.hook("page:finish", async () => {
          await nextTick();
          // console.log("router.config.ts: default -- no saved position");
          setTimeout(() => {
            resolve({ top: 0, left: 0, behavior: "smooth" });
          }, 230);
        });
      }
    });
  },
};
