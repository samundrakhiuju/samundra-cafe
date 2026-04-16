/* --- SAMUNDRA CAFÉ | Dynamic Functionality --- */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SMOOTH SCROLLING FOR NAVIGATION
    // Ensures clicking "Menu" or "About" slides smoothly to the section
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset of 70px to account for the fixed navbar height
                const offsetPosition = targetElement.offsetTop - 70;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. SCROLL REVEAL ANIMATION (INTERSECTION OBSERVER)
    // Triggers the "reveal" class on menu cards when they enter the viewport
    const observerOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                // Once revealed, we can stop observing this specific element
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        revealObserver.observe(card);
    });

    // 3. DYNAMIC NAVBAR STYLING
    // Shrinks the navbar and adds a solid background when the user scrolls down
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

});