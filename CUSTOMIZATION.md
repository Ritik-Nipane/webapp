# CUSTOMIZATION QUICK GUIDE

## 🚀 To Add/Edit/Remove Projects

**File**: `/home/user/webapp/public/static/script.js`

**Location**: Lines 1-70 (top of the file)

**Instructions**:
1. Find the `projectsData` array
2. Copy an existing project object
3. Modify these fields:
   - `id`: Unique number (7, 8, 9...)
   - `title`: Project name
   - `description`: One-line impact statement
   - `icon`: Any emoji (📊 🎯 🚀 📦 🧪 💹)
   - `tags`: Array of technologies ["Python", "SQL", etc.]
   - `problem`: What problem did you solve?
   - `solution`: How did you solve it?
   - `tools`: Detailed list of tools
   - `results`: Array of impact statements with metrics

**Example**:
```javascript
{
    id: 7,
    title: "Your New Project",
    description: "Saved $1M annually through automation",
    icon: "🔥",
    tags: ["Python", "SQL", "Tableau"],
    problem: "Company wasted 40 hours/week on manual reporting...",
    solution: "Built automated pipeline that...",
    tools: "Python (Pandas), SQL, Tableau, Docker",
    results: [
        "Saved 40 hours/week of manual work",
        "Reduced errors by 95%",
        "$1M annual cost savings"
    ]
}
```

## 🎨 To Change Colors

**File**: `/home/user/webapp/public/static/style.css`

**Location**: Lines 14-22 (CSS variables)

**Available Colors**:
```css
--color-accent-blue: #00d4ff;    /* Neon blue */
--color-accent-purple: #a855f7;  /* Electric purple */
--color-accent-teal: #14b8a6;    /* Teal */
```

**How to Change**:
Replace hex codes with your preferred colors. Use tools like:
- https://coolors.co
- https://colorhunt.co

## 📝 To Update Personal Info

**File**: `/home/user/webapp/src/index.tsx`

### Hero Section (Lines 30-50):
```tsx
<h1 class="hero-title">
    <span class="hero-line">I turn</span>
    <span class="hero-line hero-highlight">data</span>
    <span class="hero-line">into decisions.</span>
</h1>
```

### Contact Section (Lines 220-240):
```tsx
<a href="mailto:YOUR@EMAIL.com" class="contact-link">
<a href="https://linkedin.com/in/YOURPROFILE" class="contact-link">
```

## 💼 To Update Experience/Timeline

**File**: `/home/user/webapp/src/index.tsx`

**Location**: Lines 150-200 (Experience section)

**Edit these fields**:
- `timeline-title`: Job title
- `timeline-company`: Company name
- `timeline-period`: Date range
- `timeline-achievements`: Bullet points with metrics

## 🛠️ To Update Skills

**File**: `/home/user/webapp/src/index.tsx`

**Location**: Lines 130-165 (Skills section)

**Four categories available**:
1. Analytics
2. Tools
3. Databases
4. Visualization

Just edit the `<div class="skill-item">` elements.

## 📄 To Add Your Resume

**Action**: Upload your resume PDF

**Path**: `/home/user/webapp/public/static/resume.pdf`

**Command**:
```bash
cp /path/to/your/resume.pdf /home/user/webapp/public/static/resume.pdf
```

The download link is already configured in the contact section.

## 🚀 After Making Changes

```bash
# 1. If you edited src/index.tsx (HTML changes)
cd /home/user/webapp && npm run build

# 2. Restart the server
npm run clean-port && pm2 restart portfolio-webapp

# 3. Test your changes
curl http://localhost:3000

# 4. Commit to git
git add .
git commit -m "Updated projects/colors/info"
```

## 📱 Testing Responsiveness

The site automatically adapts to:
- **Mobile**: < 768px (hamburger menu, single column)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (full layout)

Test using browser DevTools (F12 → Device toolbar).

## 🎯 Animation Controls

**To adjust animation speed**:

**File**: `/home/user/webapp/public/static/style.css`

Find these sections:
```css
animation: fadeSlideIn 1s var(--ease-smooth) forwards;
/* Change 1s to 0.5s for faster, 2s for slower */

transition: all 0.3s var(--ease-smooth);
/* Change 0.3s to adjust hover speed */
```

## 🔧 Common Customization Tasks

| Task | File | Lines |
|------|------|-------|
| Add project | `script.js` | 1-70 |
| Change colors | `style.css` | 14-22 |
| Update name/title | `index.tsx` | 30-50 |
| Edit about text | `index.tsx` | 70-95 |
| Change skills | `index.tsx` | 130-165 |
| Update experience | `index.tsx` | 150-200 |
| Edit contact info | `index.tsx` | 220-240 |

---

**Need help?** Check the full README.md for detailed documentation.
