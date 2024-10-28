document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
        menuToggle.style.color = menu.classList.contains('active') ? '#000' : '#fff'; // Cambia el color del ícono
    });
});
