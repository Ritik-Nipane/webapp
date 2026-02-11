import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// Main portfolio page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio - Data Analyst</title>
        <meta name="description" content="Data Analyst | Dashboard Builder | Insight Creator">
        <link rel="stylesheet" href="/static/style.css">
    </head>
    <body>
        <!-- Navigation -->
        <nav class="nav">
            <div class="nav-container">
                <div class="nav-logo">DA</div>
                <div class="nav-links">
                    <a href="#about" class="nav-link">About</a>
                    <a href="#projects" class="nav-link">Projects</a>
                    <a href="#skills" class="nav-link">Skills</a>
                    <a href="#experience" class="nav-link">Experience</a>
                    <a href="#contact" class="nav-link">Contact</a>
                </div>
                <div class="nav-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="hero" id="home">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        <span class="hero-line">I turn</span>
                        <span class="hero-line hero-highlight">data</span>
                        <span class="hero-line">into decisions.</span>
                    </h1>
                    <p class="hero-subtitle">
                        <span class="hero-role">Data Analyst</span>
                        <span class="hero-divider">|</span>
                        <span class="hero-role">Dashboard Builder</span>
                        <span class="hero-divider">|</span>
                        <span class="hero-role">Insight Creator</span>
                    </p>
                </div>
                <div class="hero-cta">
                    <a href="#projects" class="btn btn-primary">View Work</a>
                    <a href="#contact" class="btn btn-secondary">Get in Touch</a>
                </div>
            </div>
            <div class="scroll-indicator">
                <span>Scroll</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section about" id="about">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">01</span>
                    <h2 class="section-title">About</h2>
                </div>
                <div class="about-content">
                    <div class="about-text">
                        <h3 class="about-heading">What I Do</h3>
                        <p class="about-description">
                            I transform complex datasets into actionable insights that drive business decisions. 
                            Specializing in dashboard development, statistical analysis, and data storytelling.
                        </p>
                        <div class="divider"></div>
                        <h3 class="about-heading">How I Think</h3>
                        <p class="about-description">
                            Every data point tells a story. I bridge the gap between raw numbers and strategic clarity,
                            turning confusion into confidence for stakeholders.
                        </p>
                        <div class="divider"></div>
                        <h3 class="about-heading">Problem I Solve</h3>
                        <p class="about-description">
                            Making data accessible. Breaking down silos. Empowering teams with real-time insights
                            that eliminate guesswork and accelerate growth.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section class="section projects" id="projects">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">02</span>
                    <h2 class="section-title">Featured Projects</h2>
                </div>
                <div class="projects-grid" id="projectsGrid">
                    <!-- Projects will be dynamically inserted here -->
                </div>
            </div>
        </section>

        <!-- Project Modal -->
        <div class="modal" id="projectModal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body" id="modalBody">
                    <!-- Project details will be inserted here -->
                </div>
            </div>
        </div>

        <!-- Skills Section -->
        <section class="section skills" id="skills">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">03</span>
                    <h2 class="section-title">Skills & Tools</h2>
                </div>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3 class="skill-category-title">Analytics</h3>
                        <div class="skill-list">
                            <div class="skill-item">Statistical Analysis</div>
                            <div class="skill-item">Predictive Modeling</div>
                            <div class="skill-item">A/B Testing</div>
                            <div class="skill-item">Data Mining</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Tools</h3>
                        <div class="skill-list">
                            <div class="skill-item">Python</div>
                            <div class="skill-item">R</div>
                            <div class="skill-item">Tableau</div>
                            <div class="skill-item">Power BI</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Databases</h3>
                        <div class="skill-list">
                            <div class="skill-item">SQL</div>
                            <div class="skill-item">PostgreSQL</div>
                            <div class="skill-item">MongoDB</div>
                            <div class="skill-item">BigQuery</div>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3 class="skill-category-title">Visualization</h3>
                        <div class="skill-list">
                            <div class="skill-item">D3.js</div>
                            <div class="skill-item">Plotly</div>
                            <div class="skill-item">Matplotlib</div>
                            <div class="skill-item">ggplot2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section class="section experience" id="experience">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">04</span>
                    <h2 class="section-title">Impact & Experience</h2>
                </div>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Senior Data Analyst</h3>
                            <span class="timeline-company">Tech Company</span>
                            <span class="timeline-period">2022 - Present</span>
                            <ul class="timeline-achievements">
                                <li>Reduced data processing time by <span class="metric">45%</span> through optimized ETL pipelines</li>
                                <li>Built executive dashboards serving <span class="metric">200+</span> stakeholders daily</li>
                                <li>Increased revenue attribution accuracy by <span class="metric">30%</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Data Analyst</h3>
                            <span class="timeline-company">Growth Startup</span>
                            <span class="timeline-period">2020 - 2022</span>
                            <ul class="timeline-achievements">
                                <li>Implemented automated reporting saving <span class="metric">20hrs</span>/week</li>
                                <li>Identified opportunities leading to <span class="metric">$2M+</span> in new revenue</li>
                                <li>Created predictive models with <span class="metric">85%</span> accuracy</li>
                            </ul>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Junior Analyst</h3>
                            <span class="timeline-company">Consulting Firm</span>
                            <span class="timeline-period">2019 - 2020</span>
                            <ul class="timeline-achievements">
                                <li>Analyzed datasets with <span class="metric">10M+</span> records</li>
                                <li>Delivered <span class="metric">50+</span> client presentations</li>
                                <li>Improved data quality by <span class="metric">60%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section class="section contact" id="contact">
            <div class="container">
                <div class="section-header">
                    <span class="section-number">05</span>
                    <h2 class="section-title">Get In Touch</h2>
                </div>
                <div class="contact-content">
                    <p class="contact-text">
                        Let's discuss how data can drive your next decision.
                    </p>
                    <div class="contact-links">
                        <a href="mailto:analyst@example.com" class="contact-link">
                            <span class="contact-icon">📧</span>
                            <span>analyst@example.com</span>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" class="contact-link">
                            <span class="contact-icon">💼</span>
                            <span>LinkedIn</span>
                        </a>
                        <a href="/static/resume.pdf" download class="contact-link">
                            <span class="contact-icon">📄</span>
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <p class="footer-text">
                    Built with precision. Designed for impact.
                </p>
                <p class="footer-copyright">
                    © 2024 Data Analyst Portfolio
                </p>
            </div>
        </footer>

        <!-- Custom Cursor -->
        <div class="cursor"></div>
        <div class="cursor-follower"></div>

        <script src="/static/script.js"></script>
    </body>
    </html>
  `)
})

export default app
