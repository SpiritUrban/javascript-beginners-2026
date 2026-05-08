import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lessons } from "@/lessons/lesson-data";

export function LessonsPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <Badge className="border-cyan-400/15 bg-cyan-400/8 text-cyan-200">
          Lessons
        </Badge>

        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Уроки
          </h1>
          <div className="h-px w-28 bg-gradient-to-r from-cyan-300/80 via-emerald-300/40 to-transparent" />
        </div>

        <p className="text-lg leading-8 text-slate-300">
          Рухайся послідовно: від базового синтаксису JavaScript до DOM, подій
          і фінального Todo App.
        </p>
      </section>

      <section className="grid gap-4">
        {lessons.map((lesson, index) => {
          const lessonNumber = String(index + 1).padStart(2, "0");

          return (
            <Card
              key={lesson.slug}
              className="relative overflow-hidden border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.03))] p-6 sm:p-7"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent" />
              <div className="pointer-events-none absolute -right-16 top-8 h-32 w-32 rounded-full bg-cyan-300/6 blur-3xl" />
              <div className="pointer-events-none absolute left-0 top-10 h-24 w-1 rounded-full bg-gradient-to-b from-cyan-300/60 via-emerald-300/25 to-transparent" />

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-gradient-to-br from-cyan-400/16 to-emerald-300/8 font-mono text-lg font-semibold text-cyan-200 shadow-[0_0_28px_rgba(45,212,191,0.12)]">
                    {lessonNumber}
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge className="border-white/12 bg-white/[0.07] text-slate-200">
                        {lesson.level}
                      </Badge>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                        {lesson.duration}
                      </span>
                    </div>

                    <div>
                      <h2
                        className="text-2xl font-semibold text-slate-50"
                        style={{
                          textShadow:
                            "0 1px 0 rgba(7, 12, 22, 0.9), 0 0 1px rgba(7, 12, 22, 0.95), 0 0 14px rgba(34, 211, 238, 0.08)",
                        }}
                      >
                        {lesson.title}
                      </h2>
                      <p className="mt-2 max-w-3xl leading-7 text-slate-300">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {lesson.bullets.map((bullet, bulletIndex) => (
                        <span
                          key={bullet}
                          className={[
                            "rounded-full border px-3 py-1 text-sm",
                            bulletIndex === 0
                              ? "border-cyan-300/18 bg-cyan-300/8 text-cyan-100"
                              : "border-white/10 bg-white/[0.04] text-slate-300",
                          ].join(" ")}
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  variant="secondary"
                  className="border border-white/12 bg-white/[0.06] text-slate-100 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-white"
                >
                  <Link to={`/lessons/${lesson.slug}`}>Читати</Link>
                </Button>
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
