'use client';

export default function Footer() {
  return (
    <div className="footer">
      <div>© 2026 KaloudasDev · All rights reserved.</div>
      <div className="footer-links">
        <a href="https://github.com/KaloudasDev" target="_blank" rel="noopener">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://discord.com/users/1069279857072160921" target="_blank" rel="noopener">
          <i className="fab fa-discord"></i> Discord
        </a>
        <a href="https://ko-fi.com/kaloudasdev" target="_blank" rel="noopener">
          <i className="fas fa-mug-hot"></i> Ko-fi
        </a>
        <a href="#" style={{ fontFamily: 'JetBrains Mono' }}>GPG</a>
      </div>
    </div>
  );
}