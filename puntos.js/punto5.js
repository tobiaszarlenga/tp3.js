function informacion(cadena) {
  if (cadena === cadena.toUpperCase()) {
    return "esta compuesto de dolo mayusculas";
  } else if (cadena === cadena.toLowerCase()) {
    return "esta cadema esta compuesta de minusculas";
  } else {
    return "esta compuesto por mayus y minus";
  }
}
let cadena = prompt("ingrese una cadena de texto para ver si es may o min");
document.write(`la cadena es ${informacion(cadena)}`);
