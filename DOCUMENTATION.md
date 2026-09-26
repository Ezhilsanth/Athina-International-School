# Athina International School - Developer Documentation

A comprehensive guide for developers working on the Athina International School website codebase.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [File Structure](#file-structure)
4. [JavaScript Functions](#javascript-functions)
5. [HTML Templates](#html-templates)
6. [Styling System](#styling-system)
7. [Common Tasks](#common-tasks)
8. [Future Enhancements](#future-enhancements)
9. [Troubleshooting](#troubleshooting)

## Project Overview

**Athina International School** is a website for a UK-aligned international school in Kandy, Sri Lanka. The site features:

- Responsive homepage with multiple sections
- Educational content showcase
- Student/Parent login portal
- Interactive student quiz system
- Contact and newsletter forms
- Mobile-optimized navigation

**Tech Stack:**
- Frontend: HTML5, CSS3, Vanilla JavaScript
- Library: jQuery 3.6.0
- Hosting: GitHub Pages
- No backend currently (static site)

## Architecture

The website follows a **single-page application (SPA) pattern** with multiple HTML pages that function as separate routes:

```
├── index.html          Main homepage (anchor navigation)
├── login.html          Portal login/registration page
├── subjects/*.html     Subject content pages (Science, Math, etc.)
└── static assets       CSS, JS, images
```

**Design Pattern:**
- **Event-Driven**: Heavy use of scroll and click events
- **Progressive Enhancement**: JavaScript enhances HTML, works without JS
- **Mobile-First CSS**: Responsive design using Flexbox/Grid
- **CSS Variables**: Centralized color and spacing system

## File Structure

### Core Files

```
script.js                 Main JavaScript functionality (200+ lines)
├── Scroll animations     Reveal elements on scroll
├── Navigation            Active link highlighting
├── Mobile menu           Side menu toggle
├── Form handling         Contact & newsletter submission
├── Quiz system          Frame switching for quizzes
└── Portal interaction    Login/register form toggle

style.css                 Main stylesheet (CSS custom properties)
├── Navigation styles     Header, navbar, menu
├── Section layouts      Using Flexbox/Grid
├── Responsive design    Mobile breakpoints
└── Color theme         Brand colors in :root

loginStyle.css            Portal page specific styles
├── Form container       Login/register panel
├── Button states        Active/disabled styling
└── Portal layout        Centered form design

index.html               Homepage (500+ lines)
├── Navigation bar       Logo, menu, portal link
├── Hero section         Welcome quote
├── About section        School mission
├── Curriculum section   Subject links grid
├── Highlights section   Statistics cards
├── Faculty section      Leadership profiles
├── Facilities section   Campus features grid
├── Contact section      Contact form
├── Newsletter section   Email subscription
└── Footer              Contact info, social links

login.html               Portal page (100+ lines)
├── School header        Logo and title
├── Login form           Email/password fields
├── Registration form    New user registration
├── Social auth          Google sign-in button
└── Back link            Return to homepage
```

### Directory Structure

```
images/
├── icon/                Logos, icons, small images
│   ├── logo.png         School logo
│   ├── favicon.png      Browser tab icon
│   ├── menu.png         Mobile menu icon
│   └── ...
├── courses/             Curriculum subject thumbnails
├── creator/             Faculty/team photos
├── extra/               Large background images
└── ...

subjects/
├── science.html         Science & STEM page
├── mathematics.html     Math & Logic page
├── computer_courses.html ICT & Robotics page
├── English.html         English & Speech page
├── musi.html            Music & Arts page
├── student.html         Student IQ Quiz page
├── Sample.html          Sample Worksheets page
└── subjects.css         Subject pages stylesheet

samplePapers/            Educational resource folder
```

## JavaScript Functions

All functions include JSDoc documentation. Here's a quick reference:

### Navigation & Scrolling

**`scrollAppear()`**
- Triggers CSS animations when elements enter viewport
- Used for fade-in/slide-in effects on About and Highlights sections
- Adds CSS classes: `side-text-appear`, `sideImage-appear`

**`highlightActiveNav()`**
- Updates active navigation link based on scroll position
- Compares current scroll position with section positions
- Handles header special case with 120px offset for fixed navbar
- **Complex Logic:** Iterates through sections to find current viewport area

### Mobile Navigation

**`sideMenu(side)`**
- Toggles mobile side menu with CSS transform
- `side = 0`: Opens menu (translateX(0))
- `side = 1`: Closes menu (translateX(-100%))
- Used by menu button and menu links

**`switchTAB()`**
- Toggles subject page tab list visibility
- Used on science.html, mathematics.html, etc.
- Maintains `tabState` boolean for toggle state

### Portal Forms

**`register()`**
- Shows registration form, hides login form
- Updates button position to highlight "Register" tab
- Uses CSS left positioning for slide animation
- Hides Google login option on registration view

**`login()`**
- Shows login form, hides registration form
- Updates button position to highlight "Log In" tab
- Reveals Google login option

**`goFurther()`**
- Validates Terms & Conditions checkbox
- **Complex Logic:** Disables register button until checkbox is checked
- Applies gradient background when enabled, gray when disabled
- Prevents accidental form submission

**`google()`**
- Opens Google OAuth login page in new tab
- Links to: `https://accounts.google.com/signin`

### Quiz System

**`quizt(frame)`**
- Switches visible quiz frame (1-10)
- **Complex Logic:** Loops through all 10 frame IDs, hides each one
- Shows only the target frame with `display: block`
- Called by quiz frame buttons

**`startquiz()`**
- Initiates quiz experience
- Hides title section
- Shows quiz panel, left sidebar (question list), right panel (content)

### Form Handlers

**`handleContactSubmit(event)`**
- Handles contact form submission
- Prevents default form behavior
- Shows success alert
- Clears form fields
- **Missing:** Backend integration for email delivery
- **TODO:** Connect to Formspree, EmailJS, or custom endpoint

**`handleNewsletterSubmit(event)`**
- Handles newsletter subscription
- Prevents default form behavior
- Shows success alert
- Clears email field
- **Missing:** Email list management
- **TODO:** Connect to Mailchimp, SendGrid, or custom database

## HTML Templates

### Homepage Sections

**Hero Section** (`#header`)
- Large background image with overlay
- Welcome quote and principal's message
- Call-to-action with Facebook link
- Mobile-responsive with full viewport height

**About Section** (`#about_section`)
- School mission statement
- Founded date (2019) and affiliation info
- Side-by-side image and text layout
- Uses `scrollAppear` for animation

**Curriculum Section** (`#curriculum_section`)
- 8 subject cards with images
- Links to subject pages
- Grid layout (4 columns on desktop, responsive)
- Includes special links to quiz and sample papers

**Highlights Section** (`#portfolio_section`)
- Statistics cards (students, programs, alignment, clubs)
- Uses flexbox for responsive layout
- No interactive elements

**Faculty Section** (`#team_section`)
- Leadership profile cards
- Principal bio with Facebook link
- Team description with Instagram link
- Responsive card layout

**Facilities Section** (`#services_section`)
- 8 facility cards with icons
- Links to relevant pages
- Dark background section
- Grid layout with hover effects

**Contact Section** (`#contactus_section`)
- Contact form with validation
- Fields: First Name, Last Name, Email, Phone, Message
- Form ID: `contactForm`
- Calls `handleContactSubmit(event)` on submit
- **Note:** Currently no backend processing

### Portal Page (login.html)

**Form Container**
- Toggle buttons for "Log In" and "Register"
- Animated button slider
- Two forms with left positioning animation

**Login Form** (`#login`)
- Email/Student ID field
- Password field
- Remember Me checkbox
- Log In button
- Google sign-in option

**Registration Form** (`#register`)
- Full Name field
- Email field
- Password field
- Confirm Password field
- Terms & Conditions checkbox
- Register button (disabled until checkbox checked)

## Styling System

### CSS Custom Properties

The website uses CSS variables in `:root` for consistent theming:

```css
/* Primary Colors */
--primary-color: #1420be              /* Main brand blue */
--primary-hover: #0d1685              /* Darker blue for hover */
--primary-gradient: linear-gradient(135deg, #1420be 0%, #3b82f6 100%)

/* Accent Colors */
--accent-gold: #d97706                /* Gold accent */
--accent-gold-gradient: linear-gradient(135deg, #f59e0b 0%, #d97706 100%)

/* Text Colors */
--text-dark: #1e293b                  /* Main text */
--text-muted: #64748b                 /* Secondary text */
--dark-navy: #0f172a                  /* Dark backgrounds */

/* Background Colors */
--bg-light: #f8fafc                   /* Light background */
--card-bg: #ffffff                    /* Card backgrounds */

/* UI Elements */
--border-light: #e2e8f0               /* Light borders */
--shadow-sm/md/lg: [shadow values]    /* Drop shadows */
```

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 600px) {
  /* Stack layouts vertically */
  /* Hide desktop elements */
  /* Adjust font sizes */
}

/* Tablet */
@media (max-width: 960px) {
  /* Adjust grid layouts */
  /* Modify spacing */
}

/* Desktop */
/* Default styles */
```

### Key CSS Classes

- `.active` - Active navigation link
- `.black` - Dark navbar (applied on scroll)
- `side-text-appear` - Text fade-in animation
- `sideImage-appear` - Image slide-in animation
- `.side-menu` - Mobile navigation panel
- `.form-box` - Portal form container
- `.card` - Faculty/profile cards
- `.s-card` - Service/facility cards

## Common Tasks

### Adding a New Subject Page

1. Create `subjects/[subject].html`
2. Copy structure from existing subject page
3. Update content and images
4. Add link in curriculum grid on index.html
5. Link back to index.html in page header
6. Ensure responsive mobile menu with `switchTAB()` function

### Updating School Information

1. **Main page text**: Edit `index.html` sections
2. **Contact details**: Update footer in `index.html` and `login.html`
3. **Logo/Images**: Replace in `images/` folder
4. **Social links**: Update URLs in navigation and footer
5. **Colors**: Modify `:root` variables in `style.css`

### Adding a New Quiz

1. Create quiz frames: `<div id="f1">...</div>`, `<div id="f2">...</div>`, etc.
2. Add quiz navigation buttons
3. Each button calls `quizt(frameNumber)`
4. Add start button calling `startquiz()`
5. Buttons for frame switching call `quizt(X)`

### Connecting Forms to Backend

**Contact Form:**
```javascript
// Replace handleContactSubmit with:
function handleContactSubmit(event) {
  event.preventDefault();
  
  const formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('cemail').value,
    phone: document.getElementById('cphone').value,
    message: document.getElementById('cmessage').value
  };
  
  fetch('https://your-backend/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
  })
  .catch(error => alert('Error sending message'));
}
```

**Using Formspree (No Backend Needed):**
```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- Same form fields -->
</form>
```

### Customizing Navbar

The navbar has:
- Logo container (left)
- Navigation links (center)
- Portal login button (right)
- Mobile menu button
- Dark background on scroll (`.black` class)

Edit in `index.html` and style in `style.css`:
```css
nav {
  padding: 15px 5%;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

nav.black {
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
```

## Future Enhancements

### High Priority

1. **Form Backend Integration**
   - Connect contact form to email service (Formspree, EmailJS)
   - Connect newsletter form to email list (Mailchimp)
   - Add form validation before submission
   - Implement rate limiting to prevent spam

2. **Authentication System**
   - Replace static login page with real authentication
   - Use Firebase, Auth0, or custom backend
   - Implement JWT tokens
   - Add password reset functionality

3. **Student Portal Features**
   - Grade viewing
   - Assignment submission
   - Parent-teacher messaging
   - Event calendar

### Medium Priority

1. **Content Management**
   - Add CMS for easier content updates
   - Blog section for news/announcements
   - Event calendar with automatic updates
   - Photo gallery management

2. **Performance Optimization**
   - Image lazy loading
   - CSS/JS minification
   - Caching strategies
   - CDN for static assets

3. **SEO Improvements**
   - Meta tag optimization
   - Structured data (Schema.org)
   - Sitemap and robots.txt
   - Open Graph tags for social sharing

### Low Priority

1. **Analytics**
   - Google Analytics integration
   - User behavior tracking
   - Conversion tracking for admissions

2. **Accessibility**
   - WCAG 2.1 compliance
   - Screen reader optimization
   - Keyboard navigation
   - Color contrast improvements

3. **Additional Features**
   - Online payment for admissions
   - Virtual tour
   - Live chat support
   - Mobile app

## Troubleshooting

### Navigation Issues

**Problem:** Navigation highlighting not updating on scroll
- **Solution:** Check if `highlightActiveNav()` is called in scroll listener
- **Check:** Ensure all sections have unique `id` attributes
- **Check:** Verify nav links use matching href values

**Problem:** Mobile menu not opening/closing
- **Solution:** Verify `side-menu` element exists in HTML
- **Solution:** Check `sideMenu()` function is called correctly
- **Check:** Verify CSS transform styles are applied

### Form Issues

**Problem:** Contact form submitting but no feedback
- **Solution:** Verify `handleContactSubmit()` event listener is attached
- **Check:** Browser console for JavaScript errors
- **TODO:** Implement backend to actually send emails

**Problem:** Newsletter form not clearing after submit
- **Solution:** Verify `handleNewsletterSubmit()` includes `event.target.reset()`

### Styling Issues

**Problem:** Colors not matching design
- **Solution:** Update `:root` CSS variables in `style.css`
- **Solution:** Check for specificity issues overriding variables

**Problem:** Layout breaking on mobile
- **Solution:** Check media query breakpoints
- **Solution:** Verify Flexbox/Grid properties
- **Solution:** Test on actual mobile devices or DevTools

### Performance Issues

**Problem:** Page loads slowly
- **Solution:** Check image sizes (optimize in Photoshop/ImageOptim)
- **Solution:** Minify CSS and JavaScript
- **Solution:** Enable gzip compression on server
- **Solution:** Use CDN for jQuery library (already done)

### Scroll Animation Not Working

**Problem:** `scrollAppear()` not triggering animations
- **Solution:** Verify CSS animation classes exist in stylesheet
- **Solution:** Check element has correct class name in HTML
- **Solution:** Test scroll event listener is attached
- **Solution:** Verify window scroll position detection

### Portal Form Not Toggling

**Problem:** Clicking register/login buttons doesn't switch forms
- **Solution:** Verify form IDs match JavaScript: `login`, `register`, `btn`
- **Solution:** Check button IDs: `log`, `reg`
- **Solution:** Verify CSS positioning is applied
- **Solution:** Check browser console for JavaScript errors

## Resources

- [MDN Web Docs](https://developer.mozilla.org/) - JavaScript & CSS reference
- [jQuery Documentation](https://jquery.com/) - jQuery API
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tutorials
- [Formspree](https://formspree.io/) - Form backend service
- [GitHub Pages](https://pages.github.com/) - Hosting documentation

## Version History

- **v1.0** - Initial website launch
- **Current** - Fully documented with JSDoc comments

---

**Last Updated:** 2026
**Maintained by:** Development Team
**Repository:** [Ezhilsanth/Athina-International-School](https://github.com/Ezhilsanth/Athina-International-School)
