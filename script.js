// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initTheme();
    initNavigation();
    initScrollReveal();
    initProjectsModal();
    initCurrentYear();
    initSmoothScrolling();
});

// Theme Toggle
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const storedTheme = localStorage.getItem('site-theme');
    
    // Set initial theme
    if (storedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('site-theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('site-theme', 'light');
        }
    });
}

// Mobile Navigation
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = hamburger.contains(event.target) || navMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.section, .hero-content, .project-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });
}

// Projects Modal
function initProjectsModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const viewDetailButtons = document.querySelectorAll('.view-details, .project-view-btn');
    
    // Project data
    const projects = {
        smartface: {
            title: "SmartFaceDetectorPro",
            description: "A Flask-based AI application for real-time face, eyes & smile detection with emotion recognition powered by a trained CNN model. Includes snapshot saving, SQLite history logs, CSV report export, and a clean HTML dashboard for live monitoring.",
            tag: "AI · Computer Vision",
            tech: ["Python", "Flask", "TensorFlow", "OpenCV", "SQLite", "HTML/CSS/JS"],
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            repo: "https://github.com/maryamgill134/SmartFaceDetectorPro",
            demo: "#"
        },
        grooming: {
            title: "AI Grooming Assistant",
            description: "Flask web app that analyzes facial features and provides personalized grooming recommendations using deep learning models. The system provides tailored advice based on facial characteristics and user preferences.",
            tag: "Flask · Machine Learning",
            tech: ["Python", "Flask", "Deep Learning", "OpenCV", "HTML/CSS"],
            image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            repo: "https://github.com/maryamgill134/ai_grooming_assistant",
            demo: "#"
        },
        stayease: {
            title: "StayEase (FYP)",
            description: "Smart rental management system that connects landlords and tenants with secure payments, listings, and property verification. Features a complete booking workflow, user role management, and property verification system.",
            tag: "Full-Stack Application",
            tech: ["React Native", "Stripe API", "Firebase", "Python", "Sentiment Analysis"],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            repo: "https://github.com/maryamgill134/StayEase_FYP",
            demo: "#"
        }
    };
    
    // Open modal when project card is clicked
    viewDetailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectKey = this.dataset.project || this.closest('.project-card').dataset.project;
            openProjectModal(projectKey);
        });
    });
    
    // Open project modal
    function openProjectModal(key) {
        const project = projects[key];
        if (!project) return;
        
        // Set modal content
        document.getElementById('modalImg').src = project.image;
        document.getElementById('modalImg').alt = `${project.title} screenshot`;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalTag').textContent = project.tag;
        
        // Set technologies
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';
        project.tech.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techContainer.appendChild(span);
        });
        
        // Set links
        document.getElementById('modalRepo').href = project.repo;
        document.getElementById('modalDemo').href = project.demo;
        document.getElementById('modalDemo').style.display = project.demo === '#' ? 'none' : 'block';
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        modalClose.focus();
    }
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
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
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Set current year in footer
function initCurrentYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if it's an external link or PDF
            if (!href || href.startsWith('http') || href.includes('.pdf')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});