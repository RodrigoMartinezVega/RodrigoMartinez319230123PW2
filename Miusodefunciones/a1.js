let numeroMaquina;
let numeroUser;
let vidas = 3;
function mostrarNumero (){
    numeroMaquina = Math.floor(Math.random()*(10 - 1)+1);
    return "El numero secreto es: "+numeroMaquina;
};

function ingresarNumero (){
    numeroUser = parseInt (prompt("Ingresa un numero del 1 al el 10:"));
};

function conteoVidas (){
    while(numeroMaquina !== numeroUser && vidas>1){
        vidas--;
        numeroUser = parseInt(prompt("Intenta nuevamente tu numero y tu vidas son: "+vidas));
    }

    if (numeroMaquina == numeroUser){
        alert("Ganaste wiii")
        console.log("Ganaste");
     }else{
        alert("Perdiste el nunero era: "+numeroMaquina);
        console.log("Perdiste el numero era el: "+numeroMaquina);
     }
}

mostrarNumero();
console.log(mostrarNumero());
ingresarNumero();
conteoVidas();