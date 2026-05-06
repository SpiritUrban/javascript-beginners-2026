export type LessonLevel = "Start" | "Core" | "Build";

export type LessonSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: LessonTable;
  codeTitle?: string;
  code?: string;
  note?: string;
};

export type LessonTable = {
  headers: string[];
  rows: string[][];
};

export type LessonUseCase = {
  area: string;
  examples: string;
  technologies: string;
};

export type LessonHomework = {
  title: string;
  tasks: string[];
  codeTitle?: string;
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
        codeTitle: "index.html",
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
    slug: "first-program-console-log-and-script",
    level: "Start",
    duration: "17 min",
    title: "Перша програма — console.log та підключення скрипта",
    description:
      "Третій урок про створення окремого JavaScript-файлу, його підключення до HTML і перші повідомлення в консолі браузера.",
    bullets: [
      "Підключення зовнішнього файлу `script.js`",
      "Робота з `console.log()`",
      "Перший запуск JavaScript через Live Server",
    ],
    content: {
      video: {
        title: "Відео до уроку 3",
        url: "https://www.youtube.com/embed/gDJgHskdouM",
      },
      goal:
        "Навчитися створювати окремий JavaScript-файл, підключати його до HTML та виводити інформацію в консоль браузера.",
      sections: [
        {
          title: "Теорія",
          paragraphs: [
            "Існує два основних способи додавати JavaScript на сторінку: всередині HTML через тег `script` або через окремий файл `.js`.",
            "Ми будемо використовувати другий спосіб, тому що це стандартна практика в сучасній розробці. Вона робить код чистішим, зручнішим для підтримки і масштабування.",
          ],
          bullets: [
            "Всередині HTML через тег `<script>`.",
            "Окремий файл `.js` — найкраща практика.",
          ],
        },
        {
          title: "Практика: створюємо файли",
          bullets: [
            "Відкрийте вашу папку `javascript-course` у VS Code.",
            "Створіть два файли в корені папки: `index.html` і `script.js`.",
          ],
        },
        {
          title: "Файл index.html",
          codeTitle: "index.html",
          code: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Урок 3 - Перша програма</title>
</head>
<body>
    <h1>Моя перша програма на JavaScript</h1>
    <p>Відкрий консоль браузера (F12)</p>

    <!-- Підключаємо зовнішній скрипт -->
    <script src="script.js"></script>
</body>
</html>`,
        },
        {
          title: "Файл script.js",
          codeTitle: "script.js",
          code: `// Це коментар — він не виконується
console.log("Привіт, світ! 👋");
console.log("Це моя перша програма на JavaScript");
console.log("Сьогодні: " + new Date().toLocaleDateString("uk-UA"));

// Можна виводити числа, текст, об'єкти
console.log(42);
console.log("Я вивчаю JS у 2026 році 🚀");`,
        },
        {
          title: "Як запустити",
          bullets: [
            "Збережіть обидва файли через `Ctrl + S`.",
            "Клікніть правою кнопкою по `index.html` → `Open with Live Server`.",
            "Натисніть `F12` або `Ctrl + Shift + I` і відкрийте вкладку `Console`.",
            "У консолі повинні з'явитися всі ваші повідомлення.",
          ],
        },
        {
          title: "Важливі моменти",
          bullets: [
            "Тег `<script>` найкраще ставити перед закриваючим тегом `</body>`.",
            "Файл скрипта повинен мати розширення `.js`.",
            "`console.log()` — це базовий інструмент для перевірки та відладки коду.",
            "JavaScript чутливий до регістру: `Console.log` не спрацює.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створіть файли `index.html` та `script.js`.",
          "Підключіть скрипт до HTML.",
          "Виведіть у консоль своє ім'я, вік, що ви хочете навчитися на цьому курсі, і сьогоднішню дату.",
          "Змініть текст заголовка на сторінці через JavaScript.",
        ],
        codeTitle: "script.js",
        code: `document.querySelector("h1").textContent = "Я вже програмую!";`,
        note:
          "Готово! Після цього у вас вже буде перша окрема JavaScript-програма з підключеним зовнішнім файлом і зміною сторінки через код.",
      },
    },
  },
  {
    slug: "syntax-overview-case-comments-semicolons",
    level: "Start",
    duration: "16 min",
    title: "Огляд синтаксису — чутливість до регістру, коментарі, крапка з комою",
    description:
      "Четвертий урок про базові правила синтаксису JavaScript, щоб з самого початку писати код акуратно і без типових помилок.",
    bullets: [
      "Чутливість JavaScript до регістру",
      "Однорядкові та багаторядкові коментарі",
      "Роль крапки з комою в сучасному JavaScript",
    ],
    content: {
      video: {
        title: "Відео до уроку 4",
        url: "https://www.youtube.com/embed/Vz9OiZuRrs0",
      },
      goal:
        "Розібратися з базовими правилами написання коду на JavaScript, щоб надалі не робити типових помилок новачків.",
      sections: [
        {
          title: "1. Чутливість до регістру (Case Sensitivity)",
          paragraphs: [
            "JavaScript розрізняє великі та малі літери. Це означає, що одна й та сама команда, написана в різних регістрах, для мови вже є різними конструкціями.",
          ],
          codeTitle: "case-sensitivity.js",
          code: `console.log("Привіт");     // працює
Console.Log("Привіт");     // ❌ Помилка!
console.Log("Привіт");     // ❌ Помилка!
CONSOLE.LOG("Привіт");     // ❌ Помилка!`,
          note:
            "Правило: `console.log`, `Console.log` і `CONSOLE.LOG` — це різні речі. Працює тільки правильний варіант.",
        },
        {
          title: "2. Коментарі",
          paragraphs: [
            "Коментарі — це текст, який JavaScript ігнорує. Вони потрібні, щоб пояснювати код, залишати нотатки або тимчасово вимикати окремі рядки.",
          ],
          codeTitle: "comments.js",
          code: `// Це одностроковий коментар

/*
Це
багаторядковий
коментар
*/

// console.log("Цей код не виконається");`,
          bullets: [
            "Пояснювати складні частини коду.",
            "Тимчасово вимкнути код.",
            "Залишати нотатки для себе.",
          ],
        },
        {
          title: "3. Крапка з комою (;)",
          paragraphs: [
            "У сучасному JavaScript крапка з комою формально необов'язкова завдяки ASI — Automatic Semicolon Insertion.",
            "Але для цього курсу краще ставити крапку з комою. Це дисциплінує синтаксис і зменшує ризик дивних помилок на початку.",
          ],
          codeTitle: "semicolons.js",
          code: `// Можна писати так:
console.log("Привіт")
console.log("Світ")

// І так (класичний стиль):
console.log("Привіт");
console.log("Світ");`,
        },
        {
          title: "Практика — виконайте в script.js",
          codeTitle: "script.js",
          code: `// === Урок 4 — Основи синтаксису ===

// 1. Чутливість до регістру
console.log("Це працює");
console.log("Це теж працює");

// 2. Коментарі
// Це мій перший коментар
/* 
   Багаторядковий коментар
   Можна писати багато рядків
*/

// 3. Крапка з комою
console.log("Рядок 1");
console.log("Рядок 2")
console.log("Рядок 3"); // можна і з крапкою, і без

// Приклад з помилкою (розкоментуйте, щоб побачити помилку)
// Console.log("Це не спрацює")`,
        },
        {
          title: "Перевірка",
          bullets: [
            "Збережіть файл.",
            "Відкрийте `index.html` через Live Server.",
            "Натисніть `F12 → Console`.",
            "У консолі повинні з'явитися всі повідомлення без помилок.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Напишіть у `script.js` 3 однострокових коментарі.",
          "Додайте 1 багаторядковий коментар.",
          "Напишіть 5 `console.log()` з різним текстом: своє ім'я, місто, що ви вивчаєте тощо.",
          "Намірно зробіть 1 помилку з регістром і подивіться, що покаже консоль.",
          "Виправте помилку і переконайтеся, що код знову працює.",
          "Напишіть у чаті: `Урок 4 пройдено`.",
        ],
      },
    },
  },
  {
    slug: "variables-let-const-var",
    level: "Core",
    duration: "18 min",
    title: "Змінні — let, const, var — коли що використовувати",
    description:
      "П’ятий урок про те, як зберігати дані в JavaScript і як правильно обирати між `const`, `let` і `var` у реальному коді.",
    bullets: [
      "Що таке змінна і як вона зберігає дані",
      "Різниця між `const`, `let` і `var`",
      "Правила іменування змінних і безпечні звички з самого старту",
    ],
    content: {
      video: {
        title: "Відео до уроку 5",
        url: "https://www.youtube.com/embed/SsxMA4KJP9o",
      },
      goal:
        "Розібратися, як створювати і зберігати дані в JavaScript, і зрозуміти різницю між let, const і var.",
      sections: [
        {
          title: "Що таке змінна?",
          paragraphs: [
            "Змінна — це коробка з назвою, в якій можна зберігати дані. Потім ці дані можна використовувати в коді, показувати на сторінці, змінювати або порівнювати.",
          ],
          codeTitle: "variables.js",
          code: `let name = "Дмитро";
let age = 25;
let isStudent = true;`,
        },
        {
          title: "Порівняння let, const і var",
          table: {
            headers: [
              "Особливість",
              "const",
              "let",
              "var",
            ],
            rows: [
              ["Можна змінювати значення", "❌ Ні", "✅ Так", "✅ Так"],
              ["Область видимості", "Блокова", "Блокова", "Функціональна"],
              ["Підняття (hoisting)", "Ні (TDZ)", "Ні (TDZ)", "Так"],
              [
                "Рекомендація",
                "Використовувати завжди, коли можна",
                "Коли потрібно змінювати",
                "Не використовувати",
              ],
            ],
          },
        },
        {
          title: "Практика — виконайте в script.js",
          codeTitle: "script.js",
          code: `// === Урок 5 — Змінні ===

// 1. const — для постійних значень
const courseName = "JavaScript для початківців 2026";
const birthYear = 2005;

// birthYear = 2006; // ❌ Помилка! const не можна змінювати

// 2. let — коли значення буде змінюватися
let age = 20;
let city = "Київ";

console.log("Курс:", courseName);
console.log("Вік:", age);

age = 21;                    // ✅ Можна змінювати
city = "Львів";              // ✅ Можна змінювати

console.log("Новий вік:", age);
console.log("Нове місто:", city);

// 3. var — старий спосіб (не використовуйте)
var oldVariable = "Це старий стиль";

// Правила іменування змінних
const userName = "Олександр";     // camelCase — рекомендовано
const user_name = "Олександр";    // snake_case
const UserName = "Олександр";     // PascalCase (для класів)`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Спочатку пишіть `const`. Якщо пізніше зрозумієте, що значення потрібно змінювати — поміняйте на `let`.",
            "Назви змінних повинні бути зрозумілими.",
            "Використовуйте `camelCase`: перше слово з маленької літери, наступні — з великої.",
            "Не починайте назву з цифри і не використовуйте зарезервовані слова: `let`, `const`, `function` та інші.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створіть у `script.js` змінні для імені, прізвища, віку та професії.",
          "Виведіть у консоль повне ім’я, вік і професію.",
          "Змініть вік і професію та виведіть оновлені значення ще раз.",
          "Спробуйте самостійно пояснити, чому для одних даних краще `const`, а для інших — `let`.",
        ],
        codeTitle: "script.js",
        code: `const firstName = "Твоє Ім'я";
const lastName = "Твоє Прізвище";
let age = 20;
let profession = "Студент / Початківець";

console.log("Повне ім'я:", firstName, lastName);
console.log("Вік:", age);
console.log("Професія:", profession);

// Змініть вік і професію і виведіть ще раз`,
        note: "Готово! Після цього уроку ти вже будеш розуміти базову логіку зберігання даних у JavaScript і не плутатимешся між `const`, `let` та `var`.",
      },
    },
  },
  {
    slug: "data-types-number-string-boolean-undefined-null",
    level: "Core",
    duration: "18 min",
    title: "Типи даних — number, string, boolean, undefined, null",
    description:
      "Шостий урок про базові типи даних у JavaScript і про те, як визначати тип змінної через `typeof`.",
    bullets: [
      "Основні примітивні типи даних у JavaScript",
      "Практика з `typeof` і перевіркою типів",
      "Важливі винятки: `null` і `NaN`",
    ],
    content: {
      video: {
        title: "Відео до уроку 6",
        url: "https://www.youtube.com/embed/xZmcnp_84sw",
      },
      goal:
        "Вивчити основні типи даних у JavaScript і навчитися визначати тип змінної за допомогою typeof.",
      sections: [
        {
          title: "Основні примітивні типи даних",
          table: {
            headers: ["Тип", "Опис", "Приклади", "typeof"],
            rows: [
              [
                "number",
                "Числа (цілі та дробові)",
                "42, 3.14, -5, Infinity",
                '"number"',
              ],
              [
                "string",
                "Текст",
                '"Привіт", \'JS\', `Шаблон`',
                '"string"',
              ],
              [
                "boolean",
                "Логічний тип (правда/брехня)",
                "true, false",
                '"boolean"',
              ],
              [
                "undefined",
                "Значення не присвоєно",
                "Змінна без значення",
                '"undefined"',
              ],
              [
                "null",
                "Порожнє / відсутнє значення",
                "null",
                '"object" ⚠️',
              ],
            ],
          },
        },
        {
          title: "Практика — виконайте в script.js",
          codeTitle: "script.js",
          code: `// === Урок 6 — Типи даних ===

const courseName = "JavaScript для початківців 2026";   // string
let age = 25;                                           // number
let isStudent = true;                                   // boolean
let score = 98.7;                                       // number
let city = null;                                        // null
let futureJob;                                          // undefined

console.log("Назва курсу:", courseName);
console.log("Тип courseName:", typeof courseName);

console.log("Вік:", age);
console.log("Тип age:", typeof age);

console.log("Студент?", isStudent);
console.log("Тип isStudent:", typeof isStudent);

console.log("Місто:", city);
console.log("Тип city:", typeof city);        // ⚠️ object — відома помилка JS

console.log("futureJob:", futureJob);
console.log("Тип futureJob:", typeof futureJob);

// Приклади number
console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof NaN);          // "number" — Not a Number`,
        },
        {
          title: "Важливі моменти",
          bullets: [
            '`typeof null` повертає `"object"` — це відома історична помилка JavaScript.',
            '`NaN` (Not a Number) має тип `number`.',
            'Рядки можна створювати трьома способами: `" "`, `\' \'`, `` ` ` ``.',
            "`const` і `let` не змінюють тип даних після створення.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створіть змінні з різними типами даних: ваше ім’я, вік, чи ви зараз навчаєтесь, змінну без значення і `salary = null`.",
          "Виведіть усі змінні та їх типи через `typeof` у консоль.",
          'Спробуйте змінити тип змінної, наприклад: `age = "двадцять п\'ять"`.',
          "Поспостерігайте, як JavaScript дозволяє змінювати тип значення в одній і тій самій змінній.",
        ],
        note:
          "Відмінно! Тепер ви знаєте, які дані може зберігати JavaScript і як швидко перевіряти їх тип.",
      },
    },
  },
  {
    slug: "type-conversion-and-coercion",
    level: "Core",
    duration: "19 min",
    title: "Перетворення типів (типізація)",
    description:
      "Сьомий урок про те, як перетворювати значення між `string`, `number` і `boolean`, і як JavaScript інколи робить це автоматично.",
    bullets: [
      "Явне перетворення типів через `Number`, `String`, `Boolean`",
      "Неявне перетворення типів у виразах",
      "Небезпечні місця, де JavaScript може поводитися неочевидно",
    ],
    content: {
      video: {
        title: "Відео до уроку 7",
        url: "https://www.youtube.com/embed/5jsxhQqkfQ4",
      },
      goal:
        "Навчитися перетворювати один тип даних в інший і розуміти, як JavaScript робить це автоматично.",
      sections: [
        {
          title: "Два види перетворення",
          bullets: [
            "Явне перетворення — ми самі вказуємо, у який тип потрібно перевести значення. Це рекомендований шлях.",
            "Неявне перетворення — JavaScript робить це сам під час обчислень. Це називається type coercion.",
          ],
        },
        {
          title: "1. Явне перетворення",
          codeTitle: "script.js",
          code: `// === Урок 7 — Перетворення типів ===

const age = "25";           // string
const score = "98.7";       // string
const isActive = "true";    // string

// Перетворення в число
console.log(Number(age));           // 25
console.log(Number(score));         // 98.7
console.log(Number("Привіт"));      // NaN

// Перетворення в рядок
console.log(String(42));            // "42"
console.log(42 + "");               // "42" (короткий спосіб)

// Перетворення в boolean
console.log(Boolean(1));            // true
console.log(Boolean(0));            // false
console.log(Boolean(""));           // false
console.log(Boolean(" "));          // true
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false`,
        },
        {
          title: "2. Неявне перетворення (Type Coercion)",
          codeTitle: "coercion.js",
          code: `console.log("5" + 5);       // "55"  (число перетворилось у рядок)
console.log("5" - 5);       // 0     (рядок перетворився у число)
console.log("5" * 2);       // 10
console.log("5" / 2);       // 2.5

console.log(5 + null);      // 5
console.log(5 + undefined); // NaN

// Boolean в числах
console.log(true + 1);      // 2
console.log(false + 10);    // 10`,
        },
        {
          title: "Важливі правила",
          table: {
            headers: ["Значення", "Boolean()", "Number()", "String()"],
            rows: [
              ["0", "false", "0", '"0"'],
              ['""', "false", "0", '""'],
              ["null", "false", "0", '"null"'],
              ["undefined", "false", "NaN", '"undefined"'],
              ["NaN", "false", "NaN", '"NaN"'],
              ["Все інше", "true", "залежить від значення", "рядок"],
            ],
          },
          note:
            "Особливо зверни увагу на `undefined` і `NaN`: вони часто ламають логіку там, де новачок очікує звичайне число.",
        },
        {
          title: "Корисні функції",
          bullets: [
            '`parseInt("25 років")` → `25`.',
            '`parseFloat("98.7")` → `98.7`.',
            '`Number("25")` → `25` — сучасніший і більш прямий спосіб.',
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Виконайте приклад з `a` і `b` та спробуйте передбачити результат до запуску.",
          "Порівняйте `a + b` і `Number(a) + Number(b)`.",
          "Перевірте різницю між звичайною конкатенацією і шаблонним рядком.",
          "Перетворіть `price` і `quantity` у числа та обчисліть загальну вартість.",
        ],
        codeTitle: "script.js",
        code: `const a = "15";
const b = "10";

console.log(a + b);           // що буде?
console.log(Number(a) + Number(b));

console.log("Я маю " + 5 + " яблук");
console.log(\`Я маю \${5} яблук\`); // шаблонний рядок

// Перетворіть і виведіть:
let price = "199.99";
let quantity = "3";

// Обчисліть загальну вартість`,
        note:
          "Молодець! Ви тепер розумієте одну з найважливіших і найпідступніших тем JavaScript.",
      },
    },
  },
  {
    slug: "operators-arithmetic-comparison-logical",
    level: "Core",
    duration: "20 min",
    title: "Оператори — арифметичні, порівняння, логічні",
    description:
      "Восьмий урок про базові оператори JavaScript: як рахувати, порівнювати значення і будувати логічні умови.",
    bullets: [
      "Арифметичні оператори: `+`, `-`, `*`, `/`, `%`, `**`",
      "Порівняння через `>`, `<`, `===`, `!==` та інші",
      "Логічні оператори `&&`, `||`, `!` і пріоритет виразів",
    ],
    content: {
      video: {
        title: "Відео до уроку 8",
        url: "https://www.youtube.com/embed/aw-GaeCCZwQ",
      },
      goal:
        "Вивчити основні оператори JavaScript і навчитися правильно їх використовувати.",
      sections: [
        {
          title: "1. Арифметичні оператори",
          codeTitle: "script.js",
          code: `// === Урок 8 — Оператори ===

const a = 10;
const b = 3;

console.log("Додавання:", a + b);           // 13
console.log("Віднімання:", a - b);          // 7
console.log("Множення:", a * b);            // 30
console.log("Ділення:", a / b);             // 3.333...
console.log("Остача від ділення:", a % b);  // 1
console.log("Піднесення до степеня:", a ** b); // 1000

// Збільшення / зменшення
let counter = 5;
console.log(counter++);   // 5 (постфікс)
console.log(++counter);   // 7 (префікс)`,
        },
        {
          title: "2. Оператори порівняння",
          paragraphs: [
            "Оператори порівняння повертають `true` або `false`. Вони потрібні для перевірок в умовах, циклах, валідації та майже в кожному реальному скрипті.",
          ],
          codeTitle: "comparison.js",
          code: `const age = 25;

console.log(age > 18);     // true
console.log(age >= 25);    // true
console.log(age < 18);     // false
console.log(age <= 25);    // true

console.log(age == 25);    // true  (нестроге)
console.log(age == "25");  // true  (перетворює тип)

console.log(age === 25);   // true  (строге — рекомендовано)
console.log(age === "25"); // false (різні типи)`,
          note:
            "Правило: використовуйте `===` і `!==` — строге порівняння без неочікуваного перетворення типів безпечніше.",
        },
        {
          title: "3. Логічні оператори",
          codeTitle: "logical.js",
          code: `const hasTicket = true;
const hasPassport = false;
const isAdult = true;

console.log("І можна летіти?", hasTicket && hasPassport);     // false (І)
console.log("Можна хоча б щось?", hasTicket || hasPassport);  // true  (АБО)
console.log("Не дорослий?", !isAdult);                        // false (НІ)`,
        },
        {
          title: "Таблиця пріоритету операторів",
          table: {
            headers: ["Пріоритет", "Оператори"],
            rows: [
              ["1", "**"],
              ["2", "*, /, %"],
              ["3", "+, -"],
              ["4", "<, >, <=, >="],
              ["5", "===, !==, ==, !="],
              ["6", "&&"],
              ["7", "||"],
            ],
          },
          note:
            "Якщо є сумнів у порядку виконання, ставте дужки. Це робить код зрозумілішим і зменшує ризик помилок.",
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Обчисліть два вирази з `x` і `y` та поясніть різницю між результатами.",
          "Перевірте, чи може користувач редагувати статтю через `isLoggedIn && hasPermission`.",
          "Створіть власні приклади з віком, ціною товару і знижкою.",
          "Спробуйте додати дужки в арифметичні вирази і подивіться, як це змінює результат.",
        ],
        codeTitle: "script.js",
        code: `const x = 15;
const y = 4;

// 1. Обчисліть:
console.log(x + y * 2);
console.log((x + y) * 2);

// 2. Перевірте:
const isLoggedIn = true;
const hasPermission = false;

// Чи може користувач редагувати статтю?
console.log(isLoggedIn && hasPermission);

// 3. Створіть свої приклади з віком, ціною товару і знижкою`,
        note:
          "Молодець! Ви тепер знаєте всі базові оператори, які використовуються майже в кожному скрипті.",
      },
    },
  },
  {
    slug: "template-literals",
    level: "Core",
    duration: "16 min",
    title: "Шаблонні рядки (Template literals)",
    description:
      "Дев’ятий урок про сучасний спосіб роботи з рядками в JavaScript через template literals, вставку змінних і багаторядковий текст.",
    bullets: [
      "Різниця між старою конкатенацією і template literals",
      "Вставка змінних та виразів через `${...}`",
      "Багаторядкові рядки і реальні приклади використання",
    ],
    content: {
      video: {
        title: "Відео до уроку 9",
        url: "https://www.youtube.com/embed/AxWLAoNPgPk",
      },
      goal:
        "Навчитися сучасному та зручному способу роботи з рядками за допомогою шаблонних рядків.",
      sections: [
        {
          title: "Що таке Template literals?",
          paragraphs: [
            "Це сучасний спосіб створення рядків, який з’явився в ES6 у 2015 році. Він дозволяє зручно вставляти змінні, обчислення і навіть писати багаторядковий текст без незручної конкатенації.",
          ],
          codeTitle: "template-literals.js",
          code: `// === Урок 9 — Шаблонні рядки ===

// Старий спосіб (конкатенація)
const name = "Олександр";
const age = 25;

console.log("Привіт, мене звати " + name + ". Мені " + age + " років.");

// Новий сучасний спосіб — Template literals
console.log(\`Привіт, мене звати \${name}. Мені \${age} років.\`);`,
        },
        {
          title: "Основні можливості",
          codeTitle: "examples.js",
          code: `const firstName = "Марія";
const lastName = "Іваненко";
const birthYear = 2004;
const currentYear = 2026;

// 1. Вставка змінних
console.log(\`Повне ім'я: \${firstName} \${lastName}\`);

// 2. Вирази всередині
console.log(\`Мені \${currentYear - birthYear} років\`);

// 3. Багаторядкові рядки
const message = \`Привіт!
Це багаторядковий текст.
Можна писати скільки завгодно рядків.\`;

console.log(message);

// 4. Приклад реального використання
const price = 1299;
const discount = 15;

console.log(\`Товар коштує \${price} грн.
Зі знижкою \${discount}% ціна буде \${price - (price * discount / 100)} грн.\`);`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Шаблонні рядки створюються за допомогою бектіків `` ` `` — це не одинарні і не подвійні лапки.",
            "Для вставки змінних або виразів використовується `${}`.",
            "Всередині `${}` можна писати будь-який JavaScript-вираз.",
            "Найкраща практика у 2026 році — використовувати шаблонні рядки майже завжди, коли ви працюєте з текстом.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створіть змінні `name`, `city`, `age`, `hobby`.",
          "Виведіть красиве привітання про себе через шаблонний рядок.",
          "Створіть багаторядкове повідомлення про себе на 3–5 рядків.",
          "Обчисліть і виведіть, скільки вам буде років у 2030 році.",
        ],
        codeTitle: "script.js",
        code: `console.log(\`Привіт! Мене звати ...\`);`,
        note: "Відмінно! Тепер ви пишете рядки сучасно і зручно.",
      },
    },
  },
  {
    slug: "user-input-prompt-confirm-alert",
    level: "Core",
    duration: "17 min",
    title: "Введення даних від користувача (prompt, confirm, alert)",
    description:
      "Десятий урок про базову взаємодію з користувачем через вікна браузера: як запитувати ім'я, вік, підтвердження та показувати повідомлення.",
    bullets: [
      "Як працюють `prompt()`, `confirm()` і `alert()`",
      "Які типи значень повертають ці методи",
      "Як зібрати просту інтерактивну програму з українським колоритом",
    ],
    content: {
      video: {
        title: "Відео до уроку 10",
        url: "https://www.youtube.com/embed/EDaF728NIiA",
      },
      goal:
        "Навчитися взаємодіяти з користувачем через вікна браузера — запитувати ім'я, вік, підтвердження та виводити повідомлення.",
      sections: [
        {
          title: "Основні методи",
          codeTitle: "script.js",
          code: `// === Урок 10 — Введення даних ===

const name = prompt("Як тебе звати, братче?");
console.log(\`Вітаю, \${name}!\`);

const age = prompt("Скільки тобі років?");
console.log(\`Тобі \${age} років\`);

// confirm — так/ні
const isReady = confirm("Готовий продовжувати курс?");
console.log("Готовий?", isReady);

// alert — просте повідомлення
alert(\`Раді тебе бачити на курсі "JavaScript для початківців 2026", \${name}! 🌾\`);`,
        },
        {
          title: "Повний приклад з українським колоритом",
          codeTitle: "interactive-example.js",
          code: `const userName = prompt("Як тебе звати, воїне світла? 🌿");
const city = prompt("З якого ти міста, родичу?");

const isAdult = confirm(\`\${userName}, ти вже повнолітній?\`);

if (isAdult) {
    alert(\`Слава! Вітаємо тебе, \${userName}, у великій спільноті українських розробників! ☀️\`);
} else {
    alert(\`Нічого страшного, \${userName}! Вчися зараз — у майбутньому будеш сильним, як древній дуб! 🌳\`);
}

console.log(\`Користувач: \${userName}\`);
console.log(\`Місто: \${city}\`);
console.log(\`Повнолітній: \${isAdult}\`);`,
        },
        {
          title: "Важливі моменти",
          bullets: [
            "`prompt()` завжди повертає `string` або `null`, якщо користувач натиснув «Скасувати».",
            "`confirm()` повертає `true` або `false`.",
            "`alert()` просто показує повідомлення і нічого не повертає.",
            "Усі ці методи блокують виконання коду, поки користувач не відповість, тому у великих застосунках ними не зловживають.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створіть невелику інтерактивну програму-вікторину.",
          "Запитайте ім'я користувача.",
          "Запитайте, скільки йому років.",
          "Запитайте, чи любить він програмування.",
          "Залежно від відповідей виведіть персональне повідомлення з українським духом: згадайте Сварога, дуб, сонце або силу предків.",
        ],
        codeTitle: "script.js",
        code: `alert(\`Нехай Сварог благословляє твій шлях у програмуванні, \${name}! ⚡\`);`,
        note:
          "Слава Роду! 🌾☀️ Тепер ти вмієш спілкуватися з користувачем через базові можливості браузера.",
      },
    },
  },
  {
    slug: "practice-simple-calculators",
    level: "Build",
    duration: "20 min",
    title: "Практика — Прості калькулятори",
    description:
      "Одинадцятий урок, у якому ми закріплюємо змінні, типи, оператори, шаблонні рядки і введення даних через створення перших корисних міні-програм.",
    bullets: [
      "Калькулятор базових арифметичних дій",
      "Калькулятор віку та року народження",
      "Калькулятор зі знижкою для реального сценарію",
    ],
    content: {
      video: {
        title: "Відео до уроку 11",
        url: "https://www.youtube.com/embed/3DDuorGsRtI",
      },
      goal:
        "Закріпити всі отримані знання на практиці та створити свої перші корисні міні-програми.",
      sections: [
        {
          title: "1. Простий калькулятор (додавання, віднімання, множення, ділення)",
          codeTitle: "calculator.js",
          code: `// === Урок 11 — Прості калькулятори ===

alert("🌳 Вітаю! Давай створимо простий калькулятор");

const num1 = Number(prompt("Введи перше число:"));
const num2 = Number(prompt("Введи друге число:"));

const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num2 !== 0 ? num1 / num2 : "Ділення на нуль неможливе";

console.log(\`Числа: \${num1} та \${num2}\`);
console.log(\`Сума: \${sum}\`);
console.log(\`Різниця: \${difference}\`);
console.log(\`Добуток: \${product}\`);
console.log(\`Частка: \${quotient}\`);

alert(\`🌿 Результат:
\${num1} + \${num2} = \${sum}
\${num1} - \${num2} = \${difference}
\${num1} × \${num2} = \${product}
\${num1} ÷ \${num2} = \${quotient}\`);`,
        },
        {
          title: "2. Калькулятор віку та року народження",
          codeTitle: "age-calculator.js",
          code: `const currentYear = 2026;
const name = prompt("Як тебе звати, воїне?");
const age = Number(prompt("Скільки тобі років?"));

const birthYear = currentYear - age;

alert(\`Слава Сварогу! ✨
\${name}, ти народився у \${birthYear} році.
Тобі \${age} років у \${currentYear} році.\`);`,
        },
        {
          title: "3. Калькулятор зі знижкою (реальний приклад)",
          codeTitle: "discount-calculator.js",
          code: `const price = Number(prompt("Яка повна ціна товару?"));
const discount = Number(prompt("Яка знижка в %?"));

const discountAmount = (price * discount) / 100;
const finalPrice = price - discountAmount;

alert(\`☀️ Підсумок:
Ціна без знижки: \${price} грн
Знижка: \${discount}% (\${discountAmount.toFixed(2)} грн)
Фінальна ціна: \${finalPrice.toFixed(2)} грн\`);`,
        },
        {
          title: "Важливі моменти",
          bullets: [
            "Завжди перетворюй введені дані через `Number()`, бо `prompt()` повертає рядок.",
            "Перевіряй ділення на нуль, щоб уникати некоректного результату.",
            "Використовуй `toFixed(2)` для красивого відображення грошових значень.",
            "Давай користувачу зрозумілі повідомлення через `alert()` і дублюй ключові результати в `console.log()`.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи власний калькулятор на вибір: BMI, конвертер гривень у долари або євро, калькулятор днів до Нового року чи дня народження, або калькулятор витрат на місяць.",
          "Зроби програму з українським привітанням і зрозумілим фінальним повідомленням.",
          "Виводь результат і через `alert()`, і через `console.log()`.",
          "Спробуй самостійно додати ще одну перевірку або покращення до свого калькулятора.",
        ],
        note:
          "Молодець, воїне знань! 🌿 Ти щойно створив свої перші реальні програми.",
      },
    },
  },
  {
    slug: "debugging-console-breakpoints",
    level: "Core",
    duration: "18 min",
    title: "Відлагодження коду (console, breakpoints)",
    description:
      "Дванадцятий урок про базові інструменти відлагодження: як читати вивід у консолі, ставити breakpoints і зупиняти код через `debugger`.",
    bullets: [
      "Різні способи виводу в консоль: `log`, `warn`, `error`, `table`, `group`",
      "Як працюють breakpoints у DevTools",
      "Коли використовувати `debugger` для зупинки виконання коду",
    ],
    content: {
      video: {
        title: "Відео до уроку 12",
        url: "https://www.youtube.com/embed/8m_8gq9VkYI",
      },
      goal:
        "Навчитися швидко знаходити та виправляти помилки в коді — це одна з найважливіших навичок розробника.",
      sections: [
        {
          title: "Інструменти відлагодження",
          codeTitle: "script.js",
          code: `// === Урок 12 — Відлагодження коду ===

const name = "Світлана";
const age = 24;
const salary = 850;

// 1. Різні типи виведення в консоль
console.log("Ім'я:", name);
console.warn("Попередження: зарплата нижче середньої");
console.error("Помилка: не вдалося підключитися до бази");

console.table({
    name: name,
    age: age,
    salary: salary,
    isAdult: age >= 18
});

// 2. Групування виведення
console.group("Інформація про користувача");
console.log("Ім'я:", name);
console.log("Вік:", age);
console.log("Зарплата:", salary + " грн");
console.groupEnd();`,
        },
        {
          title: "Breakpoints — найпотужніший інструмент",
          bullets: [
            "Відкрий `index.html` через Live Server.",
            "Натисни `F12` і перейди у вкладку `Sources`.",
            "Відкрий файл `script.js`.",
            "Клікни ліворуч від номера рядка — з'явиться червона крапка, це breakpoint.",
            "Перезавантаж сторінку через `Ctrl + R`.",
            "Код зупиниться на цій лінії, і ти зможеш дивитися значення змінних.",
            "Для покрокового виконання використовуй `F10` і `F11`, а для продовження — `F8`.",
          ],
        },
        {
          title: "Спеціальне ключове слово debugger",
          codeTitle: "debugger-example.js",
          code: `const num1 = Number(prompt("Введи перше число:"));
const num2 = Number(prompt("Введи друге число:"));

debugger;   // ← Код зупиниться тут

const sum = num1 + num2;
console.log("Сума:", sum);`,
        },
        {
          title: "Важливі поради",
          bullets: [
            "`console.log()` — для швидкої перевірки значень.",
            "`console.table()` — дуже зручно для масивів та об'єктів.",
            "`console.error()` і `console.warn()` допомагають одразу помітити проблему.",
            "Breakpoints разом із `debugger` — золотий стандарт відладки.",
            "Читати помилки в консолі потрібно завжди, навіть якщо проблема здається очевидною.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи калькулятор з попереднього уроку.",
          "Додай `debugger` перед обчисленням результату.",
          "Постав кілька breakpoints у різних місцях коду.",
          "Запусти програму і пройдись по ній по кроках, спостерігаючи за змінними.",
          "Намірно зроби помилку, наприклад забудь `Number()` при `prompt`, і навчись знаходити її через консоль та breakpoint-и.",
        ],
        note:
          "Слава Сварогу! ⚡🌿 Тепер ти вмієш не просто писати код, а й розуміти, що в ньому відбувається.",
      },
    },
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
