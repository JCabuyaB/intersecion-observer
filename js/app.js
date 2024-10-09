// capturar elementos
const imagen1 = document.getElementById("imagen1");
const imagen2 = document.getElementById("imagen2");

// funcion a ejecutar por el observador
const cargarImagen = (entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
};

// definir observador
const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "100px 0px 0px 0px",
    threshold: 1,
});

// elementos a observar
observador.observe(imagen1);
observador.observe(imagen2);