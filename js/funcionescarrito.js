import {
  guardarcarrito,
  obtenercarrito,
  vaciarcarritostorage,
} from "./storage.js"; // Eliminamos la llave '}' suelta que estaba debajo de esta línea

// Corregimos 'mostrar carrito' juntando la palabra a 'mostrarcarrito'
import { actualizarcontadorCarrito, mostrarcarrito } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenercarrito();
  carrito.push(producto);
  guardarcarrito(carrito);
  
  // Le pasamos la variable 'carrito' al contador
  actualizarcontadorCarrito(carrito); 
  
  // Agregamos comillas al texto
  mostrarcarrito("Producto agregado al carrito"); 
}

export const eliminarproducto = (indice) => {
  const carrito = obtenercarrito();
  carrito.splice(indice, 1);
  guardarcarrito(carrito);
  
  // Le pasamos la variable 'carrito' al contador
  actualizarcontadorCarrito(carrito);
  
  // Agregamos comillas al texto
  mostrarcarrito("Producto eliminado del carrito");    
}

export const vaciarcarrito = () => {
  vaciarcarritostorage();
  
  // Obtenemos el carrito (que ahora debería estar vacío tras la línea anterior)
  const carrito = obtenercarrito(); 
  
  // Le pasamos el carrito vacío al contador para que vuelva a 0
  actualizarcontadorCarrito([]);
  
  // Agregamos comillas al texto
  mostrarcarrito("Carrito vaciado");
}