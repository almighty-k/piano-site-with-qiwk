import type { DocumentHead } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { QVideoPlayer } from "~/integrations/react/video-player";

export default component$(() => {
  return (
    <div class="flex flex-col gap-7">
      <header class="h-8 bg-black-secondary" />

      <div class="flex flex-col gap-2">
        <div>
          <h1 class="text-center text-4xl font-bold text-white">Almighty-K</h1>
          <p class="text-center text-white-secondary">My Piano Performances</p>
        </div>
        <div class="bg-yellow mx-auto h-1 w-24 rounded-lg" />
      </div>

      <section class="mx-auto grid w-full grid-cols-1 gap-y-5 p-4 md:max-w-[1060px] md:grid-cols-2 md:gap-x-14 md:gap-y-11">
        <article class="w- flex flex-col gap-5 rounded-md bg-black-secondary px-4 py-5">
          <QVideoPlayer
            client:only
            src="https://www.youtube.com/watch?v=psZIZJfmev8"
          />
          <p class="text-lg text-white">ピアノソナタ23番「熱情」3楽章</p>
          <div class="flex h-10 items-center justify-between">
            <span class="text-green bg-green/10 inline-block w-28 rounded-md py-2 text-center text-sm">
              クラシック
            </span>
            <div class="text-white-secondary">L.v.Beethoven</div>
          </div>
        </article>

        <article class="flex flex-col gap-5 rounded-md bg-black-secondary px-4 py-5">
          <QVideoPlayer
            client:only
            src="https://www.youtube.com/watch?v=psZIZJfmev8"
          />
          <p class="text-lg text-white">ピアノソナタ23番「熱情」3楽章</p>
          <div class="flex h-10 items-center justify-between">
            <span class="text-green bg-green/10 inline-block w-28 rounded-md py-2 text-center text-sm">
              クラシック
            </span>
            <div class="text-white-secondary">L.v.Beethoven</div>
          </div>
        </article>

        <article class="flex flex-col gap-5 rounded-md bg-black-secondary px-4 py-5">
          <QVideoPlayer
            client:only
            src="https://www.youtube.com/watch?v=psZIZJfmev8"
          />
          <p class="text-lg text-white">ピアノソナタ23番「熱情」3楽章</p>
          <div class="flex h-10 items-center justify-between">
            <span class="text-green bg-green/10 inline-block w-28 rounded-md py-2 text-center text-sm">
              クラシック
            </span>
            <div class="text-white-secondary">L.v.Beethoven</div>
          </div>
        </article>
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
