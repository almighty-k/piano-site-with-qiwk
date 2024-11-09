import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";

import { component$, useComputed$ } from "@builder.io/qwik";
import { VideoCard } from "~/components/video-card";
import { client } from "~/libs/client";

type VideoContent = {
  id: string;
  title: string;
  artist: string;
  category: ("クラシック" | "アニメ")[];
  src: string;
  order: number;
};

export const useVideoContents = routeLoader$(async () => {
  const videos = await client.getList<VideoContent>({
    endpoint: "videos",
  });
  return videos.contents;
});

export default component$(() => {
  const videoContents = useVideoContents();
  const topVideoContents = useComputed$(() => {
    return videoContents.value.filter((video) => video.order === 1);
  });
  const otherVideoContents = useComputed$(() => {
    return videoContents.value.filter((video) => video.order !== 1);
  });

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
        {topVideoContents.value.map((video) => (
          <VideoCard
            key={video.id}
            src={video.src}
            title={video.title}
            artist={video.artist}
            category={video.category[0]}
          />
        ))}
        {otherVideoContents.value.map((video) => (
          <VideoCard
            key={video.id}
            src={video.src}
            title={video.title}
            artist={video.artist}
            category={video.category[0]}
          />
        ))}
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
