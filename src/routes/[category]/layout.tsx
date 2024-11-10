import { component$, Slot } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

const LINKS = [
  {
    label: "すべて",
    href: "/all",
  },
  {
    label: "クラシック",
    href: "/classic",
  },
  {
    label: "アニメ",
    href: "/anime",
  },
];

type TabsProps = {
  links: {
    label: string;
    href: string;
  }[];
};

const Tabs = component$<TabsProps>(({ links }) => {
  const location = useLocation();
  const locationPathname = location.url.pathname;
  const pathname = locationPathname.replace(/\/$/, "");

  return (
    <div class="inline-flex border-b border-white/50 text-white">
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          replaceState={false}
          class={[
            "rounded-t-md px-3 py-2 hover:bg-white/5",
            pathname === href ? "border-b-2 border-white" : "",
          ].join(" ")}
        >
          {label}
        </Link>
      ))}
    </div>
  );
});

export default component$(() => {
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
        <div class="inline-flex border-b border-white/50 text-white">
          <Tabs links={LINKS} />
        </div>

        <Slot />
      </section>
    </div>
  );
});
