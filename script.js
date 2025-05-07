let indice = 0;

function moverCarrusel(direccion) {
  const carrusel = document.querySelector('.carrusel');
  const totalImagenes = carrusel.children.length;

  indice += direccion;

  if (indice < 0) {
    indice = totalImagenes - 1;
  } else if (indice >= totalImagenes) {
    indice = 0;
  }

  carrusel.style.transform = `translateX(-${indice * 100}%)`;
}
