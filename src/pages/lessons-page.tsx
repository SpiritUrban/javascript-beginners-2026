import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lessons } from "@/lessons/lesson-data";

export function LessonsPage() {
  return (
    <div className="space-y-6">
      <section className="space-y-4">
        <Badge>Lessons</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Уроки</h1>
        <p className="text-lg leading-8 text-muted-foreground">
          Рухайся послідовно: від базового синтаксису JavaScript до DOM, подій
          і фінального Todo App.
        </p>
      </section>

      <section className="grid gap-4">
        {lessons.map((lesson, index) => {
          const lessonNumber = String(index + 1).padStart(2, "0");

          return (
            <Card key={lesson.slug} className="p-6 sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4 sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 font-mono text-lg font-semibold text-cyan-300 shadow-[0_0_24px_rgba(45,212,191,0.12)]">
                    {lessonNumber}
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge>{lesson.level}</Badge>
                      <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {lesson.duration}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl font-semibold">{lesson.title}</h2>
                      <p className="mt-2 max-w-3xl leading-7 text-muted-foreground">
                        {lesson.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {lesson.bullets.map((bullet) => (
                        <span
                          key={bullet}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
                        >
                          {bullet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button asChild variant="secondary">
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
