import type { StaticGenerateHandler } from "@builder.io/qwik-city";
import type { VideoContent } from "~/libs/types";

import { routeLoader$ } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { LinkTabs } from "~/components/link-tabs";
import { VIDEO_CATEGORY_LINKS } from "~/libs/constants";
import { client } from "~/libs/client";
import { VideoContentList } from "~/components/content-list";
import { VideoCard } from "~/components/video-card";

export const useVideoContents = routeLoader$(async ({ params }) => {
  const videos = await client.getList<VideoContent>({
    endpoint: "videos",
    queries: { filters: `category[contains]${params.category}` },
  });

  return {
    topContents: videos.contents.filter((video) => video.order === 1),
    otherContents: videos.contents.filter((video) => video.order !== 1),
  };
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const removedRootLinks = VIDEO_CATEGORY_LINKS.filter(
    (link) => link.href !== "/",
  );
  return {
    params: removedRootLinks.map((link) => {
      return { category: link.href.replace(/\//, "") };
    }),
  };
};

export default component$(() => {
  const videoContents = useVideoContents();
  const { topContents, otherContents } = videoContents.value;

  return (
    <div class="flex flex-col gap-7">
      <header class="sticky top-0 z-10 h-8 bg-black-secondary shadow-md" />

      <div class="flex flex-col gap-2">
        <div>
          <h1 class="text-center text-4xl font-bold text-white">Almighty-K</h1>
          <p class="text-center text-white-secondary">My Piano Performances</p>
        </div>
        <div class="mx-auto h-1 w-24 rounded-lg bg-yellow" />
      </div>

      <section class="mx-auto flex w-full flex-col gap-5 px-4 md:max-w-[1060px]">
        <LinkTabs links={VIDEO_CATEGORY_LINKS} />
        <VideoContentList>
          {topContents.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              title={video.title}
              artist={video.artist}
              category={video.category[0]}
            />
          ))}
          {otherContents.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              title={video.title}
              artist={video.artist}
              category={video.category[0]}
            />
          ))}
        </VideoContentList>
      </section>
    </div>
  );
});
