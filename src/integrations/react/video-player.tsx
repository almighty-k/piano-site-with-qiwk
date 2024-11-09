/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import YoutubeVideo from "youtube-video-element/react";
import MediaThemeSutro from "player.style/sutro/react";

type VideoPlayerProps = {
  src: string;
};

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <MediaThemeSutro className="aspect-video w-full">
      <YoutubeVideo slot="media" src={src} playsInline></YoutubeVideo>
    </MediaThemeSutro>
  );
};

export const QVideoPlayer = qwikify$(VideoPlayer);
