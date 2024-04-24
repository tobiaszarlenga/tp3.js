let numeros = [];
let dados1 = [];
let dados2 = [];
let suma = [];

for (let i = 0; i <50; i++) {

    let dado1= Math.floor(Math.random() * (6-1+1) + 1);
    dados1.push(dado1);
    let dado2 = Math.floor(Math.random()* (6 + 1));
    dados2.push(dado2);
    suma.push(dado1 + dado2);
}

document.write(`<br>primer dado: ${dados1}`);
document.write(`<br>segundo dado: ${dados2}`);
document.write(` <br> sumas: ${suma}`);


let muestras = [];
let cuantasApariciones = [];

for (let i = 0; i < suma.length; i++) {
    muestras[i] = suma[i];
    let repeticiones = 0;
    for (j = 0 ; j < suma.length; j++) {
        if (muestras[i] === suma[j]) repeticiones++;
    }
    cuantasApariciones[i] = repeticiones;

}
document.write(` <br><br>muestras: ${muestras}`);

document.write(` <br><br>cuantas repeticiones: ${cuantasApariciones}`);

let muestraSinDuplicados = suma.filter((item, index) => {
    return suma.indexOf(item) === index;

});
console.log(muestraSinDuplicados);
let resultado = [];

for (i = 0; i< muestraSinDuplicados.length; i++) {
    let repeticiones = 0;
    for (j = 0; j < suma.length; j++) {
        if (muestraSinDuplicados[i] === suma[j]) repeticiones++;
    }
    resultado[i] = repeticiones;
}
document.write(`<br> <br> Sumas de dos dados: ${muestraSinDuplicados}`);
document.write(`<br>Cantidad de repeticiones: ${resultado}`);


