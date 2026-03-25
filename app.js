const inicio = document.getElementById('inicio');
const ejercicios = document.getElementById('ejercicios');
const rutinas = document.getElementById('rutinas');
const progreso = document.getElementById('progreso');

const contenido = document.querySelector('.contenido');
const ejerciciosSection = document.querySelector('.ejercicios');
const rutinasSection = document.querySelector('.rutinas');
const progresoSection = document.querySelector('.progreso');

inicio.addEventListener('click', () => {
  contenido.style.display = 'block';
  ejerciciosSection.style.display = 'none';
  rutinasSection.style.display = 'none';
  progresoSection.style.display = 'none';
});

ejercicios.addEventListener('click', () => {
  contenido.style.display = 'none';
  ejerciciosSection.style.display = 'block';
  rutinasSection.style.display = 'none';
  progresoSection.style.display = 'none';
});

rutinas.addEventListener('click', () => {
  contenido.style.display = 'none';
  ejerciciosSection.style.display = 'none';
    rutinasSection.style.display = 'block';
    progresoSection.style.display = 'none';
});

progreso.addEventListener('click', () => {
  contenido.style.display = 'none';
  ejerciciosSection.style.display = 'none';
  rutinasSection.style.display = 'none';
  progresoSection.style.display = 'block';
})