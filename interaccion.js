document.querySelectorAll('.galeria img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`Has hecho clic en ${img.alt}`);
    });
});
