const perimetroRectangulo = (lado1, lado2) =>{
    return 2 * (lado1 + lado2);
}
let lado1 = parseFloat(prompt("ingrese el lado 1 del rectangulo para saber su perimetro"));
let lado2 = parseFloat(prompt("ingrese el lado 2"));

document.write(`el perimetro del rectangulo es ${perimetroRectangulo(lado1, lado2)} cm`); 