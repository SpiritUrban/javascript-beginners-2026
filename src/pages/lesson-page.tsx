import { ArrowLeft, CircleCheckBig } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getLessonBySlug } from "@/lessons/lesson-data";

export function LessonPage() {
  const { slug = "" } = useParams();
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return (
      <Card className="p-8">
        <h1 className="mb-3 text-3xl font-semibold">Урок не знайдено</h1>
        <p className="mb-6 text-muted-foreground">
          Для цього slug ще немає контенту. Додай новий урок у `src/lessons`.
        </p>
        <Button asChild variant="secondary">
          <Link to="/lessons">
            <ArrowLeft className="h-4 w-4" />
            Назад до уроків
          </Link>
        </Button>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost">
        <Link to="/lessons">
          <ArrowLeft className="h-4 w-4" />
          Усі уроки
        </Link>
      </Button>

      <Card className="p-8 sm:p-10">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <Badge>{lesson.level}</Badge>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            {lesson.duration}
          </span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight">{lesson.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
          {lesson.description}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {lesson.bullets.map((bullet) => (
            <div
              key={bullet}
              className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
            >
              <CircleCheckBig className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">{bullet}</div>
                <div className="mt-1 text-sm leading-6 text-muted-foreground">
                  Тут можна підключити окремий компонент уроку, приклади коду і домашні завдання.
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
