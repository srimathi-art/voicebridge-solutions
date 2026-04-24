import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Loader } from "@/components/Loader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-brand px-5 py-2.5 text-sm font-medium text-primary-foreground glow"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "S2V — Sign to Voice Solutions" },
      {
        name: "description",
        content:
          "S2V — AI-powered assistive technology bridging communication for deaf and blind individuals. Sign Language to Voice. Voice to Text. Real-time.",
      },
      { name: "author", content: "S2V" },
      { property: "og:title", content: "S2V — Sign to Voice Solutions" },
      {
        property: "og:description",
        content: "Bridging communication between silence and sound.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Loader />
      <div className="relative min-h-screen overflow-x-hidden">
        {/* ambient background orbs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-primary/30 blur-[140px]" />
          <div className="absolute -right-40 top-[40vh] h-[520px] w-[520px] rounded-full bg-accent/25 blur-[160px]" />
          <div className="absolute left-1/3 top-[120vh] h-[420px] w-[420px] rounded-full bg-neon/20 blur-[140px]" />
        </div>
        <SiteHeader />
        <main className="pt-24">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
