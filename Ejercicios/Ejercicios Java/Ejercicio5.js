/* 
        EJERCICIO 5

    Para cada uno de los ejercicios a continuación, suponga que está comenzando con la siguiente matriz de personas.
    let people = ["María", "Dani", "Luis", "Juan", "Camila"];
    1. Escriba un comando que imprima todas las personas de la lista.
    2. Escriba el comando para eliminar "Dani" de la matriz.
    3. Escriba el comando para eliminar "Juan" de la matriz.
    4. Escriba el comando para mover a "Luis" al frente de la matriz.
    5. Escriba el comando para agregar su nombre al final de la matriz.
    6. Usando un ciclo, itere a través de esta matriz y después de console.log "Maria", salga del ciclo. (usar BREAK)
    7. Escriba el comando que da el índice de donde se encuentra "María".
    Al final del ejercicio, debe haber 4 personas en la matriz.

*/

let people = ["María", "Dani", "Luis", "Juan", "Camila"];
console.log(people);
console.log(people.splice(1, 1));
console.log(people.splice(2, 1));
console.log(people.splice(1, 1));
console.log(people.unshift("Luis"));
console.log(people.push("David"));
console.log(people);

for (let i = 0; i < people.length; i++) {
   
    if (people[i] === "María") {
        console.log(people[i]);
        
    }
}

console.log(people.indexOf("María"));
console.log(people);