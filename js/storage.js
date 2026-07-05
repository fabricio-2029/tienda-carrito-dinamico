const key= "carrito";
export const guardarcarrito = (carrito) => {
    localStorage.setItem(key, JSON.stringify(carrito));
}
export const obtenercarrito = () => {
    const carrito = localStorage.getItem(key);
    return  JSON.parse(localStorage.getItem(key) || []);
}
export const vaciarcarritostorage = () => {
    localStorage.removeItem(key);
}   