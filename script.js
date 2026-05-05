/* --- SAMUNDRA CAFÉ | Dynamic Functionality --- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLLING
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetPosition = targetElement.offsetTop - 70;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. SCROLL REVEAL ANIMATION
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-card').forEach(card => {
        revealObserver.observe(card);
    });

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 5%";
            navbar.style.background = "rgba(255, 255, 255, 1)";
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.12)";
        } else {
            navbar.style.padding = "15px 5%";
            navbar.style.background = "rgba(255, 255, 255, 0.98)";
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
        }
    });

    // 4. ACTIVE NAV LINK HIGHLIGHT (NEW 🔥)
    const sections = document.querySelectorAll("section, header");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("nav-active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("nav-active");
            }
        });
    });

    // 5. SOCIAL ICON CLICK FEEDBACK (SUBTLE UX 🔥)
    const socialIcons = document.querySelectorAll('.social-icons a');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.style.transform = "scale(0.9)";
            setTimeout(() => {
                icon.style.transform = "scale(1.2)";
            }, 100);
        });
    });

});
