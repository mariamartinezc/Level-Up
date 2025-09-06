// filtros.js
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un poco más para asegurar que todo esté cargado
    setTimeout(inicializarFiltros, 100);
});

function inicializarFiltros() {
    try {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productItems = document.querySelectorAll('.producto-item');
        const productosContainer = document.getElementById('productos-container');

        if (!filterButtons.length) throw new Error('No se encontraron botones de filtro');
        if (!productItems.length) throw new Error('No se encontraron productos');
        if (!productosContainer) throw new Error('No se encontró el contenedor de productos');

        filterButtons.forEach(button => {
            button.addEventListener('click', manejarFiltro);
        });

        console.log('Filtros inicializados correctamente');
    } catch (error) {
        console.error('Error al inicializar filtros:', error);
    }
}

function manejarFiltro() {
    const category = this.getAttribute('data-category');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.producto-item');
    const productosContainer = document.getElementById('productos-container');

    // Remover la clase 'active' de todos los botones
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Agregar la clase 'active' al botón clickeado
    this.classList.add('active');

    // Mostrar/ocultar productos según la categoría
    productItems.forEach(item => {
        if (category === 'todos' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    // Reorganizar los productos visibles
    reorganizarProductos();
}

function reorganizarProductos() {
    const productItems = document.querySelectorAll('.producto-item');
    const productosContainer = document.getElementById('productos-container');
    
    // Obtener todos los productos visibles
    const visibleProducts = Array.from(productItems).filter(item => 
        item.style.display !== 'none'
    );
    
    // Limpiar el contenedor
    while (productosContainer.firstChild) {
        productosContainer.removeChild(productosContainer.firstChild);
    }
    
    // Agregar los productos visibles en orden
    visibleProducts.forEach(product => {
        productosContainer.appendChild(product);
    });
}