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

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight">{lesson.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">
          {lesson.description}
        </p>

        {lesson.content?.goal ? (
          <div className="mt-8 rounded-[24px] border border-primary/15 bg-primary/8 p-6">
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
              Мета уроку
            </div>
            <p className="text-base leading-7 text-slate-100">{lesson.content.goal}</p>
          </div>
        ) : null}

        {lesson.content?.sections?.length ? (
          <div className="mt-10 space-y-8">
            {lesson.content.sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="max-w-4xl leading-8 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <div className="grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-start gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                      >
                        <CircleCheckBig className="mt-1 h-5 w-5 text-primary" />
                        <div className="leading-7 text-slate-200">{bullet}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.code ? (
                  <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1120]">
                    <div className="border-b border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                      {section.codeTitle ?? "code"}
                    </div>
                    <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                      <code>{section.code}</code>
                    </pre>
                  </div>
                ) : null}
                {section.note ? (
                  <p className="max-w-4xl leading-8 text-muted-foreground">{section.note}</p>
                ) : null}
              </section>
            ))}
          </div>
        ) : (
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
        )}

        {lesson.content?.useCases?.length ? (
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Де використовується JavaScript?</h2>
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03]">
              <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.04] text-sm font-medium text-slate-200 md:grid-cols-3">
                <div className="p-4">Місце використання</div>
                <div className="p-4">Приклади</div>
                <div className="p-4">Технології</div>
              </div>
              {lesson.content.useCases.map((item) => (
                <div
                  key={item.area}
                  className="grid grid-cols-1 border-b border-white/10 last:border-b-0 md:grid-cols-3"
                >
                  <div className="p-4 font-medium text-foreground">{item.area}</div>
                  <div className="p-4 leading-7 text-muted-foreground">{item.examples}</div>
                  <div className="p-4 leading-7 text-muted-foreground">{item.technologies}</div>
                </div>
              ))}
            </div>
            <div className="rounded-[24px] border border-cyan-400/15 bg-cyan-400/8 p-5 text-slate-100">
              Висновок: якщо ти бачиш інтерактивний сайт — там майже завжди є JavaScript.
            </div>
          </section>
        ) : null}

        {lesson.content?.reasons?.length ? (
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Чому варто вивчати JavaScript у 2026 році?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {lesson.content.reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-200"
                >
                  {reason}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {lesson.content?.setup?.length ? (
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Що знадобиться для курсу?</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {lesson.content.setup.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5 leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {lesson.content?.homework ? (
          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">{lesson.content.homework.title}</h2>
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
                <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
                  Обов'язково зробити
                </div>
                <div className="space-y-3">
                  {lesson.content.homework.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-3">
                      <CircleCheckBig className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <p className="leading-7 text-slate-200">{task}</p>
                    </div>
                  ))}
                </div>
              </div>

              {lesson.content.homework.code ? (
                <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1120]">
                  <div className="border-b border-white/10 px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-slate-400">
                    index.html
                  </div>
                  <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                    <code>{lesson.content.homework.code}</code>
                  </pre>
                </div>
              ) : null}
            </div>
            {lesson.content.homework.note ? (
              <p className="max-w-4xl leading-8 text-muted-foreground">
                {lesson.content.homework.note}
              </p>
            ) : null}
          </section>
        ) : null}
      </Card>
    </div>
  );
}
