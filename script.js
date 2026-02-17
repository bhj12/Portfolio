// ===== Original: Hide navbar collapse on link click =====
let nav = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".navbar-collapse.collapse");
nav.forEach(function(a){
    a.addEventListener("click", () => {
        collapse.classList.remove("show");
    });
});

// ===== Smooth Scroll for Anchor Links (with header offset) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // prevent default jump
        const targetId = this.getAttribute('href');
        if (targetId === "#") return; // ignore empty links
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Adjust for fixed header height (70px is approximate; you can change it)
            const headerOffset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ===== Active Menu Highlight on Scroll =====
const sections = document.querySelectorAll("section[id]"); // all sections with an ID
window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // offset for activation zone
        const sectionId = section.getAttribute("id");
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add("active");
            } else {
                navLink.classList.remove("active");
            }
        }
    });
});

// ===== Add/Remove Header Shadow on Scroll =====
const header = document.querySelector(".header-wrapper .navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

// ===== (Optional) Preloader or other animations can be added here =====
// Example: Fade-in sections on scroll – if you want more effects later
