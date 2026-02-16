// База данных вопросов (10 штук с разными цветами)
var questionsData = [{
  id: 1,
  color: '#5FB4FF',
  // Голубой
  question: "На школьном празднике ты:",
  options: [{
    key: 'A',
    text: "Организатор (сценарий, логистика)"
  }, {
    key: 'Б',
    text: "Креативщик (концепция, оформление)"
  }, {
    key: 'В',
    text: "Коммуникатор (оптимизация общения)"
  }, {
    key: 'Г',
    text: "Технарь (оборудование)"
  }]
}, {
  id: 2,
  color: '#E88B6E',
  // Оранжевый/Лососевый
  question: "Какой процесс для вас осмысленнее?",
  options: [{
    key: 'A',
    text: "Анализировать данные и прогнозировать"
  }, {
    key: 'Б',
    text: "Наблюдать за природой/организмами"
  }, {
    key: 'В',
    text: "Писать алгоритм/инструкцию"
  }, {
    key: 'Г',
    text: "Создавать образ/историю"
  }]
}, {
  id: 3,
  color: '#9DCD5A',
  // Салатовый
  question: "Что беспокоит больше всего?",
  options: [{
    key: 'A',
    text: "Низкое качество услуг/продуктов"
  }, {
    key: 'Б',
    text: "Грязь, вырубка лесов, вымирание видов"
  }, {
    key: 'В',
    text: "Цифровые угрозы и сырой софт"
  }, {
    key: 'Г',
    text: "Люди не слышат друг друга"
  }]
}, {
  id: 4,
  color: '#B388EB',
  // Фиолетовый
  question: "Ваш идеальный рабочий стол:",
  options: [{
    key: 'A',
    text: "Много мониторов и код"
  }, {
    key: 'Б',
    text: "Скетчбуки, планшет, хаос"
  }, {
    key: 'В',
    text: "Строгий порядок, документы"
  }, {
    key: 'Г',
    text: "Лабораторное оборудование"
  }]
}, {
  id: 5,
  color: '#F4D35E',
  // Желтый
  question: "В игре вы обычно выбираете роль:",
  options: [{
    key: 'A',
    text: "Стратег / Командир"
  }, {
    key: 'Б',
    text: "Целитель / Поддержка"
  }, {
    key: 'В',
    text: "Исследователь мира"
  }, {
    key: 'Г',
    text: "Инженер / Крафтер"
  }]
}, {
  id: 6,
  color: '#FF70A6',
  // Розовый
  question: "Лучший отдых для вас это:",
  options: [{
    key: 'A',
    text: "Чтение научной статьи"
  }, {
    key: 'Б',
    text: "Рисование или музыка"
  }, {
    key: 'В',
    text: "Встреча с друзьями"
  }, {
    key: 'Г',
    text: "Сборка конструктора/пазла"
  }]
}, {
  id: 7,
  color: '#00D2D3',
  // Бирюзовый
  question: "Если бы вы строили дом, вы бы:",
  options: [{
    key: 'A',
    text: "Рассчитали смету и сроки"
  }, {
    key: 'Б',
    text: "Придумали дизайн интерьера"
  }, {
    key: 'В',
    text: "Провели электрику и умный дом"
  }, {
    key: 'Г',
    text: "Высадили сад вокруг"
  }]
}, {
  id: 8,
  color: '#FF9F43',
  // Темно-оранжевый
  question: "Какая суперсила вам ближе?",
  options: [{
    key: 'A',
    text: "Чтение мыслей"
  }, {
    key: 'Б',
    text: "Управление временем"
  }, {
    key: 'В',
    text: "Разговор с животными"
  }, {
    key: 'Г',
    text: "Кибер-взлом реальности"
  }]
}, {
  id: 9,
  color: '#54A0FF',
  // Синий насыщенный
  question: "Что важнее в работе?",
  options: [{
    key: 'A',
    text: "Четкий результат"
  }, {
    key: 'Б',
    text: "Творческая свобода"
  }, {
    key: 'В',
    text: "Польза обществу"
  }, {
    key: 'Г',
    text: "Высокие технологии"
  }]
}, {
  id: 10,
  color: '#2E86DE',
  // Темно-синий
  question: "Финальный выбор профессии:",
  options: [{
    key: 'A',
    text: "IT и разработка"
  }, {
    key: 'Б',
    text: "Дизайн и Арт"
  }, {
    key: 'В',
    text: "Наука и Биотех"
  }, {
    key: 'Г',
    text: "Менеджмент"
  }]
}];

