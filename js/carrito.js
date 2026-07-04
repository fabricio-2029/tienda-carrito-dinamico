import { obtenercarrito } from "./storage.js";
import { actualizarcontadorCarrito } from "./ui.js";          
import { eliminarproducto } from "./funcionescarrito.js";

const renderizarcarrito = () => {  
    // Buscamos los elementos en el DOM
    const contenedor = document.getElementById("contenedor-carrito");
    const divacciones = document.getElementById("acciones-carrito");

    // PROTECCIÓN: Si no estamos en la página del carrito, 
    // no intentamos hacer nada y salimos de la función.
    if (!contenedor || !divacciones) {
        return; 
    }

    const carrito = obtenercarrito();
    
    // Le pasamos el 'carrito' al contador
    actualizarcontadorCarrito(carrito);

    contenedor.innerHTML = "";
    divacciones.innerHTML = "";
    
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
        img.src = producto.img; // Asegúrate de que en el JSON se llame 'img'
        img.alt = producto.nombre;  

        const titulo = document.createElement("h3");
        titulo.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio}`;

        const botonEliminar = document.createElement("button");
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.classList.add("btn-eliminar-carrito");
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
        
    }); // Cierre forEach
    
}; // Cierre renderizarcarrito




/// Cambiamos el evento para asegurar que todo el HTML esté cargado
///document.addEventListener("DOMContentLoaded", () => {
/////////    console.log("DOM totalmente cargado y analizado"); // <- Esto te aparecerá en la consola
//    const contenedor = document.getElementById("contenedor-carrito");
  //  if (contenedor) {
    //////////    console.log("Contenedor encontrado, renderizando...");
       /// renderizarcarrito();
    ///} else {
       //// console.log("Error: No se encontró el elemento #contenedor-carrito");
    //}
////});


// js/carrito.js



document.addEventListener("DOMContentLoaded", () => {
    // 1. SIEMPRE actualizamos el contador, esté o no el carrito en la página
    const carrito = obtenercarrito();
    actualizarcontadorCarrito(carrito); 

    // 2. SOLO si estamos en la página del carrito, renderizamos las tarjetas
    const contenedor = document.getElementById("contenedor-carrito");
    if (contenedor) {
        renderizarcarrito();
    }
});