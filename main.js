(function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("resume-link").href = RESUME_URL;

  // ---------- Render Projects (grouped by category) ----------
  const cardHtml = (p) => `
    <article class="card">
      <div class="card-image">
        <img src="${p.image}" alt="${p.name} screenshot" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${p.name}</h3>
          <span class="card-tag">${p.tag}</span>
        </div>
        <div class="card-links">
          ${p.demo ? `<a class="btn btn-ghost btn-sm" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live site</a>` : ""}
          <a class="btn btn-ghost btn-sm" href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </article>
  `;
  const CATEGORY_GRID_IDS = {
    "Computer Vision": "projects-grid-cv",
    "NLP & LLM": "projects-grid-nlp",
    "Data & MLOps": "projects-grid-data",
  };
  PROJECT_CATEGORIES.forEach((category) => {
    const gridEl = document.getElementById(CATEGORY_GRID_IDS[category]);
    gridEl.innerHTML = PROJECTS.filter((p) => p.category === category).map(cardHtml).join("");
  });

  // ---------- Render Experience ----------
  document.getElementById("experience-timeline").innerHTML = EXPERIENCE.map((e) => `
    <div class="timeline-item">
      <h3>${e.title} &mdash; ${e.org}</h3>
      <p class="timeline-meta">${e.location} &middot; ${e.dates}</p>
      <p class="timeline-summary">${e.summary}</p>
    </div>
  `).join("");

  // ---------- Render Education ----------
  document.getElementById("education-timeline").innerHTML = `
    <div class="timeline-item">
      <h3>${EDUCATION.degree} &mdash; ${EDUCATION.school}</h3>
      <p class="timeline-meta">${EDUCATION.dates}</p>
      <p class="timeline-summary">${EDUCATION.summary}</p>
    </div>
  `;

  // ---------- Render Personal ----------
  document.getElementById("personal-reading").textContent = PERSONAL.reading;
  document.getElementById("personal-playing").textContent = PERSONAL.playing;

  // ---------- Render Certifications & Extracurriculars ----------
  const certCardHtml = (c) => `
    <article class="card">
      <div class="card-image">
        <img src="${c.image}" alt="${c.name} certificate" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-top">
          <h3>${c.name}</h3>
        </div>
        <span class="card-tag">${c.meta}</span>
      </div>
    </article>
  `;
  document.getElementById("courses-grid").innerHTML = COURSES.map(certCardHtml).join("");
  document.getElementById("extracurriculars-grid").innerHTML = EXTRACURRICULARS.map(certCardHtml).join("");
  document.getElementById("extracurriculars-text-row").innerHTML = EXTRACURRICULARS_TEXT
    .map((s) => `<span class="chip">${s}</span>`)
    .join("");

  // ---------- Smooth-scroll nav + active link highlighting ----------
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach((s) => revealObserver.observe(s));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { threshold: 0.5 }
  );
  sections.forEach((s) => navObserver.observe(s));

  // ---------- Single shared animation loop (starfield + planet rail both hook in here) ----------
  function tick(time) {
    if (window.__drawStarfield) window.__drawStarfield(time);
    if (window.__updatePlanets) window.__updatePlanets();
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
