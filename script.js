// Efek tambahan: sedikit konfeti hati saat halaman dibuka
window.addEventListener('load', () => {
  const symbols = ['💗', '💕', '✨', '💖'];
  for (let i = 0; i < 12; i++) {
    const el = document.createElement('div');
    el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    el.style.position = 'fixed';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '-30px';
    el.style.fontSize = (14 + Math.random() * 14) + 'px';
    el.style.zIndex = '5';
    el.style.pointerEvents = 'none';
    el.style.opacity = '0';
    el.style.transition = `transform ${2.5 + Math.random()*2}s linear, opacity .4s`;
    document.body.appendChild(el);

    setTimeout(() => {
      el.style.opacity = '.75';
      el.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random()*360}deg)`;
    }, 100 + i * 100);

    setTimeout(() => el.remove(), 5000);
  }
});
