import type { StaticGenerateHandler } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { VideoCard } from "~/components/video-card";
import { client } from "~/libs/client";

type VideoContent = {
  id: string;
  title: string;
  artist: string;
  category: ("anime" | "classic")[];
  src: string;
  order: number;
};

export const useVideoContents = routeLoader$(async (requestEvent) => {
  const category = requestEvent.params.category as "anime" | "classic" | "all";

  const videos = await client.getList<VideoContent>({
    endpoint: "videos",
  });
  const filteredVideos = videos.contents.filter(
    (video) => category === "all" || video.category.includes(category),
  );

  return {
    topContents: filteredVideos.filter((video) => video.order === 1),
    otherContents: filteredVideos.filter((video) => video.order !== 1),
  };
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return {
    params: ["all", "classic", "anime"].map((category) => ({
      category,
    })),
  };
};

export default component$(() => {
  const videoContents = useVideoContents();
  const { topContents, otherContents } = videoContents.value;

  return (
    <div class="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-14 md:gap-y-11">
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
    </div>
  );
});
