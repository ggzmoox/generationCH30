/*

    EJERCICIO 4 

    Cree un programa que recorra las 2 matrices; si hay algún curso común, imprímalo en la consola.

*/


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];


for (let i = 0; i < student1Courses.length; i++) {
    for (let j = 0; j < student2Courses.length; j++) {
        if (student1Courses[i] === student2Courses[j]) {
            console.log(student1Courses[i]); // Salida Programing
        }
    }
}


//////////////////////   UTILIZANDO METODO FILTER() E INCLUDES () ////////////////////////

//El método filter()crea un nuevo arreglo con todos los elementos que cumplen la condición implementada por la función dada.
//El método includes()determina si una matriz incluye un elemento determinado, devuelve trueo falsesegún corresponda.

const cursosComunes = student1Courses.filter(i => student2Courses.includes(i));

console.log(cursosComunes);