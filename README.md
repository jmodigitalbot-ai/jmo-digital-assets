# JMO Digital Assets Website

A professional, single-page website for JMO Digital Assets, LLC - a boutique performance marketing agency specializing in digital products and services.

## Overview

This website serves as a legitimacy page for ad networks, affiliate networks, and customers to verify JMO Digital Assets as a legitimate, established business entity. The site features a clean, modern design with a dark/neutral theme and includes all necessary legal pages for compliance.

## Features

- **Single-page layout** with smooth navigation
- **Professional design** with dark theme and gradient accents
- **Mobile-responsive** across all devices
- **Legal pages** (Privacy Policy, Terms of Service, Disclaimer)
- **Contact form** with email integration
- **Git repository** initialized for version control

## Sections

1. **Hero** - Clear value proposition and agency introduction
2. **Services** - 6 core service offerings with descriptions
3. **About** - Agency philosophy and differentiators
4. **Contact** - Contact form and business information
5. **Footer** - Legal links, contact info, and copyright

## Tech Stack

- **Vite** - Build tool and development server
- **React** - Frontend framework with TypeScript
- **TailwindCSS v4** - Utility-first CSS framework
- **React Router** - Client-side routing for legal pages

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm installed

### Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/jmodigital/clawd/projects/jmo-digital-assets/app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist/` directory

3. Preview the production build:
   ```bash
   npm run preview
   ```

## Deployment Options

### Option 1: Vercel (Recommended)
1. Push the repository to GitHub/GitLab
2. Connect to Vercel
3. Deploy with zero configuration
4. Set up custom domain: `jmodigitalassets.com`

### Option 2: Netlify
1. Push the repository to GitHub/GitLab
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set up custom domain

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder to your web server
3. Configure server to serve `index.html` for all routes (SPA routing)

## Git Commands

- `git status` - Check repository status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push origin main` - Push to remote repository

## Customization

### Updating Business Information
- Update contact email in `src/components/Footer.tsx` and `src/components/sections/Contact.tsx`
- Modify service descriptions in `src/components/sections/Services.tsx`
- Update agency philosophy in `src/components/sections/About.tsx`

### Changing Colors
Edit the `primary` color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... etc
  }
}
```

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## Legal Compliance

The website includes three essential legal pages:
1. **Privacy Policy** (`/privacy`) - GDPR compliant data handling
2. **Terms of Service** (`/terms`) - Website usage terms
3. **Disclaimer** (`/disclaimer`) - Performance claims and limitations

All legal pages are linked in the footer and can be updated as needed.

## Performance

- Production build optimized by Vite
- CSS minified and purged by TailwindCSS
- Images optimized (none currently, but ready for addition)
- Lazy loading ready for future components

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© 2026 JMO Digital Assets, LLC. All rights reserved.

## Contact

For questions about this website or JMO Digital Assets services:
- Email: support@jmodigitalassets.com
- Website: jmodigitalassets.com