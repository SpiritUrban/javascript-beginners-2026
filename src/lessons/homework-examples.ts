export type HomeworkCodeExample = {
  codeTitle: string;
  code: string;
};

export const homeworkCodeExamples: Record<string, HomeworkCodeExample> = {
  "setup-vscode-live-server": {
    codeTitle: "index.html",
    code: `<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>Урок 2</title>
</head>
<body>
    <h1>Мій перший Live Server</h1>
    <p>Сторінка оновлюється автоматично.</p>
</body>
</html>`,
  },
  "syntax-overview-case-comments-semicolons": {
    codeTitle: "script.js",
    code: `// Моє ім'я
// Моє місто
// Я вивчаю JavaScript

/*
    Це багаторядковий коментар.
    Тут можна залишити довше пояснення.
*/

console.log("Ім'я: Олег");
console.log("Місто: Київ");
console.log("Я вивчаю JavaScript");
console.log("Сьогодні треную синтаксис");
console.log("Код знову працює");`,
  },
  "data-types-number-string-boolean-undefined-null": {
    codeTitle: "data-types-homework.js",
    code: `const name = "Олег";
let age = 25;
const isLearning = true;
let currentTask;
const salary = null;

console.log("Ім'я:", name, typeof name);
console.log("Вік:", age, typeof age);
console.log("Навчається:", isLearning, typeof isLearning);
console.log("Завдання:", currentTask, typeof currentTask);
console.log("Зарплата:", salary, typeof salary);

age = "двадцять п'ять";
console.log("Новий вік:", age, typeof age);`,
  },
  "practice-simple-calculators": {
    codeTitle: "bmi-calculator.js",
    code: `const weight = Number(prompt("Вага в кг?"));
const height = Number(prompt("Зріст у метрах?"));

const bmi = weight / (height * height);
let message = "";

if (bmi < 18.5) {
    message = "Маса нижча за норму";
}
else if (bmi < 25) {
    message = "Норма, тримай силу!";
}
else {
    message = "Варто додати руху";
}

alert("BMI: " + bmi.toFixed(1) + ". " + message);
console.log("BMI:", bmi.toFixed(1));
console.log("Висновок:", message);`,
  },
  "debugging-console-breakpoints": {
    codeTitle: "debug-homework.js",
    code: `const price = Number(prompt("Ціна товару?"));
const discount = Number(prompt("Знижка у %?"));

console.log("Ціна:", price);
console.log("Знижка:", discount);

debugger;

const discountAmount = price * discount / 100;
const finalPrice = price - discountAmount;

console.log("Сума знижки:", discountAmount);
console.log("Фінальна ціна:", finalPrice);
alert("До сплати: " + finalPrice.toFixed(2) + " грн");`,
  },
  "switch-case": {
    codeTitle: "code-warrior.js",
    code: `const hours = Number(prompt("Годин JS на тиждень?"));
let group = "";

if (hours <= 5) {
    group = "0-5";
}
else if (hours <= 10) {
    group = "6-10";
}
else if (hours <= 20) {
    group = "11-20";
}
else {
    group = "21+";
}

switch (group) {
    case "0-5":
        alert("Юний учень. Почни з малого.");
        break;
    case "6-10":
        alert("Сильний початок, тримай шлях.");
        break;
    case "11-20":
        alert("Воїн коду набирає силу!");
        break;
    default:
        alert("Легендарний темп навчання!");
}`,
  },
  "ternary-operator": {
    codeTitle: "ternary-homework.js",
    code: `const age = Number(prompt("Скільки тобі років?"));
const hours = Number(prompt("Годин коду на день?"));

const isAdult = age >= 18;
const isHardWorker = hours >= 3;

const message = isAdult && isHardWorker
    ? "Готовий до великих звершень!"
    : hours >= 1
        ? "Маєш силу, але треба більше практики"
        : "Рости сильним, юний дубе!";

alert(message);
console.log("Вік:", age);
console.log("Годин:", hours);
console.log("Результат:", message);`,
  },
  "while-and-do-while": {
    codeTitle: "warrior-training.js",
    code: `const sets = Number(prompt("Скільки підходів зробити?"));
let currentSet = 1;
let totalReps = 0;

while (currentSet <= sets) {
    console.log("Підхід " + currentSet + " — зроблено!");
    totalReps += 10;
    currentSet++;
}

alert("Тренування завершено!");
console.log("Усього повторів:", totalReps);`,
  },
  "for-and-for-of": {
    codeTitle: "code-path.js",
    code: `const days = Number(prompt("Скільки днів вчитися?"));

for (let day = 1; day <= days; day++) {
    console.log("День " + day + " — тренування JS");
}

const topics = ["змінні", "умови", "цикли"];

for (const topic of topics) {
    console.log("Я вже пройшов:", topic);
}

alert("Слава! Пройдено " + days + " днів.");`,
  },
  "loop-games-practice": {
    codeTitle: "guess-loop-game.js",
    code: `const secret = 27;
let guess = 0;

while (guess !== secret) {
    guess = Number(prompt("Вгадай число від 1 до 50"));

    if (guess < secret) {
        alert("Холодно. Бери вище!");
    }
    else if (guess > secret) {
        alert("Гаряче. Бери нижче!");
    }
    else {
        alert("Перемога! Ти вгадав число.");
    }
}`,
  },
  "function-declaration": {
    codeTitle: "functions-homework.js",
    code: `function sayMotivation() {
    console.log("Тримай шлях і тренуйся щодня!");
}

function calculateSum(a, b) {
    return a + b;
}

function getPowerLevel(age, hours) {
    if (age >= 18 && hours >= 3) {
        return "legend";
    }
    if (hours >= 1) {
        return "warrior";
    }
    return "beginner";
}

function wishGoodLuck(name) {
    console.log(name + ", хай код буде чистим!");
}

sayMotivation();
console.log(calculateSum(10, 15));
console.log(getPowerLevel(20, 3));
wishGoodLuck("Олег");`,
  },
  "function-expression-and-arrow-functions": {
    codeTitle: "arrow-functions-homework.js",
    code: `const sayMotivation = () => {
    console.log("Тренуй JS щодня.");
};

const calculateSum = (a, b) => a + b;

const getPowerLevel = (age, hours) => {
    if (age >= 18 && hours >= 3) {
        return "legend";
    }
    return "warrior";
};

const wishGoodLuck = name => {
    console.log(name + ", успіхів у коді!");
};

sayMotivation();
console.log(calculateSum(4, 8));
console.log(getPowerLevel(19, 2));
wishGoodLuck("Марія");`,
  },
  "scope-and-closure": {
    codeTitle: "closure-training.js",
    code: `function createTrainingPlan(warriorName) {
    let progress = 0;

    return function train() {
        progress += 10;

        if (progress >= 100) {
            console.log(warriorName + " став Легендою Роду!");
            return;
        }

        console.log(warriorName + ": прогрес " + progress + "%");
    };
}

const trainOleg = createTrainingPlan("Олег");

for (let i = 1; i <= 10; i++) {
    trainOleg();
}`,
  },
  "function-practice": {
    codeTitle: "warrior-journey.js",
    code: `function startWarriorJourney(name, age, hoursPerDay = 1) {
    const totalPower = age * hoursPerDay;

    let level = "junior";
    if (totalPower >= 150) {
        level = "legend";
    }
    else if (totalPower >= 80) {
        level = "senior";
    }
    else if (totalPower >= 40) {
        level = "middle";
    }

    return {
        name,
        totalPower,
        level,
        message: "Тримай темп, " + name,
        daysRecommended: 30
    };
}

console.log(startWarriorJourney("Олег", 20, 3));`,
  },
  "arrays-basics": {
    codeTitle: "skills-array.js",
    code: `const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "DOM",
    "Git",
    "React"
];

console.log("Кількість:", mySkills.length);
console.log("Перша:", mySkills[0]);
console.log("Остання:", mySkills[mySkills.length - 1]);

mySkills[2] = "JS основи";
mySkills[mySkills.length] = "TypeScript";

for (let i = 0; i < mySkills.length; i++) {
    console.log("Навичка " + (i + 1) + ": " + mySkills[i]);
}`,
  },
  "array-methods-basics": {
    codeTitle: "training-group.js",
    code: `const trainingGroup = [
    "Олег",
    "Марія",
    "Іван",
    "Анна",
    "Данило",
    "Софія"
];

trainingGroup.push("Назар", "Олена");
trainingGroup.unshift("Віталій");
trainingGroup.splice(1, 1);

const firstThree = trainingGroup.slice(0, 3);

function addWarrior(group, name) {
    group.push(name);
    console.log("Воїн " + name + " приєднався!");
}

addWarrior(trainingGroup, "Леся");
console.log(trainingGroup, trainingGroup.length);
console.log(firstThree);`,
  },
  "objects-properties-and-methods": {
    codeTitle: "warrior-object.js",
    code: `const warrior = {
    name: "Олег",
    age: 20,
    level: 1,
    currentPower: 50,
    study(hours) {
        this.currentPower += hours * 10;
    },
    rest(days) {
        this.currentPower -= days * 2;
    },
    levelUp() {
        if (this.currentPower >= 100) {
            this.level++;
            this.currentPower = 0;
        }
    },
    getFullInfo() {
        return this.name + ", рівень " + this.level;
    }
};

warrior.study(6);
warrior.levelUp();
console.log(warrior.getFullInfo());`,
  },
  "todo-list-practice": {
    codeTitle: "todo-object.js",
    code: `const studyList = {
    tasks: [],
    nextId: 1,
    addTask(text) {
        this.tasks.push({
            id: this.nextId,
            text,
            done: false
        });
        this.nextId++;
    },
    editTask(id, newText) {
        const task = this.tasks.find(item => item.id === id);
        task.text = newText;
    },
    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.done);
    },
    showTasks() {
        console.table(this.tasks);
    }
};

studyList.addTask("Вивчити масиви");
studyList.addTask("Повторити об'єкти");
studyList.editTask(1, "Вивчити методи масивів");
studyList.showTasks();`,
  },
  "intro-to-dom": {
    codeTitle: "dom-homework.js",
    code: `const title = document.querySelector("h1");
const text = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    title.textContent = "Тема змінена!";
    text.textContent = "DOM дозволяє керувати сторінкою.";
    document.body.style.backgroundColor = "#102030";

    const message = document.createElement("p");
    message.textContent = "Продовжуй тренування JS.";
    document.body.append(message);
});`,
  },
  "changing-text-styles-and-attributes": {
    codeTitle: "styles-homework.js",
    code: `const title = document.querySelector("h1");
const themeBtn = document.querySelector("#theme");
const powerBtn = document.querySelector("#power");
const resetBtn = document.querySelector("#reset");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

powerBtn.addEventListener("click", function () {
    title.textContent = "Сила зростає!";
    title.style.fontSize = "48px";
});

resetBtn.addEventListener("click", function () {
    title.textContent = "Тренування DOM";
    title.style.fontSize = "32px";
    document.body.classList.remove("dark-theme");
});`,
  },
  "creating-and-removing-elements": {
    codeTitle: "create-remove-todo.js",
    code: `const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addTask");
const list = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text === "") return;

    const item = document.createElement("li");
    const removeBtn = document.createElement("button");

    item.textContent = text;
    removeBtn.textContent = "Видалити";

    item.addEventListener("click", function () {
        item.classList.toggle("completed");
    });

    removeBtn.addEventListener("click", function () {
        item.remove();
    });

    item.append(removeBtn);
    list.append(item);
    input.value = "";
});`,
  },
  "working-with-classes-classlist": {
    codeTitle: "classlist-card.js",
    code: `const card = document.querySelector(".warrior-card");
const levelBtn = document.querySelector("#levelUp");
const themeBtn = document.querySelector("#theme");
const powerBtn = document.querySelector("#power");

levelBtn.addEventListener("click", function () {
    card.classList.add("level-up");
});

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
});

powerBtn.addEventListener("click", function () {
    card.classList.toggle("power-active");
});

card.addEventListener("click", function () {
    card.classList.toggle("selected");
});`,
  },
  "interactive-elements-practice": {
    codeTitle: "interactive-practice.js",
    code: `const counter = document.querySelector("#counter");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const colorBtn = document.querySelector("#color");

let count = 0;
const colors = ["#0f172a", "#14532d", "#7c2d12"];
let colorIndex = 0;

function renderCounter() {
    counter.textContent = count;
}

plusBtn.addEventListener("click", function () {
    count++;
    renderCounter();
});

minusBtn.addEventListener("click", function () {
    count--;
    renderCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    renderCounter();
});

colorBtn.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];
});`,
  },
  "event-handling-add-event-listener": {
    codeTitle: "events-homework.js",
    code: `const button = document.querySelector("#changeBtn");
const zone = document.querySelector("#eventZone");
const input = document.querySelector("#noteInput");
const list = document.querySelector("#notes");
const clearBtn = document.querySelector("#clear");

button.addEventListener("click", function () {
    button.textContent = "Натиснуто!";
    button.style.backgroundColor = "teal";
});

zone.addEventListener("mouseenter", function () {
    zone.classList.add("hovered");
});

zone.addEventListener("mouseleave", function () {
    zone.classList.remove("hovered");
});

input.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;
    const item = document.createElement("li");
    item.textContent = input.value;
    list.append(item);
    input.value = "";
});

clearBtn.addEventListener("click", function () {
    list.innerHTML = "";
});`,
  },
  "click-input-and-form-events": {
    codeTitle: "form-events.js",
    code: `const form = document.querySelector("#joinForm");
const warriors = document.querySelector("#warriors");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements.name.value;
    const age = Number(form.elements.age.value);
    const level = form.elements.level.value;

    if (age < 16 || age > 60) {
        alert("Вік має бути від 16 до 60");
        return;
    }

    console.log(name, age, level);
    alert(name + " приєднався до клану!");

    const item = document.createElement("li");
    item.textContent = name + " — " + level;
    warriors.append(item);

    form.reset();
});`,
  },
  "keyboard-and-mouse-events": {
    codeTitle: "keyboard-game.js",
    code: `const warrior = document.querySelector("#warrior");
const coords = document.querySelector("#coords");

let x = 150;
let y = 150;

function render() {
    warrior.style.transform = "translate(" + x + "px, " + y + "px)";
    coords.textContent = "x: " + x + ", y: " + y;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") y -= 10;
    if (event.key === "ArrowDown") y += 10;
    if (event.key === "ArrowLeft") x -= 10;
    if (event.key === "ArrowRight") x += 10;

    if (event.code === "Space") {
        warrior.classList.add("attack");
        setTimeout(function () {
            warrior.classList.remove("attack");
        }, 200);
    }

    if (event.key === "r") {
        x = 150;
        y = 150;
    }

    render();
});

render();`,
  },
  "guess-number-game-with-validation": {
    codeTitle: "guess-game-advanced.js",
    code: `const input = document.querySelector("#guess");
const button = document.querySelector("#check");
const message = document.querySelector("#message");

let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let best = localStorage.getItem("bestScore");

button.addEventListener("click", function () {
    const guess = Number(input.value);
    attempts++;

    if (attempts > 10) {
        message.textContent = "Поразка. Число було " + secret;
        return;
    }

    const diff = Math.abs(secret - guess);

    if (guess === secret) {
        message.textContent = "Перемога за " + attempts + " спроб!";
        if (!best || attempts < Number(best)) {
            localStorage.setItem("bestScore", attempts);
        }
    }
    else if (diff <= 5) {
        message.textContent = "Гаряче";
    }
    else if (diff <= 15) {
        message.textContent = "Тепло";
    }
    else {
        message.textContent = "Холодно";
    }
});`,
  },
  "final-project-todo-app": {
    codeTitle: "todo-final-extra.js",
    code: `let tasks = [];
let filter = "all";

function addTask(text) {
    tasks.push({
        id: Date.now(),
        text,
        done: false
    });
    renderTasks();
}

function editTask(id, newText) {
    const task = tasks.find(item => item.id === id);
    task.text = newText;
    renderTasks();
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.done);
    renderTasks();
}

function getVisibleTasks() {
    if (filter === "active") {
        return tasks.filter(task => !task.done);
    }
    if (filter === "done") {
        return tasks.filter(task => task.done);
    }
    return tasks;
}

function renderTasks() {
    console.table(getVisibleTasks());
}

addTask("Завершити фінальний проєкт");
addTask("Додати фільтри");`,
  },
};
