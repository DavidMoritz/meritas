// ========================================
// Configuration
// ========================================
const CONFIG = {
    adminEmail: 'davidmoritz@gmail.com',
    // To enable email functionality, sign up for a free account at:
    // https://formspree.io or https://web3forms.com
    // Then replace the formEndpoint below with your endpoint URL
    formEndpoint: null // Set to your Formspree/Web3Forms endpoint
};

// ========================================
// Mobile Navigation Toggle
// ========================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger menu
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active')
            ? 'rotate(45deg) translate(5px, 5px)'
            : 'none';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active')
            ? 'rotate(-45deg) translate(7px, -6px)'
            : 'none';
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');

        // Reset hamburger menu
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// Smooth Scrolling for Navigation Links
// ========================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navbarHeight - 100;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// Contact Form Handling
// ========================================
const contactForm = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company') || 'Not provided',
            message: formData.get('message')
        };

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            if (CONFIG.formEndpoint) {
                // Use configured form service (Formspree, Web3Forms, etc.)
                const response = await fetch(CONFIG.formEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    showFormStatus('success', 'Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } else {
                // Fallback: Use mailto (opens email client)
                const subject = encodeURIComponent(`Contact Form: ${data.name}`);
                const body = encodeURIComponent(
                    `Name: ${data.name}\n` +
                    `Email: ${data.email}\n` +
                    `Company: ${data.company}\n\n` +
                    `Message:\n${data.message}`
                );

                window.location.href = `mailto:${CONFIG.adminEmail}?subject=${subject}&body=${body}`;

                showFormStatus('success',
                    'Opening your email client... If it doesn\'t open automatically, ' +
                    'please email us at ' + CONFIG.adminEmail
                );

                // Don't reset form in case email client doesn't open
                setTimeout(() => {
                    submitButton.textContent = originalButtonText;
                    submitButton.disabled = false;
                }, 2000);

                return; // Skip the finally block for mailto
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('error',
                'Sorry, there was an error sending your message. ' +
                'Please email us directly at ' + CONFIG.adminEmail
            );
        } finally {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }
    });
}

function showFormStatus(type, message) {
    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';

    // Hide status after 5 seconds for success, 8 seconds for error
    const timeout = type === 'success' ? 5000 : 8000;
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, timeout);
}

// ========================================
// Navbar Background on Scroll
// ========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ========================================
// Intersection Observer for Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.service-card, .team-member, .stat'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// Print helpful info to console
// ========================================
console.log('%cMeritas Digital Website', 'color: #004C97; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ in Dallas, TX', 'color: #C1272D; font-size: 14px;');
console.log('\nTo enable email form functionality, configure a form endpoint:');
console.log('1. Sign up at https://formspree.io or https://web3forms.com');
console.log('2. Update CONFIG.formEndpoint in js/main.js');
console.log('\nCurrent admin email:', CONFIG.adminEmail);
