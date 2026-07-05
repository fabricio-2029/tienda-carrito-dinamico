import { obtenercarrito } from "./storage.js";
import { actualizarcontadorCarrito } from "./ui.js";          
import { eliminarproducto } from "./funcionesCarrito.js";

// EL VERDADERO PINTOR
const renderizarcarrito = () => {  
    const contenedor = document.getElementById("contenedor-carrito");
    const divacciones = document.getElementById("acciones-carrito");

    // Si no estamos en la página del carrito, salimos
    if (!contenedor || !divacciones) {
        return; 
    }

    const carrito = obtenercarrito();
    
    // Le pasamos el 'carrito' al contador
    actualizarcontadorCarrito(carrito);

    // Limpiamos pantalla
    contenedor.innerHTML = "";
    if (divacciones) divacciones.innerHTML = "";
    
    if (!carrito.length) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "El carrito está vacío";
        mensaje.classList.add("mensaje-vacio");
        contenedor.appendChild(mensaje);
        return;
    }
    
    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-dark");         

        const img = document.createElement("img");
        
        // 👉 ACÁ ESTÁ LA MAGIA PARA LA FOTO ROTA: 
        // Le agregamos '../' porque estamos en la carpeta 'pages'
        img.src = "../" + producto.img; 
        
        img.alt = producto.nombre;  

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger", "btn-eliminar-carrito");
        botonEliminar.textContent = "Eliminar producto";

        botonEliminar.addEventListener("click", () => {
            eliminarproducto(index);
            renderizarcarrito();
        });

        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(botonEliminar);

        contenedor.appendChild(tarjeta);
    }); 
}; 

// EL ARRANQUE
document.addEventListener("DOMContentLoaded", () => {
    // 1. SIEMPRE actualizamos el contador
    const carrito = obtenercarrito();
    actualizarcontadorCarrito(carrito); 

    // 2. SOLO si estamos en la página del carrito, renderizamos las tarjetas
    const contenedor = document.getElementById("contenedor-carrito");
    if (contenedor) {
        renderizarcarrito();
    }
});