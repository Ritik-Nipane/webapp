// ===================================
// PROJECTS DATA (EASY TO UPDATE)
// ===================================
const projectsData = [
    {
        id: 1,
        title: "Revenue Analytics Dashboard",
        description: "Real-time revenue tracking and forecasting dashboard for executive team",
        icon: "📊",
        tags: ["Python", "Tableau", "SQL", "AWS"],
        problem: "Leadership lacked visibility into real-time revenue performance and future projections, leading to reactive decision-making and missed opportunities.",
        solution: "Built an automated dashboard that ingests data from 5 sources, processes 10M+ records daily, and delivers real-time insights with 7-day forecasts using predictive models.",
        tools: "Python (Pandas, Prophet), Tableau, PostgreSQL, AWS Lambda, Apache Airflow",
        results: [
            "Reduced reporting time from 3 days to real-time",
            "Increased forecast accuracy by 35%",
            "Adopted by 200+ stakeholders across 8 departments",
            "Identified $2.5M in revenue leakage in first quarter"
        ]
    },
    {
        id: 2,
        title: "Customer Churn Prediction Model",
        description: "ML model predicting customer churn with 89% accuracy",
        icon: "🎯",
        tags: ["Python", "Scikit-learn", "XGBoost", "Power BI"],
        problem: "Customer retention team had no way to identify at-risk customers proactively, resulting in 25% annual churn rate and $5M in lost revenue.",
        solution: "Developed a machine learning pipeline that analyzes 50+ behavioral signals to predict churn probability 30 days in advance with 89% accuracy.",
        tools: "Python (Scikit-learn, XGBoost, SHAP), Power BI, PostgreSQL, Docker",
        results: [
            "Reduced churn rate from 25% to 18% in 6 months",
            "Generated $3.2M in retained revenue",
            "Enabled proactive outreach to 1,500+ at-risk customers monthly",
            "Model deployed to production with 15-minute refresh cycle"
        ]
    },
    {
        id: 3,
        title: "Marketing Attribution Analysis",
        description: "Multi-touch attribution model for $10M marketing budget optimization",
        icon: "🚀",
        tags: ["R", "SQL", "BigQuery", "Data Studio"],
        problem: "Marketing team couldn't determine which channels drove conversions, leading to inefficient budget allocation and 40% wasted ad spend.",
        solution: "Implemented a multi-touch attribution model analyzing 2M+ customer journeys across 12 channels, providing data-driven budget recommendations.",
        tools: "R (tidyverse, ggplot2), BigQuery, Google Analytics, Data Studio, Python",
        results: [
            "Improved ROAS by 45% through optimized budget allocation",
            "Identified 3 underperforming channels, reallocating $2M budget",
            "Reduced customer acquisition cost by 30%",
            "Automated weekly reporting for marketing leadership"
        ]
    },
    {
        id: 4,
        title: "Supply Chain Optimization",
        description: "Inventory and logistics optimization reducing costs by $1.8M annually",
        icon: "📦",
        tags: ["Python", "OR-Tools", "Tableau", "MySQL"],
        problem: "Inefficient inventory management and routing led to $3M in excess inventory costs and frequent stockouts affecting customer satisfaction.",
        solution: "Built optimization models for inventory levels and delivery routing, analyzing historical demand patterns and real-time logistics data.",
        tools: "Python (OR-Tools, PuLP), Tableau, MySQL, Apache Kafka, Docker",
        results: [
            "Reduced inventory holding costs by $1.8M annually",
            "Decreased stockout incidents by 60%",
            "Optimized delivery routes saving 15% in logistics costs",
            "Improved order fulfillment time by 25%"
        ]
    },
    {
        id: 5,
        title: "A/B Testing Platform",
        description: "Automated experimentation platform processing 500+ tests annually",
        icon: "🧪",
        tags: ["Python", "Flask", "PostgreSQL", "D3.js"],
        problem: "Product team ran experiments manually with inconsistent methodology, taking weeks to analyze results and often reaching incorrect conclusions.",
        solution: "Created a self-service platform that automates experiment design, data collection, statistical analysis, and result visualization.",
        tools: "Python (Flask, SciPy, Statsmodels), PostgreSQL, Redis, D3.js, Docker",
        results: [
            "Reduced experiment analysis time from 2 weeks to 2 hours",
            "Processed 500+ experiments in first year",
            "Prevented 12 negative feature launches through early detection",
            "Increased experimentation velocity by 300%"
        ]
    },
    {
        id: 6,
        title: "Sales Forecasting Engine",
        description: "Time series forecasting model with 92% accuracy for quarterly planning",
        icon: "💹",
        tags: ["Python", "Prophet", "LSTM", "Power BI"],
        problem: "Sales planning relied on manual spreadsheets with 60% accuracy, causing inventory issues and missed revenue targets.",
        solution: "Developed an ensemble forecasting model combining Prophet, LSTM, and XGBoost, trained on 5 years of historical data with 30+ external signals.",
        tools: "Python (Prophet, TensorFlow, XGBoost), Power BI, Snowflake, Airflow",
        results: [
            "Improved forecast accuracy from 60% to 92%",
            "Enabled data-driven quarterly planning for $50M revenue",
            "Reduced inventory mismatch by 40%",
            "Automated monthly forecasts saving 80 hours of manual work"
        ]
    }
];

