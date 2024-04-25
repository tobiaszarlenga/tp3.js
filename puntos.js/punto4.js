function numeroPar(numero){

    if (numero %2 === 0)
    return "es par";
else {
    return "es impar"
}
}

let num = parseInt(prompt("ingrese un numero"));
document.write(`el numero ${num} : ${numeroPar(num)}`)