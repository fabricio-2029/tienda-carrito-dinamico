// Le agregamos "Carrito" al final del nombre para que coincida
export const actualizarcontadorCarrito = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if(contador) {
    contador.textContent = carrito.length;
  }
};

// Juntamos las palabras para que coincida con el import
export const mostrarcarrito = (texto) => {
  alert(texto);
};