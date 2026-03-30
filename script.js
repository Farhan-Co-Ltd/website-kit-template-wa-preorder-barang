function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.currentTarget.classList.add('active');
}

function copyText(id, btn) {
  const el = document.getElementById(id);
  // Get text, converting placeholder spans back to bracket text
  let text = el.innerText || el.textContent;
  navigator.clipboard.writeText(text).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = `<svg class="copy-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8l4 4 8-8"/></svg> Tersalin!`;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `<svg class="copy-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="5" width="9" height="9" rx="2"/><path d="M3 11V3a2 2 0 012-2h8"/></svg> Salin template`;
    }, 2000);
  });
}