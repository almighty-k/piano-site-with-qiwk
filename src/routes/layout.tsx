import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

import { component$, Slot } from "@builder.io/qwik";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="min-h-screen bg-black">
      <Slot />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Almighty-Kのピアノ演奏動画サイト",
  meta: [
    {
      name: "description",
      content: "Almighty-Kのピアノ演奏動画サイトです。Qwikで作成しています。",
    },
  ],
};
