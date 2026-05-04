import type { PropsWithChildren } from "react";
import { BookOpenText, Braces, Info, Sparkles } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

const navItems = [
  { to: "/", label: "Home", icon: Sparkles },
  { to: "/lessons", label: "Lessons", icon: BookOpenText },
  { to: "/about", label: "About", icon: Info },
];

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 developer-grid opacity-35" />
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-0 h-96 w-96 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <header className="surface sticky top-4 z-20 mb-10 rounded-[28px] px-5 py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <NavLink to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Braces className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.28em] text-primary/90">
                  JavaScript Beginners
                </div>
                <div className="text-lg font-semibold text-foreground">2026 Edition</div>
              </div>
            </NavLink>

            <nav className="flex flex-wrap items-center gap-2">
              {navItems.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    cn(
                      "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-white/[0.06] hover:text-foreground",
                      isActive && "bg-white/[0.08] text-foreground",
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-12 border-t border-white/10 px-1 py-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>Vite + React + TypeScript + TailwindCSS + HashRouter</p>
            <p className="font-mono text-xs uppercase tracking-[0.22em]">
              build target: /docs
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
