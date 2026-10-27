const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "phases.html", label: "The Cycle" },
  { href: "impacts.html", label: "Athletic Impacts" },
  { href: "coping.html", label: "Coping & Support" },
  { href: "coaches.html", label: "For Coaches" },
  { href: "knowledge-check.html", label: "Test Your Knowledge" },
  { href: "survey.html", label: "Surveys" },
  { href: "about.html", label: "About" },
];

function renderHeader() {
  const current = location.pathname.split("/").pop() || "index.html";
  const links = NAV_LINKS.map(
    (l) =>
      `<a href="${l.href}" class="${l.href === current ? "active" : ""}">${l.label}</a>`
  ).join("");

  document.getElementById("site-header").innerHTML = `
    <a class="brand" href="index.html">The Menstrual Cycle & Sport</a>
    <nav class="site-nav">${links}</nav>
  `;
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
    <p>An awareness &amp; education project on the menstrual cycle and athletic performance.
    Not a substitute for medical advice.</p>
  `;
}

function initTabs(root) {
  const buttons = root.querySelectorAll(".tab-btn");
  const panels = root.querySelectorAll(".tab-panel");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      root.querySelector(`#${btn.dataset.target}`).classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  document.querySelectorAll(".tab-wrapper").forEach(initTabs);
});
