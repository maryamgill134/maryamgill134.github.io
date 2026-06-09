/* CSS Variables */
:root {
    --primary: #283f22;
    --primary-dark: #1f331b;
    --secondary: #3f5a38;
    --accent: linear-gradient(135deg, var(--primary), var(--secondary));
    --bg: #f5f2d6;
    --bg-card: #ffffff;
    --text: #25331f;
    --text-light: #4c5f48;
    --text-muted: #6b7b65;
    --border: #d1cdb4;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --radius: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --transition: all 0.3s ease;
    --container-width: 1200px;
    --header-height: 70px;
}

/* Dark Theme */
body.dark {
    --bg: #0f172a;
    --bg-card: #1e293b;
    --text: #f1f5f9;
    --text-light: #cbd5e1;
    --text-muted: #64748b;
    --border: #334155;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
}

/* Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
    transition: var(--transition);
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 20px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5em;
}

h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
}

h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
}

h3 {
    font-size: 1.5rem;
}

p {
    margin-bottom: 1rem;
    color: var(--text-light);
}

a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition);
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: var(--radius);
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: var(--transition);
    text-decoration: none;
    font-size: 0.95rem;
}

.btn-primary {
    background: var(--accent);
    color: white;
    box-shadow: var(--shadow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: var(--bg-card);
    color: var(--text);
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
}

.btn-outline {
    background: transparent;
    color: var(--text-light);
    border: 1px solid var(--border);
}

.btn-outline:hover {
    color: var(--primary);
    border-color: var(--primary);
    transform: translateY(-2px);
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(245, 242, 214, 0.97);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(63, 90, 46, 0.12);
    z-index: 1000;
    transition: var(--transition);
}

body.dark .header {
    background: rgba(15, 23, 42, 0.9);
}

.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height);
}

.nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo {
    width: 55px;
    height: 55px;
    border-radius: 8px;
    background: transparent;
    display: grid;
    place-items: center;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(40, 63, 34, 0.15);
}

.logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.nav-brand .name {
    font-weight: 700;
    font-size: 1.1rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 24px;
}

.nav-link {
    color: var(--text-light);
    font-weight: 500;
    padding: 8px 0;
    position: relative;
}

.nav-link:hover {
    color: var(--primary);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: var(--transition);
}

.nav-link:hover::after {
    width: 100%;
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}

.theme-toggle {
    background: transparent;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    color: var(--text);
    transition: var(--transition);
}

.theme-toggle:hover {
    background: var(--border);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.hamburger span {
    width: 24px;
    height: 2px;
    background: var(--text);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    padding: 120px 0 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.1), rgba(63, 90, 46, 0.1));
    filter: blur(80px);
    z-index: -1;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 60px;
    align-items: center;
}

.hero-text {
    max-width: 600px;
}

.badge {
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    background: rgba(40, 63, 34, 0.12);
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 24px;
}

.badge::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary);
    margin-right: 8px;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
    }
    
    70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(22, 163, 74, 0);
    }
    
    100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
    }
}

.gradient-text {
    background: var(--accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.hero-description {
    font-size: 1.125rem;
    margin: 24px 0 32px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 60px;
}

.hero-stats {
    display: flex;
    gap: 32px;
}

.stat {
    display: flex;
    flex-direction: column;
}

.stat-number {
    font-size: 2rem;
    font-weight: 800;
    background: var(--accent);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    line-height: 1;
}

.stat-label {
    font-size: 0.875rem;
    color: var(--text-light);
    margin-top: 4px;
}

/* Profile Card */
.profile-card {
    background: var(--bg-card);
    padding: 24px;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.profile-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    background: var(--accent);
    z-index: 0;
}

.profile-image {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin: 0 auto 20px;
    border: 4px solid var(--bg-card);
    position: relative;
    z-index: 1;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile-info {
    position: relative;
    z-index: 1;
}

.profile-info h3 {
    margin-bottom: 4px;
}

.profile-info p {
    color: var(--text-light);
    margin-bottom: 16px;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.social-links a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--bg);
    display: grid;
    place-items: center;
    color: var(--text-light);
    transition: var(--transition);
}

.social-links a:hover {
    color: var(--primary);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* Section Common Styles */
.section {
    padding: 80px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-label {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(40, 63, 34, 0.12);
    color: var(--primary);
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.section-title {
    margin-bottom: 16px;
}

.section-description {
    max-width: 600px;
    margin: 0 auto;
}

/* About Section */
.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.about-text p {
    font-size: 1.125rem;
    margin-bottom: 24px;
}

.highlights {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 32px;
}

.highlight {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.highlight-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(40, 63, 34, 0.12);
    display: grid;
    place-items: center;
    color: var(--primary);
    flex-shrink: 0;
}

.highlight-text h4 {
    margin-bottom: 4px;
    font-size: 1.125rem;
}

.highlight-text p {
    margin: 0;
    font-size: 0.95rem;
}

.about-actions {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}

/* Skills Section */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
}

.skill-category h3 {
    margin-bottom: 16px;
    font-size: 1.25rem;
    color: var(--primary);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
}

.skill {
    background: var(--bg-card);
    padding: 16px 12px;
    border-radius: var(--radius);
    text-align: center;
    font-weight: 600;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid var(--border);
}

.skill:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--primary);
}

