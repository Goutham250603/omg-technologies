// ========================================
// OMG Technologies - Email Contact Form
// ========================================

console.log('🎯 OMG Technologies Website Loaded');
console.log('📧 Email System: ACTIVE');
console.log('📬 Emails will be sent to: oletimahagoutham@gmail.com');

// Get form elements
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        console.log('📝 Form submitted - processing...');
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            interest: formData.get('interest'),
            message: formData.get('message')
        };
        
        console.log('📋 Form data:', data);
        
        // Get submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Send email using EmailJS
            console.log('📤 Sending email via EmailJS...');
            
            const response = await emailjs.send(
                'service_kv8tjde',           // Service ID
                'OmOR2GelI3vx0o5i8',         // Template ID
                {
                    to_email: 'oletimahagoutham@gmail.com',
                    from_name: data.name,
                    from_email: data.email,
                    from_phone: data.phone,
                    interest: data.interest,
                    message: data.message
                },
                'D2CE4ZpMM3yQrIp7aAA_3'      // Public Key
            );
            
            console.log('✅ SUCCESS! Email sent:', response);
            
            // Show success message
            showMessage('success', '✅ Message sent successfully! We will contact you within 24 hours.');
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('❌ ERROR sending email:', error);
            
            // Show error message
            showMessage('error', '❌ Failed to send message. Please email us directly at oletimahagoutham@gmail.com or call +91 8309128506');
            
        } finally {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Show message function
function showMessage(type, text) {
    if (!formMessage) return;
    
    formMessage.className = 'form-message ' + type;
    formMessage.textContent = text;
    formMessage.style.display = 'block';
    
    // Auto hide after 10 seconds
    setTimeout(function() {
        formMessage.style.display = 'none';
    }, 10000);
}

// Simple navigation
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

console.log('✅ All systems ready!');
