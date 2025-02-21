//Arrays y Ciclos

let colores = ['azul', 'blanco' , 'verde ', 'rojo' , 'rosa'];
console.log(colores);
console.log(colores[1]);

let colors = ['azul', 'blanco' , 'verde ', 'rojo' , 'rosa'];
colors [2] = 'naranja';
console.log(colors);

colors.push ('cafe');
console.log(colors);

colors.shift ();
console.log(colors);

//Practica de arrays y ciclos

let frutas =['manzana', 'kiwi', 'fresa', 'zarzamora', 'manzana', 'naranja', 'manzana', 'kiwi', 'fresa', 'zarzamora', 'platano', 'fresa', 'naranja'];

let contadorFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++;
    } else {
        contadorFrutas[fruta] = 1;
    }
}

console.log(" Total de frutas:", contadorFrutas);
let i = 0;
let contadorFrutasWhile = {};

while (i < frutas.length) {
    let fruta = frutas[i];
    if (contadorFrutasWhile[fruta]) {
        contadorFrutasWhile[fruta]++;
    } else {
        contadorFrutasWhile[fruta] = 1;
    }
    i++;
}
console.log("total de frutas:", contadorFrutasWhile);