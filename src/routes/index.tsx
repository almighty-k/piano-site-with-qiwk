import type { VideoContent } from "~/libs/types";

import { routeLoader$ } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";
import { LinkTabs } from "~/components/link-tabs";
import { VIDEO_CATEGORY_LINKS } from "~/libs/constants";
import { client } from "~/libs/client";
import { VideoContentList } from "~/components/content-list";
import { VideoCard } from "~/components/video-card";
import { Headline } from "~/components/headline";
import { Header } from "~/components/header";
export const useVideoContents = routeLoader$(async () => {
  const videos = await client.getList<VideoContent>({
    endpoint: "videos",
  });

  return {
    topContents: videos.contents.filter((video) => video.order === 1),
    otherContents: videos.contents.filter((video) => video.order !== 1),
  };
});

export default component$(() => {
  const videoContents = useVideoContents();
  const { topContents, otherContents } = videoContents.value;

  return (
    <div class="flex flex-col gap-7">
      <Header />
      <Headline title="Almighty-K" subtitle="My Piano Performances" />
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