// ===================================
// CUSTOM CURSOR
// ===================================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Cursor hover effect on interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// ===================================
// NAVIGATION
// ===================================
const nav = document.querySelector('.nav');
const navBurger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// Mobile menu toggle
navBurger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu on link click
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Hide nav on scroll down, show on scroll up
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('hidden');
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// PROJECTS RENDERING
// ===================================
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        projectCard.innerHTML = `
            <div class="project-image">${project.icon}</div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectCard.addEventListener('click', () => openProjectModal(project));
        projectsGrid.appendChild(projectCard);
    });
}

// ===================================
// PROJECT MODAL
// ===================================
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

function openProjectModal(project) {
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${project.icon} ${project.title}</h2>
            <p class="modal-subtitle">${project.description}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Problem</h3>
            <p class="modal-section-content">${project.problem}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Solution</h3>
            <p class="modal-section-content">${project.solution}</p>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Tools & Technologies</h3>
            <p class="modal-section-content">${project.tools}</p>
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3 class="modal-section-title">Results & Impact</h3>
            <ul class="timeline-achievements">
                ${project.results.map(result => `<li>${result}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

modalClose.addEventListener('click', closeProjectModal);
modalOverlay.addEventListener('click', closeProjectModal);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
function observeElements() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
}

// ===================================
// NUMBER ANIMATION (for metrics)
// ===================================
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate metrics when they come into view
const metricObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const text = entry.target.textContent;
            const numbers = text.match(/\d+/);
            if (numbers) {
                const target = parseInt(numbers[0]);
                entry.target.classList.add('animated');
                animateNumber(entry.target, target);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.metric').forEach(el => {
    metricObserver.observe(el);
});

// ===================================
// SECTION ANIMATIONS
// ===================================
function addSectionAnimations() {
    // About section
    const aboutItems = document.querySelectorAll('.about-heading, .about-description, .divider');
    aboutItems.forEach(item => item.classList.add('fade-in'));
    
    // Skills section
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach(item => item.classList.add('fade-in'));
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => item.classList.add('fade-in'));
    
    // Contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(item => item.classList.add('fade-in'));
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    addSectionAnimations();
    observeElements();
    
    // Add slight delay to ensure all elements are rendered
    setTimeout(() => {
        observeElements();
    }, 100);
});

// ===================================
// PERFORMANCE: Debounce scroll events
// ===================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Re-observe elements if needed
    observeElements();
}, 100));

// ===================================
// GLITCH EFFECT ON TITLE (optional)
// ===================================
const heroTitle = document.querySelector('.hero-title');
let glitchInterval;

function addGlitchEffect() {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const originalText = heroTitle.textContent;
    let iterations = 0;
    
    glitchInterval = setInterval(() => {
        heroTitle.textContent = originalText
            .split('')
            .map((char, index) => {
                if (index < iterations) {
                    return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        if (iterations >= originalText.length) {
            clearInterval(glitchInterval);
            heroTitle.textContent = originalText;
        }
        
        iterations += 1 / 3;
    }, 30);
}

// Uncomment to enable glitch effect on page load
// setTimeout(addGlitchEffect, 1000);

// ===================================
// MAGNETIC BUTTONS (optional enhancement)
// ===================================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// PARALLAX EFFECT ON HERO
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

console.log('%c Portfolio Loaded Successfully ', 'background: #00d4ff; color: #0a0a0a; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('%c Designed for Impact. Built with Precision. ', 'color: #a855f7; font-size: 12px;');
