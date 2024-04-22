let cities = [];
let exit = true;
do {
  let city = prompt(
    "ingrese una ciudad, en caso de querer salir presiona cancelar"
  );
  if (city === null) {
    exit = false;
  } else {
    cities.push(city);
    console.log(city);
  }
} while (exit);

console.log(cities);
document.write(
  `<p>
        el arreglo de la ciudad tiene ${cities.length} elementos
    </p>`
);
document.write(
  `<ul>
    <li> la primera ciudad es ${cities[0]}</li>
    <li> la tercera ciudad es ${cities[2]}</li>
    <li> la ultima ciudad es ${cities[cities.length - 1]}</li>
    </ul>`
);
cities.push('paris');
document.write(
    `<ul> <li>la segunda ciudad es ${cities[1]}</li></ul>`);
    cities.splice( 1, 0,'barcelona');
    document.write(`<h1>Arreglo de ciudades</h1>`);
    document.write(`<ul>`);
    for (let i = 0; i<cities.length; i++){
        document.write(`Elementos: ${cities[i]}`)
    }
    document.write(`</ul>`);
