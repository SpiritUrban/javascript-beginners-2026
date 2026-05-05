import {
  ArrowRight,
  BookOpenText,
  Boxes,
  BrainCircuit,
  Clock3,
  Code2,
  FolderKanban,
  GraduationCap,
  Languages,
  Layers3,
  MousePointerClick,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { lessons } from "@/lessons/lesson-data";

const learnItems = [
  "Основи JavaScript: змінні, функції, масиви, об'єкти",
  "Сучасний синтаксис ES6+ без перевантаження теорією",
  "Роботу з DOM, подіями та інтерактивними елементами",
  "Створення перших практичних проєктів для портфоліо",
];

const courseFacts = [
  { label: "Формат", value: "42 короткі уроки", icon: BookOpenText },
  { label: "Тривалість", value: "6–8 тижнів", icon: Clock3 },
  { label: "Мова", value: "Українська", icon: Languages },
  { label: "Старт", value: "Для новачків", icon: Users },
];

const modulePlan = [
  {
    title: "Модуль 1. Знайомство з JavaScript",
    range: "Уроки 1–4",
    icon: Sparkles,
    items: [
      "Що таке JavaScript і де він використовується",
      "Як підготувати середовище",
      "Перша програма і console.log",
      "Базовий синтаксис без типових помилок",
    ],
  },
  {
    title: "Модуль 2. Основи",
    range: "Уроки 5–12",
    icon: BrainCircuit,
    items: [
      "Змінні, типи даних і перетворення типів",
      "Оператори, шаблонні рядки і введення даних",
      "Перші прості калькулятори",
      "Відлагодження через console і breakpoints",
    ],
  },
  {
    title: "Модуль 3. Керуючі конструкції",
    range: "Уроки 13–18",
    icon: Layers3,
    items: [
      "if...else, switch і тернарний оператор",
      "Цикли while, do...while, for, for...of",
      "Мислення через умови і повторення",
      "Мініігри та практичні вправи",
    ],
  },
  {
    title: "Модуль 4. Функції",
    range: "Уроки 19–24",
    icon: Code2,
    items: [
      "Function Declaration, Expression, Arrow Functions",
      "Параметри, default values і return",
      "Scope і closure без зайвого академізму",
      "Функції-калькулятори та валідація",
    ],
  },
  {
    title: "Модуль 5. Масиви та об'єкти",
    range: "Уроки 25–32",
    icon: Boxes,
    items: [
      "Масиви, методи ітерації та методи зміни даних",
      "Об'єкти, властивості, методи",
      "Деструктуризація, spread, rest",
      "JSON і TODO-list на масивах",
    ],
  },
  {
    title: "Модуль 6. DOM та сторінка",
    range: "Уроки 33–37",
    icon: MousePointerClick,
    items: [
      "document.querySelector і навігація по DOM",
      "Зміна тексту, стилів та атрибутів",
      "Створення і видалення елементів",
      "Практика з інтерактивними елементами",
    ],
  },
  {
    title: "Модуль 7. Події",
    range: "Уроки 38–41",
    icon: GraduationCap,
    items: [
      "addEventListener і модель подій",
      "Події кліку, введення і submit",
      "Клавіатура, миша і реакція інтерфейсу",
      "Форми, валідація і маленькі ігри",
    ],
  },
  {
    title: "Модуль 8. Фінал",
    range: "Урок 42 + бонуси 43–45",
    icon: Trophy,
    items: [
      "Фінальний проєкт: Todo App або Weather App",
      "Підсумок і маршрут, що вчити далі",
      "Бонус: Promises, async/await, fetch",
      "Бонус: модулі та базовий GitHub workflow",
    ],
  },
];

export function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
        <Card className="animate-appear overflow-hidden p-8 sm:p-10">
          <div className="space-y-7">
            <Badge>JavaScript Для Початківців 2026</Badge>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Практичний курс з нуля до перших інтерактивних веб-проєктів.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                Курс створений для новачків без досвіду програмування. Крок за кроком ти
                пройдеш шлях від першого `console.log()` до DOM, подій, інтерактивних
                сторінок і фінального проєкту, після якого можна впевнено рухатися далі в
                `React` або `Node.js`.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {courseFacts.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-3 flex items-center gap-3 text-primary">
                    <Icon className="h-4 w-4" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/90">
                      {label}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-foreground">{value}</div>
                </div>
              ))}
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
          <div className="flex h-full flex-col gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <FolderKanban className="h-5 w-5" />
                <span className="font-mono text-xs uppercase tracking-[0.24em]">
                  Формат Курсу
                </span>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-[#0a1120] p-5">
                  <div className="mb-2 font-semibold text-foreground">Що вивчимо</div>
                  <div className="space-y-3">
                    {learnItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-primary/15 bg-primary/8 p-5">
                  <div className="mb-2 font-semibold text-foreground">Результат після курсу</div>
                  <p className="leading-7 text-muted-foreground">
                    Ти зможеш самостійно створювати інтерактивні веб-сайти, розуміти базову
                    логіку JavaScript і бути готовим до наступного кроку в бік React або
                    Node.js.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="animate-appear p-6">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
            Для Кого
          </div>
          <h2 className="mb-2 text-2xl font-semibold">Повний старт без бар'єру входу</h2>
          <p className="leading-7 text-muted-foreground">
            Курс розрахований на людей без бекграунду в програмуванні. Матеріал іде по
            наростаючій, без різких стрибків і без «води».
          </p>
        </Card>

        <Card className="animate-appear p-6 [animation-delay:90ms]">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
            Практика
          </div>
          <h2 className="mb-2 text-2xl font-semibold">Багато вправ і домашніх завдань</h2>
          <p className="leading-7 text-muted-foreground">
            Тут не тільки теорія. Кожен блок прив'язаний до дії: код у браузері, перевірка в
            консолі, робота з DOM, подіями й фінальним застосунком.
          </p>
        </Card>

        <Card className="animate-appear p-6 [animation-delay:180ms]">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
            Фінал
          </div>
          <h2 className="mb-2 text-2xl font-semibold">Проєкт, який не соромно показати</h2>
          <p className="leading-7 text-muted-foreground">
            Наприкінці курсу буде підсумковий проєкт у портфоліо: `Todo App` або `Weather App`
            з реальними навичками, а не просто теоретичним багажем.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge>Course Roadmap</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Програма курсу по модулях</h2>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            42 core lessons + 3 bonus
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-2">
          {modulePlan.map(({ title, range, items, icon: Icon }, index) => (
            <Card
              key={title}
              className="animate-appear p-6"
              style={{ animationDelay: `${index * 70 + 120}ms` }}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {range}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <Badge>Available Now</Badge>
            <h2 className="mt-3 text-3xl font-semibold">Уже доступні уроки</h2>
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
              style={{ animationDelay: `${index * 90 + 180}ms` }}
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
