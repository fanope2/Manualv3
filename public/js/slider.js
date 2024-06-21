var index = 0;
var imagenes = document.querySelectorAll('.slider img');
var totalImagenes = imagenes.length;

function mostrarImagen(indice) {
     /*Mostrara las imagenes que corresponde al indice */
     for (var i = 0; i < imagenes.length; i++) {
          if (i === indice) {
               imagenes[i].classList.add('active');
          } else {
               imagenes[i].classList.remove('active');
          }
     }
}

function siguienteSlide() {
     index = (index + 1) % totalImagenes;
     mostrarImagen(index);
}

function anteriorSlide() {
     index = (index - 1 + totalImagenes) % totalImagenes;
     mostrarImagen(index);
}

/*Se mostrara la primera imagen cuando se carguela pagina */
mostrarImagen(index);

/* Esto cambiara la imagen cada 5 s */
setInterval(siguienteSlide, 5000);