/* Projects Section */
.projects {
    padding: 80px 0;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 40px;
}

.project-card {
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
    position: relative;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent);
    z-index: 10;
}

.project-card:nth-child(1) {
    animation-delay: 0.1s;
}

.project-card:nth-child(2) {
    animation-delay: 0.2s;
}

.project-card:nth-child(3) {
    animation-delay: 0.3s;
}

.project-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px -12px rgba(40, 63, 34, 0.2);
    border-color: var(--primary);
}

.project-image {
    height: 260px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    position: relative;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover .project-image img {
    transform: scale(1.08);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.88), rgba(63, 90, 46, 0.88));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-view-btn {
    background: white;
    color: var(--primary);
    border: none;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.95rem;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.project-view-btn:hover {
    transform: scale(1.08);
    background: var(--bg);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.project-tag {
    position: absolute;
    top: 16px;
    left: 16px;
    padding: 8px 14px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.95), rgba(63, 90, 46, 0.95));
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
    backdrop-filter: blur(6px);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-content {
    padding: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.project-content h3 {
    margin-bottom: 12px;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--text);
    line-height: 1.3;
}

.project-content p {
    margin-bottom: 18px;
    flex-grow: 1;
    line-height: 1.6;
    color: var(--text-light);
    font-size: 0.95rem;
}

.project-features {
    list-style: none;
    margin-bottom: 20px;
}

.project-features li {
    position: relative;
    padding-left: 26px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: var(--text-light);
    line-height: 1.5;
}

.project-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: 800;
    font-size: 1.1rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 24px;
}

.project-tech span {
    padding: 6px 12px;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.08), rgba(63, 90, 46, 0.08));
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(40, 63, 34, 0.15);
    transition: var(--transition);
}

.project-tech span:hover {
    background: rgba(40, 63, 34, 0.12);
    border-color: var(--primary);
}

.project-actions {
    display: flex;
    gap: 14px;
    margin-top: auto;
    flex-wrap: wrap;
}

.project-actions .btn {
    flex: 1;
    min-width: 120px;
    padding: 11px 18px;
    font-size: 0.9rem;
    border-radius: 6px;
}

.project-actions .btn-primary {
    background: var(--accent);
    color: white;
    font-weight: 700;
}

.project-actions .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(40, 63, 34, 0.3);
}

.project-actions .btn-outline {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
    font-weight: 600;
}

.project-actions .btn-outline:hover {
    background: rgba(40, 63, 34, 0.08);
    transform: translateY(-3px);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Design Portfolio Section */
.design-portfolio {
    padding: 80px 0;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.05), rgba(63, 90, 46, 0.05));
}

.design-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    animation: fadeInUp 0.8s ease forwards;
}

.design-card {
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    animation: fadeInUp 0.8s ease forwards;
    border: 1px solid var(--border);
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.design-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--accent);
    z-index: 10;
}

.design-card:nth-child(1) { animation-delay: 0.1s; }
.design-card:nth-child(2) { animation-delay: 0.2s; }
.design-card:nth-child(3) { animation-delay: 0.3s; }
.design-card:nth-child(4) { animation-delay: 0.4s; }
.design-card:nth-child(5) { animation-delay: 0.5s; }
.design-card:nth-child(6) { animation-delay: 0.6s; }
.design-card:nth-child(7) { animation-delay: 0.7s; }
.design-card:nth-child(8) { animation-delay: 0.8s; }

.design-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 50px -12px rgba(40, 63, 34, 0.2);
    border-color: var(--primary);
}

.design-image {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    flex-shrink: 0;
}

.design-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
}

.design-card:hover .design-image img {
    transform: scale(1.08);
}

.design-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.75), rgba(63, 90, 46, 0.75)), 
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent);
    display: grid;
    place-items: center;
    opacity: 0;
    transition: opacity 0.4s ease, background 0.4s ease;
    backdrop-filter: blur(2px);
}

.design-card:hover .design-overlay {
    opacity: 1;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.85), rgba(63, 90, 46, 0.85)), 
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15), transparent);
}

.design-btn {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent));
    color: white;
    display: grid;
    place-items: center;
    font-size: 1.8rem;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    text-decoration: none;
}

.design-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    border-radius: 50%;
    z-index: 0;
}

.design-btn i {
    position: relative;
    z-index: 1;
}

.design-btn:hover {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 15px 45px rgba(40, 63, 34, 0.5);
}

.design-btn:active {
    transform: scale(1.08);
}

.design-info {
    padding: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.design-info h4 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text);
    line-height: 1.2;
    letter-spacing: -0.3px;
}

