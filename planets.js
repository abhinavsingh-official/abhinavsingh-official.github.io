// A vertical "solar system" scroll rail on the right edge of the page.
// Each planet (plus the Sun) owns an even 1/9th slice of total scroll
// progress - not tied to exact section boundaries - so it highlights
// smoothly regardless of how long any one section is. Sizes are relative
// to real diameters but compressed (power curve) so Mercury stays visible
// next to Jupiter - "somewhat to scale," not literal, or the rail would be
// unreadable. Driven by the same shared requestAnimationFrame loop as the
// starfield (see main.js) rather than its own scroll listener loop.

(function () {
  const BODIES = [
    { name: "Sun", radiusKm: 696000, color: "#ffcf5c", glow: "#ffb703", target: "#home" },
    { name: "Mercury", radiusKm: 2440, color: "#b0a69b", glow: "#8d847a", target: "#about" },
    { name: "Venus", radiusKm: 6052, color: "#e8c88f", glow: "#d9a441", target: "#about" },
    { name: "Earth", radiusKm: 6371, color: "#5ad8ff", glow: "#3a9bd1", target: "#projects" },
    { name: "Mars", radiusKm: 3390, color: "#e2654a", glow: "#b8402a", target: "#projects" },
    { name: "Jupiter", radiusKm: 69911, color: "#d9b38c", glow: "#b7875a", target: "#projects" },
    { name: "Saturn", radiusKm: 58232, color: "#e8d6a8", glow: "#c9a86a", ring: true, target: "#experience" },
    { name: "Uranus", radiusKm: 25362, color: "#9fe8e0", glow: "#5fc2b8", target: "#skills" },
    { name: "Neptune", radiusKm: 24622, color: "#5a7bdc", glow: "#3a53a8", target: "#contact" },
  ];

  const SECTION_LABELS = {
    "#home": "Home",
    "#about": "About",
    "#projects": "Projects",
    "#experience": "Experience",
    "#skills": "Skills",
    "#contact": "Contact",
  };

  const MAX_R = Math.max(...BODIES.map((b) => b.radiusKm));
  const MIN_SIZE = 10;
  const MAX_SIZE = 34;
  const SUN_SIZE = 44;

  function sizeFor(body) {
    if (body.name === "Sun") return SUN_SIZE;
    const t = Math.pow(body.radiusKm / MAX_R, 0.38);
    return MIN_SIZE + t * (MAX_SIZE - MIN_SIZE);
  }

  const rail = document.createElement("nav");
  rail.className = "planet-rail";
  rail.setAttribute("aria-label", "Solar system section navigation");

  BODIES.forEach((body) => {
    const size = sizeFor(body);
    const item = document.createElement("a");
    item.className = "planet-item";
    item.href = body.target;
    item.title = body.name;

    const el = document.createElement("span");
    el.className = "planet" + (body.ring ? " planet-ring" : "");
    el.style.setProperty("--size", `${size}px`);
    el.style.setProperty("--color", body.color);
    el.style.setProperty("--glow", body.glow);

    const label = document.createElement("span");
    label.className = "planet-label";
    label.textContent = SECTION_LABELS[body.target] || body.name;

    item.appendChild(el);
    item.appendChild(label);
    rail.appendChild(item);
  });

  document.body.appendChild(rail);
  const planetEls = Array.from(rail.children);
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  // Highlights whichever planet(s) target the section currently nearest the
  // top of the viewport, so a planet's glow always matches what's actually
  // on screen - including right after clicking a planet to jump somewhere,
  // not just during organic scrolling.
  function currentSectionId() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 120) current = section;
    }
    return current ? current.id : null;
  }

  function update() {
    const activeId = currentSectionId();
    planetEls.forEach((el) => {
      const target = el.getAttribute("href").slice(1);
      el.classList.toggle("active", target === activeId);
    });
  }

  window.addEventListener("scroll", () => {
    window.__planetsNeedUpdate = true;
  });
  window.addEventListener("resize", () => {
    window.__planetsNeedUpdate = true;
  });

  // Exposed so main.js's single shared rAF loop can drive this too.
  window.__updatePlanets = function () {
    if (window.__planetsNeedUpdate !== false) {
      update();
      window.__planetsNeedUpdate = false;
    }
  };
  update();
})();
