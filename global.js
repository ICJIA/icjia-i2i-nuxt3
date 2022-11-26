import { createGlobalState } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
  const navToggle = ref(false);
  return { navToggle };
});
