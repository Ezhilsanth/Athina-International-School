/**
 * ========================================================================
 * Athina International School - Main JavaScript Module
 * ========================================================================
 * 
 * This file contains core interactive functionality for the Athina International
 * School website, including:
 * 
 * NAVIGATION & SCROLLING:
 *   - Smooth scroll reveal animations as user scrolls the page
 *   - Dynamic navigation link highlighting based on current section
 *   - Fixed navbar styling on scroll
 * 
 * MOBILE NAVIGATION:
 *   - Mobile side menu toggle with transform animations
 *   - Tab-based subject page navigation for mobile devices
 * 
 * USER INTERACTION:
 *   - Login/Registration form toggling on portal page
 *   - Form validation and submission handling
 *   - Google OAuth sign-in integration
 * 
 * EDUCATIONAL FEATURES:
 *   - Student IQ Quiz frame navigation and management
 *   - Multi-frame quiz system for interactive learning
 * 
 * DEPENDENCIES:
 *   - jQuery 3.6.0 (loaded from CDN in index.html)
 *   - No other external libraries required
 * 
 * BROWSER SUPPORT:
 *   - All modern browsers (Chrome, Firefox, Safari, Edge)
 *   - Mobile browsers (iOS Safari, Chrome Mobile)
 * 
 * FUTURE ENHANCEMENTS:
 *   - Connect contact/newsletter forms to backend email service
 *   - Implement actual authentication for portal
 *   - Add form validation for better UX
 * 
 * ========================================================================
 */

/**
 * Handles scroll-triggered reveal animations for page elements.
 * Triggers CSS animations (side-text-appear and sideImage-appear) when elements
 * enter the visible viewport area during scrolling.
 * 
 * This function calculates element positions relative to the viewport and adds
 * animation classes once elements are 60% (1.2 factor) into view.
 * 
 * @function scrollAppear
 * @returns {void}
 */
function scrollAppear() {
  var introText = document.querySelector('.side-text');
  var sideImage = document.querySelector('.sideImage');
  var screenPosition = window.innerHeight / 1.2;

  if (introText) {
    var introPosition = introText.getBoundingClientRect().top;
    if (introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
  }

  if (sideImage) {
    var imagePosition = sideImage.getBoundingClientRect().top;
    if (imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
}

/**
 * Highlights the active navigation link based on current scroll position.
 * Compares scroll position with section positions to determine which section
 * is currently in view, then updates nav links to show active state.
 * 
 * Handles both regular sections and the header, with 120px offset for fixed navbar.
 * Supports both hash-based (#section) and index.html navigation links.
 * 
 * @function highlightActiveNav
 * @returns {void}
 */
function highlightActiveNav() {
  var sections = document.querySelectorAll('section[id], header[id]');
  var navLinks = document.querySelectorAll('nav ul li a');
  var scrollY = window.pageYOffset;

  sections.forEach(function(current) {
    var sectionHeight = current.offsetHeight;
    var sectionTop = current.offsetTop - 120;
    var sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId || link.getAttribute('href') === 'index.html' && sectionId === 'header') {
          link.classList.add('active');
        }
      });
    }
  });
}

/**
 * Initializes scroll event listeners for animations and nav updates.
 * Triggered on every scroll event to apply scroll-dependent functionality.
 * 
 * Calls scrollAppear() for reveal animations and highlightActiveNav() for
 * dynamic navigation highlighting.
 */
window.addEventListener('scroll', function() {
  scrollAppear();
  highlightActiveNav();
});

/**
 * Toggles the mobile side menu visibility with CSS transform animation.
 * 
 * Used for mobile responsive navigation. Applies transform to slide menu
 * in from the left edge when opening, or out of view when closing.
 * 
 * @function sideMenu
 * @param {number} side - Control parameter: 0 to open menu, 1 to close menu
 * @returns {void}
 */
function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if (!menu) return;
  
  if (side === 0) {
    menu.style.transform = 'translateX(0)';
  } else {
    menu.style.transform = 'translateX(-100%)';
  }
}

/**
 * Toggles tab list visibility for subject page mobile navigation.
 * 
 * Used on subject pages (science.html, mathematics.html, etc.) to provide
 * collapsible navigation for mobile devices. Maintains state in tabState variable.
 * 
 * @function switchTAB
 * @returns {void}
 */
var tabState = false;
function switchTAB() {
  var list = document.getElementById("list-switch");
  if (!list) return;
  if (!tabState) {
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.width = "100%";
    list.style.marginTop = "15px";
    tabState = true;
  } else {
    list.style.display = "none";
    tabState = false;
  }
}

