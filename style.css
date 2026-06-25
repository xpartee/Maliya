/* --- Root Theme Settings & Universal Fixed Background Configurations --- */
:root {
    --primary-color: #0066cc;
    --dark-neutral: #111111;
    --white: #ffffff;
    --text-main: #1a1a1a;
    --text-muted: #444444;
    --border-color: rgba(0, 0, 0, 0.1);
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --transition-base: all 0.25s ease-in-out;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fixed Global Background Image Setup (me.jpg) */
html {
    scroll-behavior: smooth;
    font-family: var(--font-family);
    color: var(--text-main);
    background-image: url('me.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
}

body {
    line-height: 1.6;
    padding-top: 70px;
    position: relative;
    background-color: transparent;
}

/* Translucent layer overlay to ensure full text readability over me.jpg background */
.site-bg-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.91);
    z-index: -1;
    pointer-events: none;
}

/* --- Translucent Layout Containers --- */
.section {
    padding: 90px 24px;
}

.translucent-section {
    background-color: rgba(255, 255, 255, 0.65);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.container {
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
}

.section-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-neutral);
    margin-bottom: 35px;
    border-bottom: 3px solid var(--primary-color);
    display: inline-block;
    padding-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.alignment-center {
    text-align: center;
}

/* --- Clean Typography Content Block --- */
.card-content {
    background-color: rgba(255, 255, 255, 0.85);
    padding: 30px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
}

.card-content p {
    font-size: 1.1rem;
    margin-bottom: 15px;
    color: var(--text-main);
}

/* --- Interactive Action Elements --- */
.btn {
    display: inline-block;
    padding: 12px 24px;
    text-decoration: none;
    font-weight: 600;
    border-radius: 4px;
    transition: var(--transition-base);
    font-size: 0.95rem;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #004da3;
}

.btn-secondary {
    background-color: rgba(255, 255, 255, 0.8);
    color: var(--dark-neutral);
    border: 1px solid var(--dark-neutral);
    margin-left: 12px;
}

.btn-secondary:hover {
    background-color: var(--dark-neutral);
    color: var(--white);
}

/* --- Header Navbar Layout --- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 2000;
    padding: 16px 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1040px;
    margin: 0 auto;
    padding: 0 24px;
}

.logo {
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--dark-neutral);
    text-decoration: none;
}

.logo span {
    color: var(--primary-color);
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li a {
    text-decoration: none;
    color: var(--text-main);
    margin-left: 18px;
    font-size: 0.88rem;
    font-weight: 600;
    transition: var(--transition-base);
}

.nav-links li a:hover {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 22px;
    height: 16px;
    cursor: pointer;
}

.menu-toggle .bar {
    width: 100%;
    height: 2px;
    background-color: var(--dark-neutral);
    transition: var(--transition-base);
}

/* --- Hero Frame Content Adjustments (Clean Center Profile) --- */
.hero-center-content {
    max-width: 750px;
    margin: 40px 0;
}

.hero-text h5 {
    color: var(--primary-color);
    font-size: 1rem;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.hero-center-content h1 {
    font-size: 3.2rem;
    color: var(--dark-neutral);
    line-height: 1.15;
    margin-bottom: 12px;
}

.hero-center-content h3 {
    font-size: 1.4rem;
    color: var(--text-muted);
    font-weight: 500;
    margin-bottom: 20px;
}

.hero-center-content p {
    font-size: 1.15rem;
    color: var(--text-muted);
    margin-bottom: 32px;
}

/* --- Structural Architecture Grid Modules --- */
.skills-grid, .workflow-grid, .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

.skill-card, .project-card, .workflow-item, .service-box, .edu-card {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 28px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 10px rgba(0,0,0,0.02);
}

.skill-icon {
    font-size: 2.2rem;
    color: var(--primary-color);
    margin-bottom: 16px;
}

.skill-card h3, .project-card h3, .workflow-item h4, .service-box h3 {
    font-size: 1.15rem;
    color: var(--dark-neutral);
    margin-bottom: 10px;
}

.stack-layout p {
    font-size: 1.05rem;
}

.stack-list {
    margin-top: 16px;
    list-style-position: inside;
}

.stack-list li {
    margin-bottom: 12px;
}

.highlight-blue {
    color: var(--primary-color);
}

/* --- Project Content Layout with me.jpg Embedded --- */
.projects-layout-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 30px;
    align-items: center;
}

