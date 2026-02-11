# Data Analyst Portfolio Website

## Project Overview
- **Name**: Portfolio Website
- **Goal**: High-impact, animation-heavy portfolio website for data analyst professionals
- **Features**: 
  - Strict, minimal, dark theme design
  - Smooth 60fps animations and micro-interactions
  - Custom cursor effects
  - Responsive design (mobile, tablet, desktop)
  - Dynamic project management system
  - Interactive project modals with full details
  - Scroll-based animations
  - Mobile-optimized navigation

## URLs
- **Local Development**: http://localhost:3000
- **Public Demo**: https://3000-ibzu5gsllxqah5ius45qv-18e660f9.sandbox.novita.ai
- **Production**: (To be deployed to Cloudflare Pages)

## Tech Stack
- **Frontend**: HTML5, CSS3 (with CSS Variables), Vanilla JavaScript
- **Backend**: Hono Framework (TypeScript)
- **Platform**: Cloudflare Workers/Pages
- **Build Tool**: Vite
- **Process Manager**: PM2 (for local development)

## Features Implemented ✅

### Hero Section
- Full-screen hero with animated gradient background
- Staggered text animations (fade + slide)
- Large bold headline with gradient accent
- Smooth scroll indicator
- CTA buttons with hover effects

### About Section
- Clean, minimal text layout
- Animated dividers
- Scroll-triggered fade-in animations
- Focus on problem-solving approach

### Projects Section (Dynamic & Easy to Update)
- **6 featured projects** with real data analyst examples
- Grid layout with hover effects (card lift + glow)
- Each project card includes:
  - Icon/emoji identifier
  - Title and description
  - Tech stack tags
  - Click to open detailed modal
- **Easy project management**: Edit `projectsData` array in `script.js`
- Modal with full project details:
  - Problem statement
  - Solution approach
  - Tools & technologies
  - Results & impact metrics

### Skills Section
- 4 categories: Analytics, Tools, Databases, Visualization
- Card-based layout with hover animations
- Clean visual hierarchy

### Experience Section
- Timeline layout with visual connection line
- 3 positions with achievements
- Animated metric highlights
- Hover effects on timeline cards

### Contact Section
- Minimal, clean design
- Email, LinkedIn, Resume download
- Hover animations on contact links

### Animations & Interactions
- Custom cursor with follower effect (desktop only)
- Scroll-based animations using Intersection Observer
- Smooth page transitions
- Hover effects on all interactive elements
- Mobile hamburger menu
- Hide/show navigation on scroll
- Parallax effect on hero section
- Number counter animations for metrics
- Magnetic button effects

## Project Structure
```
webapp/
├── src/
│   └── index.tsx           # Hono backend serving HTML
├── public/
│   └── static/
│       ├── style.css       # Complete CSS with animations
│       └── script.js       # JavaScript with project data
├── ecosystem.config.cjs    # PM2 configuration
├── wrangler.jsonc         # Cloudflare configuration
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## How to Update Projects

Projects are managed through a single data array in `/public/static/script.js`. To add/edit/remove projects:

1. Open `/public/static/script.js`
2. Find the `projectsData` array at the top of the file
3. Add a new project object:

```javascript
{
    id: 7,
    title: "Your Project Title",
    description: "Short impact-driven description",
    icon: "🔥",  // Any emoji
    tags: ["Python", "SQL", "Tableau"],
    problem: "Describe the problem...",
    solution: "Describe your solution...",
    tools: "List all tools and technologies used",
    results: [
        "Result 1 with metrics",
        "Result 2 with impact",
        "Result 3 with numbers"
    ]
}
```

4. Save the file - changes will reflect immediately

## Development Commands

```bash
# Build the project (REQUIRED first time)
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Check service status
pm2 list

# View logs (non-blocking)
pm2 logs --nostream

# Restart service
npm run clean-port && pm2 restart portfolio-webapp

# Stop service
pm2 delete portfolio-webapp

# Test the service
npm test
```

## Deployment to Cloudflare Pages

```bash
# Build project
npm run build

# Deploy to Cloudflare Pages
npm run deploy:prod
```

## Customization Guide

### Colors
Edit CSS variables in `/public/static/style.css`:
```css
:root {
    --color-bg: #0a0a0a;
    --color-accent-blue: #00d4ff;
    --color-accent-purple: #a855f7;
    --color-accent-teal: #14b8a6;
}
```

### Personal Information
Edit `/src/index.tsx`:
- Hero title and subtitle
- About section text
- Experience timeline
- Contact links (email, LinkedIn)

### Skills
Edit the skills section in `/src/index.tsx` to match your skillset.

## Design Philosophy

**Strict, Minimal, Bold**
- Dark theme with high contrast
- Accent colors: neon blue, electric purple, teal
- No clutter, intentional spacing
- Every animation has purpose
- Professional and confident feel
- Built for recruiters, founders, and professionals

## Performance
- Lightweight: No heavy frameworks
- Smooth 60fps animations
- Fast load times
- Debounced scroll events
- Intersection Observer for efficient scroll animations
- Mobile-optimized

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (iOS Safari, Chrome Mobile)
- Custom cursor disabled on mobile devices

## Status
✅ **Active Development**
- All core features implemented
- Ready for customization and deployment
- Animation system fully functional
- Project management system operational

## Next Steps
1. Customize personal information (name, email, LinkedIn)
2. Update projects with your own work
3. Adjust skills to match your expertise
4. Update experience timeline with your career
5. Add your resume PDF to `/public/static/resume.pdf`
6. Deploy to Cloudflare Pages
7. Connect custom domain (optional)

## License
MIT License - Feel free to use and customize

---

**Built with precision. Designed for impact.**
