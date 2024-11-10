import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

type TabsProps = {
  links: Array<{
    label: string;
    href: string;
  }>;
};

export const LinkTabs = component$<TabsProps>(({ links }) => {
  const location = useLocation();
  const locationPathname = location.url.pathname;
  const pathname =
    locationPathname === "/" ? "/" : locationPathname.replace(/\/$/, "");

  return (
    <div class="inline-flex border-b border-white/50 text-white">
      {links.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          replaceState={true}
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
