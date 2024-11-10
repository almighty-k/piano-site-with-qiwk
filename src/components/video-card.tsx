import { component$ } from "@builder.io/qwik";
import { QVideoPlayer } from "~/integrations/react/video-player";

type CategoryChipProps = {
  category: "classic" | "anime";
};

const CategoryChip = component$<CategoryChipProps>(({ category }) => {
  return (
    <span
      class={[
        `inline-block w-28 rounded-md py-2 text-center text-sm`,
        category === "classic" ? "bg-green/10 text-green" : "",
        category === "anime" ? "bg-purple/10 text-purple" : "",
      ].join(" ")}
    >
      {category === "classic" ? "クラシック" : "アニメ"}
    </span>
  );
});

type VideoCardProps = {
  src: string;
  title: string;
  artist: string;
  category: "classic" | "anime";
};

export const VideoCard = component$<VideoCardProps>(
  ({ src, title, artist, category }) => {
    return (
      <div class="flex flex-col gap-5 rounded-md bg-black-secondary px-4 py-5">
        <QVideoPlayer client:only src={src} />
        <p class="text-lg text-white">{title}</p>
        <div class="flex h-10 items-center justify-between">
          <CategoryChip category={category} />
          <span class="text-white-secondary">{artist}</span>
        </div>
      </div>
    );
  },
);