/**
 * Toggles from login form to registration form view on login.html portal page.
 * 
 * Uses CSS left positioning to slide forms in/out. Updates button styling
 * to reflect active form. Requires login form, register form, and button elements.
 * 
 * @function register
 * @returns {void}
 */
function register() {
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");

  if (x && y && z) {
    x.style.left = "-400px";
    y.style.left = "20px";
    z.style.left = "110px";
    if (w) w.style.visibility = "hidden";
    if (b) b.style.color = "#fff";
    if (a) a.style.color = "#000";
  }
}

/**
 * Toggles from registration form back to login form view on login.html portal page.
 * 
 * Uses CSS left positioning to slide forms in/out. Updates button styling
 * to reflect active form. Reveals Google login option. Requires login form,
 * register form, and button elements.
 * 
 * @function login
 * @returns {void}
 */
function login() {
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");

  if (x && y && z) {
    x.style.left = "20px";
    y.style.left = "450px";
    z.style.left = "0px";
    if (w) w.style.visibility = "visible";
    if (a) a.style.color = "#fff";
    if (b) b.style.color = "#000";
  }
}

/**
 * Validates terms & conditions checkbox and enables/disables registration button.
 * 
 * Called when the user checks/unchecks the agreement checkbox on registration form.
 * Applies gradient background when enabled, gray background when disabled.
 * Prevents form submission until user agrees to terms.
 * 
 * @function goFurther
 * @returns {void}
 */
function goFurther() {
  var chk = document.getElementById("chkAgree");
  var btn = document.getElementById('btnSubmit');
  if (chk && btn) {
    if (chk.checked) {
      btn.style.background = 'linear-gradient(to right, #1420be, #3b82f6)';
      btn.disabled = false;
    } else {
      btn.style.background = 'lightgray';
      btn.disabled = true;
    }
  }
}

/**
 * Opens Google sign-in page in a new window/tab.
 * Navigates to Google accounts login URL for OAuth-based authentication.
 * 
 * @function google
 * @returns {void}
 */
function google() {
  window.open("https://accounts.google.com/signin", "_blank");
}

/**
 * Switches visible quiz frame for student IQ quiz navigation.
 * 
 * Hides all quiz frames (f1-f10) and displays only the target frame.
 * Used on student.html to provide multi-frame quiz experience.
 * 
 * Complex Logic: This function iterates through 10 frames and hides each one
 * before showing the target. This ensures only one quiz frame is visible at a time.
 * The numbered IDs allow flexible addition of more quiz frames up to 10.
 * 
 * @function quizt
 * @param {number} frame - Frame number (1-10) to display
 * @returns {void}
 */
function quizt(frame) {
  for (var k = 1; k <= 10; k++) {
    var f = document.getElementById('f' + k);
    if (f) f.style.display = 'none';
  }
  var target = document.getElementById('f' + frame);
  if (target) {
    target.style.display = 'block';
  }
}

/**
 * Initiates quiz by hiding title and showing quiz panel and content.
 * 
 * Triggered when user starts the quiz on student.html page.
 * Hides introductory content and reveals left sidebar (question list) 
 * and right panel (quiz content).
 * 
 * @function startquiz
 * @returns {void}
 */
function startquiz() {
  var title = document.getElementById('title');
  var panel = document.getElementById('panel');
  var left = document.getElementById('left');
  var right = document.getElementById('right');

  if (title) title.style.display = 'none';
  if (panel) panel.style.display = 'inline-flex';
  if (left) left.style.display = 'block';
  if (right) right.style.display = 'block';
}

/**
 * Handles contact form submission with user feedback.
 * 
 * Complex Logic: Prevents default form submission to avoid page reload.
 * Displays success alert to user and clears all form fields after submission.
 * Form data is currently discarded; to capture data, connect to a backend API or
 * email service (like Formspree, EmailJS, or a custom Node.js backend).
 * 
 * @function handleContactSubmit
 * @param {Event} event - Form submission event
 * @returns {void}
 */
function handleContactSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting Athina International School! We have received your inquiry and will get back to you shortly.");
  var form = document.getElementById("contactForm");
  if (form) form.reset();
}

/**
 * Handles newsletter subscription form submission with user feedback.
 * 
 * Complex Logic: Prevents default form submission to avoid page reload.
 * Displays success alert and clears the form. Currently no backend integration.
 * To capture email subscriptions, connect to email marketing service
 * (Mailchimp, SendGrid, etc.) or custom backend endpoint.
 * 
 * @function handleNewsletterSubmit
 * @param {Event} event - Form submission event
 * @returns {void}
 */
function handleNewsletterSubmit(event) {
  event.preventDefault();
  alert("Thank you for subscribing to Athina International School newsletter!");
  event.target.reset();
}
