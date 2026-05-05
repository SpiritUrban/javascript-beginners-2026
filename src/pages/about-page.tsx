import {
  ArrowRight,
  Brain,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import mentorPhoto from "@/assets/images/iam.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const courseValues = [
  {
    title: "Для новачків без хаосу",
    text: "Курс зібраний так, щоб людина без технічного бекграунду могла зайти в JavaScript спокійно, без різких стрибків і без відчуття, що вона постійно відстає.",
    icon: Users,
  },
  {
    title: "Практика важливіша за шум",
    text: "Матеріал іде по ділу: короткі уроки, домашні завдання, реальні приклади, робота з DOM, подіями і поступовий вихід до власного проєкту.",
    icon: Target,
  },
  {
    title: "Ріст не лише технічний",
    text: "Ідея курсу не тільки в тому, щоб навчити синтаксису, а в тому, щоб провести людину в новий рівень через системність, ясність і внутрішню опору.",
    icon: HeartHandshake,
  },
];

const mentorStrengths = [
  {
    title: "Технічна майстерність",
    text: "З 2015 року Віталій працює як JavaScript Fullstack розробник у стеку React, Next.js, Node.js і TypeScript. Це досвід реальної комерційної розробки, а не лише теорії.",
    icon: Sparkles,
  },
  {
    title: "Пояснення без зайвого тиску",
    text: "Подача матеріалу побудована так, щоб складні речі не ламали мотивацію. Ідея не в тому, щоб вразити термінами, а в тому, щоб людина дійсно зрозуміла і змогла повторити.",
    icon: GraduationCap,
  },
  {
    title: "Цілісний підхід",
    text: "Окрім IT-досвіду, Віталій має базу у фізкультурі та валеології, тому дивиться на розвиток розробника ширше: не лише код, а й стан тіла, психіки, енергії та фокусу.",
    icon: Dumbbell,
  },
  {
    title: "Глибина наставництва",
    text: "Його сильна сторона - бачити, де проблема справді технічна, а де вона ховається в перевантаженні, страху, вигоранні або втраті вектора руху.",
    icon: Brain,
  },
];

const outcomes = [
  "Зрозумієте базову логіку JavaScript і сучасного синтаксису ES6+.",
  "Навчитеся працювати з DOM, подіями і простими інтерактивними сценаріями.",
  "Зможете самостійно збирати перші мініпроєкти і рухатися далі до React або Node.js.",
  "Отримаєте структурований маршрут без відчуття, що все розкидано і незрозуміло.",
];

export function AboutPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-8 sm:p-10">
          <Badge>About The Course</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            JavaScript для початківців 2026 - не просто набір уроків, а добре
            проведений шлях у професію.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Це практичний курс для людей, які хочуть зайти в JavaScript з нуля і
            не загрузнути в хаосі. Його мета - допомогти пройти шлях від першого
            знайомства з мовою до моменту, коли ти вже вмієш самостійно
            створювати інтерактивні вебсторінки й готовий рухатися далі в бік
            React, Node.js і реальної розробки.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/lessons">
                Почати навчання
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link to="/">Повернутися на головну</Link>
            </Button>
          </div>
        </Card>

        <Card className="overflow-hidden p-0">
          <div className="grid h-full gap-0 md:grid-cols-[0.88fr_1.12fr]">
            <div className="relative min-h-[340px]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-primary/15" />
              <img
                src={mentorPhoto}
                alt="Віталій Дячук"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="p-8">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
                Про наставника
              </div>
              <h2 className="text-3xl font-semibold">Віталій Дячук</h2>

              <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  11 років розробки
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  6 років менторства
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
                  React, Next.js, Node.js, TypeScript
                </span>
              </div>

              <p className="mt-5 leading-8 text-muted-foreground">
                JavaScript Fullstack розробник, наставник і провідник у
                технічному рості. З 2015 року Віталій професійно працює в
                сучасній JavaScript-екосистемі, а до цього мав сильний
                дизайнерський і візуальний бекграунд. Тому добре відчуває не
                лише код, а й форму, структуру та користувацьке сприйняття.
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                Його підхід цінний тим, що технічний розвиток не відірваний від
                людського стану. Тут є не тільки інженерна база, а й уважність
                до того, як людина вчиться, тримає фокус, переживає втому і
                проходить складні точки росту.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {courseValues.map(({ title, text, icon: Icon }, index) => (
          <Card
            key={title}
            className="animate-appear p-6"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <Icon className="mb-4 h-5 w-5 text-primary" />
            <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
            <p className="leading-7 text-muted-foreground">{text}</p>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card className="p-8">
          <Badge>What You Get</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            Що дає цей курс у підсумку
          </h2>
          <div className="mt-6 space-y-3">
            {outcomes.map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-white/10 bg-white/[0.04] p-4 leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <Badge>Why This Mentor</Badge>
          <h2 className="mt-4 text-3xl font-semibold">
            Чому цей підхід працює глибше
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mentorStrengths.map(({ title, text, icon: Icon }) => (
              <div
                key={title}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] p-5"
              >
                <Icon className="mb-4 h-5 w-5 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section>
        <Card className="p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary/90">
                Підсумок
              </div>
              <h2 className="max-w-3xl text-3xl font-semibold">
                Якщо хочеться не просто вчити JavaScript, а пройти шлях міцно,
                спокійно і з відчуттям опори - ця платформа саме про це.
              </h2>
              <p className="mt-4 max-w-3xl leading-8 text-muted-foreground">
                Тут є структура, практика, адекватний темп і людський спосіб
                навчання. Без зайвого пафосу, але з реальною повагою до шляху
                людини, яка входить у нову сферу.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button asChild size="lg">
                <Link to="/lessons">
                  До уроків
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
