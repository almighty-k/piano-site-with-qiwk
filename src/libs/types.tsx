export type VideoContent = {
  id: string;
  title: string;
  artist: string;
  category: ("anime" | "classic")[];
  src: string;
  order: number;
};