// Состояние
var currentQuestionIndex = 0;
var userAnswers = {}; // Хранение ответов { 0: 'A', 1: 'B' ... }

// DOM Элементы
var quizArea = document.getElementById('quiz-area');
var rubricatorArea = document.getElementById('rubricator');
var root = document.documentElement; // Для смены CSS переменных

// --- Инициализация ---
function init() {
  renderRubricator();
  loadQuestion(0);
}

// --- Рендер Рубрикатора (1-10) ---
function renderRubricator() {
  rubricatorArea.innerHTML = '';
  questionsData.forEach(function (q, index) {
    var item = document.createElement('div');
    item.classList.add('rubric-item');
    item.innerHTML = "\n            ".concat(index + 1, "\n            <span class=\"corner tl\"></span><span class=\"corner tr\"></span>\n            <span class=\"corner bl\"></span><span class=\"corner br\"></span>\n        ");

    // Клик по номеру
    item.addEventListener('click', function () {
      loadQuestion(index);
    });
    rubricatorArea.appendChild(item);
  });
  updateRubricatorActiveState();
}
function updateRubricatorActiveState() {
  var items = rubricatorArea.querySelectorAll('.rubric-item');
  items.forEach(function (item, index) {
    if (index === currentQuestionIndex) {
      item.classList.add('current');
    } else {
      item.classList.remove('current');
    }
  });
}

// --- Загрузка вопроса ---
function loadQuestion(index) {
  currentQuestionIndex = index;
  var data = questionsData[index];

  // 1. Меняем цвет темы (CSS переменная)
  root.style.setProperty('--theme-color', data.color);

  // 2. Обновляем рубрикатор
  updateRubricatorActiveState();

  // 3. Рендерим контент вопроса
  var savedAnswer = userAnswers[index]; // Проверяем, был ли ответ

  quizArea.innerHTML = "\n        <div class=\"ax-title-wrap\">\n            <span class=\"ax-brace\">{</span> \u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442 <span class=\"ax-brace\">}</span>\n        </div>\n        \n        <div class=\"ax-question-text\">\n            ".concat(data.id, ". ").concat(data.question, "\n        </div>\n\n        <div class=\"ax-options-list\">\n            ").concat(data.options.map(function (opt) {
    return "\n                <label class=\"ax-option\">\n                    <input type=\"radio\" name=\"question_".concat(data.id, "\" value=\"").concat(opt.key, "\" \n                        ").concat(savedAnswer === opt.key ? 'checked' : '', " onchange=\"saveAnswer(").concat(index, ", '").concat(opt.key, "')\">\n                    <div class=\"ax-letter-box\">\n                        ").concat(opt.key, "\n                        <span class=\"corner tl\"></span><span class=\"corner tr\"></span>\n                        <span class=\"corner bl\"></span><span class=\"corner br\"></span>\n                    </div>\n                    <span class=\"ax-option-text\">").concat(opt.text, "</span>\n                </label>\n            ");
  }).join(''), "\n        </div>\n\n        <div class=\"ax-nav-btns\">\n            <button class=\"ax-btn ax-btn-prev\" onclick=\"prevQuestion()\" ").concat(index === 0 ? 'disabled' : '', ">\u2190 \u041D\u0430\u0437\u0430\u0434</button>\n            <button class=\"ax-btn ax-btn-next\" onclick=\"nextQuestion()\">\u0414\u0430\u043B\u0435\u0435 \u2192</button>\n        </div>\n    ");
}

// --- Логика переключения ---

window.saveAnswer = function (qIndex, value) {
  userAnswers[qIndex] = value;
};
window.nextQuestion = function () {
  if (currentQuestionIndex < questionsData.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    alert("Тест завершен!");
  }
};
window.prevQuestion = function () {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
};

// Запуск
init();