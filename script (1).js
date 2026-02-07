// ========================================
// OMG Technologies - Main JavaScript
// ========================================

// Initialize EmailJS once (with your Public Key)
emailjs.init({
    publicKey: "D2CE4ZpMM3yQrIp7aAA_3"
});

// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
       
        // Only handle internal links
        if (href.startsWith('#')) {
            e.preventDefault();
           
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
           
            if (targetSection) {
                // Close mobile menu if open
                navMenu.classList.remove('active');
               
                // Smooth scroll to section
                const offsetTop = targetSection.offsetTop - 90;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
               
                // Update active link
                updateActiveLink(link);
            }
        }
    });
});

// Update active navigation link
function updateActiveLink(activeLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Highlight active section on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
   
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
       
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (correspondingLink) {
                updateActiveLink(correspondingLink);
            }
        }
    });
});

// ========================================
// Projects Filter Functionality
// ========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
       
        const filterValue = button.getAttribute('data-filter');
       
        // Filter projects with animation
        projectCards.forEach((card, index) => {
            const category = card.getAttribute('data-category');
           
            if (filterValue === 'all' || category === filterValue) {
                setTimeout(() => {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                }, index * 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Initialize project cards animation state
projectCards.forEach(card => {
    card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// ========================================
// Contact Form Handling - REAL EmailJS
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
   
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
   
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.disabled = true;
   
    try {
        // ── REAL EmailJS send ────────────────────────────────────────────────
        await emailjs.send(
            'service_kv8tjde',              // Service ID
            'OmOR2GelI3vx0o5i8',            // Template ID
            {
                name:     data.name     || '',
                email:    data.email    || '',
                phone:    data.phone    || '',
                category: data.category || '',
                domain:   data.domain   || '',
                message:  data.message  || ''
            }
        );
       
        // Success
        showFormMessage('success', 'Thank you for your enquiry! We will get back to you within 24 hours.');
       
        // Reset form
        contactForm.reset();
       
    } catch (error) {
        // Error
        showFormMessage('error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
        console.error('EmailJS error:', error);
    } finally {
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

function showFormMessage(type, message) {
    formMessage.className = `form-message ${type}`;
    formMessage.textContent = message;
   
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.opacity = '0';
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.style.opacity = '1';
        }, 300);
    }, 5000);
}

// ========================================
// Scroll Animations (Intersection Observer)
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

const animateElements = document.querySelectorAll(`
    .feature-card,
    .domain-card,
    .project-card,
    .workshop-card,
    .team-card,
    .why-card,
    .testimonial-card,
    .benefit-item,
    .contact-card
`);

animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ========================================
// Smooth Scroll to Top on Page Load
// ========================================
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

// ========================================
// Dynamic Statistics Counter
// ========================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
   
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + '+';
    }, 16);
}

const heroStats = document.querySelectorAll('.stat-number');
let countersAnimated = false;

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
            heroStats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                animateCounter(stat, number, 2000);
            });
            countersAnimated = true;
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ========================================
// Workshop Cards Hover Effect
// ========================================
const workshopCards = document.querySelectorAll('.workshop-card');
workshopCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        workshopCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.style.opacity = '0.7';
            }
        });
    });
   
    card.addEventListener('mouseleave', () => {
        workshopCards.forEach(otherCard => {
            otherCard.style.opacity = '1';
        });
    });
});

// ========================================
// Lazy Loading Images
// ========================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
   
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
   
    images.forEach(img => imageObserver.observe(img));
}
lazyLoadImages();

// ========================================
// Parallax Effect for Hero Background
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
   
    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// Form Field Validation
// ========================================
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#ff0000';
        } else {
            input.style.borderColor = '';
        }
    });
   
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

// Email and Phone Validation
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

if (emailInput) {
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = '#ff0000';
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9+\-\s()]/g, '');
    });
}

// ========================================
// Dynamic Year in Footer
// ========================================
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2026', currentYear);
}

// ========================================
// Prevent Default Form Submission on Enter (except textarea)
// ========================================
contactForm.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// ========================================
// Add Loading Class to Body + Hero stagger
// ========================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
   
    const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-buttons, .hero-stats');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});

// ========================================
// External Links - open in new tab
// ========================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c OMG Technologies ', 'background: linear-gradient(135deg, #0A4D92, #00D9FF); color: white; font-size: 24px; padding: 10px 20px; font-weight: bold;');
console.log('%c Engineering • Innovation • Intelligence ', 'color: #0A4D92; font-size: 14px; font-weight: bold;');
console.log('Website developed with ❤️ for innovation and education');

// ========================================
// Performance Monitoring (Development)
// ========================================
if (window.performance) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

// ========================================
// QR Code Generation & Management
// ========================================
let qrCodeInstance = null;

function openQRPopup() {
    const popup = document.getElementById('qrPopup');
    popup.classList.add('active');
    document.body.classList.add('qr-open');
   
    if (!qrCodeInstance) {
        generateQRCode();
    }
}

function closeQRPopup() {
    const popup = document.getElementById('qrPopup');
    popup.classList.remove('active');
    document.body.classList.remove('qr-open');
}

function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    const websiteUrl = window.location.href;
   
    document.getElementById('websiteUrl').textContent = websiteUrl;
   
    qrCodeInstance = new QRCode(qrcodeContainer, {
        text: websiteUrl,
        width: 256,
        height: 256,
        colorDark: "#0A4D92",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function downloadQR() {
    const canvas = document.querySelector('#qrcode canvas');
    if (canvas) {
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'OMG-Technologies-QR-Code.png';
        link.href = url;
        link.click();
    }
}

// Close QR popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('qrPopup');
    if (e.target === popup) {
        closeQRPopup();
    }
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQRPopup();
    }
});

// ========================================
// Enhanced Mobile Experience
// ========================================
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    const qrBtn = document.querySelector('.qr-float');
   
    if (whatsappBtn && qrBtn) {
        whatsappBtn.classList.add('mobile');
        qrBtn.classList.add('mobile');
    }
}

// ========================================
// Additional fade-in for domain cards
// ========================================
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.domain-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeInObserver.observe(card);
});

// ========================================
// Final log
// ========================================
console.log('🎉 OMG Technologies - All features loaded successfully!');
console.log('📱 WhatsApp: Ready');
console.log('📱 QR Code: Ready');
console.log('📧 Contact Form: EmailJS ready (service_kv8tjde)');
