import { agregarAlCarrito } from "./funcionescarrito.js";
import { obtenercarrito } from "./storage.js";
import { actualizarcontadorCarrito } from "./ui.js";

const renderizarpructos = () => {
    const contenedor = document.getElementById("contenedor-productos");
    
    // Corregimos la ruta apuntando a archivo.json
    fetch("./data/archivo.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
         const tarjeta = document.createElement("article");
         tarjeta.classList.add("card", "textdark");
         
         const img = document.createElement("img");
         // ACÁ CORREGIMOS EL NOMBRE PARA QUE COINCIDA CON TU ARCHIVO JSON
         img.src = producto.img; 
         img.alt = producto.nombre;
         
         const titulo = document.createElement("h3");
         titulo.textContent = producto.nombre;

         const precio = document.createElement("p");
         precio.textContent = `$${producto.precio}`;

         const boton = document.createElement("button");
         boton.classList.add("btn", "btn-primary");
         boton.textContent = "Agregar al carrito";

         boton.addEventListener("click", () => {
            agregarAlCarrito(producto);
         }); // Cerramos el click acá
        
         // Pegamos las cosas a la tarjeta AFUERA del click
         tarjeta.appendChild(img);
         tarjeta.appendChild(titulo);
         tarjeta.appendChild(precio);
         tarjeta.appendChild(boton);

         contenedor.appendChild(tarjeta);
        });
    })   
    .catch((error) => console.log({error}));
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenercarrito();
    renderizarpructos();
    actualizarcontadorCarrito(carrito);
}); // Cerramos la función principal