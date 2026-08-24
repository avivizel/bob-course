(function () {
  const fill = document.querySelector(".progress-fill");
  const chapter = document.body.dataset.chapter;
  const total = 33;

  if (fill && chapter) {
    const n = parseInt(chapter, 10);
    fill.style.width = Math.round((n / total) * 100) + "%";
  } else if (fill) {
    fill.style.width = "0%";
  }

  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    const active = sidebar.querySelector(".nav-link.active");
    if (active) active.scrollIntoView({ block: "nearest", behavior: "instant" });
  }

  const popups = [];
  let hideTimer = null;

  function placePopup(trigger, popup) {
    popup.hidden = false;
    const rect = trigger.getBoundingClientRect();
    const width = popup.offsetWidth;
    const height = popup.offsetHeight;
    const gap = 8;
    let top = rect.bottom + gap;
    if (top + height > window.innerHeight - 12) {
      top = Math.max(12, rect.top - height - gap);
    }
    let left = rect.right - width;
    if (left < 12) left = 12;
    if (left + width > window.innerWidth - 12) {
      left = window.innerWidth - width - 12;
    }
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
  }

  function hideAll(except) {
    popups.forEach(({ trigger, popup }) => {
      if (popup === except) return;
      popup.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    });
  }

  function show(item) {
    clearTimeout(hideTimer);
    hideAll(item.popup);
    placePopup(item.trigger, item.popup);
    item.trigger.setAttribute("aria-expanded", "true");
  }

  function hideSoon(item) {
    hideTimer = setTimeout(() => {
      item.popup.hidden = true;
      item.trigger.setAttribute("aria-expanded", "false");
    }, 180);
  }

  document.querySelectorAll(".concept-card").forEach((card) => {
    const trigger = card.querySelector(".concept-term");
    const popup = card.querySelector(".concept-popup");
    if (!trigger || !popup) return;
    document.body.appendChild(popup);
    const item = { trigger, popup };
    popups.push(item);

    trigger.addEventListener("mouseenter", () => show(item));
    trigger.addEventListener("mouseleave", () => hideSoon(item));
    popup.addEventListener("mouseenter", () => {
      clearTimeout(hideTimer);
    });
    popup.addEventListener("mouseleave", () => hideSoon(item));
    trigger.addEventListener("focus", () => show(item));
    trigger.addEventListener("blur", () => hideSoon(item));
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      if (popup.hidden) show(item);
      else {
        popup.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  });

  window.addEventListener("scroll", () => hideAll(), { passive: true });
  window.addEventListener("resize", () => hideAll());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") hideAll();
  });
})();
