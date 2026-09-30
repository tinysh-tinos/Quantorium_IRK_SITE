/* ==========================================================
   УЧЕНИКИ — ФИКСИРОВАННЫЕ (не рандомятся)
   ========================================================== */

const STUDENTS = [
  { name: "Иван Иванов",     award: "🏆 Победитель Конференции" },
  { name: "Мария Петрова",   award: "🥇 Призёр Олимпиады" },
  { name: "Алексей Смирнов", award: "💡 Лучший проект года" },
  { name: "Елена Кузнецова", award: "🚀 Прорыв года" },
  { name: "Дмитрий Волков",  award: "⭐ Звезда Квантума" },
  { name: "Ольга Морозова",  award: "🎖 Гран-при конкурса" },
  { name: "Сергей Лебедев",  award: "🧠 Инновация года" },
  { name: "Анна Соколова",   award: "🔥 Открытие года" }
];

/* ==========================================================
   УТИЛИТЫ
   ========================================================== */

const rand = (min, max) => Math.random() * (max - min) + min;
const randInt = (min, max) => Math.floor(rand(min, max + 1));
const pick = (arr) => arr[randInt(0, arr.length - 1)];

const HUE_RANGES = [
  [0, 30], [30, 60], [60, 120], [120, 180],
  [180, 220], [220, 260], [260, 300], [300, 340], [340, 360]
];

/* ==========================================================
   РАНДОМНАЯ ПЛАНЕТА
   ========================================================== */

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

/* ==========================================================
   ПОСТРОЕНИЕ СИСТЕМЫ
   ========================================================== */

function buildSolarSystem() {
  const solar = document.getElementById("solarSystem");
  solar.innerHTML = "";

  // Солнце
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
    // ==== Рандом планеты ====
    const bg = randomPlanetBackground();
    const texture = randomPlanetTexture(bg.colors);
    const size = randInt(16, 46);
    const hasRing = Math.random() < 0.35 && size < 40;
    const hasMoon = Math.random() < 0.5 && size > 18;

    // ==== Орбита ====
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
    orbit.style.transform = `translate(-50%, -50%) rotate(${startAngle}deg)`;

    const line = document.createElement("div");
    line.className = "orbit-line";
    line.style.borderColor = `rgba(160, 190, 240, ${rand(0.08, 0.25).toFixed(2)})`;
    orbit.appendChild(line);

    // ==== Планета ====
    const planet = document.createElement("a");
    planet.href = "#";
    planet.className = "planet";
    planet.dataset.cardId = "card" + i;
    planet.style.animationDuration = duration + "s";
    planet.setAttribute("aria-label", STUDENTS[i].name);

    // Кольцо
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

    // Тело
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

    // Луна
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

    // ==== Карточка — данные ФИКСИРОВАННЫЕ ====
    const card = document.createElement("div");
    card.id = "card" + i;
    card.className = "card";
    card.innerHTML = `
      <div class="card-shine"></div>
        <div class="card-info">
          <div class="card-icon-with-name">
            <span class="card-icon">🪐</span>
            <span class="user-name">${STUDENTS[i].name}</span>
          </div>
          
          <span class="nagrada">${STUDENTS[i].award}</span>
        </div>
        
        <button class="close-btn" onclick="closeCard(event, 'card${i}')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      <div class="pdf">
        <button><a href="#">Грамота</a></button>
      </div>
    `;
    solar.appendChild(card);
  }
}

/* ==========================================================
   ИНТЕРАКТИВ
   ========================================================== */

function openCard(event, cardId) {
  event.preventDefault();
  event.stopPropagation();
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  requestAnimationFrame(() => {
    const t = document.getElementById(cardId);
    if (t) t.classList.add("active");
  });
}

function closeCard(event, cardId) {
  event.stopPropagation();
  const t = document.getElementById(cardId);
  if (t) t.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".card") || e.target.closest(".planet")) return;
  document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
  }
});

/* ==========================================================
   СТАРТ
   ========================================================== */

buildSolarSystem();