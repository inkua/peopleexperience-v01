const productos = [
    {
        id: 1,
        nombre: 'Camiseta',
        precio: 19.99,
        categoria: 'Ropa',
        enStock: true
    },
    {
        id: 2,
        nombre: 'Pantalones',
        precio: 39.99,
        categoria: 'Ropa',
        enStock: true
    },
    {
        id: 3,
        nombre: 'Zapatos',
        precio: 59.99,
        categoria: 'Calzado',
        enStock: false
    },
    {
        id: 4,
        nombre: 'Gorra',
        precio: 14.99,
        categoria: 'Accesorios',
        enStock: true
    },
    {
        id: 5,
        nombre: 'Chaqueta',
        precio: 89.99,
        categoria: 'Ropa',
        enStock: false
    },
    {
        id: 6,
        nombre: 'Bolso',
        precio: 49.99,
        categoria: 'Accesorios',
        enStock: true
    },
    {
        id: 7,
        nombre: 'Reloj',
        precio: 199.99,
        categoria: 'Accesorios',
        enStock: false
    },
    {
        id: 8,
        nombre: 'Sombrero',
        precio: 29.99,
        categoria: 'Accesorios',
        enStock: true
    },
    {
        id: 9,
        nombre: 'Calcetines',
        precio: 9.99,
        categoria: 'Ropa',
        enStock: true
    },
    {
        id: 10,
        nombre: 'Bufanda',
        precio: 24.99,
        categoria: 'Accesorios',
        enStock: false
    }
];

const getAllProducts=()=>{
    return productos
}

export {
    getAllProducts,
}