// Scroll reveal observer animation
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

// Active navigation link highlighter on scroll
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

window.addEventListener('scroll', function() {
  scrollAppear();
  highlightActiveNav();
});

// Mobile side menu toggle for main page
function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if (!menu) return;
  
  if (side === 0) {
    menu.style.transform = 'translateX(0)';
  } else {
    menu.style.transform = 'translateX(-100%)';
  }
}

// Tab switcher for subject pages mobile nav
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

// Login & Registration toggle for login.html
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

// Checkbox agreement function
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

function google() {
  window.open("https://accounts.google.com/signin", "_blank");
}

// Quiz switching function
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

// Form submit handlers
function handleContactSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting Athina International School! We have received your inquiry and will get back to you shortly.");
  var form = document.getElementById("contactForm");
  if (form) form.reset();
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  alert("Thank you for subscribing to Athina International School newsletter!");
  event.target.reset();
}
