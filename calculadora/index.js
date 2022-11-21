const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorIngresado = document.getElementById("valor-ingresado");
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");


const display = new Display(displayValorAnterior, displayValorIngresado);
    

botonesNumeros.forEach(boton => {
   boton.addEventListener("click", () =>{
   display.agregarNumero(boton.innerHTML);
        })

    });

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", () =>{
        display.agregarOperador(boton.value)
    } )
})