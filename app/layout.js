import './globals.css'

export const metadata = {
  title: 'KaloudasDev Portfolio',
  description: 'Backend Developer specializing in discord architecture, fivem framework development, and high-performance backend systems.',
  icons: {
    icon: [
      { url: 'https://i.imgur.com/KimeRa0.png' },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="cxsecj4yXEVJGOQeTO7gKwA61zJV9FHDpVnIJKDs9hA" />
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com" 
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  )
}