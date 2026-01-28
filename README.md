                                                                         # OMG Technologies Website

A professional, modern website for OMG Technologies - Engineering • Innovation • Intelligence

## 🚀 Features
                                      
- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations                             
- **Modular Components** - Easy to customize and extend
- **SEO Optimized** - Structured markup for better search engine visibility
- **Fast Loading** - Optimized assets and efficient code
- **Accessible** - WCAG compliant for better accessibility

## 📋 Sections

1. **Home/Hero** - Eye-catching introduction with company tagline
2. **About** - Company overview and mission
3. **Domains/Services** - 9 technology domains with detailed descriptions
4. **Projects** - Portfolio showcase with filtering capability
5. **Workshops & Training** - Training programs for different audiences
6. **Team** - Team member profiles (expandable)
7. **Why Choose Us** - Unique value propositions and testimonials
8. **Contact** - Contact form with validation

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (Vanilla)** - No dependencies for better performance
- **Google Fonts** - Orbitron & IBM Plex Sans

## 📁 File Structure

```
omg-technologies/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── logo.png           # Company logo (you need to add this)
└── README.md          # This file
```

## 🎨 Customization Guide

### 1. Adding Your Logo

Replace `logo.png` with your actual logo file. Recommended specifications:
- Format: PNG with transparent background
- Size: 500x500 pixels (will be scaled down automatically)
- File size: < 100KB for optimal loading

### 2. Updating Colors

Edit the CSS variables in `styles.css` (lines 10-20):

```css
:root {
    --primary-blue: #0A4D92;      /* Main brand color */
    --primary-dark: #002B5C;      /* Dark variant */
    --accent-cyan: #00D9FF;       /* Accent color 1 */
    --accent-electric: #00FF88;   /* Accent color 2 */
}
```

### 3. Adding Content

#### Adding Projects:

In `index.html`, duplicate a `.project-card` div:

```html
<div class="project-card" data-category="iot">
    <div class="project-image">
        <div class="project-overlay">
            <span class="project-category">IoT</span>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description here...</p>
        <div class="project-tags">
            <span>Tag1</span>
            <span>Tag2</span>
        </div>
    </div>
</div>
```

#### Adding Team Members:

Duplicate a `.team-card` div and update the information.

#### Adding Workshops:

Duplicate a `.workshop-card` div with all required information.

### 4. Contact Form Integration

The contact form currently logs data to console. To integrate with a backend:

**Option 1: EmailJS (Recommended for simple setup)**

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Add this script before closing `</body>`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```
3. Replace the form submission code in `script.js`:

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
    .then(() => {
        showFormMessage('success', 'Thank you! We will contact you soon.');
    })
    .catch((error) => {
        showFormMessage('error', 'Error sending message.');
    });
```

**Option 2: Custom Backend API**

Replace the fetch URL in `script.js`:

```javascript
const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

**Option 3: Formspree**

1. Sign up at [formspree.io](https://formspree.io/)
2. Update form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 5. Adding Real Project Images

Replace the gradient backgrounds in `.project-image` with actual images:

```css
.project-card:nth-child(1) .project-image {
    background: url('images/project1.jpg') center/cover;
}
```

## 🚀 Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch and root folder
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Drag and drop your folder
3. Custom domain available
4. Automatic HTTPS

### Option 3: Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy automatically
4. Custom domain support

### Option 4: Traditional Web Hosting

1. Purchase domain from providers like:
   - GoDaddy
   - Namecheap
   - Google Domains

2. Get hosting from:
   - Hostinger
   - Bluehost
   - SiteGround

3. Upload files via FTP using FileZilla:
   - Connect to your hosting
   - Upload all files to `public_html` folder

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance Optimization

### Current Optimizations:
- Minified CSS (can be further compressed)
- Efficient JavaScript
- CSS animations instead of JS when possible
- Lazy loading ready
- Optimized images recommended

### Further Improvements:
1. **Minify Files**: Use tools like:
   - [CSS Minifier](https://cssminifier.com/)
   - [JavaScript Minifier](https://javascript-minifier.com/)

2. **Compress Images**: Use:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)

3. **Enable Caching**: Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

## 🔐 Security Recommendations

1. **Form Protection**: Add CAPTCHA to prevent spam
2. **HTTPS**: Always use SSL certificate
3. **Content Security Policy**: Add CSP headers
4. **Input Validation**: Validate on both frontend and backend

## 📊 Analytics Integration

### Google Analytics:

Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR_GA_ID');
</script>
```

## 🎯 SEO Optimization

### Already Included:
- Semantic HTML5 tags
- Descriptive alt texts (add to images)
- Proper heading hierarchy
- Meta viewport tag

### Add These:

```html
<meta name="description" content="OMG Technologies - Engineering, Innovation, Intelligence. Expert training in Embedded Systems, IoT, Robotics, EV Systems, and more.">
<meta name="keywords" content="embedded systems, IoT, robotics, machine learning, Hyderabad, engineering training">
<meta name="author" content="OMG Technologies">

<!-- Open Graph for Social Media -->
<meta property="og:title" content="OMG Technologies">
<meta property="og:description" content="Engineering • Innovation • Intelligence">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OMG Technologies">
<meta name="twitter:description" content="Engineering • Innovation • Intelligence">
<meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg">
```

## 📞 Support & Contact

For website customization or technical support:

- **Email**: oletimahagoutham@gmail.com
- **Phone**: +91 8309128506
- **Location**: Hyderabad, Telangana, India

## 📝 License

This website template is created for OMG Technologies. All rights reserved.

## 🤝 Contributing

To add new features or improve the website:

1. Create a backup of current files
2. Make your changes
3. Test thoroughly on multiple devices
4. Document your changes
5. Deploy to production

## 📚 Resources

- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility](https://www.w3.org/WAI/)

## 🎓 Training & Workshops

OMG Technologies offers comprehensive training in:
- Embedded Systems
- IoT Development
- Robotics & ROS
- Electric Vehicle Systems
- Machine Learning & AI
- Industrial Automation
- And more...

Visit the website or contact us to learn more!

---

**Built with ❤️ for Innovation and Education**

*Last Updated: January 2026*
