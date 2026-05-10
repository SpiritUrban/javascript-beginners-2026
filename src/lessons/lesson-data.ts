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
  {
    slug: "if-else-conditions",
    level: "Core",
    duration: "18 min",
    title: "Умовний оператор if...else",
    description:
      "Тринадцятий урок про те, як навчити програму приймати рішення залежно від умов через `if`, `else if` та `else`.",
    bullets: [
      "Базовий синтаксис `if ... else`",
      "Ланцюжки умов через `else if`",
      "Використання логічних операторів усередині умов",
    ],
    content: {
      video: {
        title: "Відео до уроку 13",
        url: "https://www.youtube.com/embed/sjIwO3QIeco",
      },
      goal:
        "Навчитися приймати рішення в коді залежно від умов — це один з найважливіших інструментів програмування.",
      sections: [
        {
          title: "Синтаксис",
          codeTitle: "if-else.js",
          code: `// === Урок 13 — Умовний оператор if...else ===

const age = Number(prompt("Скільки тобі років, воїне?"));

if (age >= 18) {
    console.log("✅ Повнолітній — можеш проходити далі");
    alert("Слава! Ти повнолітній 🌾");
}
else {
    console.log("❌ Ще молодий");
    alert("Поки що рано, приходь через кілька років ☀️");
}`,
        },
        {
          title: "Повний приклад з else if",
          codeTitle: "score-check.js",
          code: `const score = Number(prompt("Яка у тебе оцінка за тест (0-100)?"));

if (score >= 90) {
    alert("⚡ Велично! Ти справжній майстер!");
}
else if (score >= 75) {
    alert("Добре! Ти на правильному шляху 🌿");
}
else if (score >= 60) {
    alert("Непогано, але можна краще");
}
else {
    alert("Треба ще повчитися, родичу...");
}

console.log("Оцінка:", score);`,
        },
        {
          title: "Логічні оператори в умовах",
          codeTitle: "logical-conditions.js",
          code: `const hasTicket = true;
const hasPassport = true;
const age = 25;

if (hasTicket && hasPassport && age >= 18) {
    alert("Можеш летіти в далекі краї! ✈️");
}
else if (hasTicket || hasPassport) {
    alert("Ще чогось не вистачає...");
}
else {
    alert("Повертайся, коли буде все готово");
}`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Умова в дужках `if (умова)` завжди приводиться до `boolean`.",
            "Використовуй `===` замість `==`, щоб уникати неявних перетворень типів.",
            "Не забувай фігурні дужки `{ }` навіть для однієї строки — це гарна практика.",
            "`else if` може бути скільки завгодно разів.",
            "Останній `else` необов'язковий, але часто корисний як запасний сценарій.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи програму `Перевірка сили роду`.",
          "Запитай вік.",
          "Запитай, чи є в тебе досвід програмування.",
          "Запитай, скільки часу на день готовий вчитися.",
          "Залежно від відповідей виведи одне з повідомлень: `Ти — майбутній легендарний розробник!`, `Добрий початок, Сварог тебе веде!`, `Потрібно більше практики, воїне...`.",
          "Зроби 3–4 різні рівні і виведи результат через `alert()` та `console.log()`.",
        ],
        note:
          "Слава Роду! ⚡🌳 Тепер твій код вміє приймати рішення.",
      },
    },
  },
  {
    slug: "switch-case",
    level: "Core",
    duration: "17 min",
    title: "switch...case",
    description:
      "Чотирнадцятий урок про `switch...case` — зручний спосіб перевіряти одну змінну на багато можливих значень без довгого ланцюжка `if...else`.",
    bullets: [
      "Базовий синтаксис `switch...case`",
      "Коли `switch` кращий за `if...else`",
      "Групування кількох `case` і роль `default`",
    ],
    content: {
      video: {
        title: "Відео до уроку 14",
        url: "https://www.youtube.com/embed/xlaMpD12iRc",
      },
      goal:
        "Навчитися використовувати `switch...case` — зручний спосіб перевіряти одну змінну на багато різних значень.",
      sections: [
        {
          title: "Синтаксис",
          codeTitle: "switch-case.js",
          code: `// === Урок 14 — switch...case ===

const day = prompt("Який сьогодні день тижня? (1-7)").trim();

switch (day) {
    case "1":
        alert("Понеділок — день Сварога. Початок тижня! ⚡");
        break;
    case "2":
    case "3":
    case "4":
        alert("Звичайний робочий день. Тримайся, воїне 🌿");
        break;
    case "5":
        alert("П'ятниця! Майже вихідні ☀️");
        break;
    case "6":
    case "7":
        alert("Вихідні! Відпочинь і наберися сили, родичу 🌳");
        break;
    default:
        alert("Невірне число. Введи від 1 до 7");
}`,
        },
        {
          title: "Порівняння switch і if...else",
          table: {
            headers: ["Ситуація", "Краще використовувати"],
            rows: [
              ["Перевірка однієї змінної на багато значень", "switch"],
              ["Складні умови (`>`, `<`, `&&`, `||`)", "if...else"],
              ["Дуже багато однакових перевірок за значенням", "switch (зручніше читати)"],
            ],
          },
        },
        {
          title: "Повний практичний приклад",
          codeTitle: "rank-check.js",
          code: `const rank = prompt("Який у тебе рівень сили? (junior / middle / senior)").toLowerCase();

switch (rank) {
    case "junior":
        alert("Вітаємо, молодий дубе! 🌱 Ти на початку великого шляху.");
        break;
    case "middle":
        alert("Сильний дуб! 🌳 Ти вже багато вмієш.");
        break;
    case "senior":
        alert("Могутній Сварожич! ⚡ Ти — майстер коду.");
        break;
    default:
        alert("Введи: junior, middle або senior");
}`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Після кожного `case` обов'язково пиши `break;`, інакше код продовжить виконання далі.",
            "`default` — це аналог `else` у світі `switch`.",
            "`switch` порівнює значення строго через `===`, тому тип даних важливий.",
            "Можна групувати кілька `case` разом, якщо вони мають вести до одного результату.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи програму `Який ти воїн коду?`.",
          "Запитай користувача, скільки годин на тиждень він готовий приділяти JavaScript.",
          "Використовуй `switch` і виведи відповідне повідомлення для груп: `0–5`, `6–10`, `11–20`, `21+` годин.",
          "Зроби 4 різних мотиваційних повідомлення з язичницьким колоритом.",
        ],
        note:
          "Добре зроблено! 🌿⚡ Тепер ти вмієш працювати з розгалуженнями двома способами.",
      },
    },
  },
  {
    slug: "ternary-operator",
    level: "Core",
    duration: "16 min",
    title: "Тернарний оператор (Тернарний вираз)",
    description:
      "П'ятнадцятий урок про тернарний оператор — короткий спосіб запису простих умов у один рядок замість стандартного `if...else`.",
    bullets: [
      "Що таке тернарний оператор і як він замінює `if...else`",
      "Практичні приклади з рядками, шаблонними рядками і оцінками",
      "Коли тернарний вираз доречний, а коли краще залишити `if...else`",
    ],
    content: {
      video: {
        title: "Відео до уроку 15",
        url: "https://www.youtube.com/embed/677N3-3c7Sw",
      },
      goal:
        "Навчитися писати короткі умовні вирази в один рядок за допомогою тернарного оператора.",
      sections: [
        {
          title: "Що таке тернарний оператор?",
          paragraphs: [
            "Це коротка форма запису `if...else`, яка добре підходить для простих перевірок і присвоєння значень.",
          ],
          codeTitle: "ternary-intro.js",
          code: `// === Урок 15 — Тернарний оператор ===

// Старий спосіб (if...else)
let message;

if (age >= 18) {
    message = "Повнолітній";
} else {
    message = "Молодий";
}

// Новий сучасний спосіб — тернарний оператор
const age = 25;
const status = age >= 18 ? "Повнолітній" : "Молодий";

console.log(status);`,
        },
        {
          title: "Синтаксис",
          codeTitle: "syntax.js",
          code: `умова ? значення_якщо_правда : значення_якщо_брехня`,
        },
        {
          title: "Практичні приклади",
          codeTitle: "examples.js",
          code: `const age = Number(prompt("Скільки тобі років?"));

// 1. Простий тернарний
const canDrive = age >= 18 ? "Можеш водити авто ⚡" : "Ще рано, воїне 🌱";
alert(canDrive);

// 2. З шаблонними рядками
const name = prompt("Як тебе звати?");
const greeting = \`Слава Роду, \${name}! Ти \${age >= 18 ? "дорослий" : "молодий"} дуб.\`;

console.log(greeting);

// 3. Вкладений тернарний (обережно!)
const score = 85;
const result = score >= 90 ? "Легенда Сварога ⚡" :
               score >= 75 ? "Сильний воїн 🌳" :
               score >= 60 ? "Добрий початок" : "Треба тренуватися";

alert(result);`,
        },
        {
          title: "Коли використовувати?",
          table: {
            headers: ["Ситуація", "Що краще використовувати"],
            rows: [
              ["Проста умова (один if...else)", "Тернарний"],
              ["Багато умов", "if...else або switch"],
              ["Присвоєння значення", "Тернарний"],
              ["Складна логіка", "if...else"],
            ],
          },
          note:
            "Якщо тернарний вираз стає важко читати, краще написати звичайний `if...else`.",
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи програму `Перевірка готовності до бою`.",
          "Запитай у користувача, скільки йому років.",
          "Запитай, скільки годин на день він готовий програмувати.",
          "Використовуючи тернарні оператори, виведи одне з повідомлень: `Готовий до великих звершень!`, `Маєш силу, але треба більше практики`, `Рости сильним, юний дубе!`.",
          "Зроби повідомлення красивими та мотивуючими.",
        ],
        note:
          "Чудово! ⚡🌿 Тепер ти вмієш писати компактні умови.",
      },
    },
  },
  {
    slug: "while-and-do-while",
    level: "Core",
    duration: "18 min",
    title: "Цикли while та do...while",
    description:
      "Шістнадцятий урок про цикли `while` і `do...while` — базові інструменти для повторення дій, роботи з введенням користувача, лічильниками та простими іграми.",
    bullets: [
      "Як працює `while` і коли умова перевіряється до виконання",
      "Як працює `do...while` і чому він виконується хоча б один раз",
      "Практика з лічильниками, паролем і грою `вгадай число`",
    ],
    content: {
      video: {
        title: "Відео до уроку 16",
        url: "https://www.youtube.com/embed/IjBCAprEhao",
      },
      goal:
        "Навчитися повторювати код кілька разів за допомогою циклів — це основа для роботи зі списками, іграми, анімаціями та багатьма іншими задачами.",
      sections: [
        {
          title: "Цикл while",
          codeTitle: "while-loop.js",
          code: `// === Урок 16 — Цикли while та do...while ===

let count = 1;

while (count <= 5) {
    console.log(\`Слава Роду! Це повторення №\${count} ⚡\`);
    count++;
}`,
        },
        {
          title: "Цикл do...while",
          paragraphs: [
            "`do...while` схожий на `while`, але має важливу відмінність: код у блоці `do` виконається хоча б один раз, навіть якщо умова потім виявиться хибною.",
          ],
          codeTitle: "do-while-password.js",
          code: `let password;

do {
    password = prompt("Введи пароль (1234):");
} while (password !== "1234");

alert("✅ Пароль вірний! Вітаємо, воїне Сварога! 🌳");`,
        },
        {
          title: "Повні практичні приклади",
          codeTitle: "while-practice.js",
          code: `// Приклад 1: Лічильник сили
let energy = 0;

while (energy < 100) {
    energy += 10;
    console.log(\`Енергія: \${energy}% ⚡\`);
    
    if (energy === 100) {
        console.log("Ти досяг максимальної сили! Слава Сварогу! ✨");
    }
}

// Приклад 2: Вгадай число
const secretNumber = 7;
let guess;
let attempts = 0;

do {
    guess = Number(prompt("Вгадай число від 1 до 10"));
    attempts++;
    
    if (guess === secretNumber) {
        alert(\`Молодець! Вгадав з \${attempts} спроби! 🌿\`);
    } else if (guess < secretNumber) {
        alert("Замало! Спробуй більше");
    } else {
        alert("Забагато! Спробуй менше");
    }
} while (guess !== secretNumber);`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "`while` перевіряє умову перед виконанням тіла циклу.",
            "`do...while` перевіряє умову після виконання, тому спрацьовує хоча б один раз.",
            "Не забувай змінювати змінну всередині циклу, інакше можеш отримати безкінечний цикл.",
            "Для дострокового виходу з циклу можна використовувати `break`.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи програму `Тренування воїна`.",
          "Запитай, скільки підходів до тренування хоче зробити користувач.",
          "За допомогою циклу `while` або `do...while` виводь повідомлення: `Підхід 1 — зроблено! 💪`, `Підхід 2 — зроблено! 💪` і так далі.",
          "Після останнього підходу виведи мотиваційне повідомлення.",
          "Бонус: додай підрахунок загальної кількості повторів.",
        ],
        note:
          "Молодець, воїне! ⚡🌳 Ти вже вмієш повторювати дії — це дуже потужна можливість.",
      },
    },
  },
  {
    slug: "for-and-for-of",
    level: "Core",
    duration: "18 min",
    title: "Цикл for + for...of",
    description:
      "Сімнадцятий урок про класичний цикл `for` і сучасний `for...of` — це найуживаніші цикли в JavaScript для лічильників, повторень і перебору даних.",
    bullets: [
      "Класичний `for` для випадків, де потрібен індекс, крок або точна кількість повторень",
      "`for...of` для чистого й сучасного перебору масивів та рядків",
      "Практика з таблицею множення, парними числами й навчальним шляхом",
    ],
    content: {
      video: {
        title: "Відео до уроку 17",
        url: "https://www.youtube.com/embed/SyDnYlE4X6w",
      },
      goal:
        "Навчитися найпопулярнішому циклу `for` та сучасному `for...of` — це найчастіше використовувані цикли в JavaScript.",
      sections: [
        {
          title: "Класичний цикл for",
          codeTitle: "for-loop.js",
          code: `// === Урок 17 — Цикл for та for...of ===

console.log("🌳 Тренування воїна Сварога:");

for (let i = 1; i <= 10; i++) {
    console.log(\`Підхід №\${i} — виконано! 💪\`);
}`,
        },
        {
          title: "Структура циклу for",
          codeTitle: "for-syntax.js",
          code: `for (початок; умова; крок) {
    // код, який повторюється
}`,
        },
        {
          title: "Сучасний цикл for...of",
          paragraphs: [
            "`for...of` дуже зручний, коли треба пройтися по масиву, рядку або іншому набору даних без ручної роботи з індексами.",
          ],
          codeTitle: "for-of.js",
          code: `const skills = ["HTML", "CSS", "JavaScript", "Git", "React"];

for (const skill of skills) {
    console.log(\`Я вивчив: \${skill} ⚡\`);
}

// Приклад з рядком
const name = "Сварог";

for (const letter of name) {
    console.log(letter);
}`,
        },
        {
          title: "Порівняння циклів",
          table: {
            headers: ["Цикл", "Коли використовувати", "Зручність"],
            rows: [
              ["for", "Потрібен лічильник, індекс, крок", "★★★"],
              ["for...of", "Перебір масиву, рядка, набору даних", "★★★★★"],
              ["while", "Коли невідомо, скільки разів повторити", "★★★"],
            ],
          },
        },
        {
          title: "Практичні приклади",
          codeTitle: "for-practice.js",
          code: `// 1. Таблиця множення
const number = 7;
console.log(\`Таблиця множення на \${number}:\`);

for (let i = 1; i <= 10; i++) {
    console.log(\`\${number} × \${i} = \${number * i}\`);
}

// 2. Виведення тільки парних чисел
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(\`\${i} — парне число 🌿\`);
    }
}

// 3. for...of з об'єктами (пізніше)`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "`for` — найуніверсальніший цикл у JavaScript.",
            "`for...of` — сучасний і чистий спосіб перебору масивів та рядків.",
            "У циклах можна використовувати `break`, щоб вийти достроково, і `continue`, щоб пропустити поточну ітерацію.",
            "Не змінюй лічильник усередині `for` вручну без потреби — це часто веде до помилок.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи програму `Шлях воїна коду`.",
          "Запитай у користувача, скільки днів він планує вчитися.",
          "За допомогою циклу `for` виведи для кожного дня окремий прогрес, наприклад: `День 1 — Вивчив змінні`, `День 2 — Розібрався з умовними операторами`.",
          "Після завершення циклу виведи підсумок: `Слава! Ти пройшов ${days} днів тренування!`.",
          "Бонус: використай `for...of`, щоб вивести список тем, які ти вже пройшов у курсі.",
        ],
        note:
          "Відмінно, воїне! ⚡🌳 Ти тепер впевнено володієш циклами.",
      },
    },
  },
  {
    slug: "loop-games-practice",
    level: "Core",
    duration: "20 min",
    title: "Практика — Ігри з циклами",
    description:
      "Вісімнадцятий урок — практичне закріплення циклів через міні-ігри. Тут `while`, `do...while` і `for` уже працюють у живих сценаріях, а не в абстрактних прикладах.",
    bullets: [
      "Гра `Вгадай число` з випадковим числом і підрахунком спроб",
      "Тренування таблиці множення з лімітом питань",
      "Текстова загадка з обмеженням кількості спроб",
    ],
    content: {
      video: {
        title: "Відео до уроку 18",
        url: "https://www.youtube.com/embed/BL7I00PKIpA",
      },
      goal:
        "Закріпити цикли на практиці, створивши веселі та корисні міні-ігри.",
      sections: [
        {
          title: "Класична гра «Вгадай число»",
          codeTitle: "guess-number-game.js",
          code: `// === Урок 18 — Ігри з циклами ===

alert("🌳 Гра «Вгадай число» — тренування воїна Сварога");

const secretNumber = Math.floor(Math.random() * 100) + 1; // число від 1 до 100
let guess;
let attempts = 0;

alert("Я загадав число від 1 до 100. Спробуй вгадати!");

do {
    guess = Number(prompt("Введи своє число:"));
    attempts++;

    if (guess < secretNumber) {
        alert("🔥 Замало! Спробуй більше.");
    } else if (guess > secretNumber) {
        alert("❄️ Забагато! Спробуй менше.");
    } else {
        alert(\`⚡ Слава Сварогу! Ти вгадав число \${secretNumber} за \${attempts} спроб!\`);
    }
} while (guess !== secretNumber);`,
        },
        {
          title: "Гра «Множник сили»",
          paragraphs: [
            "Це проста практика для циклу `for`: є фіксована кількість питань, лічильник правильних відповідей і підсумок у відсотках.",
          ],
          codeTitle: "power-multiplier-game.js",
          code: `const num = 8;
let correctAnswers = 0;
const totalQuestions = 5;

alert(\`🌿 Тренуємо таблицю множення на \${num}. У тебе \${totalQuestions} питань.\`);

for (let i = 1; i <= totalQuestions; i++) {
    const answer = Number(prompt(\`Питання \${i}/\${totalQuestions}\\nСкільки буде \${num} × \${i}?\`));
    
    if (answer === num * i) {
        alert("✅ Правильно!");
        correctAnswers++;
    } else {
        alert(\`❌ Неправильно. Правильна відповідь: \${num * i}\`);
    }
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);
alert(\`🌳 Тренування завершено!\\nПравильних відповідей: \${correctAnswers} з \${totalQuestions} (\${percent}%)\`);`,
        },
        {
          title: "Гра «Загадка Сварога»",
          codeTitle: "svarog-riddle.js",
          code: `let attemptsLeft = 5;
const secretWord = "дуб";

alert("🔮 Загадка Сварога: Я стою сотні років, даю силу і мудрість. Хто я?");

while (attemptsLeft > 0) {
    const answer = prompt(\`Залишилось спроб: \${attemptsLeft}\\nВведи відповідь:\`).toLowerCase().trim();
    
    if (answer === secretWord) {
        alert("⚡ Ти мудрий! Це дійсно ДУБ — символ сили нашого роду!");
        break;
    } else {
        attemptsLeft--;
        alert(\`Неправильно. Залишилось спроб: \${attemptsLeft}\`);
    }
    
    if (attemptsLeft === 0) {
        alert(\`Закінчились спроби. Правильна відповідь — ДУБ 🌳\`);
    }
}`,
        },
        {
          title: "Корисні поради",
          bullets: [
            "`Math.random()` генерує випадкове число.",
            "`Math.floor()` округлює число вниз.",
            "Завжди перевіряй введені дані через `Number()`, якщо очікуєш число.",
            "Використовуй `break`, щоб достроково вийти з циклу.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи одну з ігор на вибір: `Вгадай число` від 1 до 50 з підказками `холодно/гаряче`.",
          "Або зроби `Камінь-Ножиці-Папір` проти комп'ютера на 5 раундів.",
          "Або створи `Тренування характеру` — програму з 7 питаннями про мотивацію і фінальним результатом.",
          "Можеш придумати власну гру з циклами.",
          "Зроби гру красивою, з українським колоритом і мотиваційними повідомленнями.",
        ],
        note:
          "Чудова робота, воїне знань! ⚡🌳 Ти вже вмієш створювати справжні інтерактивні ігри.",
      },
    },
  },
  {
    slug: "function-declaration",
    level: "Core",
    duration: "19 min",
    title: "Оголошення функцій (Function Declaration)",
    description:
      "Дев'ятнадцятий урок відкриває тему функцій. Саме тут код починає ставати структурованим, повторно використовуваним і значно чистішим.",
    bullets: [
      "Що таке функція і навіщо вона потрібна",
      "Function Declaration, параметри та виклики",
      "Повернення значень через `return` і базові правила хороших функцій",
    ],
    content: {
      video: {
        title: "Відео до уроку 19",
        url: "https://www.youtube.com/embed/ZplJ_7E_PpA",
      },
      goal:
        "Навчитися створювати власні функції — це один з найважливіших кроків у програмуванні. Функції дозволяють повторно використовувати код і робити його чистим та організованим.",
      sections: [
        {
          title: "Що таке функція?",
          paragraphs: [
            "Функція — це блок коду, який можна викликати багато разів за потреби. Замість копіювати одні й ті самі рядки, ти описуєш дію один раз і потім просто використовуєш її ім'я.",
          ],
          codeTitle: "function-declaration.js",
          code: `// === Урок 19 — Function Declaration ===

// Оголошення функції
function greet() {
    console.log("🌿 Слава Роду! Вітаю тебе, воїне знань!");
    console.log("Нехай Сварог освітлює твій шлях у JavaScript ⚡");
}

// Виклик функції
greet();
greet();
greet(); // можна викликати скільки завгодно разів`,
        },
        {
          title: "Функції з параметрами",
          codeTitle: "function-parameters.js",
          code: `function greetUser(name, city) {
    console.log(\`🌳 Вітаю, \${name}!\`);
    console.log(\`Радий бачити тебе з \${city}\`);
}

greetUser("Олег", "Київ");
greetUser("Софія", "Львів");`,
        },
        {
          title: "Функції, які повертають значення",
          codeTitle: "function-return.js",
          code: `function calculatePower(base, exponent) {
    return base ** exponent;
}

console.log("Сила 2 у 8 степені:", calculatePower(2, 8));
console.log("Сила 5 у 3 степені:", calculatePower(5, 3));

// Приклад з віком
function getAgeStatus(age) {
    if (age >= 18) {
        return "✅ Повнолітній воїн";
    } else {
        return "🌱 Молодий дубок";
    }
}

console.log(getAgeStatus(25));
console.log(getAgeStatus(16));`,
        },
        {
          title: "Важливі правила Function Declaration",
          bullets: [
            "Function Declaration можна викликати ще до місця її оголошення в коді завдяки hoisting.",
            "Назви функцій пиши в `camelCase`.",
            "Хороша назва функції повинна чітко показувати, що саме вона робить.",
            "Одна функція — одна задача. Не змішуй багато різних відповідальностей в одному блоці.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи функцію `sayMotivation()`, яка виводить мотиваційне повідомлення.",
          "Створи функцію `calculateSum(a, b)`, яка повертає суму двох чисел.",
          "Створи функцію `getPowerLevel(age, hours)`, яка повертає рівень сили залежно від віку та годин навчання.",
          "Створи функцію `wishGoodLuck(name)`, яка виводить персональне побажання.",
          "Бонус: створи функцію `startTraining()`, яка запитує ім'я і кількість днів навчання, а потім виводить план на ці дні.",
        ],
        note:
          "Слава Сварогу! ⚡🌳 Ти зробив величезний крок — тепер ти вмієш створювати власний код у вигляді функцій.",
      },
    },
  },
  {
    slug: "function-expression-and-arrow-functions",
    level: "Core",
    duration: "20 min",
    title: "Function Expression та стрілкові функції (Arrow Functions)",
    description:
      "Двадцятий урок розширює тему функцій: тепер ти побачиш `Function Expression` і стрілкові функції, які домінують у сучасному JavaScript-коді.",
    bullets: [
      "Що таке `Function Expression` і чим він відрізняється від `Function Declaration`",
      "Стрілкові функції як сучасний стандарт",
      "Коли краще використовувати кожен спосіб оголошення функцій",
    ],
    content: {
      video: {
        title: "Відео до уроку 20",
        url: "https://www.youtube.com/embed/tupGmkaUOHw",
      },
      goal:
        "Розібратися з альтернативними способами створення функцій та зрозуміти, коли який спосіб краще використовувати.",
      sections: [
        {
          title: "Function Expression",
          codeTitle: "function-expression.js",
          code: `// === Урок 20 — Function Expression + Arrow Functions ===

// Function Declaration (ми вивчали в попередньому уроці)
function greet() {
    console.log("Слава Роду!");
}

// Function Expression
const greetExpr = function() {
    console.log("🌳 Вітаю тебе, воїне Сварога!");
};

greetExpr();`,
        },
        {
          title: "Стрілкові функції (Arrow Functions)",
          paragraphs: [
            "Arrow Functions — це коротший і зручніший спосіб запису функцій. Саме їх ти найчастіше будеш бачити в сучасному React та загалом у новому JavaScript-коді.",
          ],
          codeTitle: "arrow-functions.js",
          code: `// Найпростіша стрілкова функція
const greetArrow = () => {
    console.log("⚡ Нехай сила предків буде з тобою!");
};

// З параметрами
const sayHello = (name) => {
    console.log(\`Слава, \${name}! 🌿\`);
};

// Якщо один параметр — дужки можна опустити
const wishPower = name => {
    console.log(\`\${name}, нехай Сварог дарує тобі силу коду!\`);
};

// Якщо функція повертає одне значення — можна без фігурних дужок
const multiply = (a, b) => a * b;

console.log(multiply(7, 8)); // 56`,
        },
        {
          title: "Порівняння способів оголошення функцій",
          table: {
            headers: ["Спосіб", "Hoisting", "this", "Коли використовувати"],
            rows: [
              ["Function Declaration", "Так", "Звичайний", "Коли потрібен hoisting"],
              ["Function Expression", "Ні", "Звичайний", "Коли функцію присвоюємо змінній"],
              ["Arrow Function", "Ні", "Особливий", "Найчастіше у сучасному коді"],
            ],
          },
        },
        {
          title: "Практичні приклади",
          codeTitle: "function-styles-practice.js",
          code: `// Калькулятор сили
const calculateStrength = (age, hoursPerDay) => {
    const strength = Math.round(age * hoursPerDay * 0.8);
    return strength > 100 ? "Легендарний рівень ⚡" : \`Сила: \${strength} балів 🌳\`;
};

console.log(calculateStrength(25, 3));
console.log(calculateStrength(17, 1));

// Функція з умовою в один рядок
const canBeWarrior = age => age >= 16 ? "Можеш починати шлях" : "Ще рано, юний дубе";`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Стрілкові функції не мають власного `this` — до цієї теми повернемося пізніше.",
            "Якщо функція складається з одного виразу, можна писати без `{}` і без `return`.",
            "У сучасному JavaScript стрілкові функції використовують найчастіше.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Перепиши всі функції з уроку 19 у стрілкові функції: `sayMotivation`, `calculateSum`, `getPowerLevel`, `wishGoodLuck`.",
          "Подивись, як змінюється запис функції, якщо вона повертає значення в один рядок.",
          "Зверни увагу, де можна прибрати дужки навколо одного параметра.",
          "Бонус: створи стрілкову функцію `startTraining(name, days)`, яка виводить мотиваційний план на `days` днів.",
        ],
        note:
          "Відмінно! ⚡🌿 Тепер ти знаєш три способи створення функцій і можеш обирати найзручніший.",
      },
    },
  },
  {
    slug: "function-parameters-and-default-values",
    level: "Core",
    duration: "18 min",
    title: "Параметри функцій та значення за замовчуванням",
    description:
      "Двадцять перший урок присвячений параметрам функцій і default values. Це важливий крок до гнучких і зручних функцій, які працюють коректно навіть без усіх аргументів.",
    bullets: [
      "Як передавати дані у функції через параметри",
      "Як працюють значення за замовчуванням",
      "Як поєднувати default parameters зі стрілковими функціями",
    ],
    content: {
      video: {
        title: "Відео до уроку 21",
        url: "https://www.youtube.com/embed/T_xgzUEnZPY",
      },
      goal:
        "Навчитися правильно передавати дані в функції та задавати значення за замовчуванням.",
      sections: [
        {
          title: "Параметри функцій",
          codeTitle: "function-parameters.js",
          code: `// === Урок 21 — Параметри та значення за замовчуванням ===

function greetWarrior(name, powerLevel) {
    console.log(\`⚡ Слава Сварогу, \${name}!\`);
    console.log(\`Твій рівень сили: \${powerLevel}\`);
}

greetWarrior("Владислав", 87);
greetWarrior("Марія", 64);`,
        },
        {
          title: "Значення за замовчуванням (Default Parameters)",
          codeTitle: "default-parameters.js",
          code: `function trainWarrior(name = "Воїн", days = 7, hoursPerDay = 2) {
    console.log(\`🌳 Тренування розпочато для \${name}\`);
    console.log(\`Тривалість: \${days} днів по \${hoursPerDay} годин\`);
    
    const totalHours = days * hoursPerDay;
    console.log(\`Загальна кількість годин: \${totalHours} годин ⚡\`);
}

trainWarrior("Олег", 14, 3);     // з параметрами
trainWarrior("Софія");           // тільки ім'я
trainWarrior();                  // повністю за замовчуванням`,
        },
        {
          title: "Практичні приклади",
          codeTitle: "default-parameters-practice.js",
          code: `// Калькулятор сили з параметрами за замовчуванням
const calculateTotalPower = (age = 18, hoursPerWeek = 10, weeks = 4) => {
    const power = Math.round(age * hoursPerWeek * weeks * 0.35);
    return power;
};

console.log("Сила Олега:", calculateTotalPower(25, 15, 8));
console.log("Сила новачка:", calculateTotalPower()); // використовує значення за замовчуванням`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Значення за замовчуванням задаються через `=` прямо в списку параметрів.",
            "Параметри зі значеннями за замовчуванням зазвичай краще ставити ближче до кінця.",
            "Якщо функція нічого не повертає через `return`, вона повертає `undefined`.",
            "Можна вільно комбінувати `Function Declaration`, `Arrow Functions` і значення за замовчуванням.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи функцію `showTrainingPlan(name = \"Воїн\", level = \"початківець\", days = 30)`.",
          "Функція повинна приймати ім'я, рівень (`початківець / воїн / майстер`) та кількість днів.",
          "Виводь персональний план тренувань на JavaScript.",
          "Додай різні мотиваційні повідомлення залежно від рівня.",
          "Бонус: зроби цю функцію стрілковою.",
        ],
        codeTitle: "show-training-plan.js",
        code: `function showTrainingPlan(name = "Воїн", level = "початківець", days = 30) {
    // ...
}`,
        note:
          "Чудово! ⚡🌳 Ти тепер вмієш працювати з функціями на досить високому рівні.",
      },
    },
  },
  {
    slug: "function-return-values",
    level: "Core",
    duration: "18 min",
    title: "Повернення значень з функцій (return)",
    description:
      "Двадцять другий урок присвячений `return` — одному з ключових механізмів у функціях. Саме через нього функції починають не просто щось виводити, а віддавати корисний результат для подальшої роботи.",
    bullets: [
      "Що таке `return` і як він завершує виконання функції",
      "Як повертати числа, рядки та об'єкти",
      "Як будувати перевикористовувані функції через повернення значень",
    ],
    content: {
      video: {
        title: "Відео до уроку 22",
        url: "https://www.youtube.com/embed/snrioXkIqBc",
      },
      goal:
        "Навчитися повертати результат з функції за допомогою `return` — це ключ до створення корисних і перевикористовуваних функцій.",
      sections: [
        {
          title: "Що таке return?",
          codeTitle: "function-return.js",
          code: `// === Урок 22 — Return та повернення значень ===

function multiply(a, b) {
    return a * b;        // повертає результат
}

const result = multiply(7, 8);
console.log("Результат:", result); // 56`,
        },
        {
          title: "Приклади з українським колоритом",
          codeTitle: "return-ukrainian-examples.js",
          code: `// 1. Функція, яка повертає рівень сили
function getPowerLevel(age, hoursPerDay) {
    const power = Math.round(age * hoursPerDay * 1.15);
    return power;
}

console.log("Сила Олега:", getPowerLevel(26, 4)); // 119

// 2. Функція з кількома return
function getWarriorTitle(age) {
    if (age < 16) return "Юний дубок 🌱";
    if (age < 20) return "Молодий воїн ⚔️";
    if (age < 30) return "Сильний Сварожич ⚡";
    return "Мудрий предок 🌳";
}

console.log(getWarriorTitle(17));
console.log(getWarriorTitle(28));`,
        },
        {
          title: "Важливі правила return",
          codeTitle: "return-rules.js",
          code: `function example() {
    console.log("Цей код виконається");

    return 42;           // функція зупиняється тут!

    console.log("Цей код вже ніколи не виконається"); // мертвий код
}

const value = example();
console.log(value); // 42`,
        },
        {
          title: "Практичний приклад — Калькулятор сили роду",
          codeTitle: "clan-strength-calculator.js",
          code: `const calculateClanStrength = (name, age, daysLearning) => {
    const strength = Math.round(age * daysLearning * 2.5);
    
    let title = "";
    if (strength > 1000) title = "Легенда Роду ⚡";
    else if (strength > 500) title = "Могутній Воїн 🌳";
    else title = "Молодий паросток 🌱";

    return {
        name: name,
        totalStrength: strength,
        title: title
    };
};

const oleg = calculateClanStrength("Олег", 24, 45);
console.log(oleg);`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи функцію `getTrainingResult(name, age, hoursPerWeek, weeks)`.",
          "Функція повинна приймати 4 параметри.",
          "Обчислюй загальну кількість годин навчання.",
          "Обчислюй рівень сили, наприклад через формулу `hoursPerWeek * weeks * age / 10`.",
          "Поверни об'єкт з полями `name`, `totalHours`, `powerLevel` і `title`.",
          "Бонус: Виклич цю функцію кілька разів з різними даними і виведи результати.",
        ],
        codeTitle: "get-training-result.js",
        code: `{
  name: "...",
  totalHours: ...,
  powerLevel: ...,
  title: "..."
}`,
        note:
          "Відмінно! ⚡🌳 Тепер твої функції можуть не просто щось виводити, а повертати результат, який можна використовувати далі.",
      },
    },
  },
  {
    slug: "scope-and-closure",
    level: "Core",
    duration: "22 min",
    title: "Область видимості (Scope) та Замикання (Closure)",
    description:
      "Двадцять третій урок присвячений тому, де саме доступні змінні в коді і як внутрішні функції можуть зберігати доступ до зовнішніх значень. Це одна з ключових тем для глибшого розуміння JavaScript.",
    bullets: [
      "Глобальна, локальна та блокова область видимості",
      "Чому `var` поводиться інакше, ніж `let` і `const`",
      "Що таке closure і як воно працює на практиці",
    ],
    content: {
      video: {
        title: "Відео до уроку 23",
        url: "https://www.youtube.com/embed/OzY13P4PkVE",
      },
      goal:
        "Розібратися, де «живуть» змінні в коді та що таке замикання — одна з найважливіших і найцікавіших тем JavaScript.",
      sections: [
        {
          title: "Область видимості (Scope)",
          codeTitle: "scope-basics.js",
          code: `// === Урок 23 — Scope та Closure ===

// Глобальна область видимості
const clanName = "Сварожичі";

function train() {
    // Локальна область видимості (функціональна)
    const energy = 100;
    const weapon = "Меч знань";

    console.log(\`Тренується клан \${clanName}\`); // видно глобальну
    console.log(\`Енергія: \${energy}\`);
}

train();

// console.log(energy); // ❌ Помилка! energy не видно зовні
console.log(clanName);   // ✅ видно`,
        },
        {
          title: "Блокова область видимості (let і const)",
          codeTitle: "block-scope.js",
          code: `if (true) {
    let temporaryPower = 500;   // видно тільки всередині блоку {}
    const sacredTitle = "Воїн Світла";
    console.log(temporaryPower);
}

// console.log(temporaryPower); // ❌ Помилка`,
          bullets: [
            "`var` має функціональну область видимості й у сучасному коді його краще уникати.",
            "`let` і `const` живуть у межах блоку `{}` і дають більш передбачувану поведінку.",
          ],
        },
        {
          title: "Замикання (Closure) — магія JavaScript",
          codeTitle: "closure-warrior.js",
          code: `function createWarrior(name) {
    let power = 50;

    return function trainDay() {
        power += 25;
        console.log(\`\${name} тренується... Сила тепер: \${power} ⚡\`);
    };
}

const oleg = createWarrior("Олег");
const sofia = createWarrior("Софія");

oleg();     // Олег тренується... Сила тепер: 75
oleg();     // Олег тренується... Сила тепер: 100
sofia();    // Софія тренується... Сила тепер: 75`,
          paragraphs: [
            "Замикання — це коли внутрішня функція зберігає доступ до змінних зовнішньої функції навіть після завершення її виконання.",
          ],
        },
        {
          title: "Практичний приклад",
          codeTitle: "create-counter.js",
          code: `function createCounter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const warriorCounter = createCounter();

console.log(warriorCounter.increment()); // 1
console.log(warriorCounter.increment()); // 2
console.log(warriorCounter.getValue());  // 2`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи функцію `createTrainingPlan(warriorName)`, яка повертає іншу функцію.",
          "Внутрішня функція при кожному виклику повинна збільшувати прогрес тренування на `10%` і виводити повідомлення.",
          "Виклич створену функцію 8–10 разів і подивись, як зростає прогрес.",
          "Бонус: після досягнення `100%` виводь спеціальне повідомлення `Ти став Легендою Роду!`.",
        ],
        note:
          "Сильна робота! ⚡🌳 Ти торкнувся однієї з найглибших концепцій JavaScript.",
      },
    },
  },
  {
    slug: "function-practice",
    level: "Core",
    duration: "24 min",
    title: "Практика з функціями",
    description:
      "Двадцять четвертий урок завершує модуль про функції. Тут ми збираємо разом параметри, `return`, стрілкові функції, валідацію та об'єкти, щоб перейти від теорії до реальної практики.",
    bullets: [
      "Практика з валідацією даних у функціях",
      "Повернення складних результатів через об'єкти",
      "Використання функцій для корисних міні-задач",
    ],
    content: {
      video: {
        title: "Відео до уроку 24",
        url: "https://www.youtube.com/embed/KZvdKqPTggM",
      },
      goal:
        "Закріпити все, що ми вивчили про функції, через реальну практику.",
      sections: [
        {
          title: "Функція валідації віку",
          codeTitle: "validate-age.js",
          code: `function validateAge(age) {
    if (typeof age !== "number" || age < 0) {
        return "❌ Некоректний вік";
    }
    if (age < 16) return "🌱 Юний дубок (занадто рано)";
    if (age < 20) return "⚔️ Молодий воїн";
    if (age < 30) return "🌳 Сильний Сварожич";
    return "🪶 Мудрий предок";
}

console.log(validateAge(15));
console.log(validateAge(25));
console.log(validateAge("двадцять")); // некоректно`,
        },
        {
          title: "Універсальний калькулятор сили",
          codeTitle: "calculate-power.js",
          code: `const calculatePower = (name, age, hoursPerWeek, weeks) => {
    if (!name || age < 0 || hoursPerWeek < 0) {
        return "❌ Некоректні дані";
    }

    const totalHours = hoursPerWeek * weeks;
    const power = Math.round(totalHours * age * 0.42);

    let title = "";
    if (power > 1500) title = "Легенда Роду ⚡";
    else if (power > 800) title = "Могутній Воїн 🌳";
    else if (power > 300) title = "Сильний Паросток";
    else title = "Юний Дубок 🌱";

    return {
        name,
        totalHours,
        power,
        title
    };
};

console.log(calculatePower("Ярослав", 23, 12, 8));`,
        },
        {
          title: "Генератор мотиваційних повідомлень",
          codeTitle: "get-motivation.js",
          code: `function getMotivation(level) {
    const messages = {
        low: "🌱 Навіть маленький крок наближає тебе до мети. Продовжуй!",
        medium: "⚡ Ти вже сильніший, ніж вчора. Слава Сварогу!",
        high: "🌳 Ти — вогонь предків! Легенди починаються саме так.",
        legendary: "🪶 Ти вже не учень. Ти — частина великого Роду розробників."
    };

    return messages[level] || messages.medium;
}

console.log(getMotivation("high"));`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи власну систему тренування — функцію `startWarriorJourney()`.",
          "Функція повинна приймати `name`, `age`, `hoursPerDay`.",
          "Поверни об'єкт з полями: ім'я, загальна сила, рівень (`junior / middle / senior / legend`), мотиваційне повідомлення і рекомендація щодо кількості днів навчання.",
          "Використовуй усі знання: параметри за замовчуванням, `return`, стрілкові функції, валідацію.",
        ],
        note:
          "Молодець! ⚡🌳 Ти завершив важливий модуль про функції. Тепер ти можеш писати чисті, організовані та потужні функції.",
      },
    },
  },
  {
    slug: "arrays-basics",
    level: "Core",
    duration: "20 min",
    title: "Масиви — створення, доступ, довжина",
    description:
      "Двадцять п'ятий урок відкриває модуль про масиви. Тут ми розбираємо, як зберігати багато значень в одному місці, як діставати елементи за індексом і як працює `length`.",
    bullets: [
      "Створення масивів і робота з різними типами даних",
      "Доступ до елементів через індекси",
      "Властивість `length` і базова зміна масиву",
    ],
    content: {
      video: {
        title: "Відео до уроку 25",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися працювати з масивами — одним з найважливіших типів даних у JavaScript. Масиви дозволяють зберігати багато значень в одному місці.",
      sections: [
        {
          title: "Що таке масив?",
          paragraphs: ["Масив — це упорядкована колекція даних."],
          codeTitle: "arrays-basics.js",
          code: `// === Урок 25 — Масиви ===

// 1. Створення масиву
const skills = ["HTML", "CSS", "JavaScript", "Git"];
const runes = ["Сварга", "Дуб", "Меч", "Сонце", "Щит"];

// 2. Порожній масив
const futureSkills = [];

// 3. Масив з різними типами даних
const warriorInfo = ["Олег", 25, true, null, "Київ"];`,
        },
        {
          title: "Доступ до елементів масиву",
          paragraphs: ["Індексація в JavaScript починається з 0."],
          codeTitle: "array-indexing.js",
          code: `const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log(skills[0]);     // HTML
console.log(skills[1]);     // CSS
console.log(skills[2]);     // JavaScript
console.log(skills[4]);     // Node.js

// Останній елемент
console.log(skills[skills.length - 1]);`,
        },
        {
          title: "Властивість length",
          codeTitle: "array-length.js",
          code: `const skills = ["HTML", "CSS", "JavaScript", "Git", "React"];

console.log("Кількість навичок:", skills.length); // 5

// Додавання нового елемента
skills[5] = "TypeScript";
console.log(skills.length); // 6

// Зміна елемента
skills[0] = "HTML5";
console.log(skills);`,
        },
        {
          title: "Практичні приклади",
          codeTitle: "array-practice.js",
          code: `// Масив воїнів коду
const clan = ["Владислав", "Марія", "Дмитро", "Софія"];

for (let i = 0; i < clan.length; i++) {
    console.log(\`Воїн №\${i + 1}: \${clan[i]} ⚡\`);
}

// Сучасніший спосіб (for...of)
for (const warrior of clan) {
    console.log(\`Слава воїну \${warrior}! 🌳\`);
}`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Масиви створюються через `[]`.",
            "Індекси починаються з `0`.",
            "`length` — це кількість елементів у масиві.",
            "Масиви можуть містити дані різних типів.",
            "Масиви змінні (`mutable`) — їх можна змінювати.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи масив `mySkills` з 6–8 елементів — навичок, які ти хочеш вивчити.",
          "Виведи кількість елементів, перший елемент і останній елемент.",
          "Зміни 3-й елемент масиву на щось інше.",
          "Додай новий елемент у кінець масиву вручну через індекс.",
          "Бонус: через цикл `for` виведи всі елементи у форматі `Навичка 1: HTML ⭐`.",
        ],
        note:
          "Молодець! 🌳⚡ Ти познайомився з масивами — тепер можеш зберігати списки даних.",
      },
    },
  },
  {
    slug: "array-methods-basics",
    level: "Core",
    duration: "24 min",
    title: "Основні методи масивів",
    description:
      "Двадцять шостий урок присвячений базовим методам масивів. Тут ми розбираємо, як додавати, видаляти, копіювати та змінювати елементи без ручної роботи з індексами.",
    bullets: [
      "Додавання і видалення елементів через `push`, `pop`, `unshift`, `shift`",
      "Копіювання частини масиву через `slice()`",
      "Зміна масиву через потужний метод `splice()`",
    ],
    content: {
      video: {
        title: "Відео до уроку 26",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися ефективно додавати, видаляти та змінювати елементи масиву за допомогою вбудованих методів.",
      sections: [
        {
          title: "Основні методи масивів",
          codeTitle: "array-methods.js",
          code: `// === Урок 26 — Основні методи масивів ===

const clan = ["Олег", "Марія", "Дмитро", "Софія"];
console.log(clan);`,
        },
        {
          title: "1. Додавання елементів",
          codeTitle: "array-push-unshift.js",
          code: `// Додати в кінець
clan.push("Ярослав", "Анна");
console.log(clan);

// Додати на початок
clan.unshift("Владислав");
console.log(clan);`,
        },
        {
          title: "2. Видалення елементів",
          codeTitle: "array-pop-shift.js",
          code: `// Видалити з кінця
const lastWarrior = clan.pop();
console.log("Видалено:", lastWarrior);

// Видалити з початку
const firstWarrior = clan.shift();
console.log("Видалено:", firstWarrior);`,
        },
        {
          title: "3. slice() — копіювання частини масиву",
          paragraphs: ["`slice()` не змінює оригінальний масив, а повертає новий."],
          codeTitle: "array-slice.js",
          code: `const skills = ["HTML", "CSS", "JS", "React", "Node.js", "Git"];

const frontend = skills.slice(0, 3);     // від 0 до 3 (не включаючи 3)
const backend = skills.slice(3);

console.log(frontend); // ["HTML", "CSS", "JS"]
console.log(backend);  // ["React", "Node.js", "Git"]`,
        },
        {
          title: "4. splice() — потужний метод",
          paragraphs: ["`splice()` змінює оригінальний масив і може одночасно видаляти та додавати елементи."],
          codeTitle: "array-splice.js",
          code: `const warriors = ["Олег", "Марія", "Дмитро", "Софія", "Ярослав"];

// Видалити 2 елементи починаючи з індексу 2
warriors.splice(2, 2); 
console.log(warriors);

// Додати елементи на позицію 1
warriors.splice(1, 0, "Владислав", "Ірина");
console.log(warriors);`,
        },
        {
          title: "Порівняльна таблиця",
          table: {
            headers: ["Метод", "Що робить", "Змінює оригінал?", "Повертає"],
            rows: [
              ["`push()`", "додає в кінець", "Так", "нову довжину"],
              ["`pop()`", "видаляє з кінця", "Так", "видалений елемент"],
              ["`unshift()`", "додає на початок", "Так", "нову довжину"],
              ["`shift()`", "видаляє з початку", "Так", "видалений елемент"],
              ["`slice()`", "копіює частину", "Ні", "новий масив"],
              ["`splice()`", "видаляє / додає", "Так", "масив видалених елементів"],
            ],
          },
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи масив `trainingGroup` з 6 імен воїнів.",
          "Додай 2 нові імена в кінець через `push()`.",
          "Додай 1 ім'я на початок через `unshift()`.",
          "Видали 2-е ім'я з початку через `splice()`.",
          "Створи новий масив `firstThree`, який містить перші 3 імені через `slice()`.",
          "Виведи всі масиви та їх довжину.",
          "Бонус: Напиши функцію `addWarrior(group, name)`, яка додає воїна в масив і виводить повідомлення `Воїн {name} приєднався до клану!`.",
        ],
        note:
          "Гарна робота! ⚡🌳 Тепер ти вмієш професійно працювати з масивами.",
      },
    },
  },
  {
    slug: "array-iteration-methods",
    level: "Core",
    duration: "26 min",
    title: "Ітерація масивів (forEach, map, filter, find)",
    description:
      "Двадцять сьомий урок присвячений сучасним методам ітерації масивів. Тут ми переходимо від звичайних циклів до більш виразних інструментів, які постійно використовуються у сучасному JavaScript і React.",
    bullets: [
      "Як виконувати дію для кожного елемента через `forEach()`",
      "Як будувати нові масиви через `map()` і `filter()`",
      "Як знаходити конкретний елемент через `find()`",
    ],
    content: {
      video: {
        title: "Відео до уроку 27",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися сучасним і зручним способам роботи з кожним елементом масиву.",
      sections: [
        {
          title: "1. forEach() — виконати дію для кожного елемента",
          codeTitle: "array-foreach.js",
          code: `// === Урок 27 — Ітерація масивів ===

const warriors = ["Олег", "Марія", "Дмитро", "Софія", "Ярослав"];

warriors.forEach((name, index) => {
    console.log(\`Воїн №\${index + 1}: \${name} ⚡\`);
});`,
        },
        {
          title: "2. map() — створює новий масив",
          codeTitle: "array-map.js",
          code: `const skills = ["html", "css", "javascript", "react"];

const upperSkills = skills.map(skill => skill.toUpperCase());
const skillLength = skills.map(skill => skill.length);

console.log(upperSkills);
// ["HTML", "CSS", "JAVASCRIPT", "REACT"]`,
        },
        {
          title: "3. filter() — залишає елементи за умовою",
          codeTitle: "array-filter.js",
          code: `const clan = [
    { name: "Олег", power: 920, level: "middle" },
    { name: "Марія", power: 1450, level: "senior" },
    { name: "Дмитро", power: 340, level: "junior" },
    { name: "Софія", power: 780, level: "middle" }
];

// Тільки сильні воїни
const strongWarriors = clan.filter(warrior => warrior.power > 700);
console.log(strongWarriors);`,
        },
        {
          title: "4. find() — знаходить перший відповідний елемент",
          codeTitle: "array-find.js",
          code: `const sofia = clan.find(warrior => warrior.name === "Софія");
console.log(sofia);

const junior = clan.find(w => w.level === "junior");
console.log(junior);`,
        },
        {
          title: "Порівняння методів",
          table: {
            headers: ["Метод", "Повертає", "Змінює оригінал?", "Коли використовувати"],
            rows: [
              ["`forEach`", "`undefined`", "Ні", "Просто виконати дію"],
              ["`map`", "Новий масив", "Ні", "Змінити кожен елемент"],
              ["`filter`", "Новий масив", "Ні", "Залишити елементи за умовою"],
              ["`find`", "Один елемент або `undefined`", "Ні", "Знайти конкретний елемент"],
            ],
          },
        },
        {
          title: "Практичний приклад",
          codeTitle: "array-iteration-practice.js",
          code: `const trainingResults = [85, 92, 67, 78, 95, 55];

const passed = trainingResults.filter(score => score >= 75);
const average = trainingResults.reduce((sum, score) => sum + score, 0) / trainingResults.length;

console.log("Пройшли тренування:", passed);
console.log("Середній бал:", average.toFixed(1));`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Попрацюй з таким масивом студентів.",
          "За допомогою `map()` створи масив тільки з іменами.",
          "Через `filter()` відбери воїнів з оцінкою `80+`.",
          "Через `find()` знайди студента з найвищою кількістю годин.",
          "Через `forEach()` виведи для кожного: `Воїн {ім’я} — {score} балів ⚡`.",
        ],
        codeTitle: "students-array.js",
        code: `const students = [
    { name: "Владислав", score: 95, hours: 25 },
    { name: "Анна", score: 87, hours: 18 },
    { name: "Максим", score: 64, hours: 12 },
    { name: "Катерина", score: 91, hours: 22 },
    { name: "Ігор", score: 73, hours: 15 }
];`,
        note:
          "Відмінна робота! ⚡🌳 Тепер ти вмієш професійно працювати з масивами — це дуже потужний інструмент.",
      },
    },
  },
  {
    slug: "objects-properties-and-methods",
    level: "Core",
    duration: "26 min",
    title: "Об’єкти — властивості та методи",
    description:
      "Двадцять восьмий урок відкриває модуль про об’єкти. Тут ми розбираємо, як групувати пов’язані дані й функції разом та як працювати з властивостями, методами і `this`.",
    bullets: [
      "Що таке об’єкт і як він зберігає ключі та значення",
      "Доступ до властивостей через крапку і квадратні дужки",
      "Методи об’єкта і використання `this`",
    ],
    content: {
      video: {
        title: "Відео до уроку 28",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Розібратися з об’єктами — одним з найважливіших типів даних у JavaScript. Об’єкти дозволяють групувати пов’язані дані та функції разом.",
      sections: [
        {
          title: "Що таке об’єкт?",
          paragraphs: ["Об’єкт — це колекція ключів (властивостей) та їх значень."],
          codeTitle: "object-basics.js",
          code: `// === Урок 28 — Об’єкти: властивості та методи ===

const warrior = {
    name: "Олег Сварожич",
    age: 26,
    power: 940,
    clan: "Сонячний Дуб",
    isActive: true,
    skills: ["HTML", "CSS", "JavaScript"]
};`,
        },
        {
          title: "Доступ до властивостей",
          codeTitle: "object-properties.js",
          code: `// 1. Через крапку (dot notation)
console.log(warrior.name);
console.log(warrior.power);

// 2. Через квадратні дужки (bracket notation)
console.log(warrior["age"]);
console.log(warrior["clan"]);

// Змінюємо значення
warrior.power = 1250;
warrior.isActive = false;

// Додаємо нову властивість
warrior.level = "Middle";
warrior.title = "Воїн Світла ⚡";

console.log(warrior);`,
        },
        {
          title: "Видалення властивості",
          codeTitle: "object-delete-property.js",
          code: `delete warrior.isActive;
console.log(warrior);`,
        },
        {
          title: "Методи в об’єкті",
          paragraphs: [
            "Методи — це функції всередині об’єкта. Усередині таких методів ми часто використовуємо `this`, щоб звернутися до самого об’єкта.",
          ],
          codeTitle: "object-methods.js",
          code: `const warrior = {
    name: "Марія",
    power: 870,
    level: "Middle",

    greet() {
        console.log(\`⚡ Слава Роду! Я \${this.name}, воїн клану!\`);
    },

    train(hours) {
        this.power += hours * 35;
        console.log(\`\${this.name} потренувався \${hours} годин. Сила тепер: \${this.power}\`);
    },

    getStatus() {
        if (this.power > 1200) return "Легенда ⚡";
        if (this.power > 800) return "Сильний воїн 🌳";
        return "Молодий паросток 🌱";
    }
};

warrior.greet();
warrior.train(5);
console.log("Статус:", warrior.getStatus());`,
        },
        {
          title: "Практичний приклад — Профіль воїна",
          codeTitle: "create-warrior.js",
          code: `const createWarrior = (name, age) => {
    return {
        name,
        age,
        power: age * 25,
        trainedDays: 0,

        train(days) {
            this.trainedDays += days;
            this.power += days * 40;
            console.log(\`🪶 \${this.name} тренувався \${days} днів. Загальна сила: \${this.power}\`);
        },

        getInfo() {
            return \`\${this.name} — \${this.getStatus()} | Сила: \${this.power} | Днів тренувань: \${this.trainedDays}\`;
        },

        getStatus() {
            return this.power > 1500 ? "Легенда Роду" : "Сильний Воїн";
        }
    };
};

const oleg = createWarrior("Олег", 24);
oleg.train(12);
console.log(oleg.getInfo());`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи об’єкт `student` або `warrior`, який має поля `name`, `age`, `currentPower`.",
          "Додай метод `study(hours)` — він повинен збільшувати силу.",
          "Додай метод `rest(days)` — він повинен трохи зменшувати силу, але додавати відновлення.",
          "Додай метод `getFullInfo()` — він повинен повертати повну інформацію про воїна.",
          "Додай метод `levelUp()` — він повинен підвищувати рівень, якщо сили достатньо.",
          "Створи 2–3 різних воїнів і потренуй їх.",
        ],
        note:
          "Відмінно! ⚡🌳 Ти тепер розумієш, як працюють об’єкти — фундамент для подальшої роботи з даними.",
      },
    },
  },
  {
    slug: "destructuring-arrays-and-objects",
    level: "Core",
    duration: "24 min",
    title: "Деструктуризація масивів та об’єктів",
    description:
      "Двадцять дев’ятий урок присвячений деструктуризації — сучасному способу швидко витягувати дані з об’єктів і масивів. Це один з найуживаніших прийомів у сучасному JavaScript і React.",
    bullets: [
      "Деструктуризація об’єктів і масивів",
      "Значення за замовчуванням і перейменування змінних",
      "Робота з вкладеними структурами та `...rest`",
    ],
    content: {
      video: {
        title: "Відео до уроку 29",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися сучасному та дуже зручному способу витягування даних з масивів і об’єктів — деструктуризація (Destructuring).",
      sections: [
        {
          title: "1. Деструктуризація об’єктів",
          codeTitle: "object-destructuring.js",
          code: `// === Урок 29 — Деструктуризація ===

const warrior = {
    name: "Ярослав",
    age: 27,
    power: 1250,
    clan: "Сонячний Дуб",
    title: "Сварожич",
    skills: ["JS", "React", "Node"]
};

// Старий спосіб
// const name = warrior.name;
// const power = warrior.power;

// Новий сучасний спосіб — деструктуризація
const { name, power, clan, title } = warrior;

console.log(name);   // Ярослав
console.log(power);  // 1250
console.log(clan);   // Сонячний Дуб`,
        },
        {
          title: "Значення за замовчуванням і перейменування",
          codeTitle: "destructuring-defaults.js",
          code: `const { 
    name: warriorName, 
    power: currentPower = 500, 
    level = "Junior" 
} = warrior;

console.log(warriorName);    // Ярослав
console.log(currentPower);   // 1250
console.log(level);          // Junior (якщо немає в об'єкті)`,
        },
        {
          title: "2. Деструктуризація масивів",
          codeTitle: "array-destructuring.js",
          code: `const skills = ["HTML", "CSS", "JavaScript", "React", "TypeScript"];

const [first, second, third] = skills;

console.log(first);  // HTML
console.log(second); // CSS
console.log(third);  // JavaScript

// Пропуск елементів
const [, , , fourth, fifth] = skills;
console.log(fourth); // React`,
        },
        {
          title: "3. Практичний приклад",
          codeTitle: "destructuring-practice.js",
          code: `const createWarriorProfile = () => {
    return {
        name: "Софія",
        age: 24,
        stats: {
            power: 980,
            wisdom: 650,
            speed: 720
        },
        skills: ["JavaScript", "React", "Tailwind"]
    };
};

const { 
    name, 
    stats: { power, wisdom }, 
    skills: [mainSkill, ...otherSkills] 
} = createWarriorProfile();

console.log(\`Воїн: \${name}\`);
console.log(\`Сила: \${power}, Мудрість: \${wisdom}\`);
console.log(\`Головний скіл: \${mainSkill}\`);
console.log(\`Інші скіли: \${otherSkills}\`);`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "Деструктуризацію можна використовувати і в параметрах функцій.",
            "`...rest` збирає всі залишкові елементи в масив.",
            "Деструктуризація сильно спрощує роботу з об’єктами та масивами.",
            "Це один з найпопулярніших сучасних прийомів у JavaScript.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Попрацюй з таким об’єктом `student`.",
          "Витягни `fullName`, `course`, `powerLevel` через деструктуризацію.",
          "Витягни перший `achievement` в окрему змінну, а решту — в масив `otherAchievements`.",
          "Створи функцію `showWarriorInfo({ fullName, progress: { powerLevel }, achievements })`, яка красиво виводить інформацію.",
        ],
        codeTitle: "student-destructuring.js",
        code: `const student = {
    fullName: "Дмитро Вітрович",
    age: 23,
    course: "JavaScript",
    progress: {
        lessonsCompleted: 28,
        totalLessons: 42,
        powerLevel: 890
    },
    achievements: ["Перша функція", "Перша гра", "Масиви"]
};`,
        note:
          "Чудово! ⚡🌳 Деструктуризація — це той інструмент, який робить код набагато чистішим і сучаснішим.",
      },
    },
  },
  {
    slug: "spread-and-rest-operators",
    level: "Core",
    duration: "24 min",
    title: "Spread та Rest оператор (...)",
    description:
      "Тридцятий урок присвячений оператору `...` — одному з найзручніших інструментів сучасного JavaScript. Він допомагає об’єднувати масиви, клонувати об’єкти та збирати довільну кількість аргументів у функціях.",
    bullets: [
      "Spread для масивів і об’єктів",
      "Rest для параметрів функцій і деструктуризації",
      "Практика з клонуванням і динамічними аргументами",
    ],
    content: {
      video: {
        title: "Відео до уроку 30",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Освоїти один з найпотужніших і найзручніших інструментів сучасного JavaScript — оператор `...` (spread та rest).",
      sections: [
        {
          title: "1. Spread (...) — \"розпилення\"",
          paragraphs: [
            "Spread використовується в правій частині виразу. Він розгортає масив або об’єкт на окремі елементи чи властивості.",
          ],
        },
        {
          title: "Для масивів",
          codeTitle: "spread-arrays.js",
          code: `// === Урок 30 — Spread та Rest ===

const oldSkills = ["HTML", "CSS", "JavaScript"];
const newSkills = ["React", "TypeScript", "Tailwind"];

// Об'єднуємо масиви
const allSkills = [...oldSkills, ...newSkills, "Git", "Next.js"];

console.log(allSkills);`,
        },
        {
          title: "Для об’єктів",
          codeTitle: "spread-objects.js",
          code: `const baseWarrior = {
    name: "Олег",
    clan: "Сонячний Дуб",
    power: 750
};

const upgradedWarrior = {
    ...baseWarrior,
    power: 1250,
    level: "Middle",
    title: "Сварожич ⚡"
};

console.log(upgradedWarrior);`,
        },
        {
          title: "2. Rest (...) — \"збір залишків\"",
          paragraphs: [
            "Rest працює в лівій частині присвоєння або в параметрах функції. Він збирає кілька значень в один масив.",
          ],
          codeTitle: "rest-parameters.js",
          code: `// Збирає всі аргументи в масив
function showSkills(name, ...skills) {
    console.log(\`Воїн: \${name}\`);
    console.log("Навички:", skills);
}

showSkills("Марія", "JavaScript", "React", "Node.js", "English");`,
        },
        {
          title: "Rest у деструктуризації",
          codeTitle: "rest-destructuring.js",
          code: `const [first, second, ...restSkills] = ["HTML", "CSS", "JS", "React", "Node", "Git"];

console.log(first);      // HTML
console.log(second);     // CSS
console.log(restSkills); // ["JS", "React", "Node", "Git"]`,
        },
        {
          title: "Практичні приклади",
          codeTitle: "spread-rest-practice.js",
          code: `// 1. Клонування об'єкта (глибоке копіювання на поверхневому рівні)
const warrior = { name: "Софія", power: 980 };
const newWarrior = { ...warrior, power: 1350 };

// 2. Функція з будь-якою кількістю параметрів
const calculateTotalPower = (...powers) => {
    return powers.reduce((total, power) => total + power, 0);
};

console.log(calculateTotalPower(340, 560, 890, 420));`,
        },
        {
          title: "Важливі правила",
          bullets: [
            "`...` у лівій частині присвоєння означає Rest — він збирає значення.",
            "`...` у правій частині означає Spread — він розгортає значення.",
            "Spread не робить глибоке клонування для вкладених об’єктів і масивів.",
            "Цей оператор дуже часто використовується в React і сучасному JavaScript загалом.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи масив `baseSkills = [\"HTML\", \"CSS\", \"JavaScript\"]`.",
          "Створи новий масив `fullStack`, який містить усі `baseSkills` і додатково `React`, `Node.js`, `PostgreSQL`, `Docker`.",
          "Створи об’єкт `warriorProfile` і клонуй його з додаванням нових властивостей `level` та `achievements`.",
          "Напиши функцію `addToClan(clanName, ...warriors)`, яка виводить: `До клану ${clanName} приєднались: ...`.",
          "Бонус: використай spread і rest разом в одній функції.",
        ],
        codeTitle: "spread-rest-homework.js",
        code: `const baseSkills = ["HTML", "CSS", "JavaScript"];

const fullStack = [...baseSkills, "React", "Node.js", "PostgreSQL", "Docker"];

const warriorProfile = {
    name: "Ярослав",
    power: 920,
    clan: "Сонячний Дуб"
};

function addToClan(clanName, ...warriors) {
    console.log(\`До клану \${clanName} приєднались: \${warriors.join(", ")}\`);
}`,
        note:
          "Сильна робота! ⚡🌳 Оператор `...` — це той інструмент, без якого сучасний JavaScript уже важко уявити.",
      },
    },
  },
  {
    slug: "json-and-working-with-it",
    level: "Core",
    duration: "22 min",
    title: "JSON та робота з ним",
    description:
      "Тридцять перший урок присвячений JSON — найпоширенішому формату обміну даними у веб-розробці. Тут ми розберемо, як перетворювати об’єкти в JSON-рядки і назад.",
    bullets: [
      "Що таке JSON і як він виглядає",
      "Робота з `JSON.parse()` та `JSON.stringify()`",
      "Практика з об’єктами, масивами і даними для API",
    ],
    content: {
      video: {
        title: "Відео до уроку 31",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися працювати з JSON — найпопулярнішим форматом обміну даними в сучасній веб-розробці.",
      sections: [
        {
          title: "Що таке JSON?",
          paragraphs: [
            "JSON (JavaScript Object Notation) — це текстовий формат для зберігання та передачі даних. На вигляд він дуже схожий на об’єкти JavaScript, але насправді це просто текст.",
          ],
          codeTitle: "json-basics.js",
          code: `// === Урок 31 — JSON ===

// 1. JSON — це просто рядок
const jsonString = \`{
    "name": "Ярослав",
    "age": 26,
    "clan": "Сонячний Дуб",
    "power": 980,
    "skills": ["JavaScript", "React", "Node.js"],
    "isActive": true
}\`;`,
        },
        {
          title: "Основні методи роботи з JSON",
          codeTitle: "json-methods.js",
          code: `// 1. JSON.parse() — перетворює JSON-рядок в об'єкт
const warrior = JSON.parse(jsonString);

console.log(warrior.name);
console.log(warrior.skills[1]); // React

// 2. JSON.stringify() — перетворює об'єкт в JSON-рядок
const newWarrior = {
    name: "Софія",
    age: 24,
    power: 1150,
    title: "Сварожичка"
};

const jsonData = JSON.stringify(newWarrior, null, 2); // 2 — відступ для краси
console.log(jsonData);`,
        },
        {
          title: "Практичний приклад",
          codeTitle: "json-practice.js",
          code: `const clanData = {
    clanName: "Світлі Сварожичі",
    members: [
        { name: "Олег", power: 1250, role: "Middle" },
        { name: "Марія", power: 980, role: "Junior" },
        { name: "Дмитро", power: 1580, role: "Senior" }
    ],
    totalPower: 3810,
    motto: "Сила в єдності ⚡"
};

// Перетворюємо в JSON (наприклад, для відправки на сервер)
const jsonForServer = JSON.stringify(clanData, null, 2);
console.log(jsonForServer);

// Отримуємо назад з сервера
const receivedData = JSON.parse(jsonForServer);
console.log("Клан:", receivedData.clanName);
console.log("Найсильніший воїн:", receivedData.members[2]);`,
        },
        {
          title: "Важливі моменти",
          bullets: [
            "JSON використовує подвійні лапки для ключів і рядків.",
            "У JSON немає функцій, `undefined`, `Date` та інших спеціальних типів JavaScript.",
            "`JSON.stringify()` і `JSON.parse()` — два головні методи для роботи з JSON.",
            "JSON дуже часто використовується при роботі з API та `fetch`.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи об’єкт `yourProfile` з полями `name`, `age`, `skills`, `powerLevel`, `achievements`.",
          "Перетвори його в JSON-рядок через `JSON.stringify()`.",
          "Розпарси цей рядок назад в об’єкт через `JSON.parse()`.",
          "Виведи красиве повідомлення з цими даними.",
          "Бонус: створи функції `saveWarrior(warrior)` і `loadWarrior(jsonString)`.",
        ],
        codeTitle: "json-homework.js",
        code: `const yourProfile = {
    name: "Владислав",
    age: 22,
    skills: ["HTML", "CSS", "JavaScript"],
    powerLevel: 780,
    achievements: ["Перший сайт", "Перша гра", "Функції"]
};

function saveWarrior(warrior) {
    return JSON.stringify(warrior, null, 2);
}

function loadWarrior(jsonString) {
    return JSON.parse(jsonString);
}`,
        note:
          "Молодець! ⚡🌳 Тепер ти вмієш працювати з даними у форматі, який використовується майже скрізь у веб-розробці.",
      },
    },
  },
  {
    slug: "todo-list-practice",
    level: "Core",
    duration: "28 min",
    title: "Практика — TODO-лист (на масивах та об’єктах)",
    description:
      "Тридцять другий урок збирає воєдино масиви, об’єкти, функції, методи та деструктуризацію в реальний невеликий проєкт — власний TODO List на чистому JavaScript.",
    bullets: [
      "Практика на масивах і об’єктах",
      "Методи `add`, `complete`, `delete`, `filter`, `stats`",
      "Перший мініпроєкт з реальним сценарієм використання",
    ],
    content: {
      video: {
        title: "Відео до уроку 32",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Зібрати всі знання про масиви, об’єкти, функції та деструктуризацію в реальний невеликий проєкт — Todo List.",
      sections: [
        {
          title: "Код проєкту",
          codeTitle: "todo-list.js",
          code: `// === Урок 32 — TODO List ===

const todoList = {
    tasks: [],

    addTask(text) {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toLocaleString("uk-UA")
        };
        this.tasks.push(newTask);
        console.log(\`✅ Завдання додано: "\${text}"\`);
    },

    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(\`✅ Виконано: "\${task.text}"\`);
        }
    },

    deleteTask(id) {
        const index = this.tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            const deleted = this.tasks.splice(index, 1)[0];
            console.log(\`🗑️ Видалено: "\${deleted.text}"\`);
        }
    },

    showTasks(filter = "all") {
        console.log(\`\\n📋 Твої завдання (\${filter}):\`);

        const filtered = this.tasks.filter(task => {
            if (filter === "active") return !task.completed;
            if (filter === "completed") return task.completed;
            return true; // all
        });

        if (filtered.length === 0) {
            console.log("Поки що завдань немає 🌱");
            return;
        }

        filtered.forEach(task => {
            const status = task.completed ? "✅" : "⬜";
            console.log(\`\${status} \${task.id} — \${task.text} (\${task.createdAt})\`);
        });
    },

    getStats() {
        const total = this.tasks.length;
        const completed = this.tasks.filter(t => t.completed).length;
        console.log(\`\\n📊 Статистика: \${completed}/\${total} виконано\`);
    }
};

// ====================== ТЕСТУЄМО ======================

todoList.addTask("Вивчити деструктуризацію");
todoList.addTask("Зробити TODO-лист");
todoList.addTask("Повторити методи масивів");
todoList.addTask("Написати гру");

todoList.showTasks();

todoList.completeTask(todoList.tasks[1].id);

todoList.showTasks("active");
todoList.getStats();`,
        },
        {
          title: "Що тут практикуємо",
          bullets: [
            "Масив `tasks` для зберігання завдань.",
            "Об’єкт `todoList` з методами для роботи зі списком.",
            "Пошук елементів через `find()` і `findIndex()`.",
            "Фільтрацію завдань через `filter()`.",
            "Перебір через `forEach()` і базову статистику.",
          ],
        },
        {
          title: "Ключова ідея проєкту",
          paragraphs: [
            "Це вже не окремі відірвані приклади, а цілісний об’єкт зі станом і поведінкою. Саме з таких невеликих систем і починається реальна розробка.",
          ],
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Додай метод `editTask(id, newText)`.",
          "Додай метод `clearCompleted()` — видаляє всі виконані завдання.",
          "Зроби функцію `addMultipleTasks(...texts)` — додає одразу кілька завдань.",
          "Покажи фінальний список через `showTasks()`.",
          "Спробуй зробити кілька різних списків: `workList`, `studyList`, `personalList`.",
        ],
        note:
          "Готово! Це вже реальний маленький проєкт. Ти молодець!",
      },
    },
  },
  {
    slug: "intro-to-dom",
    level: "Core",
    duration: "24 min",
    title: "Вступ до DOM (Document Object Model)",
    description:
      "Тридцять третій урок відкриває новий модуль про роботу зі сторінкою. Тут ми знайомимося з DOM — містком між JavaScript і HTML.",
    bullets: [
      "Що таке DOM і як браузер бачить HTML",
      "Пошук елементів через `getElementById` і `querySelector`",
      "Зміна тексту, стилів, класів і атрибутів",
    ],
    content: {
      video: {
        title: "Відео до уроку 33",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Познайомитися з DOM — це місток між JavaScript і HTML-сторінкою. Саме завдяки DOM ми можемо змінювати сторінку динамічно.",
      sections: [
        {
          title: "Що таке DOM?",
          paragraphs: [
            "DOM — це об’єктна модель документа. Браузер перетворює HTML у дерево об’єктів, з якими ми можемо працювати через JavaScript.",
          ],
          codeTitle: "index.html",
          code: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Урок 33 - DOM</title>
</head>
<body>
    <h1 id="title">Слава Роду! 🌳</h1>
    <p class="description">Це перший урок роботи з DOM</p>
    <button id="btn">Натисни мене</button>

    <script src="script.js"></script>
</body>
</html>`,
        },
        {
          title: "Основні способи пошуку елементів",
          codeTitle: "script.js",
          code: `// === Урок 33 — Вступ до DOM ===

const title = document.getElementById("title");
const paragraph = document.querySelector(".description");
const button = document.querySelector("#btn");

// Працюємо з елементом
console.log(title.textContent);

title.textContent = "Я тепер змінюю сторінку через JavaScript! ⚡";
title.style.color = "#ffcc00";
title.style.fontSize = "2.5rem";`,
        },
        {
          title: "Найважливіші методи",
          codeTitle: "dom-methods.js",
          code: `// 1. querySelector — найуніверсальніший
const firstParagraph = document.querySelector("p");

// 2. querySelectorAll — повертає всі елементи (NodeList)
const allParagraphs = document.querySelectorAll("p");

// 3. Робота з класами
button.classList.add("active");
button.classList.remove("active");
button.classList.toggle("active");

// 4. Зміна атрибутів
button.setAttribute("disabled", true);`,
        },
        {
          title: "Практичний приклад",
          codeTitle: "dom-practice.js",
          code: `const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "Новий параграф створений через JavaScript 🌿";
    newElement.style.color = "#4ade80";

    document.body.appendChild(newElement);
});`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи на сторінці заголовок `h1`, параграф і кнопку `Змінити тему`.",
          "При натисканні на кнопку зміни текст заголовка.",
          "Зміни колір фону `body`.",
          "Додай новий елемент з мотиваційним текстом.",
          "Додай ще одну кнопку `Скинути зміни`.",
        ],
        note:
          "Готово! Тепер ти можеш взаємодіяти зі сторінкою — це вже справжня фронтенд-розробка.",
      },
    },
  },
  {
    slug: "changing-text-styles-and-attributes",
    level: "Core",
    duration: "24 min",
    title: "Зміна тексту, стилів та атрибутів",
    description:
      "Тридцять четвертий урок показує, як динамічно змінювати текст, HTML, inline-стилі, класи та атрибути елементів сторінки через JavaScript.",
    bullets: [
      "Різниця між `textContent` та `innerHTML`",
      "Зміна стилів, класів і атрибутів",
      "Практика з кнопками зміни теми та скидання стану",
    ],
    content: {
      video: {
        title: "Відео до уроку 34",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися динамічно змінювати вміст, стилі та атрибути елементів на сторінці.",
      sections: [
        {
          title: "Практичний код",
          codeTitle: "dom-updates.js",
          code: `// === Урок 34 — Зміна тексту, стилів, атрибутів ===

const title = document.querySelector("#title");
const description = document.querySelector(".description");
const btn = document.querySelector("#btn");
const image = document.querySelector("#warrior-img");

// 1. Зміна тексту
title.textContent = "Я змінився через JavaScript! ⚡";
title.innerHTML = "Я змінився через JavaScript! <span style='color:#fbbf24'>Слава Сварогу!</span>";

// 2. Зміна стилів
function changeTheme() {
    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "#e0f2fe";

    title.style.color = "#67e8f9";
    title.style.fontSize = "3rem";
    title.style.textShadow = "0 0 20px #67e8f9";
}

// 3. Робота з класами (найкращий спосіб)
btn.classList.add("active");
btn.classList.toggle("active");

// 4. Зміна атрибутів
image.setAttribute("src", "https://i.imgur.com/example.jpg");
image.setAttribute("alt", "Воїн Сварога");

// 5. Видалення атрибуту
// image.removeAttribute("alt");`,
        },
        {
          title: "Повний приклад з кнопками",
          codeTitle: "dom-buttons.js",
          code: `const btnChange = document.querySelector("#change");
const btnReset = document.querySelector("#reset");

btnChange.addEventListener("click", () => {
    title.textContent = "Ти на шляху до майстерності!";
    title.style.color = "#a5f3fc";
    document.body.style.background = "linear-gradient(135deg, #1e2937, #334155)";
});

btnReset.addEventListener("click", () => {
    title.textContent = "Слава Роду! 🌳";
    title.style.color = "";
    document.body.style.background = "";
});`,
        },
        {
          title: "Важливі методи",
          table: {
            headers: ["Метод", "Що робить"],
            rows: [
              ["`textContent`", "Змінює текст без вставки HTML"],
              ["`innerHTML`", "Змінює HTML і дозволяє вставляти теги"],
              ["`classList.add()`", "Додає клас елементу"],
              ["`classList.remove()`", "Видаляє клас"],
              ["`classList.toggle()`", "Перемикає клас увімкнено/вимкнено"],
              ["`setAttribute()`", "Змінює або додає атрибут"],
              ["`style.property`", "Змінює inline-стилі елемента"],
            ],
          },
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи інтерактивну сторінку з трьома кнопками.",
          "Кнопка `Змінити тему` повинна перемикати темну і світлу тему.",
          "Кнопка `Підняти силу` повинна збільшувати розмір заголовка і змінювати його текст.",
          "Кнопка `Скинути все` повинна повертати початковий стан.",
          "Додай красиві стилі через `classList`.",
        ],
        note:
          "Спробуй робити акцент саме на класах, а не тільки на inline-стилях — це ближче до реальної фронтенд-розробки.",
      },
    },
  },
  {
    slug: "creating-and-removing-elements",
    level: "Core",
    duration: "25 min",
    title: "Створення та видалення елементів",
    description:
      "Тридцять п’ятий урок присвячений динамічному керуванню HTML-структурою: створенню нових елементів, вставці їх у DOM і видаленню зі сторінки.",
    bullets: [
      "Створення елементів через `document.createElement()`",
      "Додавання через `appendChild`, `append`, `prepend`",
      "Видалення елементів і побудова інтерактивного списку",
    ],
    content: {
      video: {
        title: "Відео до уроку 35",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися динамічно створювати, додавати та видаляти HTML-елементи через JavaScript.",
      sections: [
        {
          title: "Основні методи",
          codeTitle: "create-elements.js",
          code: `// === Урок 35 — Створення та видалення елементів ===

const container = document.querySelector(".tasks-container");

// 1. Створення нового елемента
const newTask = document.createElement("div");
newTask.classList.add("task-item");
newTask.innerHTML = \`
    <span>Вивчити методи DOM</span>
    <button class="delete-btn">🗑️</button>
\`;

// 2. Додавання на сторінку
container.appendChild(newTask);
// container.prepend(newTask);
// container.insertBefore(newTask, firstChild);`,
        },
        {
          title: "Повний практичний приклад",
          codeTitle: "dynamic-tasks.js",
          code: `function addNewTask(text) {
    const taskEl = document.createElement("div");
    taskEl.className = "task-item flex justify-between items-center p-4 bg-slate-800 rounded-xl mb-3";

    taskEl.innerHTML = \`
        <span class="text-lg">\${text}</span>
        <button class="delete-btn text-red-400 hover:text-red-500 text-2xl">🗑️</button>
    \`;

    // Видалення елемента
    taskEl.querySelector(".delete-btn").addEventListener("click", () => {
        taskEl.remove();
        // або taskEl.parentNode.removeChild(taskEl);
    });

    document.querySelector(".tasks-container").appendChild(taskEl);
}

// Використання
addNewTask("Зробити домашнє завдання");
addNewTask("Повторити деструктуризацію");`,
        },
        {
          title: "Важливі методи створення та видалення",
          table: {
            headers: ["Метод", "Що робить"],
            rows: [
              ["`document.createElement()`", "Створює новий HTML-елемент"],
              ["`appendChild()` / `append()`", "Додає елемент у кінець контейнера"],
              ["`prepend()`", "Додає елемент на початок контейнера"],
              ["`insertBefore()`", "Вставляє елемент перед конкретним вузлом"],
              ["`element.remove()`", "Видаляє елемент зі сторінки"],
              ["`innerHTML = \"\"`", "Очищає весь вміст контейнера"],
            ],
          },
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи інтерактивний TODO-лист з полем вводу і кнопкою `Додати`.",
          "При натисканні повинно створюватися нове завдання.",
          "У кожного завдання зроби кнопку видалення `🗑️`.",
          "При натисканні на текст завдання воно має відмічатися як виконане через клас `completed`.",
          "Бонус: додай лічильник завдань і кнопку `Видалити всі`.",
        ],
        note:
          "Готово! Тепер ти можеш повністю керувати структурою сторінки через JavaScript.",
      },
    },
  },
  {
    slug: "working-with-classes-classlist",
    level: "Core",
    duration: "22 min",
    title: "Робота з класами (classList)",
    description:
      "Тридцять шостий урок присвячений `classList` — одному з найважливіших DOM-інструментів для керування станами, темами, анімаціями та виглядом елементів.",
    bullets: [
      "Методи `add`, `remove`, `toggle`, `contains`, `replace`",
      "Робота з темами і візуальними станами елементів",
      "Практика з карткою і перемиканням класів",
    ],
    content: {
      video: {
        title: "Відео до уроку 36",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися професійно працювати з CSS-класами через JavaScript — це найправильніший і найзручніший спосіб змінювати зовнішній вигляд елементів.",
      sections: [
        {
          title: "Основні методи classList",
          codeTitle: "classlist-basics.js",
          code: `// === Урок 36 — classList ===

const card = document.querySelector(".warrior-card");
const btn = document.querySelector("#toggle-btn");

// 1. Додавання класу
card.classList.add("active", "glow");

// 2. Видалення класу
card.classList.remove("glow");

// 3. Перемикання (найчастіше використовується)
btn.addEventListener("click", () => {
    card.classList.toggle("active");
});

// 4. Перевірка наявності класу
if (card.classList.contains("active")) {
    console.log("Картка активна ⚡");
}

// 5. Заміна одного класу на інший
card.classList.replace("old-theme", "new-theme");`,
        },
        {
          title: "Практичний приклад — Темна/Світла тема + Анімація",
          codeTitle: "classlist-theme.js",
          code: `const body = document.body;
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Світла тема";
    } else {
        themeBtn.textContent = "🌙 Темна тема";
    }
});`,
        },
        {
          title: "CSS (приклад стилів)",
          codeTitle: "styles.css",
          code: `.warrior-card {
    transition: all 0.4s ease;
}

.warrior-card.active {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(103, 232, 249, 0.6);
    background: linear-gradient(135deg, #1e3a8a, #3b82f6);
}

.dark {
    background-color: #0f172a;
    color: #e0f2fe;
}`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи інтерактивну картку воїна.",
          "Кнопка `Підняти рівень` повинна додавати клас `level-up`.",
          "Кнопка `Змінити тему` повинна перемикати темну і світлу тему на всій сторінці.",
          "Кнопка `Активувати силу` повинна додавати або прибирати клас `power-active` з анімацією.",
          "При натисканні на саму картку вона повинна `toggle` клас `selected`.",
          "Додай плавні `transition` у CSS.",
        ],
        note:
          "`classList` — це один з найчастіше використовуваних інструментів при роботі з DOM, тому його варто довести до автоматизму.",
      },
    },
  },
  {
    slug: "interactive-elements-practice",
    level: "Core",
    duration: "28 min",
    title: "Практика — інтерактивні елементи (кольори, лічильник)",
    description:
      "Тридцять сьомий урок зводить разом DOM, події, стилі та класи у кілька маленьких, але дуже живих інтерактивних елементів: лічильник, зміну кольорів фону та картку з поведінкою при кліку й наведенні.",
    bullets: [
      "Лічильник із кнопками `+`, `-` і `Reset`",
      "Циклічна зміна кольорів фону через JavaScript",
      "Інтерактивна картка з `classList`, hover-ефектами і transition",
    ],
    content: {
      video: {
        title: "Відео до уроку 37",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Закріпити роботу з DOM через створення кількох веселих і корисних інтерактивних елементів.",
      sections: [
        {
          title: "Лічильник (Counter)",
          codeTitle: "counter.js",
          code: `const countEl = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countEl.textContent = count;
    countEl.style.color = count > 0 ? "#4ade80" : "#fff";
});

decrementBtn.addEventListener("click", () => {
    count--;
    countEl.textContent = count;
    countEl.style.color = count < 0 ? "#f87171" : "#fff";
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
    countEl.style.color = "#fff";
});`,
        },
        {
          title: "Зміна кольорів фону (Color Changer)",
          codeTitle: "color-changer.js",
          code: `const body = document.body;
const colors = ["#0f172a", "#1e2937", "#312e81", "#4338ca", "#1e40af", "#164e63"];

let currentIndex = 0;

document.getElementById("changeColor").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % colors.length;
    body.style.backgroundColor = colors[currentIndex];

    // Додаємо плавну анімацію
    body.style.transition = "background-color 0.6s ease";
});`,
        },
        {
          title: "Інтерактивна картка воїна",
          codeTitle: "warrior-card.js",
          code: `const card = document.querySelector(".warrior-card");

card.addEventListener("click", () => {
    card.classList.toggle("power-mode");
});

card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.08) rotate(2deg)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1) rotate(0deg)";
});`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи сторінку з лічильником тренувань і кнопками `+1`, `-1`, `Reset`.",
          "Додай кнопку, яка циклічно змінює колір фону сторінки.",
          "Створи інтерактивну картку воїна, яка при натисканні збільшується і змінює колір.",
          "При наведенні миші картка повинна трохи повертатися і плавно анімуватися.",
          "Зроби все акуратно через `transition`, щоб інтерфейс виглядав живо й сучасно.",
        ],
        note:
          "Це вже дуже близько до справжніх UI-взаємодій: маленькі механіки, але саме з них складається жива фронтенд-сторінка.",
      },
    },
  },
  {
    slug: "event-handling-add-event-listener",
    level: "Core",
    duration: "24 min",
    title: "Обробка подій (addEventListener)",
    description:
      "Тридцять восьмий урок відкриває модуль подій і показує, як сайт починає реагувати на користувача: на кліки, наведення, натискання клавіш і введення тексту.",
    bullets: [
      "Базова робота з `addEventListener()`",
      "Поширені DOM-події: `click`, `dblclick`, `mouseenter`, `mouseleave`, `keydown`",
      "Об'єкт `event` і практичний приклад з лічильником кліків",
    ],
    content: {
      video: {
        title: "Відео до уроку 38",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися правильно обробляти події користувача: кліки, наведення, введення тексту тощо.",
      sections: [
        {
          title: "Основний спосіб — addEventListener",
          codeTitle: "event-basics.js",
          code: `// === Урок 38 — Обробка подій ===

const btn = document.querySelector("#myBtn");
const output = document.querySelector("#output");

// Найпростіший варіант
btn.addEventListener("click", () => {
    output.textContent = "Кнопку натиснуто! ⚡";
    output.style.color = "#4ade80";
});`,
        },
        {
          title: "Поширені події",
          codeTitle: "common-events.js",
          code: `const box = document.querySelector(".interactive-box");

// Клік
box.addEventListener("click", () => console.log("Клік!"));

// Подвійний клік
box.addEventListener("dblclick", () => console.log("Подвійний клік!"));

// Наведення миші
box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "#22d3ee";
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "#1e2937";
});

// Натиснення клавіші
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("Enter натиснуто!");
    }
    if (event.key === "Escape") {
        console.log("Escape — вихід");
    }
});`,
        },
        {
          title: "Передача даних у обробник + event об’єкт",
          codeTitle: "event-object.js",
          code: `btn.addEventListener("click", (event) => {
    console.log(event);           // весь об'єкт події
    console.log(event.target);    // елемент, на якому спрацювала подія
    console.log(event.type);      // "click"

    event.target.style.transform = "scale(0.95)";
    setTimeout(() => {
        event.target.style.transform = "scale(1)";
    }, 150);
});`,
        },
        {
          title: "Практичний приклад — Лічильник кліків",
          codeTitle: "click-counter.js",
          code: `let clickCount = 0;

document.getElementById("clickArea").addEventListener("click", (e) => {
    clickCount++;
    document.getElementById("counter").textContent = clickCount;

    // Ефект "ripple"
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = \`\${e.offsetX}px\`;
    ripple.style.top = \`\${e.offsetY}px\`;
    e.currentTarget.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи кнопку, яка при кожному натисканні змінює свій текст і колір.",
          "Зроби область `div`, яка реагує на `mouseenter`, `mouseleave`, `click` і `dblclick`.",
          "Додай поле вводу, яке при натисканні `Enter` додає текст у список нижче.",
          "Додай кнопку `Очистити все`, яка прибирає всі створені елементи або записи.",
          "Зроби взаємодії акуратними й живими через плавні переходи та стилі.",
        ],
        note:
          "Події — це серце інтерактивного інтерфейсу. Щойно ти їх освоюєш, сторінка перестає бути статичною і починає поводитися як справжній застосунок.",
      },
    },
  },
  {
    slug: "click-input-and-form-events",
    level: "Core",
    duration: "26 min",
    title: "Події кліку, введення, відправки форми",
    description:
      "Тридцять дев’ятий урок зосереджений на найуживаніших подіях інтерфейсу: кліках, введенні тексту та submit-подіях форм, без яких не обходиться жоден реальний вебзастосунок.",
    bullets: [
      "Події `click` і `dblclick`",
      "Події введення: `input`, `keyup`, `change`",
      "Подія `submit`, `preventDefault()` і робота з формою",
    ],
    content: {
      video: {
        title: "Відео до уроку 39",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися працювати з різними типами подій: кліки, введення тексту та відправка форм.",
      sections: [
        {
          title: "Події кліку (click, dblclick)",
          codeTitle: "click-events.js",
          code: `const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", () => {
    console.log("Кнопку натиснуто!");
});

btn.addEventListener("dblclick", () => {
    console.log("Подвійний клік! ⚡");
});`,
        },
        {
          title: "Події введення (input, keyup, change)",
          codeTitle: "input-events.js",
          code: `const input = document.querySelector("#nameInput");
const output = document.querySelector("#liveOutput");

input.addEventListener("input", () => {
    output.textContent = \`Привіт, \${input.value || "воїне"}! 🌿\`;
});

// Відстежуємо саме натискання клавіш
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        alert(\`Введено: \${input.value}\`);
    }
});`,
        },
        {
          title: "Подія відправки форми (submit)",
          codeTitle: "form-submit.js",
          code: `const form = document.querySelector("#warriorForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();        // ← дуже важливо! Зупиняє перезавантаження сторінки

    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;

    if (name && age) {
        console.log(\`Новий воїн: \${name}, вік: \${age}\`);
        alert(\`Слава Роду! Воїн \${name} приєднався до клану! ⚡\`);
        form.reset(); // очищаємо форму
    } else {
        alert("Будь ласка, заповни всі поля");
    }
});`,
        },
        {
          title: "Повний приклад форми",
          codeTitle: "index.html",
          code: `<form id="warriorForm">
    <input type="text" id="name" placeholder="Ім'я воїна" required>
    <input type="number" id="age" placeholder="Вік" required>
    <button type="submit">Приєднати до клану</button>
</form>`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи форму з полями: ім’я воїна, вік і вибір рівня через `<select>`.",
          "Додай кнопку `Приєднатися` і оброби `submit` без перезавантаження сторінки через `event.preventDefault()`.",
          "При відправці виведи всі дані в консоль і покажи гарне `alert`-повідомлення.",
          "Додай введене ім’я в список воїнів на сторінці як новий елемент.",
          "Бонус: зроби валідацію, щоб вік був у межах від `16` до `60`.",
        ],
        note:
          "Події форми — це база для реєстрацій, пошуку, коментарів, фільтрів і майже будь-якої взаємодії з користувачем у реальних проєктах.",
      },
    },
  },
  {
    slug: "keyboard-and-mouse-events",
    level: "Core",
    duration: "24 min",
    title: "Події клавіатури та миші",
    description:
      "Сороковий урок показує, як реагувати на рухи миші, натискання кнопок і клавіш. Саме ці механіки лежать в основі ігор, гарячих клавіш, drag-and-drop і швидких інтерактивних інтерфейсів.",
    bullets: [
      "Події миші: `mousemove`, `mousedown`, `mouseup`, `contextmenu`",
      "Події клавіатури: `keydown`, `keyup`, модифікатори на кшталт `ctrlKey`",
      "Практика з керуванням елементом через стрілки і `WASD`",
    ],
    content: {
      video: {
        title: "Відео до уроку 40",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Навчитися працювати з подіями клавіатури та миші — це відкриває двері до створення ігор, швидких інтерфейсів та зручних інструментів.",
      sections: [
        {
          title: "Події миші",
          codeTitle: "mouse-events.js",
          code: `const box = document.querySelector(".interactive-box");

box.addEventListener("mousemove", (e) => {
    console.log(\`X: \${e.offsetX}, Y: \${e.offsetY}\`);
});

box.addEventListener("mousedown", () => console.log("Кнопка миші натиснута"));
box.addEventListener("mouseup", () => console.log("Кнопка миші відпущена"));

box.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // забороняємо контекстне меню
    console.log("Правий клік! 🖱️");
});`,
        },
        {
          title: "Події клавіатури",
          codeTitle: "keyboard-events.js",
          code: `document.addEventListener("keydown", (e) => {
    console.log(\`Натиснута клавіша: \${e.key}\`);

    if (e.key === "Escape") {
        console.log("Вихід з режиму ⚡");
    }

    if (e.key === "r" && e.ctrlKey) {
        console.log("Ctrl + R — оновлення сторінки");
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === " ") {
        console.log("Пробіл відпущений");
    }
});`,
        },
        {
          title: "Практичний приклад — Керування об’єктом стрілками",
          codeTitle: "move-player.js",
          code: `const player = document.querySelector("#player");
let x = 100, y = 100;

document.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowRight":
        case "d":
            x += 20;
            break;
        case "ArrowLeft":
        case "a":
            x -= 20;
            break;
        case "ArrowUp":
        case "w":
            y -= 20;
            break;
        case "ArrowDown":
        case "s":
            y += 20;
            break;
    }

    player.style.left = \`\${x}px\`;
    player.style.top = \`\${y}px\`;
});`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Створи маленьку гру `Воїн у полі` з квадратним воїном на сторінці.",
          "Додай керування стрілками або клавішами `WASD`.",
          "При натисканні `Пробілу` воїн має атакувати: коротко збільшуватися і змінювати колір.",
          "При натисканні `R` воїн повинен повертатися в центр поля.",
          "Додай виведення координат у кутку екрана і зроби все плавно через `transition`.",
        ],
        note:
          "Після цього уроку ти вже можеш будувати дуже живі механіки: мініігри, гарячі клавіші, кастомні контролери й нестандартні UI-взаємодії.",
      },
    },
  },
  {
    slug: "guess-number-game-with-validation",
    level: "Core",
    duration: "30 min",
    title: "Практика — Інтерактивна гра «Вгадай число» з валідацією",
    description:
      "Сорок перший урок збирає докупи DOM, події, форми та перевірку введення у повноцінну маленьку гру. Це вже не окремий прийом, а цілісна інтерактивна механіка.",
    bullets: [
      "Робота з полями вводу, кнопками і текстовими підказками",
      "Валідація значення від `1` до `100`",
      "Перезапуск гри і підготовка до розширення через `localStorage`",
    ],
    content: {
      video: {
        title: "Відео до уроку 41",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Закріпити роботу з DOM, подіями, формами та валідацією, створивши повноцінну маленьку гру.",
      sections: [
        {
          title: "Фінальний код гри",
          codeTitle: "guess-number-game.js",
          code: `// === Урок 41 — Практика: Гра "Вгадай число" ===

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess");
const submitBtn = document.getElementById("submit");
const messageEl = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const restartBtn = document.getElementById("restart");

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    attemptsEl.textContent = attempts;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageEl.textContent = "❌ Введи число від 1 до 100!";
        messageEl.style.color = "#f87171";
        return;
    }

    if (userGuess === secretNumber) {
        messageEl.innerHTML = \`🎉 <strong>Вітаємо!</strong> Ти вгадав число \${secretNumber} за \${attempts} спроб!\`;
        messageEl.style.color = "#4ade80";
        submitBtn.disabled = true;
        guessInput.disabled = true;
    } 
    else if (userGuess < secretNumber) {
        messageEl.textContent = "🔥 Замало! Спробуй більше.";
        messageEl.style.color = "#fb923c";
    } 
    else {
        messageEl.textContent = "❄️ Забагато! Спробуй менше.";
        messageEl.style.color = "#60a5fa";
    }

    guessInput.value = "";
    guessInput.focus();
}

// Подія на кнопку
submitBtn.addEventListener("click", checkGuess);

// Подія на Enter
guessInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkGuess();
    }
});

// Кнопка "Грати знову"
restartBtn.addEventListener("click", () => {
    location.reload();
});`,
        },
        {
          title: "HTML-структура (приклад)",
          codeTitle: "index.html",
          code: `<div class="game-container">
    <h1>Вгадай число від 1 до 100</h1>
    <input type="number" id="guess" placeholder="Твоє число..." autofocus>
    <button id="submit">Перевірити</button>
    <button id="restart" style="display:none;">Грати знову</button>

    <p id="message"></p>
    <p>Спроб: <span id="attempts">0</span></p>
</div>`,
        },
      ],
      homework: {
        title: "Домашнє завдання",
        tasks: [
          "Додай підказки `дуже холодно / холодно / тепло / гаряче` залежно від різниці між числом користувача і загаданим числом.",
          "Зроби обмеження на `10` спроб, щоб після цього гра завершувалась поразкою.",
          "Після перемоги або поразки показуй кнопку `Грати знову`.",
          "Додай таблицю рекордів і зберігай найкращий результат у `localStorage`.",
          "Оформ гру так, щоб вона виглядала як маленький завершений мініпроєкт, а не просто набір елементів.",
        ],
        note:
          "Це дуже хороша практика перед фінальним проєктом: тут є стан, події, валідація, UX-підказки і логіка гри в одному місці.",
      },
    },
  },
  {
    slug: "final-project-todo-app",
    level: "Core",
    duration: "45 min",
    title: "Фінальний проєкт — Todo App з сучасним дизайном",
    description:
      "Сорок другий урок завершує основний курс повноцінним проєктом. Тут сходяться DOM, події, масиви, об’єкти, localStorage і базовий UX у вигляді сучасного Todo App.",
    bullets: [
      "Форма додавання завдань і динамічний рендер списку",
      "Збереження стану в `localStorage`",
      "Статистика виконання і база для подальших покращень",
    ],
    content: {
      video: {
        title: "Відео до уроку 42",
        url: "https://www.youtube.com/embed/vOt0DweALXc",
      },
      goal:
        "Зібрати всі знання курсу в один повноцінний проєкт — Todo List з гарним дизайном, збереженням даних і статистикою.",
      sections: [
        {
          title: "Фінальний код (повний Todo App)",
          codeTitle: "todo-app.js",
          code: `// === Урок 42 — Фінальний проєкт: Todo App ===

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const stats = document.getElementById('stats');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Збереження в localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Відображення всіх завдань
function renderTasks() {
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const taskEl = document.createElement('div');
        taskEl.className = \`task-item \${task.completed ? 'completed' : ''}\`;
        taskEl.innerHTML = \`
            <input type="checkbox" \${task.completed ? 'checked' : ''}>
            <span>\${task.text}</span>
            <button class="delete-btn">🗑️</button>
        \`;

        // Відмітка виконання
        taskEl.querySelector('input').addEventListener('change', () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
            updateStats();
        });

        // Видалення
        taskEl.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
            updateStats();
        });

        todoList.appendChild(taskEl);
    });
}

// Оновлення статистики
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    stats.textContent = \`\${completed} з \${total} виконано\`;
}

// Додавання нового завдання
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (todoInput.value.trim() === '') return;

    tasks.push({
        text: todoInput.value.trim(),
        completed: false
    });

    saveTasks();
    renderTasks();
    updateStats();
    todoInput.value = '';
});

// Ініціалізація
renderTasks();
updateStats();`,
        },
        {
          title: "Що ми використали в цьому проєкті",
          bullets: [
            "Робота з DOM",
            "Події: `submit`, `change`, `click`",
            "`localStorage` для збереження задач",
            "Масиви та об’єкти для стану застосунку",
            "Динамічне створення елементів",
            "`classList` та стилі для візуального стану",
          ],
        },
      ],
      homework: {
        title: "Фінальне домашнє завдання",
        tasks: [
          "Додай можливість редагування завдання при подвійному кліку.",
          "Реалізуй фільтри: `Усі`, `Активні`, `Виконані`.",
          "Додай кнопку `Очистити виконані`.",
          "Зроби справді гарний дизайн, можна з Tailwind або власним CSS.",
          "Додай анімації при додаванні та видаленні завдань.",
        ],
        note:
          "Вітаю! Ти пройшов увесь основний курс JavaScript для початківців 2026. Цей Todo App — вже нормальна база для портфоліо і для переходу до більш серйозних проєктів.",
      },
    },
  },
];

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
