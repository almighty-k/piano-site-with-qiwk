import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { VideoCard } from "~/components/video-card";

export default component$(() => {
  return (
    <div class="flex flex-col gap-7">
      <header class="h-8 bg-black-secondary" />

      <div class="flex flex-col gap-2">
        <div>
          <h1 class="text-center text-4xl font-bold text-white">Almighty-K</h1>
          <p class="text-center text-white-secondary">My Piano Performances</p>
        </div>
        <div class="mx-auto h-1 w-24 rounded-lg bg-yellow" />
      </div>

      <section class="mx-auto grid w-full grid-cols-1 gap-y-5 p-4 md:max-w-[1060px] md:grid-cols-2 md:gap-x-14 md:gap-y-11">
        <VideoCard
          src="https://www.youtube.com/watch?v=psZIZJfmev8"
          title="ピアノソナタ23番「熱情」3楽章"
          artist="L.v.Beethoven"
          category="クラシック"
        />
        <VideoCard
          src="https://www.youtube.com/watch?v=X7YI98ruJBk"
          title="晴る"
          artist="ヨルシカ"
          category="アニメ"
        />
      </section>
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
