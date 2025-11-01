// ------------------------
// DOM Ready
// ------------------------
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize theme
  initTheme();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize scroll reveal
  initScrollReveal();
  
  // Initialize projects modal
  initProjectsModal();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
});

// ------------------------
// Theme Toggle
// ------------------------
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('site-theme');
  
  // Set initial theme
  if (storedTheme === 'dark') {
    document.body.classList.add('dark');
  }
  
  // Update toggle button
  if (themeToggle) {
    themeToggle.innerHTML = document.body.classList.contains('dark') 
      ? '<span class="theme-icon">☀️</span>' 
      : '<span class="theme-icon">🌙</span>';
    
    themeToggle.addEventListener('click', toggleTheme);
  }
}

function toggleTheme() {
  const themeToggle = document.getElementById('themeToggle');
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  themeToggle.innerHTML = isDark 
    ? '<span class="theme-icon">☀️</span>' 
    : '<span class="theme-icon">🌙</span>';
  
  localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
}

// ------------------------
// Navigation
// ------------------------
function initNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close mobile nav when clicking on a link
    document.querySelectorAll('.nav-list a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navToggle.contains(event.target) || navList.contains(event.target);
      if (!isClickInsideNav && navList.classList.contains('active')) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
}

// ------------------------
// Smooth Scrolling
// ------------------------
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if it's an external link or PDF
      if (!href || href.startsWith('http') || href.includes('.pdf')) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ------------------------
// Scroll Reveal Animation
// ------------------------
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  revealEls.forEach(el => revealObserver.observe(el));
}

// ------------------------
// Projects Modal
// ------------------------
function initProjectsModal() {
  const modal = document.getElementById('projModal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalTag = document.getElementById('modalTag');
  const modalTech = document.getElementById('modalTech');
  const modalRepo = document.getElementById('modalRepo');
  const modalDemo = document.getElementById('modalDemo');
  const modalClose = document.querySelector('.modal-close');
  
  // Project data
  const projects = {
    smartface: {
      title: "SmartFaceDetectorPro",
      desc: "A Flask-based AI application for real-time face, eyes & smile detection with emotion recognition powered by a trained CNN model. Includes snapshot saving, SQLite history logs, CSV report export, and a clean HTML dashboard for live monitoring.",
      tag: "AI · Computer Vision",
      tech: ["Python", "Flask", "TensorFlow", "OpenCV", "SQLite", "HTML/CSS/JS"],
      img: "images/smartface.jpg",
      repo: "https://github.com/maryamgill134/SmartFaceDetectorPro",
      demo: "#"
    },
    grooming: {
      title: "AI Grooming Assistant",
      desc: "Flask web app that analyzes facial features and gives personalized grooming recommendations using deep learning models. The system provides tailored advice based on facial characteristics and user preferences.",
      tag: "Flask · Machine Learning",
      tech: ["Python", "Flask", "Deep Learning", "OpenCV", "HTML/CSS"],
      img: "images/grooming.jpg",
      repo: "https://github.com/maryamgill134/ai_grooming_assistant",
      demo: "#"
    },
    stayease: {
      title: "StayEase (FYP)",
      desc: "Smart rental management system that connects landlords and tenants with secure payments, listings, and property verification. Features a complete booking workflow, user role management, and property verification system.",
      tag: "Full-Stack Application",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe API"],
      img: "images/stayease.jpg",
      repo: "https://github.com/maryamgill134/StayEase_FYP",
      demo: "#"
    }
  };
  
  // Open modal when project card is clicked
  document.querySelectorAll('.proj-card, .view-details').forEach(element => {
    element.addEventListener('click', function() {
      const projectKey = this.dataset.proj || this.closest('.proj-card').dataset.proj;
      openProjectModal(projectKey);
    });
  });
  
  // Open project modal function
  function openProjectModal(key) {
    const project = projects[key];
    if (!project) return;
    
    // Set modal content
    modalImg.src = project.img;
    modalImg.alt = `${project.title} screenshot`;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalTag.textContent = project.tag;
    
    // Set technologies
    modalTech.innerHTML = '';
    project.tech.forEach(tech => {
      const span = document.createElement('span');
      span.textContent = tech;
      modalTech.appendChild(span);
    });
    
    // Set links
    modalRepo.href = project.repo;
    modalDemo.href = project.demo;
    modalDemo.style.display = project.demo === '#' ? 'none' : 'inline-flex';
    
    // Show modal
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management for accessibility
    modalClose.focus();
  }
  
  // Close modal
  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  // Close modal events
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
  }
  
  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });
}

// ------------------------
// Additional Enhancements
// ------------------------

// Add loading animation
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});

// Add scroll progress indicator (optional)
function addScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', function() {
    const winHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset;
    const trackLength = docHeight - winHeight;
    const progress = Math.floor(scrollTop / trackLength * 100);
    
    progressBar.style.width = progress + '%';
  });
}

// Uncomment to enable scroll progress bar
// addScrollProgress();