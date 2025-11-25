# Meritas Digital Website

The official website for Meritas Digital, LLC - a Dallas-based software development company.

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks, lightweight and fast
- **Google Fonts** - Inter font family

## Project Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── public/
│   ├── meritas_digital_logo.jpeg
│   └── meritas_digital_cover.jpeg
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## Features

- **Single-page design** with smooth scrolling navigation
- **Responsive** layout for mobile, tablet, and desktop
- **Modern minimalist** design with deep blue and red accent colors
- **Contact form** with email functionality
- **Team section** with LinkedIn profile links
- **Services showcase** highlighting the development lifecycle
- **Animated elements** that fade in on scroll

## Local Development

### Option 1: Python HTTP Server

```bash
cd website
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Option 2: Node.js Serve

```bash
cd website
npm install -g serve
npm run serve-alt
```

### Option 3: VS Code Live Server

Install the "Live Server" extension in VS Code and right-click `index.html` → "Open with Live Server"

## Contact Form Setup

The contact form currently uses a `mailto:` fallback that opens the user's email client. For production, you should configure a form service:

1. Sign up for a free account at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com)
2. Get your form endpoint URL
3. Update `CONFIG.formEndpoint` in `js/main.js`:

```javascript
const CONFIG = {
    adminEmail: 'davidmoritz@gmail.com',
    formEndpoint: 'YOUR_ENDPOINT_HERE' // Add your endpoint
};
```

## Deploying to GitHub Pages

### Initial Setup

1. Initialize git repository (if not already done):
```bash
cd website
npm install
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Create a `gh-pages` branch
- Push the website files to that branch
- GitHub will automatically serve the site

### Custom Domain Setup (Optional)

1. Create a `CNAME` file in the website directory:
```bash
echo "meritasdigital.com" > CNAME
```

2. In your domain registrar's DNS settings, add:
   - A record pointing to GitHub's IP addresses
   - Or CNAME record pointing to `<username>.github.io`

3. In your GitHub repository settings, configure the custom domain

### Updating the Site

After making changes:

```bash
npm run deploy
```

## Color Scheme

Colors extracted from the Meritas Digital logo:

- **Primary Blue**: `#004C97`
- **Primary Red**: `#C1272D`
- **White**: `#FFFFFF`
- **Off-white**: `#F8F9FA`
- **Grays**: Various shades for text and backgrounds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - See root LICENSE file
