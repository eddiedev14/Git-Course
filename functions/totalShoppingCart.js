const preciosCarrito = [20, 30, 40, 1, 2, 5]
const total = preciosCarrito.reduce((total, precio) => total + precio)
console.log(total)