// ─────────────────────────────────────
//  script.js — Gustavo Da Costa Pereira
// ─────────────────────────────────────

// ── Translations ──
// Add more keys here as you build out your portfolio
const translations = {
  fr: {
    splashQuestion: 'Dans quelle <span class="purple">langue</span> veux-tu<br><span class="yellow">continuer</span> ?',
    greeting:       'Bienvenue',
    title:          '<span class="purple">Passionné</span> par ce qui<br>se passe <span class="yellow">sous le capot</span>',
  },
  en: {
    splashQuestion: 'In which <span class="purple">language</span> do you want<br>to <span class="yellow">continue</span>?',
    greeting:       'Welcome',
    title:          '<span class="purple">Passionate</span> about what<br>happens <span class="yellow">under the hood</span>',
  },
  es: {
    splashQuestion: '¿En qué <span class="purple">idioma</span> quieres<br><span class="yellow">continuar</span>?',
    greeting:       'Bienvenido',
    title:          '<span class="purple">Apasionado</span> por lo que<br>pasa <span class="yellow">bajo el capó</span>',
  },
  it: {
    splashQuestion: 'In quale <span class="purple">lingua</span> vuoi<br><span class="yellow">continuare</span>?',
    greeting:       'Benvenuto',
    title:          '<span class="purple">Appassionato</span> di ciò che<br>succede <span class="yellow">sotto il cofano</span>',
  },
  pt: {
    splashQuestion: 'Em qual <span class="purple">língua</span> queres<br><span class="yellow">continuar</span>?',
    greeting:       'Bem-vindo',
    title:          '<span class="purple">Apaixonado</span> pelo que<br>acontece <span class="yellow">sob o capô</span>',
  },
};

// ── DOM references ──
const splash       = document.getElementById('splash');
const site         = document.getElementById('site');
const changeLang   = document.getElementById('changeLang');
const splashQ      = document.getElementById('splashQuestion');
const greeting     = document.getElementById('greeting');
const siteTitle    = document.getElementById('siteTitle');

// ── Apply a language to the page ──
function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  // Update splash question
  splashQ.innerHTML = t.splashQuestion;

  // Update main site content
  greeting.textContent  = t.greeting;
  siteTitle.innerHTML   = t.title;

  // You can add more elements here as you build your portfolio
  // Example: document.getElementById('navProfil').textContent = t.navProfil;
}

// ── Called when user clicks a language button ──
function chooseLang(lang) {
  // Save choice so next visit skips the splash
  localStorage.setItem('lang', lang);

  // Apply translations
  applyLang(lang);

  // Hide splash → show site
  splash.classList.add('hidden');

  setTimeout(() => {
    site.classList.add('visible');
    changeLang.classList.add('show');
  }, 300);
}

// ── Called when user clicks 🌐 Langue ──
function resetLang() {
  localStorage.removeItem('lang');

  site.classList.remove('visible');
  changeLang.classList.remove('show');

  setTimeout(() => {
    splash.classList.remove('hidden');
  }, 200);
}

// ── On page load — skip splash if lang already saved ──
window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');

  if (saved && translations[saved]) {
    chooseLang(saved);
  }
});
