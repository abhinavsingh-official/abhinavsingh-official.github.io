// Canvas starfield: twinkling parallax stars + an occasional shooting star.
// Runs on the same requestAnimationFrame loop as main.js's scroll-reveal
// check (see main.js) rather than its own separate loop, to avoid the
// scroll jank that comes from multiple independent rAF loops competing.

(function () {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");

  let width, height, stars, shootingStar;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    const count = Math.floor((width * height) / 3000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.4 + 0.2,
      baseAlpha: Math.random() * 0.6 + 0.3,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
    }));
  }

  function maybeSpawnShootingStar() {
    if (shootingStar || Math.random() > 0.003) return;
    const startX = Math.random() * width * 0.6;
    shootingStar = {
      x: startX,
      y: Math.random() * height * 0.4,
      vx: 7 + Math.random() * 4,
      vy: 3 + Math.random() * 2,
      life: 1,
    };
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    for (const star of stars) {
      const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
      const alpha = Math.max(0, Math.min(1, star.baseAlpha + twinkle));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 225, 255, ${alpha})`;
      ctx.fill();
    }

    maybeSpawnShootingStar();
    if (shootingStar) {
      const s = shootingStar;
      ctx.beginPath();
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * 6, s.y - s.vy * 6);
      grad.addColorStop(0, `rgba(255,255,255,${s.life})`);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * 6, s.y - s.vy * 6);
      ctx.stroke();

      s.x += s.vx;
      s.y += s.vy;
      s.life -= 0.012;
      if (s.life <= 0 || s.x > width || s.y > height) shootingStar = null;
    }
  }

  window.addEventListener("resize", resize);
  resize();

  // Exposed so main.js can drive this from its single shared rAF loop.
  window.__drawStarfield = draw;
})();
