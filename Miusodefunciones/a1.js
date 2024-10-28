//Inicio de una arreglo para el almacen de tareas
let productos=[];
let lista ={
    "Camisa": 300,
    "Pantalon" : 500,
    "Zapatos" : 800,
    "Sombrero" : 200

};

//Funcion para mostrar nuestro menu
function mostrarMenu(){
    return parseInt(prompt(`
            "seleccione un producto para agregsr al carrito:"
            1.- Camisa - $300
            2.- Pantalon - $500
            3.- Zapatos - $800
            4.- Sombrero - $200
            5.- Ver carrito y Total 
            6.- Salir
            "
        `));
}

//Funcion para agregar una tarea

const agregarProductos = (producto) => {
    productos.push(producto);
    console.log(`Producto ${} agregado al carrito.`);
};


//ver todas las tareas
function verTotal(){
    if(productos.length === 0){
        alert("No tenemos productos");
    }else{
        let mensaje = "Carrito de compras: \n";
        mensaje += `${index + 1}.- `;
        Object.entries(producto).forEach(([clave, valor]) => {
        mensaje += `${clave}: ${valor}, `;
       
});
mensaje += `\n`;   
console.log(mensaje);
    }
};





//Funcion para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProductos(lista.Camisa);
                
                break;
            case 2:
                agregarProductos(lista.Pantalon);
                break;
            case 3: 
                agregarProductos(lista.Sombrero);
                break;
            case 4:
                agregarProductos(lista.Zapatos);
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
                alert("Opcion no valida. Intenta nuevamente");

        }

    }
    alert("Programa Finalizado");
}


iniciarPrograma();