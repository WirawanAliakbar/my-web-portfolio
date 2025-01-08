document.addEventListener('click', function (e) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.top = `${e.pageY - 50}px`;
    effect.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
});
