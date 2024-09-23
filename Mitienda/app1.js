// Inicio de un arreglo para el almacen de productos
let productos = [];
let lista = {
    "Camisa": 300,
    "Pantalon": 500,
    "Zapatos": 800,
    "Sombrero": 200
};

// Funcion para mostrar nuestro menu
function mostrarMenu() {
    return parseInt(prompt(`
        "Seleccione un producto para agregar al carrito:"
        1.- Camisa - $300
        2.- Pantalon - $500
        3.- Zapatos - $800
        4.- Sombrero - $200
        5.- Ver carrito y Total 
        6.- Salir
    `));
}

// Funcion para agregar productos al carrito con nombre y precio
const agregarProductos = (nombre, precio) => {
    productos.push({ nombre, precio });
    console.log("Producto \"" + nombre + "\" agregado al carrito." );
};

// Ver el total de productos en el carrito
function verTotal() {
    if (productos.length === 0) {
        alert("No tenemos productos en el carrito");
    } else {
        let mensaje = "Carrito de compras: \n";
        productos.forEach((producto, index) => {
            mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
        });
        let total = productos.reduce((acum, producto) => acum + producto.precio, 0);
        mensaje += `\nTotal: $${total}`;
        console.log(mensaje);
    }
}

// Funcion para manejar el flujo del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarProductos("Camisa", lista.Camisa);
                break;
            case 2:
                agregarProductos("Pantalon", lista.Pantalon);
                break;
            case 3:
                agregarProductos("Zapatos", lista.Zapatos);
                break;
            case 4:
                agregarProductos("Sombrero", lista.Sombrero);
                break;
            case 5:
                verTotal();
                continuar = false;
                break;
            case 6:
                alert("Saliendo del programa ...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente");
        }
    }
    alert("Programa Finalizado");
}

// Inicia el programa
iniciarPrograma();
