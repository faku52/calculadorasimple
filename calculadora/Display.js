class Display{
    constructor(displayValorAnterior, displayValorIngresado){
        this.displayValorIngresado = displayValorIngresado;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora;
        this.tipoOperacion = undefined;
        this.valorIngresado = " "
        this.valorAnterior = " "
    }
    borrar(){
        this.valorIngresado = this.valorIngresado.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorIngresado = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    agregarOperador(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorIngresado || this.valorAnterior;
        this.valorIngresado = ""
        this.imprimirValores();
     }

    agregarNumero(numero){
    if (numero === "." && this.valorIngresado.includes(".")) return
    this.valorIngresado = this.valorIngresado.toString() + numero.toString() ; 
    this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorIngresado.textContent = this.valorIngresado;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
    
    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorIngresado = parseFloat(this.valorIngresado);
        if( isNaN(valorAnterior) || isNaN(valorIngresado)) return
        this.valorIngresado = this.calculadora[this.tipoOperacion](valorAnterior, valorIngresado)
     }

     
}
