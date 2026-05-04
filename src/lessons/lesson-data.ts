export type LessonLevel = "Start" | "Core" | "Build";

export type LessonSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LessonUseCase = {
  area: string;
  examples: string;
  technologies: string;
};

export type LessonHomework = {
  title: string;
  tasks: string[];
  code?: string;
  note?: string;
};

export type LessonContent = {
  goal?: string;
  sections?: LessonSection[];
  useCases?: LessonUseCase[];
  reasons?: string[];
  setup?: string[];
  homework?: LessonHomework;
};

export type Lesson = {
  slug: string;
  level: LessonLevel;
  duration: string;
  title: string;
  description: string;
  bullets: string[];
  content?: LessonContent;
};

export const lessons: Lesson[] = [
  {
    slug: "what-is-javascript",
    level: "Start",
    duration: "14 min",
    title: "Що таке JavaScript і де він використовується",
    description:
      "Перший урок про те, що таке JavaScript, чому він настільки важливий і де саме використовується у 2026 році.",
    bullets: [
      "Що таке JavaScript і чому він не Java",
      "Де використовується JS: браузер, сервер, мобайл, десктоп",
      "Що потрібно для старту в курсі",
    ],
    content: {
      goal:
        "Зрозуміти, що таке JavaScript, чому він такий важливий і де саме його використовують.",
      sections: [
        {
          title: "Що таке JavaScript?",
          paragraphs: [
            "JavaScript (JS) — це одна з найпопулярніших мов програмування у світі. Саме вона дозволяє робити веб-сторінки інтерактивними: реагувати на кліки, змінювати контент без перезавантаження, анімувати інтерфейси і працювати з даними в браузері.",
            "Мову створив Брендан Айх у 1995 році всього за 10 днів. Спочатку вона називалася Mocha, потім LiveScript, а вже пізніше отримала назву JavaScript.",
            "Важливий момент: JavaScript не є Java. У них різне призначення, різна екосистема і різна історія. Спільна в них здебільшого тільки назва, яку свого часу використали для маркетингу.",
            "JavaScript є інтерпретованою мовою, тобто код виконується послідовно, рядок за рядком. Сучасний стандарт мови називається ECMAScript, тому ти часто побачиш терміни на кшталт ES6, ES2020 або ES2024.",
          ],
        },
      ],
      useCases: [
        {
          area: "Веб-розробка",
          examples: "Сайти, інтерактивні елементи, анімації",
          technologies: "Frontend + Backend",
        },
        {
          area: "Frontend",
          examples: "Інтерфейси на React, Vue, Angular, Svelte",
          technologies: "Браузер",
        },
        {
          area: "Backend",
          examples: "Серверна частина на Node.js",
          technologies: "Express, NestJS",
        },
        {
          area: "Мобільні додатки",
          examples: "Кросплатформені застосунки",
          technologies: "React Native, Ionic",
        },
        {
          area: "Десктопні програми",
          examples: "VS Code, Discord, Figma",
          technologies: "Electron + HTML/CSS/JS",
        },
        {
          area: "Ігри",
          examples: "2D та 3D браузерні ігри",
          technologies: "Phaser, Three.js",
        },
        {
          area: "Інше",
          examples: "Автоматизація, data science, AI",
          technologies: "TensorFlow.js та інші бібліотеки",
        },
      ],
      reasons: [
        "JavaScript залишається однією з найпопулярніших мов серед розробників.",
        "Дає високий поріг застосування: від простих сайтів до fullstack-розробки.",
        "Результат видно дуже швидко: написав код і одразу побачив зміни в браузері.",
        "Має величезну спільноту, документацію та бібліотеки.",
        "Відкриває шлях у Frontend, Fullstack і Mobile-напрями.",
      ],
      setup: [
        "Браузер: найкраще Google Chrome.",
        "Редактор коду: Visual Studio Code.",
        "Розширення для VS Code, які встановимо далі: Live Server, Prettier, ESLint.",
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Встанови Visual Studio Code, якщо він ще не встановлений.",
          "Встанови або підготуй Google Chrome.",
          "Створи на робочому столі папку `javascript-course`.",
          "Усередині створеної папки створи файл `index.html`.",
          "Скопіюй у файл приклад нижче та відкрий його в браузері.",
        ],
        code: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Мій перший JavaScript</title>
</head>
<body>
    <h1>Привіт, JavaScript! 👋</h1>

    <script>
        console.log("Мій перший рядок коду на JavaScript!");
    </script>
</body>
</html>`,
        note:
          "Відкрий цей файл у браузері та натисни F12, потім перейди у вкладку Console. Там має з'явитися повідомлення з твого першого JavaScript-коду.",
      },
    },
  },
  {
    slug: "conditions-and-logic",
    level: "Core",
    duration: "16 min",
    title: "Conditions and Logic",
    description:
      "Умови, порівняння і логічні оператори для керування потоком програми.",
    bullets: [
      "if / else та ternary",
      "Truthy / falsy значення",
      "Комбінування умов через && та ||",
    ],
  },
  {
    slug: "functions-and-scope",
    level: "Core",
    duration: "18 min",
    title: "Functions and Scope",
    description:
      "Функції, параметри, return і базове розуміння області видимості.",
    bullets: [
      "Function declaration та arrow functions",
      "Локальна і глобальна область видимості",
      "Малі reusable-блоки логіки",
    ],
  },
  {
    slug: "arrays-and-iteration",
    level: "Build",
    duration: "20 min",
    title: "Arrays and Iteration",
    description:
      "Масиви, цикли та перехід до мислення через колекції даних.",
    bullets: [
      "for, for...of, map",
      "push, filter, find",
      "Побудова простого списку даних",
    ],
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
