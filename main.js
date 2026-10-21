(function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("resume-link").href = RESUME_URL;

  // ---------- Render Projects ----------
  const projectsGrid = document.getElementById("projects-grid");
  projectsGrid.innerHTML = PROJECTS.map((p) => `
    <article class="card">
      <div class="card-top">
        <h3>${p.name}</h3>
        <span class="card-tag">${p.tag}</span>
      </div>
      <p>${p.desc}</p>
      <div class="card-tech">
        ${p.tech.map((t) => `<span class="chip">${t}</span>`).join("")}
      </div>
      <div class="card-links">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo</a>` : ""}
        <a href="${p.repo}" target="_blank" rel="noopener noreferrer">Source</a>
      </div>
    </article>
  `).join("");

  // ---------- Render Experience ----------
  const timeline = document.getElementById("experience-timeline");
  const experienceHtml = EXPERIENCE.map((e) => `
    <div class="timeline-item">
      <h3>${e.title} &mdash; ${e.org}</h3>
      <p class="timeline-meta">${e.location} &middot; ${e.dates}</p>
      <ul>${e.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </div>
  `).join("");
  const educationHtml = `
    <div class="timeline-item">
      <h3>${EDUCATION.degree} &mdash; ${EDUCATION.school}</h3>
      <p class="timeline-meta">${EDUCATION.dates}</p>
      <ul>${EDUCATION.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
    </div>
  `;
  timeline.innerHTML = experienceHtml + educationHtml;

  // ---------- Render Skills ----------
  document.getElementById("skills-row").innerHTML = SKILLS
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

  // ---------- Single shared animation loop (starfield lives here too, see starfield.js) ----------
  function tick(time) {
    if (window.__drawStarfield) window.__drawStarfield(time);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
