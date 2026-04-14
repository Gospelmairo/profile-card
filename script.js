// ── Time display ──────────────────────────────────────────────
const timeEl = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeEl.textContent = Date.now();
}

// Update immediately on load, then every 1000ms
updateTime();
setInterval(updateTime, 1000);
