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
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          Структура розрахована на розширення: можна тримати lessons як окремі компоненти,
          md-like блоки або повноцінні папки з прикладами, тестами і демо.
        </p>
      </section>

      <section className="grid gap-4">
        {lessons.map((lesson) => (
          <Card key={lesson.slug} className="p-6 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
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

              <Button asChild variant="secondary">
                <Link to={`/lessons/${lesson.slug}`}>Читати</Link>
              </Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
