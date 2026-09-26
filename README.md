# Athina International School

**Website Repository for Athina International School – Kandy, Sri Lanka**

Visit the live site: [https://ezhilsanth.github.io/Athina-International-School/](https://ezhilsanth.github.io/Athina-International-School/)

## Overview

This repository contains the official website for Athina International School, a premier educational institution in Kandy, Sri Lanka. The school provides UK-aligned international standard education from Play School through Secondary Level (Grade 9), with a mission to nurture "Global Ambassadors for a Sustainable World."

## Key Features

- **Responsive Web Design**: Mobile-friendly interface that works seamlessly across all devices
- **Curriculum Showcase**: Interactive display of educational programs including:
  - Science & STEM
  - Mathematics & Logic
  - ICT & Coding
  - Music & Creative Arts
  - English & Speech
  - Robotics & Projects
  - Student IQ Quizzes
  - Sample Worksheets

- **Student & Parent Portal**: Secure login and registration system for students and parents
- **Interactive Sections**: 
  - School highlights and statistics
  - Leadership & Faculty profiles
  - Campus facilities showcase
  - Contact and inquiry form
  - Newsletter subscription

## Project Structure

```
.
├── index.html              # Main homepage
├── login.html              # Student/Parent portal login page
├── script.js               # Core JavaScript functionality
├── style.css               # Main stylesheet with CSS custom properties
├── loginStyle.css          # Login portal specific styles
├── subjects/               # Educational content pages
│   ├── science.html
│   ├── mathematics.html
│   ├── computer_courses.html
│   ├── English.html
│   ├── musi.html           # Music & Arts page
│   ├── student.html        # Student IQ Quiz page
│   ├── Sample.html         # Sample Worksheets
│   └── subjects.css
├── images/                 # Image assets (logos, icons, course images)
├── samplePapers/           # Educational resource folder
└── 000.jpg                 # Featured school photo
```

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: CSS custom properties (CSS variables), responsive Flexbox/Grid
- **Libraries**: jQuery 3.6.0
- **Icons & Images**: PNG/JPG assets

## JavaScript Functionality

The website includes several key interactive features:

### Navigation & Scrolling
- **Scroll-to-reveal animations** for smooth content appearance
- **Active navigation highlighting** based on scroll position
- **Smooth scroll behavior** throughout the page

### Mobile Navigation
- **Side menu toggle** for mobile devices
- **Responsive menu handling** with transform animations

### Forms & User Interaction
- **Contact form submission** with validation
- **Newsletter subscription** handling
- **Login/Registration form toggling** in portal
- **Checkbox agreement validation** for registration

### Interactive Quizzes
- **Tab-based quiz switching** for student IQ assessments
- **Quiz panel display management**

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ezhilsanth/Athina-International-School.git
   cd Athina-International-School
   ```

2. **Open locally**:
   - Open `index.html` in your web browser
   - No build process or dependencies required

3. **Customize Content**:
   - Update text content in HTML files
   - Modify colors in CSS custom properties (`:root` in `style.css`)
   - Replace images in the `images/` folder

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization Guide

### Colors
Edit CSS custom properties in `style.css`:
```css
:root {
  --primary-color: #1420be;
  --primary-hover: #0d1685;
  --accent-gold: #d97706;
  /* ... more colors ... */
}
```

### Content
- Update school information in `index.html`
- Modify footer contact details
- Edit subject pages in `subjects/` folder

### Images
Replace images in the `images/` directory while maintaining the same filenames for consistency.

## Contact Information

**Athina International School – Kandy**
- Address: No. 101, Anagarika Dharmapala Mawatha, Kandy, Sri Lanka 2000
- Phone: +94 70 543 2113 / +94 70 543 2103 / +94 77 743 2345
- Email: athenainternationalkandy@gmail.com
- Website: [Athina International School](https://ezhilsanth.github.io/Athina-International-School/)
- Facebook: [athenainternationalkandy](https://www.facebook.com/athenainternationalkandy/)
- Instagram: [@athenainternationalkandy](https://www.instagram.com/athenainternationalkandy/)

## Affiliation

Affiliated with **Naburn CE Primary School (UK)**

## License

© 2026 Athina International School – Kandy, Sri Lanka. All Rights Reserved.
