export type Lesson = {
  slug: string;
  level: "Start" | "Core" | "Build";
  duration: string;
  title: string;
  description: string;
  bullets: string[];
};

export const lessons: Lesson[] = [
  {
    slug: "variables-and-types",
    level: "Start",
    duration: "12 min",
    title: "Variables and Types",
    description:
      "Основи `let`, `const`, примітивів і того, як JavaScript поводиться з даними.",
    bullets: [
      "Різниця між let, const і старим var",
      "String, number, boolean, null, undefined",
      "Практика з простими виразами",
    ],
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
