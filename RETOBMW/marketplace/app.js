
window.onload = function cargarCartas() {
    obtenerProductosFinales(); // Cargar todos los productos al principio
}

// Función para el filtro
function filtro(modelo) {
    // Si el filtro es "todos", pasamos una cadena vacía para que se muestren todos los productos
    obtenerProductosFinales(modelo === 'todos' ? '' : modelo);
}

async function obtenerProductosFinales(modelo = '') {
    // Seleccionamos el contenedor de las cartas
    var carta = document.querySelector("#cartas");
    // Limpiar el contenido de las cartas antes de cargar nuevos resultados
    carta.innerHTML = '';

    const response = await fetch('../../Controlador/productosFinales.php');
    const productosFinales = await response.json();

    console.log(productosFinales);

    // Filtrar los productos si se ha proporcionado un modelo
    const productosFiltrados = modelo ? productosFinales.filter(producto => producto.modelo.includes(modelo)) : productosFinales;

    // Recorrer los productos filtrados y mostrarlos en el contenedor
    productosFiltrados.forEach((producto) => {
        console.log("ID:", producto.id_producto_final,
            "Modelo:", producto.modelo,
            "Motor:", producto.motor,
            "Potencia", producto.potencia,
            "Suspensión:", producto.suspension,
            "Kit Aerodinámico:", producto.kit_aerodinámico,
            "Llanta:", producto.llanta,
            "Freno:", producto.freno,
            "Nombre del Producto:", producto.nombre_producto,
            "Precio Total:", producto.precio_total,
            "Cantidad:", producto.cantidad,
            "Imagen:", producto.img);

        // Añadir la carta correspondiente a cada producto
        carta.innerHTML += `
            <figure class="card card--4">
                <img src="${producto.img}" alt="">
                <figcaption>
                    <span class="info">
                        <h3>${producto.nombre_producto}</h3>
                        <span>
                            <ul>
                                <li>${producto.motor} (${producto.potencia}CV)</li>
                                <li>Kit Aerodinámico: ${producto.kit_aerodinámico}</li>
                                <li>Suspension: ${producto.suspension}</li>
                                <li>Tipo Frenos: ${producto.freno}</li>
                                <li>LLantas: ${producto.llanta}</li>
                                <li>Total: ${producto.precio_total}€</li>
                            </ul>
                        </span>
                    </span>
                    <span class="links">
                        <a href="#"><i class="fas fa-heart"></i></a>
                        <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://unsplash.com/photos/DLwUVlzrP0Q" target="_blank"><i class="fas fa-share"></i></a>
                    </span>
                </figcaption>
            </figure>`;
    });
}

function crearCarta(producto) {

    document.getElementById("#cartas").innerHTML(

        '<figure class="card card--4">' +
        '<img src="' + producto.img + '" alt="">' +
        '<figcaption>' +
        '<span class="info">' +
        '<h3>The Ocean</h3>' +
        '<span>by Blue Ranger</span>' +
        '</span>' +
        '<span class="links">' +
        '<a href="#"><i class="fas fa - heart"></i></a>' +
        '<a href="#" target="_blank"><i class="fab fa - instagram"></i></a>' +
        '<a href="https://unsplash.com/photos/DLwUVlzrP0Q" target="_blank"><i class="fas fa-share"></i></a>' +
        '</span >' +
        '</figcaption >' +
        '</figure > '

    );

}




function prueba() {




}


