// composables/useEventBus.ts
// https://dev.to/israelortuno/event-bus-pattern-in-nuxt-3-with-full-typescript-support-1okp

import mitt from "mitt";

type ApplicationEvents = {
  "user:registered": null;
};

const emitter = mitt<ApplicationEvents>();

export const useEvent = emitter.emit;
export const useListen = emitter.on;
