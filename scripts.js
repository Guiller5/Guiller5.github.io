// Definimos un objeto para el carrito de compras
var carritoDeCompras = {
    items: [],

    // Método para agregar un artículo al carrito
    agregarItem: function(producto, cantidad) {
        this.items.push({ producto: producto, cantidad: cantidad });
    },

    // Método para eliminar un artículo del carrito
    eliminarItem: function(producto) {
        this.items = this.items.filter(item => item.producto !== producto);
    },

    // Método para actualizar la cantidad de un artículo en el carrito
    actualizarCantidad: function(producto, nuevaCantidad) {
        this.items.forEach(item => {
            if (item.producto === producto) {
                item.cantidad = nuevaCantidad;
            }
        });
    },

    // Método para vaciar el carrito
    vaciarCarrito: function() {
        this.items = [];
    },

    // Método para obtener el contenido del carrito
    obtenerItems: function() {
        return this.items;
    },

    // Método para calcular el total del carrito
    calcularTotal: function(precios) {
        let total = 0;
        this.items.forEach(item => {
            if (precios.hasOwnProperty(item.producto)) {
                total += precios[item.producto] * item.cantidad;
            }
        });
        return total;
    }
};

// Ejemplo de uso del carrito de compras
carritoDeCompras.agregarItem("Helado de Vainilla", 2);
carritoDeCompras.agregarItem("Helado de Chocolate", 1);
carritoDeCompras.actualizarCantidad("Helado de Vainilla", 3);
carritoDeCompras.eliminarItem("Helado de Chocolate");

// Simulación de precios de los productos
var precios = {
    "Helado de Vainilla": 2.5,
    "Helado de Chocolate": 3.0
};

// Calcular y mostrar el total del carrito
var total = carritoDeCompras.calcularTotal(precios);
console.log("Total del carrito: $" + total);
