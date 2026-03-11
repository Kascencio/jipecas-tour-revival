document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("js");

  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-menu]");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  var revealTargets = new Set();
  [
    ".section .container",
    ".destination-card",
    ".detail-card",
    ".service-card",
    ".contact-card",
    ".about-block",
    ".transfers-image"
  ].forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (element) {
      revealTargets.add(element);
    });
  });

  revealTargets.forEach(function (element) {
    element.classList.add("reveal");
  });

  [".destinations-grid", ".detail-grid", ".service-list", ".contact-grid"].forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (group) {
      var children = group.querySelectorAll(":scope > article, :scope > a, :scope > img");
      children.forEach(function (child, index) {
        child.style.setProperty("--reveal-delay", String(index * 0.08) + "s");
      });
    });
  });

  if (!("IntersectionObserver" in window)) {
    revealTargets.forEach(function (element) {
      element.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealTargets.forEach(function (element) {
    observer.observe(element);
  });
});