.design-info p {
    font-size: 0.98rem;
    color: var(--text-light);
    margin: 0;
    line-height: 1.6;
    font-weight: 500;
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: start;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.contact-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.contact-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(40, 63, 34, 0.12);
    display: grid;
    place-items: center;
    color: var(--primary);
    flex-shrink: 0;
}

.contact-details h4 {
    margin-bottom: 4px;
}

.contact-details a, .contact-details p {
    margin: 0;
    color: var(--text-light);
}

.contact-details a:hover {
    color: var(--primary);
}

.contact-actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Design Portfolio Section */
.design-portfolio {
    padding: 80px 0;
    background: linear-gradient(135deg, rgba(40, 63, 34, 0.03), rgba(63, 90, 46, 0.03));
}

.design-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 40px;
}

.design-card {
    background: var(--bg-card);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease forwards;
}

.design-card:nth-child(1) {
    animation-delay: 0.1s;
}

.design-card:nth-child(2) {
    animation-delay: 0.2s;
}

.design-card:nth-child(3) {
    animation-delay: 0.3s;
}

.design-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
}

.design-image {
    height: 280px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    position: relative;
    overflow: hidden;
}

.design-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
}

.design-card:hover .design-image img {
    transform: scale(1.05);
}

.design-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(40, 63, 34, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.design-card:hover .design-overlay {
    opacity: 1;
}

.design-view-btn {
    background: white;
    color: var(--text);
    border: none;
    padding: 12px 28px;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.design-view-btn:hover {
    transform: scale(1.05);
}

.design-content {
    padding: 28px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.design-content h3 {
    margin-bottom: 12px;
    color: var(--primary);
    font-size: 1.3rem;
}

.design-content p {
    margin-bottom: 20px;
    flex-grow: 1;
    color: var(--text-light);
    font-size: 0.95rem;
}

.design-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.design-tech span {
    padding: 6px 12px;
    background: rgba(40, 63, 34, 0.12);
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}

/* Footer */
.footer {
    padding: 60px 0 30px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: #f5f2d6;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.footer-brand {
    display: flex;
    gap: 12px;
    align-items: center;
}

.footer-text .name {
    font-weight: 700;
    margin-bottom: 4px;
}

.footer-text .role {
    font-size: 0.875rem;
    color: rgba(245, 242, 214, 0.9);
}

.footer-links {
    display: flex;
    gap: 24px;
}

.footer-links a {
    color: rgba(245, 242, 214, 0.9);
    font-weight: 500;
    transition: var(--transition);
}

.footer-links a:hover {
    color: #ffffff;
}

.footer-bottom {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(245, 242, 214, 0.8);
    font-size: 0.875rem;
}

/* Modal */
.modal {
    position: fixed;
    inset: 0;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-backdrop {
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.7);
    backdrop-filter: blur(4px);
}

.modal-content {
    background: var(--bg-card);
    width: 100%;
    max-width: 900px;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
    position: relative;
    z-index: 1;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-close {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: var(--shadow);
    z-index: 2;
    transition: var(--transition);
}

.modal-close:hover {
    transform: rotate(90deg);
    color: var(--primary);
}

.modal-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
}

.modal-image {
    position: relative;
}

.modal-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius-xl) 0 0 var(--radius-xl);
}

.modal-info {
    padding: 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.modal-header {
    margin-bottom: 20px;
}

.modal-tag {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    background: rgba(40, 63, 34, 0.12);
    color: var(--primary);
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 12px;
}

.modal-info h2 {
    margin-bottom: 16px;
}

.modal-tech {
    margin-top: auto;
    padding-top: 20px;
}

.modal-tech h4 {
    margin-bottom: 12px;
    font-size: 1rem;
}

.tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tech-tags span {
    padding: 6px 12px;
    background: rgba(40, 63, 34, 0.12);
    color: var(--primary);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
}

.modal-actions {
    display: flex;
    gap: 12px;
    margin-top: 24px;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .modal-body {
        grid-template-columns: 1fr;
    }
    
    .modal-image img {
        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
        max-height: 300px;
    }
}

@media (max-width: 768px) {
    .container {
        padding: 0 16px;
    }
    
    .section {
        padding: 60px 0;
    }
    
    .nav-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-card);
        flex-direction: column;
        padding: 20px;
        box-shadow: var(--shadow-lg);
        border-top: 1px solid var(--border);
    }
    
    .nav-menu.active {
        display: flex;
    }
    
    .hamburger {
        display: flex;
    }
    
    .hero-actions {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .hero-stats {
        justify-content: space-between;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 24px;
        text-align: center;
    }
    
    .footer-links {
        justify-content: center;
    }
    
    .project-actions {
        flex-direction: column;
    }
    
    .modal-actions {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.75rem;
    }
    
    .hero {
        padding-top: 100px;
        padding-bottom: 60px;
    }
    
    .profile-image {
        width: 120px;
        height: 120px;
    }
    
    .skills-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    }
    
    .modal-info {
        padding: 24px;
    }
}
