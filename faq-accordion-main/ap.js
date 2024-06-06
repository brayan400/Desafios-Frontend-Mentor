const desplegables = document.querySelectorAll('.desplegable');

desplegables.forEach((desplegable) => {
  const titulo = desplegable.querySelector('.titulo-section');
  const contenido = desplegable.querySelector('.contenedor-texto');

  titulo.addEventListener('click', () => {
    desplegable.classList.toggle('active');
  });
});