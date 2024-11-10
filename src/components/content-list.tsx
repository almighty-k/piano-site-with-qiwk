import { component$, Slot } from "@builder.io/qwik";

export const VideoContentList = component$(() => {
  return (
    <div class="grid grid-cols-1 gap-y-5 md:grid-cols-2 md:gap-x-14 md:gap-y-11">
      <Slot />
    </div>
  );
});
