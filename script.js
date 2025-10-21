document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.link-button');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            this.style.transform = 'scale(0.98)';
            this.style.background = 'var(--button-hover)';
            
            setTimeout(() => {
                window.open(href, '_blank', 'noopener,noreferrer');
            }, 150);
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.background = '';
            }, 300);
        });
        
        link.addEventListener('touchstart', function() {
            this.style.background = 'var(--button-hover)';
        });
        
        link.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.background = '';
            }, 200);
        });
    });
    
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }
        
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i'))) {
            e.preventDefault();
            return false;
        }
    });
    
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful');
            }).catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
    });
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            window.scrollTo(0, 0);
        }, 0);
    });
    
    if ('connection' in navigator) {
        const connection = navigator.connection;
        if (connection && connection.saveData === true) {
            document.body.classList.add('save-data');
        }
    }
    
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
        if (type === 'contextmenu' || type === 'rightclick') {
            return;
        }
        originalAddEventListener.call(this, type, listener, options);
    };
    
    Object.defineProperty(navigator, 'webdriver', {
        get: () => undefined,
    });
    
    Object.defineProperty(document, 'hidden', {
        get: () => false,
    });
    
    const style = document.createElement('style');
    style.textContent = `
        * {
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
        }
    `;
    document.head.appendChild(style);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
}