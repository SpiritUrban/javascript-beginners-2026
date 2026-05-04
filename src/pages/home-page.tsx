import { ArrowRight, Code2, Command, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lessons } from "@/lessons/lesson-data";

const highlights = [
  {
    title: "Vite Workflow",
    text: "Миттєвий dev-сервер, швидкий HMR і збірка одразу в `docs`.",
    icon: Rocket,
  },
  {
    title: "Typed Foundation",
    text: "React + TypeScript дає акуратну структуру і контроль на масштабі.",
    icon: ShieldCheck,
  },
  {
    title: "Developer UI",
    text: "Темна, жива атмосфера з dev-естетикою, але без перевантаження.",
    icon: Command,
  },
];

export function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="animate-appear overflow-hidden p-8 sm:p-10">
          <div className="space-y-6">
            <Badge>Modern Frontend Stack</Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                JavaScript курс для початківців у сучасній, приємній developer-атмосфері.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                Проєкт зібраний навколо `Vite + React + TypeScript`, з SPA-маршрутизацією через
                `HashRouter`, дизайном у темній палітрі та готовністю до GitHub Pages з `main/docs`.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/lessons">
                  Перейти до уроків
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/about">Подивитися стек</Link>
              </Button>
            </div>
          </div>
        </Card>

        <Card className="animate-appear p-6 [animation-delay:120ms]">
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Code2 className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-[0.24em]">
                  Build Pipeline
                </span>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-[#0a1120] p-5 font-mono text-sm text-slate-300">
                <div className="mb-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                  deploy flow
                </div>
                <div className="space-y-2">
                  <div>$ npm install</div>
                  <div>$ npm run build</div>
                  <div className="text-primary">dist → disabled, docs → enabled</div>
                  <div># GitHub Pages: main /docs</div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-primary/15 bg-primary/8 p-5">
              <div className="mb-2 font-semibold">Що вже закладено</div>
              <p className="text-sm leading-7 text-muted-foreground">
                Базова структура для сторінок, уроків, загальних компонентів, темної теми
                та масштабування курсу без міграції зі старого CRA.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map(({ title, text, icon: Icon }, index) => (
          <Card
            key={title}
            className="animate-appear p-6"
            style={{ animationDelay: `${index * 120 + 180}ms` }}
          >
            <Icon className="mb-4 h-5 w-5 text-primary" />
            <h2 className="mb-2 text-xl font-semibold">{title}</h2>
            <p className="leading-7 text-muted-foreground">{text}</p>
          </Card>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge>Learning Path</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Стартова карта уроків</h2>
          </div>
          <Button asChild variant="ghost">
            <Link to="/lessons">Усі уроки</Link>
          </Button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {lessons.map((lesson, index) => (
            <Card
              key={lesson.slug}
              className="animate-appear p-6"
              style={{ animationDelay: `${index * 90 + 240}ms` }}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <Badge>{lesson.level}</Badge>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {lesson.duration}
                </span>
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{lesson.title}</h3>
              <p className="mb-5 leading-7 text-muted-foreground">{lesson.description}</p>
              <Button asChild variant="secondary">
                <Link to={`/lessons/${lesson.slug}`}>Відкрити урок</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
