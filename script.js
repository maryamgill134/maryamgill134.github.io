// ------------------------
// Helpers & DOM refs
// ------------------------
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('site-theme');
if(storedTheme === 'dark') document.body.classList.add('dark');
themeToggle && (themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙');

themeToggle && themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  themeToggle.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('site-theme', dark ? 'dark' : 'light');
});

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
navToggle && navToggle.addEventListener('click', () => {
  navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-list a, .hero-ctas a').forEach(a => {
  a.addEventListener('click', e => {
    // leave external links alone
    const href = a.getAttribute('href');
    if(!href || href.startsWith('http') || href.includes('.pdf')) return;
    e.preventDefault();
    const t = document.querySelector(href);
    if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
    if(window.innerWidth < 800 && navList) navList.style.display = 'none';
  });
});

// ------------------------
// Scroll-reveal simple
// ------------------------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if(en.isIntersecting) {
      en.target.classList.add('visible');
      revealObserver.unobserve(en.target);
    }
  });
},{threshold: 0.12});
revealEls.forEach(el=>revealObserver.observe(el));

// ------------------------
// Modal data (projects)
// ------------------------
const projects = {
  smartface: {
    title: "SmartFaceDetectorPro",
    desc: "AI-powered face analysis: predicts face shape, gender, hair type and skin type using ResNet-based models. Includes a front-end demo and Flask/Py backend.",
    img: "images/smartface.jpg",
    repo: "https://github.com/maryamgill134/SmartFaceDetectorPro",
    demo: ""
  },
  grooming: {
    title: "AI Grooming Assistant",
    desc: "Flask-based grooming assistant that analyzes facial features and returns personalized grooming suggestions.",
    img: "images/grooming.jpg",
    repo: "https://github.com/maryamgill134/ai_grooming_assistant",
    demo: ""
  },
  stayease: {
    title: "StayEase (FYP)",
    desc: "Rental property management system connecting landlords and tenants; features listings, booking workflow, and user roles.",
    img: "images/stayease.jpg",
    repo: "https://github.com/maryamgill134/StayEase_FYP",
    demo: ""
  }
};

// Modal elements
const modal = document.getElementById('projModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRepo = document.getElementById('modalRepo');
const modalDemo = document.getElementById('modalDemo');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.proj-card').forEach(card => {
  card.addEventListener('click', () => openProject(card.dataset.proj));
  card.addEventListener('keyup', (e)=>{ if(e.key === 'Enter') openProject(card.dataset.proj); });
});

function openProject(key){
  const p = projects[key];
  if(!p) return;
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalRepo.href = p.repo;
  modalDemo.href = p.demo || '#';
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow = 'hidden';
}

modalClose && modalClose.addEventListener('click', closeModal);
modal && modal.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

// Accessibility: close with Esc
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });
