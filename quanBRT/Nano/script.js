const STUDENTS = [
  {
    name: "Иван Иванов",
    quants: ['Наноквантум', 'IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "Робот-манипулятор",
        icon: "fa-robot",
        image: "assets/works/robot.png",
        short: "Arduino · 3D-печать",
        description: "Автономный манипулятор с 4 степенями свободы. Собирает кубики по цвету, использует компьютерное зрение на базе OpenCV.",
        usedIn: "Республиканская конференция «Кванториум-2024»",
        quant: "Наноквантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "Умная машина",
        icon: "fa-car",
        image: "assets/works/car.png",
        short: "Raspberry Pi · Python",
        description: "Модель машинки с автопилотом, распознаёт дорожные знаки и объезжает препятствия.",
        usedIn: "Городской хакатон RoboDrive",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "Наноквантум", title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/ivan_nano.pdf", diplomaPreview: "assets/gramota.png" },
      { quant: "IT-Квантум",  title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w2", diploma: "assets/diplomas/ivan_it.pdf",   diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",  title: "🥈 Призёр Олимпиады",       stage: "Городской этап",       rank: "silver", workId: "w2", diploma: "assets/diplomas/ivan_bio.pdf",  diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Мария Петрова",
    quants: ['VR/AR-Квантум', 'IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "VR-экскурсия",
        icon: "fa-vr-cardboard",
        image: "assets/works/vr.png",
        short: "Unity · VR",
        description: "Интерактивная VR-экскурсия по школьному музею с поддержкой контроллеров движения.",
        usedIn: "Фестиваль VR/AR-технологий",
        quant: "VR/AR-Квантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "Сайт-портфолио",
        icon: "fa-code",
        image: "assets/works/site.png",
        short: "HTML · CSS · JS",
        description: "Адаптивный сайт-портфолио ученика с анимациями и тёмной темой.",
        usedIn: "Конкурс веб-проектов «WebStart»",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "VR/AR-Квантум", title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/maria_vr.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "IT-Квантум",    title: "🥈 Призёр Олимпиады",       stage: "Городской этап",       rank: "silver", workId: "w2", diploma: "assets/diplomas/maria_it.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",    title: "💡 Лучший проект года",     stage: "Школьный этап",        rank: "bronze", workId: "w1", diploma: "assets/diplomas/maria_bio.pdf", diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Алексей Смирнов",
    quants: ['Наноквантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "Наноробот",
        icon: "fa-atom",
        image: "assets/works/nano.png",
        short: "Нанотехнологии",
        description: "Модель наноробота для доставки лекарств в организме человека.",
        usedIn: "Республиканская конференция «Будущее науки»",
        quant: "Наноквантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "Наноквантум", title: "💡 Лучший проект года", stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/alex_nano.pdf", diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",  title: "🥉 Открытие года",      stage: "Школьный этап",        rank: "bronze", workId: "w1", diploma: "assets/diplomas/alex_bio.pdf",  diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Елена Кузнецова",
    quants: ['VR/AR-Квантум', 'IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "AR-приложение",
        icon: "fa-vr-cardboard",
        image: "assets/works/ar.png",
        short: "ARCore · Unity",
        description: "AR-приложение для визуализации химических опытов в школьном кабинете.",
        usedIn: "Республиканская конференция «Кванториум-2024»",
        quant: "VR/AR-Квантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "Telegram-бот",
        icon: "fa-code",
        image: "assets/works/bot.png",
        short: "Python · aiogram",
        description: "Бот для расписания и домашних заданий с уведомлениями.",
        usedIn: "Городской хакатон «IT-Прорыв»",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "VR/AR-Квантум", title: "🚀 Прорыв года",            stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/elena_vr.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "IT-Квантум",    title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w2", diploma: "assets/diplomas/elena_it.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",    title: "🥈 Призёр Олимпиады",       stage: "Городской этап",       rank: "silver", workId: "w1", diploma: "assets/diplomas/elena_bio.pdf", diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Дмитрий Волков",
    quants: ['IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "Мобильное приложение",
        icon: "fa-code",
        image: "assets/works/app.png",
        short: "Flutter · Dart",
        description: "Кроссплатформенное приложение для учёта школьных проектов.",
        usedIn: "Республиканская конференция «Кванториум-2024»",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "IT-Квантум", title: "⭐ Звезда Квантума", stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/dmitry_it.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум", title: "🧠 Инновация года",  stage: "Школьный этап",        rank: "bronze", workId: "w1", diploma: "assets/diplomas/dmitry_bio.pdf", diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Ольга Морозова",
    quants: ['Наноквантум', 'VR/AR-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "Умный материал",
        icon: "fa-atom",
        image: "assets/works/material.png",
        short: "Наноматериалы",
        description: "Разработка самоочищающегося покрытия на основе наночастиц.",
        usedIn: "Республиканская конференция «Нано-2024»",
        quant: "Наноквантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "VR-тренажёр",
        icon: "fa-vr-cardboard",
        image: "assets/works/vr2.png",
        short: "Unity · VR",
        description: "VR-тренажёр для отработки навыков первой помощи.",
        usedIn: "Фестиваль VR/AR-технологий",
        quant: "VR/AR-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "Наноквантум",   title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/olga_nano.pdf", diplomaPreview: "assets/gramota.png" },
      { quant: "VR/AR-Квантум", title: "🎖 Гран-при конкурса",      stage: "Республиканский этап", rank: "gold",   workId: "w2", diploma: "assets/diplomas/olga_vr.pdf",   diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",    title: "🥉 Открытие года",          stage: "Школьный этап",        rank: "bronze", workId: "w1", diploma: "assets/diplomas/olga_bio.pdf",  diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Сергей Лебедев",
    quants: ['Наноквантум', 'IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "Наносенсор",
        icon: "fa-atom",
        image: "assets/works/sensor.png",
        short: "Наноквантум",
        description: "Сенсор для определения загрязнения воды на основе нанотрубок.",
        usedIn: "Республиканская конференция «Эко-2024»",
        quant: "Наноквантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "Аналитическая платформа",
        icon: "fa-code",
        image: "assets/works/platform.png",
        short: "Python · React",
        description: "Платформа для сбора и анализа данных с датчиков.",
        usedIn: "Городской хакатон «DataDrive»",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "Наноквантум", title: "🧠 Инновация года",         stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/sergey_nano.pdf", diplomaPreview: "assets/gramota.png" },
      { quant: "IT-Квантум",  title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w2", diploma: "assets/diplomas/sergey_it.pdf",   diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",  title: "🥈 Призёр Олимпиады",       stage: "Городской этап",       rank: "silver", workId: "w1", diploma: "assets/diplomas/sergey_bio.pdf",  diplomaPreview: "assets/gramota.png" }
    ]
  },
  {
    name: "Анна Соколова",
    quants: ['VR/AR-Квантум', 'IT-Квантум'],
    oldQuants: ['Биоквантум'],
    works: [
      {
        id: "w1",
        title: "VR-игра",
        icon: "fa-vr-cardboard",
        image: "assets/works/game.png",
        short: "Unity · VR",
        description: "Образовательная VR-игра по истории древнего мира.",
        usedIn: "Республиканская конференция «Кванториум-2024»",
        quant: "VR/AR-Квантум: Вводный Модуль"
      },
      {
        id: "w2",
        title: "Веб-сервис",
        icon: "fa-code",
        image: "assets/works/service.png",
        short: "Node.js · React",
        description: "Сервис для обмена учебными материалами между учениками.",
        usedIn: "Городской хакатон «IT-Прорыв»",
        quant: "IT-Квантум: Вводный Модуль"
      }
    ],
    awards: [
      { quant: "VR/AR-Квантум", title: "🔥 Открытие года",          stage: "Республиканский этап", rank: "gold",   workId: "w1", diploma: "assets/diplomas/anna_vr.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "IT-Квантум",    title: "🏆 Победитель Конференции", stage: "Республиканский этап", rank: "gold",   workId: "w2", diploma: "assets/diplomas/anna_it.pdf",  diplomaPreview: "assets/gramota.png" },
      { quant: "Биоквантум",    title: "🥉 Лучший проект года",     stage: "Школьный этап",        rank: "bronze", workId: "w1", diploma: "assets/diplomas/anna_bio.pdf", diplomaPreview: "assets/gramota.png" }
    ]
  }
];

const QUANTUM_META = {
  "Наноквантум":   { icon: "fa-atom",         color: "cyan"   },
  "IT-Квантум":    { icon: "fa-cube",         color: "purple" },
  "VR/AR-Квантум": { icon: "fa-vr-cardboard", color: "pink"   },
  "Биоквантум":    { icon: "fa-microscope",   color: "green"  }
};

const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max + 1));
const pick = (arr) => arr[randInt(0, arr.length - 1)];

const header = document.getElementById('header');
if (header) header.style.display = 'block';

const HUE_RANGES = [
  [0, 30], [30, 60], [60, 120], [120, 180],
  [180, 220], [220, 260], [260, 300], [300, 340], [340, 360]
];

function getBaseQuant(quant) {
  if (!quant) return "";
  return quant.split(":")[0].trim();
}

function randomPlanetBackground() {
  const range = pick(HUE_RANGES);
  const hue = randInt(range[0], range[1]);
  const sat = randInt(45, 90);
  const light = randInt(35, 65);

  const hue2 = (hue + randInt(20, 60)) % 360;
  const hue3 = (hue + randInt(-40, -10) + 360) % 360;

  const c1 = `hsl(${hue}, ${sat}%, ${Math.min(light + 30, 95)}%)`;
  const c2 = `hsl(${hue}, ${sat}%, ${light}%)`;
  const c3 = `hsl(${hue2}, ${sat - 10}%, ${Math.max(light - 35, 8)}%)`;
  const c4 = `hsl(${hue3}, ${sat}%, ${Math.max(light - 55, 4)}%)`;

  const px = randInt(25, 45);
  const py = randInt(25, 45);

  return {
    base: `radial-gradient(circle at ${px}% ${py}%, ${c1} 0%, ${c2} 35%, ${c3} 70%, ${c4} 100%)`,
    colors: [c1, c2, c3, c4],
    hue
  };
}

function randomPlanetTexture(colors) {
  const type = pick(["none", "stripes", "spots", "craters", "swirl", "ice"]);
  const [c1, c2, c3, c4] = colors;

  switch (type) {
    case "stripes": {
      const angle = pick([0, 45, 90, 135]);
      const gap = randInt(2, 5);
      return {
        image: `repeating-linear-gradient(${angle}deg,
          transparent 0px, transparent ${gap}px,
          ${c3} ${gap}px, ${c3} ${gap * 2}px)`,
        blend: "overlay"
      };
    }
    case "spots": {
      const count = randInt(3, 6);
      const spots = [];
      for (let i = 0; i < count; i++) {
        spots.push(`radial-gradient(circle ${randInt(8, 22)}% at ${randInt(15, 85)}% ${randInt(15, 85)}%, ${c3} 0%, transparent 70%)`);
      }
      return { image: spots.join(","), blend: "overlay" };
    }
    case "craters": {
      const count = randInt(4, 8);
      const craters = [];
      for (let i = 0; i < count; i++) {
        const r = randInt(5, 14);
        craters.push(`radial-gradient(circle at ${randInt(10, 90)}% ${randInt(10, 90)}%,
          ${c4} 0%, ${c4} ${r}%, ${c2} ${r + 2}%, transparent ${r + 6}%)`);
      }
      return { image: craters.join(","), blend: "normal" };
    }
    case "swirl": {
      return {
        image: `conic-gradient(from ${randInt(0, 360)}deg,
          transparent 0deg, ${c3} 60deg, transparent 120deg,
          ${c4} 200deg, transparent 280deg, ${c3} 360deg)`,
        blend: "overlay"
      };
    }
    case "ice": {
      return {
        image: `radial-gradient(circle at ${randInt(20, 80)}% ${randInt(20, 80)}%,
          rgba(255,255,255,0.6) 0%, transparent 40%)`,
        blend: "screen"
      };
    }
    default:
      return { image: "none", blend: "normal" };
  }
}

function randomRingStyle() {
  const hue = randInt(20, 60);
  return {
    color: `hsla(${hue}, 60%, 70%, 0.7)`,
    colorFade: `hsla(${hue}, 50%, 60%, 0.3)`,
    tilt: randInt(-35, -10)
  };
}

function renderQuantumCard(q, student) {
  const meta = QUANTUM_META[q] || { icon: "fa-atom", color: "blue" };
  const worksOfQuant = student.works.filter(w => getBaseQuant(w.quant) === q);

  const worksHTML = worksOfQuant.length
    ? worksOfQuant.map(w => `
        <div class="quantum-work" data-work-id="${w.id}">
          <i class="fa-solid ${w.icon}"></i>
          <span>${w.title}</span>
        </div>
      `).join("")
    : `<span class="quantum-empty">Нет работ</span>`;

  return `
    <div class="quantum-card" data-color="${meta.color}">
      <div class="quantum-icon"><i class="fa-solid ${meta.icon}"></i></div>
      <span class="quantum-name">${q}</span>
      <div class="quantum-works">
        ${worksHTML}
      </div>
    </div>
  `;
}

function renderWorkItem(work) {
  return `
    <div class="work-item" data-work-id="${work.id}">
      <div class="work-icon"><i class="fa-solid ${work.icon}"></i></div>
      <div class="work-text">
        <span class="work-title">${work.title}</span>
        <span class="work-sub">${work.short}</span>
      </div>
      <i class="fa-solid fa-chevron-right work-arrow"></i>
    </div>
  `;
}

function renderAwardsGrouped(awards) {
  const groups = {};

  awards.forEach(a => {
    const base = getBaseQuant(a.quant);
    if (!groups[base]) groups[base] = [];
    groups[base].push(a);
  });

  return Object.entries(groups).map(([quant, list]) => {
    const meta = QUANTUM_META[quant] || { icon: "fa-atom", color: "blue" };

    const itemsHTML = list.map(a => `
      <div class="award-item ${a.rank}" data-work-id="${a.workId}">
        <div class="award-icon"><i class="fa-solid fa-trophy"></i></div>
        <div class="award-text">
          <span class="award-title">${a.title}</span>
          <span class="award-sub">${a.stage}</span>
        </div>
        <i class="fa-solid fa-chevron-right award-arrow"></i>
      </div>
    `).join("");

    return `
      <div class="award-group" data-color="${meta.color}">
        <div class="award-group-head">
          <div class="award-group-icon">
            <i class="fa-solid ${meta.icon}"></i>
          </div>
          <span class="award-group-title">${quant}</span>
        </div>
        <div class="award-group-body">
          ${itemsHTML}
        </div>
      </div>
    `;
  }).join("");
}

function buildCard(student, index) {
  const card = document.createElement("div");
  card.id = "card" + index;
  card.className = "card";

  const worksHTML     = student.works.map(renderWorkItem).join("");
  const awardsHTML    = renderAwardsGrouped(student.awards);
  const quantsHTML    = student.quants.map(q => renderQuantumCard(q, student)).join("");
  const oldQuantsHTML = student.oldQuants.map(q => renderQuantumCard(q, student)).join("");

  card.innerHTML = `
    <button class="close-btn" type="button" aria-label="Закрыть">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div class="card-header">
      <div class="avatar">
        <i class="fa-solid fa-user-astronaut"></i>
      </div>
      <div class="header-info">
        <span class="user-name">${student.name}</span>
      </div>
    </div>

    <div class="card-layout">
      <nav class="card-nav">
        <button class="nav-btn active" data-tab="awards" type="button">
          <i class="fa-solid fa-trophy"></i>
          <span>Награды</span>
        </button>
        <button class="nav-btn" data-tab="works" type="button">
          <i class="fa-solid fa-flask"></i>
          <span>Работы</span>
        </button>
        <button class="nav-btn" data-tab="quantums" type="button">
          <i class="fa-solid fa-atom"></i>
          <span>Квантумы</span>
        </button>
      </nav>

      <div class="card-body">
        <div class="tab-panel active" data-panel="awards">
          <div class="panel-title">
            <i class="fa-solid fa-trophy"></i>
            <span>Награды по квантумам</span>
          </div>
          ${awardsHTML}
        </div>

        <div class="tab-panel" data-panel="works">
          <div class="panel-title">
            <i class="fa-solid fa-flask"></i>
            <span>Работы</span>
          </div>
          ${worksHTML}
        </div>

        <div class="tab-panel" data-panel="quantums">
          <div class="panel-title">
            <i class="fa-solid fa-atom"></i>
            <span>Квантумы</span>
          </div>

          <div class="quantum-section">
            <span class="quantum-section-title">Текущие</span>
            <div class="quantum-grid">${quantsHTML}</div>
          </div>

          <div class="quantum-section">
            <span class="quantum-section-title">Пройденные</span>
            <div class="quantum-grid">${oldQuantsHTML}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  const navBtns = card.querySelectorAll(".nav-btn");
  const panels  = card.querySelectorAll(".tab-panel");

  navBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = btn.dataset.tab;

      navBtns.forEach(b => b.classList.toggle("active", b === btn));
      panels.forEach(p => p.classList.toggle("active", p.dataset.panel === target));
    });
  });

  card.querySelectorAll(".award-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const workId = el.dataset.workId;
      const award = student.awards.find(a => a.workId === workId && a.title === el.querySelector(".award-title").textContent) || student.awards[0];
      const work  = student.works.find(w => w.id === workId);
      openAwardModal(award, work, student);
    });
  });

  card.querySelectorAll(".work-item").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const workId = el.dataset.workId;
      const work = student.works.find(w => w.id === workId);
      if (work) openWorkModal(work, student);
    });
  });

  card.querySelectorAll(".quantum-work").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const workId = el.dataset.workId;
      const work = student.works.find(w => w.id === workId);
      if (work) openWorkModal(work, student);
    });
  });

  card.querySelector(".close-btn").addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllCards();
  });

  return card;
}

function openAwardModal(award, work, student) {
  const base = getBaseQuant(award.quant);
  const meta = QUANTUM_META[base] || { icon: "fa-atom", color: "blue" };
  const modal = document.getElementById("modalContent");
  const overlay = document.getElementById("modalOverlay");
  if (!modal || !overlay) return;

  modal.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрыть">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div class="modal-header" data-color="${meta.color}">
      <div class="modal-icon"><i class="fa-solid ${meta.icon}"></i></div>
      <div class="modal-head-text">
        <span class="modal-quant">${award.quant}</span>
        <span class="modal-title">${award.title}</span>
        <span class="modal-sub">${award.stage}</span>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-diploma">
        <img src="${award.diplomaPreview}" alt="Грамота">
      </div>

      ${work ? `
        <div class="modal-section">
          <span class="modal-section-title">Работа</span>
          <div class="modal-work-card">
            <div class="modal-work-icon"><i class="fa-solid ${work.icon}"></i></div>
            <div class="modal-work-text">
              <span class="modal-work-title">${work.title}</span>
              <span class="modal-work-sub">${work.short}</span>
            </div>
          </div>
        </div>
      ` : ""}

      <a href="${award.diploma}" class="modal-download" download>
        <i class="fa-solid fa-download"></i>
        Скачать грамоту
      </a>
    </div>
  `;

  overlay.classList.add("active");

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
}

function openWorkModal(work, student) {
  const base = getBaseQuant(work.quant);
  const meta = QUANTUM_META[base] || { icon: "fa-atom", color: "blue" };
  const modal = document.getElementById("modalContent");
  const overlay = document.getElementById("modalOverlay");
  if (!modal || !overlay) return;

  modal.innerHTML = `
    <button class="modal-close" type="button" aria-label="Закрыть">
      <i class="fa-solid fa-xmark"></i>
    </button>

    <div class="modal-header" data-color="${meta.color}">
      <div class="modal-icon"><i class="fa-solid ${work.icon}"></i></div>
      <div class="modal-head-text">
        <span class="modal-quant">${work.quant}</span>
        <span class="modal-title">${work.title}</span>
        <span class="modal-sub">${work.short}</span>
      </div>
    </div>

    <div class="modal-body">
      <div class="modal-work-image">
        <img src="${work.image}" alt="${work.title}">
      </div>

      <div class="modal-section">
        <span class="modal-section-title">Описание</span>
        <p class="modal-text">${work.description}</p>
      </div>

      <div class="modal-section">
        <span class="modal-section-title">Где использовалась</span>
        <p class="modal-text">${work.usedIn}</p>
      </div>
    </div>
  `;

  overlay.classList.add("active");

  modal.querySelector(".modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modalContent");
  if (!overlay || !modal) return;
  overlay.classList.remove("active");
  setTimeout(() => { modal.innerHTML = ""; }, 250);
}

function buildSolarSystem() {
  const solar = document.getElementById("solarSystem");
  if (!solar) {
    console.warn("Не найден #solarSystem — солнечная система не построена");
    return;
  }

  solar.innerHTML = "";
  document.querySelectorAll("body > .card").forEach(c => c.remove());

  const sun = document.createElement("div");
  sun.className = "sun";
  sun.innerHTML = `
    <div class="sun-core"></div>
    <div class="sun-glow"></div>
    <div class="sun-flare"></div>
  `;
  solar.appendChild(sun);

  const planetCount = STUDENTS.length;
  const minOrbit = 150;
  const maxOrbit = 810;

  for (let i = 0; i < planetCount; i++) {
    const bg = randomPlanetBackground();
    const texture = randomPlanetTexture(bg.colors);
    const size = randInt(16, 46);
    const hasRing = Math.random() < 0.35 && size < 40;
    const hasMoon = Math.random() < 0.5 && size > 18;

    const orbitSize = Math.round(
      minOrbit + ((maxOrbit - minOrbit) * i) / (planetCount - 1) + rand(-15, 15)
    );

    const duration = (10 + i * 8 + rand(-2, 4)).toFixed(2);
    const startAngle = randInt(0, 359);

    const orbit = document.createElement("div");
    orbit.className = "orbit";
    orbit.style.width = orbitSize + "px";
    orbit.style.height = orbitSize + "px";
    orbit.style.animationDuration = duration + "s";
    orbit.style.setProperty("--start-angle", startAngle + "deg");

    const line = document.createElement("div");
    line.className = "orbit-line";
    line.style.borderColor = `rgba(160, 190, 240, ${rand(0.08, 0.25).toFixed(2)})`;
    orbit.appendChild(line);

    const planet = document.createElement("a");
    planet.href = "#";
    planet.className = "planet";
    planet.dataset.cardId = "card" + i;
    planet.style.animationDuration = duration + "s";
    planet.setAttribute("aria-label", STUDENTS[i].name);

    if (hasRing) {
      const rs = randomRingStyle();
      const ring = document.createElement("span");
      ring.className = "planet-ring";
      ring.style.width = (size * 2 + randInt(10, 25)) + "px";
      ring.style.height = (size * 0.4) + "px";
      ring.style.borderColor = rs.color;
      ring.style.borderTopColor = "transparent";
      ring.style.borderBottomColor = rs.colorFade;
      ring.style.transform = `rotate(${rs.tilt}deg)`;
      planet.appendChild(ring);
    }

    const body = document.createElement("span");
    body.className = "planet-body";
    body.style.width = size + "px";
    body.style.height = size + "px";
    body.style.background = bg.base;
    if (texture.image !== "none") {
      body.style.backgroundImage = texture.image + ", " + bg.base;
      body.style.backgroundBlendMode = texture.blend;
    }
    body.style.boxShadow = `
      inset -${size / 8}px -${size / 8}px ${size / 4}px rgba(0,0,0,0.7),
      0 0 ${size / 2}px hsla(${bg.hue}, 80%, 60%, 0.5)
    `;
    planet.appendChild(body);

    if (hasMoon) {
      const moon = document.createElement("span");
      moon.className = "moon";
      const ms = randInt(3, 6);
      moon.style.width = ms + "px";
      moon.style.height = ms + "px";
      moon.style.background = `radial-gradient(circle at 35% 30%, #fff 0%, hsl(${bg.hue}, 20%, 70%) 60%, #333 100%)`;
      moon.style.animationDuration = rand(2, 5).toFixed(2) + "s";
      moon.style.setProperty("--moon-distance", (size / 2 + randInt(6, 12)) + "px");
      planet.appendChild(moon);
    }

    planet.addEventListener("click", (e) => openCard(e, "card" + i));

    orbit.appendChild(planet);
    solar.appendChild(orbit);

    const card = buildCard(STUDENTS[i], i);
    document.body.appendChild(card);
  }
}

function openCard(event, cardId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (header) header.style.display = 'none';

  document.querySelectorAll(".card").forEach(c => {
    if (c.id !== cardId) c.classList.remove("active");
  });

  const target = document.getElementById(cardId);
  if (target) {
    target.classList.add("active");

    const navBtns = target.querySelectorAll(".nav-btn");
    const panels  = target.querySelectorAll(".tab-panel");

    navBtns.forEach(b => b.classList.toggle("active", b.dataset.tab === "awards"));
    panels.forEach(p => p.classList.toggle("active", p.dataset.panel === "awards"));
  }

  document.body.classList.add("card-open");
}

function closeAllCards() {
  if (header) header.style.display = 'block';
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  document.body.classList.remove("card-open");
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".card") || e.target.closest(".planet") || e.target.closest(".modal")) return;
  if (e.target.id === "modalOverlay") closeModal();
  closeAllCards();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
    closeAllCards();
  }
});

buildSolarSystem();