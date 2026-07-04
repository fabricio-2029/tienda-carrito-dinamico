const key= "carrito";
export const guardarcarrito = (carrito) => {
    localStorage.setItem(key, JSON.stringify(carrito));
}
export const obtenercarrito = () => {
    const carrito = localStorage.getItem(key);
    return carrito ? JSON.parse(carrito) : [];
}
export const vaciarcarritostorage = () => {
    localStorage.removeItem(key);
}   