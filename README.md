## KaloudasDev LinkHub

A modern, minimalist link hub website showcasing development work and social connections with real-time Discord integration. Built with Next.js 14 for optimal performance, user experience, and seamless deployment workflows.

## Features

- **Real-time Discord Status** - Live presence tracking with Spotify and game activity
- **Modern Dark Theme** - Professional gradient orbs with glass morphism effects
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Next.js 14 with optimized builds and image optimization
- **Security Enhanced** - Comprehensive security policies and best practices
- **Cross-Browser Compatible** - Works seamlessly across all modern browsers
- **Professional Layout** - Clean organization of social and portfolio links

## Quick Start

```bash
# Clone the repository
git clone https://github.com/KaloudasDev/linkhub-website.git

# Navigate to project directory
cd linkhub-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## Technology Stack

| Component | Technology |
|-----------|------------|
| Framework | Next.js 14 |
| Language | JavaScript (ES6+) |
| Styling | CSS3 with CSS Variables |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Inter, JetBrains Mono) |
| Discord API | Lanyard REST API |
| Deployment | Vercel (optimized) |

## Project Structure

```
linkhub-website/
├── app/
│   ├── components/
│   │   ├── Footer.js        # Footer component with social links
│   │   └── Navbar.js         # Navigation bar component
│   ├── globals.css           # Global styles with dark theme
│   ├── layout.js             # Root layout with metadata
│   └── page.js               # Main page with Discord integration
├── .gitignore                 # Git ignore configuration
├── CHANGELOG.md               # Version history
├── CODE_OF_CONDUCT.md         # Community guidelines
├── CONTRIBUTING.md            # Contribution guidelines
├── eslint.config.mjs          # ESLint configuration
├── jsconfig.json              # JavaScript configuration
├── LICENSE                    # MIT License
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies and scripts
└── SECURITY.md                # Security policy
```

## Features in Detail

### Real-time Discord Integration
- Live status tracking (online, idle, dnd, offline)
- Spotify listening activity with album art
- Game activity display
- Auto-refresh every 5 seconds

### Professional Design
- Animated gradient orbs in background
- Glass morphism cards with backdrop blur
- Smooth hover animations
- Consistent typography hierarchy
- Mobile-first responsive approach

## Configuration

### Environment Variables
No environment variables required! The Discord user ID is directly configured in `page.js`.

### Customization Options

**Update Discord User ID:**
```javascript
// In app/page.js
const DISCORD_USER_ID = 'YOUR_DISCORD_USER_ID';
```

**Modify Social Links:**
```jsx
// In app/page.js - Update href attributes in the links section
<a href="YOUR_KOFI_URL" ...>
<a href="YOUR_DISCORD_URL" ...>
<a href="YOUR_GITHUB_URL" ...>
```

**Change Color Scheme:**
```css
/* In app/globals.css - Modify CSS variables */
:root {
    --accent-primary: #dbf602;  /* Change accent color */
    --primary-dark: #0a0f1e;      /* Change background */
}
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

For security issues, please read [SECURITY.md](SECURITY.md) and report vulnerabilities to kaloudasdev@gmail.com.

**© 2026 KaloudasDev · All rights reserved.**
