//funciones

function suma(a, b) {
    return a + b;
}

let resultado = suma(35, 25);
console.log(resultado);

function sumar(a, b) {
    return a + b;

}

let resultadoo = sumar(100, 25);
console.log(resultadoo);

const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 2));


//Calculadora básica 
//suma
function suma(a, b) {
    return a + b;
}

resultado = suma(3, 5);
console.log(resultado);

//resta
function resta ( c, d){
    return c - d;
}

respuesta = resta( 5, 4)
console.log(respuesta);

// multiplicacion
function multiplicacion ( e, f){
return e* f;
}

answer = multiplicacion (5,2)
console.log(answer);

//division

function division ( g, h ){
    return g / h ;
}

residuo = division (10, 5)
console.log(residuo);


//Temperatura Celcius a farenheit 

function gradosCelsius (a, b, c, d){
return a * b / c + d;
}

res = gradosCelsius ( 5, 9, 5, 32);
console.log(res);


//Haciendo lo anterior mas simple
function farenheit (celsius) {
    const faren = ((celsius * 9/5)+32);
    return faren;

}

let tempinCelsius = 15;
let tempinfarenheit = tempinCelsius(farenheit);
console.log (tempinfarenheit);

//Otra forma
function farenheit (faren){
    return (faren * 9/5) +32;
}
gradoFarenheit = faren (9,5,32)

// De farenheit a Celsius
function celsius (farenheit){
    const celsiu = ((farenheit -32)/1.8);
    return celsiu;
}

let farenheit = 15;
let convinFarenheit = farenheit(celsius);
console.log(convinFarenheit);


