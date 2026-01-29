# 📧 EmailJS Setup Guide - GET EMAILS FROM YOUR WEBSITE

## 🎯 WHY YOU NEED THIS:
Right now, when someone fills your contact form, you DON'T get the email.  
After this 5-minute setup, you'll get INSTANT emails to: oletimahagoutham@gmail.com

---

## ⚡ STEP-BY-STEP SETUP:

### Step 1: Sign Up (1 minute)
1. Go to: **https://www.emailjs.com**
2. Click **"Sign Up Free"**
3. Sign up with Google (use: oletimahagoutham@gmail.com)

### Step 2: Add Email Service (1 minute)
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Allow EmailJS to access Gmail
6. **SAVE YOUR SERVICE ID** (looks like: `service_abc123`)

### Step 3: Create Email Template (2 minutes)
1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Settings:**
   - Name: "OMG Technologies Contact Form"
4. **Template Content:**

**Subject Line:**
```
New Enquiry from {{name}} - OMG Technologies
```

**Email Body:**
```
New Contact Form Submission

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Enquiry Type: {{category}}
Technology Domain: {{domain}}

Message:
{{message}}

---
This email was sent from OMG Technologies website contact form.
Reply directly to this email to contact the enquirer.
```

5. Click **"Save"**
6. **SAVE YOUR TEMPLATE ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key (30 seconds)
1. Click **"Account"** (top right)
2. Click **"General"**
3. Find **"Public Key"**
4. **SAVE YOUR PUBLIC KEY** (looks like: `abc123XYZ456`)

---

## 📝 YOUR 3 IDS (Write them down):

```
Service ID: service_________
Template ID: template_________
Public Key: ________________
```

---

## 🔧 UPDATE YOUR WEBSITE:

### In `script.js` file, find line ~90:

**REPLACE THIS:**
```javascript
// Simulate API delay
await new Promise(resolve => setTimeout(resolve, 1500));

showFormMessage('success', 'Thank you for your enquiry! We will get back to you within 24 hours.');
contactForm.reset();
```

**WITH THIS (using YOUR IDs):**
```javascript
// Send email using EmailJS
await emailjs.send(
    'YOUR_SERVICE_ID',      // ← Put your Service ID here
    'YOUR_TEMPLATE_ID',     // ← Put your Template ID here
    {
        name: data.name,
        email: data.email,
        phone: data.phone,
        category: data.category,
        domain: data.domain,
        message: data.message
    },
    'YOUR_PUBLIC_KEY'       // ← Put your Public Key here
);

showFormMessage('success', 'Thank you for your enquiry! We will get back to you within 24 hours.');
contactForm.reset();
```

### In `index.html`, find line ~940 (before `</body>`):

**ADD THIS (using YOUR Public Key):**
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_PUBLIC_KEY'); // ← Put your Public Key here
</script>
```

---

## ✅ TEST IT:

1. Upload updated files to GitHub
2. Wait 3 minutes
3. Visit your website
4. Fill contact form with YOUR email
5. Submit
6. Check your Gmail - you should get email instantly!

---

## 🎉 DONE!

Now whenever someone contacts you through the website:
- ✅ You get instant email
- ✅ All their details included
- ✅ You can reply directly from Gmail
- ✅ Professional and reliable

## 📊 FREE TIER:

- 200 emails per month FREE
- Perfect for your needs
- Can upgrade later if needed

---

**Need help? Just ask!** 😊
