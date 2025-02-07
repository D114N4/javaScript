//Evaluacion de nota estudiante

let estudiante = 75;

if (estudiante >= 90) {
    console.log("Excelente has aprobado con honores")
}
else if (estudiante <= 89 && estudiante >= 75) {
    console.log(" Bien has aprobado")
}
else if (estudiante <= 74 && estudiante >= 60) {
    console.log("Suficiente has obtenido una calificacion aprobatoria, deberías hecharle mas ganas")
}
else {
    console.log("Reprobaste")
}


//Se agregan cuatro estudiantes
let estudiante1 = 75;
let estudiante2 = 99;
let estudiante3 = 65;
let estudiante4 = 59;

function calificacion (estudiante, numero){
    if (estudiante >= 90) {
        console.log(`${numero}:Excelente has aprobado con honores`)
    }
    else if (estudiante <= 89 && estudiante >= 75) {
        console.log(`${numero}: Bien has obtenido una calificacion para aprobar`)
    }
    else if (estudiante <= 74 && estudiante >= 60) {
        console.log(`${numero}: Suficiente has obtenido una calificacion aprobatoria, deberías hecharle mas ganas`)
    }
    else {
        console.log(`${numero}: Reprobaste`)
    }

}
    calificacion (estudiante1, "Estudiante 1");
    calificacion (estudiante2, "Estudiante 2"); 
    calificacion (estudiante3, "Estudiante 3"); 
    calificacion (estudiante4, "Estudiante 4");
   
