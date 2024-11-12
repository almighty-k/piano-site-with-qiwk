import { component$ } from "@builder.io/qwik";

type HeadlineProps = {
  title: string;
  subtitle?: string;
};

export const Headline = component$<HeadlineProps>(({ title, subtitle }) => {
  return (
    <div class="flex flex-col gap-2">
      <div>
        <h1 class="text-center text-4xl font-bold text-white">{title}</h1>
        {subtitle && <p class="text-center text-white-secondary">{subtitle}</p>}
      </div>
      <div class="mx-auto h-1 w-24 rounded-lg bg-yellow" />
    </div>
  );
});
