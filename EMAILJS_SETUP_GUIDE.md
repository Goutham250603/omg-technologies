# 📧 EmailJS Setup - GET EMAILS FROM YOUR WEBSITE

## 🎯 THIS IS IMPORTANT!

Right now, when someone fills your contact form:
- ❌ You DON'T get any email
- ❌ It just shows a success message
- ❌ The enquiry is lost

**After this 5-minute setup:**
- ✅ You GET EMAIL INSTANTLY to oletimahagoutham@gmail.com
- ✅ Every enquiry saved in your Gmail
- ✅ You can reply directly

---

## ⚡ STEP-BY-STEP SETUP:

### **Step 1: Create Account (1 minute)**

1. Go to: **https://dashboard.emailjs.com/sign-up**
2. Click **"Sign up with Google"**
3. Choose: **oletimahagoutham@gmail.com**
4. Allow permissions

---

### **Step 2: Add Email Service (1 minute)**

1. In dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Choose **oletimahagoutham@gmail.com**
6. Allow EmailJS to send emails

✅ **COPY YOUR SERVICE ID** (looks like: `service_abc1234`)
📝 Write it down: Service ID = _______________

---

### **Step 3: Create Email Template (2 minutes)**

1. Click **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name:** OMG Technologies Contact Form

**In "To Email":** 
```
{{to_email}}
```

**Subject Line:**
```
New Enquiry from {{name}} - OMG Technologies
```

**Content (Email Body):**
```
New Contact Form Submission from OMG Technologies Website

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Interest: {{interest}}

Message:
{{message}}

---
Sent from: OMG Technologies Website
Reply to this email to contact the enquirer directly.
```

4. Click **"Save"**

✅ **COPY YOUR TEMPLATE ID** (looks like: `template_xyz5678`)
📝 Write it down: Template ID = _______________

---

### **Step 4: Get Public Key (30 seconds)**

1. Click your **profile icon** (top right)
2. Click **"Account"**
3. Look for **"API Keys"** section
4. Find **"Public Key"**

✅ **COPY YOUR PUBLIC KEY** (looks like: `aBcDeFgHiJkLmNoPqR`)
📝 Write it down: Public Key = _______________

---

## 🔧 UPDATE YOUR WEBSITE CODE:

### **In `script.js` file:**

**Find this section (around line 100):**

```javascript
// Simulate API delay
await new Promise(resolve => setTimeout(resolve, 1500));

showFormMessage('success', 'Thank you...');
contactForm.reset();
```

**REPLACE WITH THIS:**

```javascript
// Send email using EmailJS
await emailjs.send(
    'YOUR_SERVICE_ID',      // ← PUT YOUR SERVICE ID HERE
    'YOUR_TEMPLATE_ID',     // ← PUT YOUR TEMPLATE ID HERE
    {
        to_email: 'oletimahagoutham@gmail.com',
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        message: data.message
    },
    'YOUR_PUBLIC_KEY'       // ← PUT YOUR PUBLIC KEY HERE
);

showFormMessage('success', 'Thank you for your enquiry! We will contact you within 24 hours.');
contactForm.reset();
```

**Example (with fake IDs):**
```javascript
await emailjs.send(
    'service_abc1234',           // Your actual Service ID
    'template_xyz5678',          // Your actual Template ID
    {
        to_email: 'oletimahagoutham@gmail.com',
        name: data.name,
        email: data.email,
        phone: data.phone,
        interest: data.interest,
        message: data.message
    },
    'aBcDeFgHiJkLmNoPqR'        // Your actual Public Key
);
```

---

### **In `index.html` file:**

**Find this section (near the end, before `</body>`):**

```html
<script>
    // Initialize EmailJS
    // emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

**REPLACE WITH:**

```html
<script>
    // Initialize EmailJS
    emailjs.init('YOUR_PUBLIC_KEY');  // ← PUT YOUR PUBLIC KEY HERE
</script>
```

**Example:**
```html
<script>
    emailjs.init('aBcDeFgHiJkLmNoPqR');  // Your actual Public Key
</script>
```

---

## ✅ TEST IT:

1. Upload updated files to GitHub
2. Wait 3-5 minutes for deployment
3. Visit your website
4. Fill contact form with YOUR email
5. Click "Send Message"
6. **Check your Gmail** - you should get email instantly!

---

## 🎉 DONE!

Now every enquiry goes to: **oletimahagoutham@gmail.com**

You can:
- ✅ See all enquiries in Gmail
- ✅ Reply directly from Gmail
- ✅ Keep record of all contacts
- ✅ Get instant notifications

---

## 🆓 FREE TIER:

- **200 emails per month** - FREE
- Perfect for your needs
- Can upgrade later if needed

---

## 🆘 TROUBLESHOOTING:

**Problem: Not receiving emails**
- Check all 3 IDs are correct
- Check EmailJS account is active
- Check template is saved
- Try test email from EmailJS dashboard

**Problem: Error in console**
- Open browser developer tools (F12)
- Check console for error messages
- Verify IDs are in correct format

**Problem: Success message but no email**
- EmailJS not initialized
- Check public key in both places
- Verify Gmail service is connected

---

## 📝 QUICK REFERENCE:

```
Service ID: service_________
Template ID: template_________
Public Key: ________________

Replace in 3 places:
1. script.js (emailjs.send function)
2. index.html (emailjs.init)
```

---

**Need help? Just ask!** 😊
