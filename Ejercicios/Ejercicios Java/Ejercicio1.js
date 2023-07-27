// EJERCICIO 1 

let arr = ["This", "is", "a", "sentence."];

function printOutString() {
    //Creamos la variable oracion y la inicializamos como cadena vacia
  let oracion = "";
    /*Bucle for, donde la variable i esta inicializada en 0 para recorrer el desde el primer elemento del array,
      si i es menor que  el tamaño del arreglo se hace un incremento en i.
    */
  for (let i = 0; i < arr.length; i++) { 
    //Si la condicion se cumple concatenamos el valor de la posicion actual del arreglo al string que estamos creando
    oracion += arr[i];
    //Verificamos si i sigue siendo menor que el tamaño del arreglo y se concatena un espacio al final de cada string
    if (i < arr.length - 1) {
      oracion += " ";
    }
  }
    //imprimimos el string que se contruyo en la variable oracion
  console.log(oracion);
  
}

printOutString(); // salida: This is a sentence.


///////////////////////// UTILIZANDO METODO JOIN /////////////////////////////////////

/*
    El método join() crea automaticamente un string concatenando todos los elementos del arreglo
    y los separa con un elemento que le indiquemos.

*/

let array = ["Esta", "es", "una", "oración."];

function printOutStringJoin() {
    //El método join() recorre todos los elementos del array y los concatena en un solo string, 
    //colocando el separador entre cada uno de ellos.
  const oracion = array.join(" ");
  console.log(oracion);
}

printOutStringJoin(); // salida: This is a sentence.