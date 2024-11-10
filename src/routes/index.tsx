import type { RequestHandler } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";

export const onRequest: RequestHandler = async ({ redirect }) => {
  throw redirect(302, "/all");
};

export default component$(() => {
  return null;
});
