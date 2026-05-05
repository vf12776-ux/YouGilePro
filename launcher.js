const TARGET = 'https://www.yougile.com/board/6ld5e6qu67te';

function openInSystemBrowser() {
    const ua = navigator.userAgent;
    
    // iOS: PWA открывает Safari автоматически, так как домен другой
    if (/iPhone|iPad|iPod/.test(ua) && !window.MSStream) {
        window.location.href = TARGET;
        return;
    }
    
    // Android: Intent на Chrome
    if (/Android/.test(ua)) {
        const path = TARGET.replace(/^https?:\/\//, '');
        const intent = `intent://${path}#Intent;scheme=https;package=com.android.chrome;end;`;
        window.location.href = intent;
        setTimeout(() => { window.location.href = TARGET; }, 800);
        return;
    }
    
    // Десктоп или тестирование
    window.location.href = TARGET;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', openInSystemBrowser);
} else {
    openInSystemBrowser();
}

document.getElementById('manualLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = TARGET;
});