export type LessonLevel = "Start" | "Core" | "Build";

export type LessonSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  codeTitle?: string;
  code?: string;
  note?: string;
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
  video?: {
    title: string;
    url: string;
  };
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
      video: {
        title: "Відео до уроку 1",
        url: "https://www.youtube.com/embed/dv6y_IGxaqw",
      },
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
    slug: "setup-vscode-live-server",
    level: "Start",
    duration: "15 min",
    title: "Як підготувати середовище (VS Code + Live Server)",
    description:
      "Другий урок про налаштування простого і професійного середовища для практики JavaScript протягом усього курсу.",
    bullets: [
      "Встановлення VS Code і Live Server",
      "Створення робочої папки та першого HTML-файлу",
      "Перевірка, що автоперезавантаження і JavaScript працюють",
    ],
    content: {
      video: {
        title: "Відео до уроку 2",
        url: "https://www.youtube.com/embed/czwFBZgLMNc",
      },
      goal:
        "Налаштувати професійне, але просте робоче середовище, в якому ми будемо працювати весь курс.",
      setup: [
        "Visual Studio Code (VS Code) — найкращий безкоштовний редактор коду.",
        "Розширення Live Server — щоб бачити зміни в браузері автоматично.",
        "Google Chrome — рекомендований браузер для курсу.",
      ],
      sections: [
        {
          title: "Крок 1: Встановлення VS Code",
          bullets: [
            "Перейдіть на офіційний сайт: `code.visualstudio.com`.",
            "Натисніть велику кнопку Download для Windows, macOS або Linux.",
            "Встановіть програму як звичайну desktop-програму.",
            "Після запуску, якщо потрібно, увімкніть українську мову: `Ctrl + Shift + P` → `Configure Display Language` → `Ukrainian`.",
          ],
        },
        {
          title: "Крок 2: Встановлення розширення Live Server",
          bullets: [
            "Відкрийте VS Code.",
            "Натисніть іконку Extensions у лівій панелі.",
            "У пошуку введіть: `Live Server`.",
            "Встановіть розширення від Ritwick Dey.",
            "Після встановлення перезапустіть VS Code.",
          ],
        },
        {
          title: "Крок 3: Створюємо робочу папку",
          bullets: [
            "На робочому столі створіть папку `javascript-course`.",
            "У VS Code відкрийте її через `File → Open Folder`.",
            "Саме в цій папці ми будемо створювати перші файли і вправи курсу.",
          ],
        },
        {
          title: "Крок 4: Перший файл і запуск Live Server",
          paragraphs: [
            "У VS Code натисніть `New File` і назвіть файл `index.html`. Вставте в нього код нижче.",
            "Після цього клікніть правою кнопкою миші по `index.html` і виберіть `Open with Live Server`.",
            "Браузер має автоматично відкритися і показати вашу сторінку.",
          ],
          codeTitle: "index.html",
          code: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Урок 2 - Перший запуск</title>
</head>
<body>
    <h1>🎉 Вітаю! Середовище готове!</h1>
    <p>Якщо ти бачиш цей текст — все працює правильно.</p>

    <script>
        console.log("JavaScript працює! 🚀");
    </script>
</body>
</html>`,
        },
        {
          title: "Перевірка, що все працює",
          bullets: [
            "Змініть текст у `<h1>` і збережіть файл через `Ctrl + S`.",
            "Сторінка в браузері повинна оновитися автоматично.",
            "Відкрийте консоль через `F12 → Console` і перевірте, чи є повідомлення `JavaScript працює! 🚀`.",
          ],
        },
        {
          title: "Корисні налаштування VS Code",
          bullets: [
            "`Auto Save: onFocusChange`.",
            "`Format On Save` — увімкнути.",
            "`Word Wrap: on`.",
          ],
          note:
            "Ці налаштування не є обов'язковими, але вони зроблять роботу значно комфортнішою вже з перших уроків.",
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Налаштуйте VS Code і Live Server, якщо ще не зробили цього.",
          "Створіть файл `index.html` у папці `javascript-course`.",
          "Запустіть його через Live Server.",
          "Змініть заголовок і текст на сторінці та перевірте автоновлення.",
          "Напишіть у чаті: `Урок 2 пройдено`.",
        ],
        note:
          "Мета домашнього завдання не просто відкрити сторінку, а переконатися, що вся зв'язка VS Code + Live Server + браузер працює стабільно.",
      },
    },
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
