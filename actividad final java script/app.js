// --- 5 ELEMENTOS CLAVE OBTENIDOS DEL DOM ---
const cuerpo = document.getElementById('cuerpo');
const btnColor = document.getElementById('btnColor');
const botonesNav = document.querySelectorAll('.btnNav');
const imagenes = document.querySelectorAll('.img-galeria');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const cerrarModal = document.getElementById('cerrarModal');
const btnToggleFAQ = document.getElementById('btnToggleFAQ');
const faqBox = document.getElementById('faqBox');
const btnEnviar = document.getElementById('btnEnviar');

// FUNCIÓN: Cambio de Color de Fondo
btnColor.addEventListener('click', () => {
    // Alterna la clase CSS que cambia el color a #FFCC99
    cuerpo.classList.toggle('fondo-claro');
});

// FUNCIÓN : Navegación entre Secciones (Scroll)
botonesNav.forEach(boton => {
    boton.addEventListener('click', (e) => {
        const targetId = e.currentTarget.getAttribute('data-target');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// FUNCIÓN : Agrandar Imágenes (Abrir Modal)
imagenes.forEach(img => {
    img.addEventListener('click', (e) => {
        // Pone la fuente de la imagen clickeada en el modal
        modalImg.src = e.target.src;
        // Muestra el modal quitando la clase 'oculto'
        modal.classList.remove('oculto');
    });
});

// Cierre del Modal
cerrarModal.addEventListener('click', () => {
    modal.classList.add('oculto');
});

// FUNCIÓN : Abrir/Cerrar Preguntas (FAQ)
btnToggleFAQ.addEventListener('click', () => {
    // Alterna la visibilidad de la caja de preguntas
    faqBox.classList.toggle('oculto');
});

// FUNCIÓN : Ventana Emergente (Contacto)
btnEnviar.addEventListener('click', () => {
    // Muestra una ventana emergente simple
    alert(' Mensaje enviado! (Ventana Emergente/Alert)');
});