.project-tag {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--primary-color);
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 6px;
}

.project-tech {
    margin-top: 16px;
}

.project-tech span {
    background-color: #edf2f7;
    padding: 4px 10px;
    font-size: 0.8rem;
    border-radius: 3px;
    margin-right: 6px;
    font-weight: 500;
}

.project-links {
    margin-top: 20px;
}

.inline-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
}

/* Developer Photo Component Frame inside Projects Section */
.developer-photo-card {
    background-color: rgba(255, 255, 255, 0.95);
    padding: 16px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
    text-align: center;
}

.dev-portfolio-img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 4px;
    margin-bottom: 12px;
}

.photo-caption {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* --- Certificate Frame and Pure Image Interaction Rules --- */
.cert-focus-box {
    max-width: 650px;
    margin: 0 auto;
    padding: 35px;
    background-color: rgba(255, 255, 255, 0.95);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.03);
}

.cert-instruction {
    margin-bottom: 20px;
    font-size: 0.95rem;
    color: var(--text-muted);
}

/* Anchor Click Frame containing cert.jpg */
.cert-anchor-frame {
    position: relative;
    display: block;
    width: 100%;
    max-width: 440px;
    margin: 0 auto;
    border-radius: 4px;
    overflow: hidden;
    border: 2px solid var(--primary-color);
    box-shadow: 0 6px 18px rgba(0,0,0,0.1);
    cursor: pointer;
}

.cert-main-img {
    width: 100%;
    height: auto;
    display: block;
    transition: var(--transition-base);
}

/* Modern overlay displaying action target instead of external standalone text lines */
.cert-click-hint {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 102, 204, 0.88);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    color: var(--white);
    transition: var(--transition-base);
}

.cert-click-hint i {
    font-size: 2rem;
    margin-bottom: 8px;
}

.cert-click-hint span {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.5px;
}

.cert-anchor-frame:hover .cert-click-hint {
    opacity: 1;
}

.cert-anchor-frame:hover .cert-main-img {
    transform: scale(1.02);
}

/* --- Philosophy Block --- */
.philosophy-quote {
    font-size: 1.3rem;
    font-style: italic;
    color: var(--text-muted);
    border-left: 4px solid var(--primary-color);
    padding-left: 20px;
    max-width: 800px;
}

/* --- Contact & Footer --- */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.meta-item {
    margin-top: 16px;
    display: flex;
    align-items: center;
}

.meta-item i {
    color: var(--primary-color);
    margin-right: 12px;
    font-size: 1.1rem;
}

.meta-item a {
    color: var(--text-main);
    text-decoration: none;
    font-weight: 600;
}

.meta-item a:hover {
    text-decoration: underline;
}

.contact-form-wrapper form {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 24px;
    border-radius: 6px;
    border: 1px solid var(--border-color);
}

input, textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 14px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.95rem;
    background-color: var(--white);
}

footer {
    background-color: var(--dark-neutral);
    color: #888888;
    text-align: center;
    padding: 24px;
    font-size: 0.85rem;
}

/* --- Media Responsiveness Controls --- */
@media (max-width: 840px) {
    .projects-layout-grid, .contact-grid {
        grid-template-columns: 1fr;
    }
    
    .hero-center-content h1 {
        font-size: 2.3rem;
    }
    
    .menu-toggle {
        display: flex;
    }
    
    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: var(--white);
        flex-direction: column;
        padding: 20px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    
    .nav-links.active {
        display: flex;
    }
    
    .nav-links li {
        margin: 10px 0;
        text-align: center;
    }
    
    .nav-links li a {
        margin-left: 0;
        font-size: 1rem;
    }
}
