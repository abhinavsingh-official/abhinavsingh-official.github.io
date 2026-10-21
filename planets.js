// A vertical "solar system" scroll rail on the right edge of the page.
// Sizes are relative to real diameters but compressed (power curve) so
// Pluto stays visible next to Jupiter - "somewhat to scale," not literal,
// or the rail would be unreadable. Driven by the same shared
// requestAnimationFrame loop as the starfield (see main.js) rather than
// its own scroll listener loop.

(function () {
  // About/Contact were dropped as separate sections (the index itself
  // every body maps to exactly one distinct section.
  const BODIES = [
    { name: "Sun", radiusKm: 696000, color: "#ffcf5c", glow: "#ffb703", target: "#home" },
    { name: "Mercury", radiusKm: 2440, color: "#b0a69b", glow: "#8d847a", target: "#contact" },
    { name: "Venus", radiusKm: 6052, color: "#e8c88f", glow: "#d9a441", target: "#about" },
    { name: "Earth", radiusKm: 6371, color: "#5ad8ff", glow: "#3a9bd1", target: "#projects-data" },
    { name: "Mars", radiusKm: 3390, color: "#e2654a", glow: "#b8402a", target: "#projects-cv" },
    { name: "Jupiter", radiusKm: 69911, color: "#d9b38c", glow: "#b7875a", target: "#projects-nlp" },
    { name: "Saturn", radiusKm: 58232, color: "#e8d6a8", glow: "#c9a86a", ring: true, target: "#experience" },
    { name: "Uranus", radiusKm: 25362, color: "#9fe8e0", glow: "#5fc2b8", target: "#education" },
    { name: "Neptune", radiusKm: 24622, color: "#5a7bdc", glow: "#3a53a8", target: "#skills" },
    { name: "Pluto", radiusKm: 1188, color: "#c9b8a8", glow: "#8f7d6c", target: "#certifications" },
  ];

  // Every planet has its own distinct label - no two point at the same
  // place (Projects was split into three real categories, Education was
  // split out of Experience, specifically so every body gets one).
  const SECTION_LABELS = {
    "#home": "Home",
    "#contact": "Contact",
    "#about": "About",
    "#projects-data": "Data & MLOps",
    "#projects-cv": "Computer Vision",
    "#projects-nlp": "NLP & LLM",
    "#experience": "Experience",
    "#education": "Education",
    "#skills": "Skills",
    "#certifications": "Certifications",
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

  BODIES.forEach((body, i) => {
    const size = sizeFor(body);
    const item = document.createElement("a");
    item.className = "planet-item";
    item.href = body.target;
    item.title = body.name;

    // Gentle semi-circle: bulge outward (away from the viewport edge) in
    // the middle of the rail, tapering back in at the top and bottom ends.
    const t = i / (BODIES.length - 1);
    const arc = Math.sin(t * Math.PI) * 26;
    item.style.setProperty("--arc", `${arc}px`);

    const el = document.createElement("span");
    el.className = "planet" + (body.ring ? " planet-ring" : "");
    el.style.setProperty("--size", `${size}px`);
    el.style.setProperty("--color", body.color);
    el.style.setProperty("--glow", body.glow);

    const label = document.createElement("span");
    label.className = "planet-label";
    label.textContent = SECTION_LABELS[body.target] || body.name;

    item.appendChild(label);
    item.appendChild(el);
    rail.appendChild(item);
  });

  document.body.appendChild(rail);
  const planetEls = Array.from(rail.children);

  // Each planet now targets a distinct element (a top-level section or a
  // subheading inside Projects/Certifications), so highlighting is based
  // directly on those same target elements' positions, not a separate
  // "section" concept - whichever target is nearest the top of the
  // viewport is the active one, matching what's actually on screen
  // (including right after clicking a planet to jump somewhere).
  const targetEls = BODIES.map((b) => document.querySelector(b.target));

  function currentTarget() {
    // The element whose top is <= 120 but closest to it (i.e. the largest
    // such top) is the one currently at the top of the viewport - found by
    // best-value rather than array/iteration order, since targetEls isn't
    // guaranteed to be in document order (the three Projects category
    // targets aren't in the same order as the planets that point to them).
    let current = targetEls[0];
    let bestTop = -Infinity;
    targetEls.forEach((el) => {
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      if (top <= 120 && top > bestTop) {
        bestTop = top;
        current = el;
      }
    });
    return current;
  }

  function update() {
    const active = currentTarget();
    planetEls.forEach((el, i) => el.classList.toggle("active", targetEls[i] === active));
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
