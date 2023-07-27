/*
    EJERCICIO 2

    ESCRIBE UNA FUNCION QUE:
    
    • Toma una serie de números.
    • Duplica el valor de cada número en la matriz.
    • Imprime la nueva matriz actualizada.
    
*/

    // Declaramos el arreglo con los numeros de entrada
const numerosEntrada = [1, 67, 3, 654, 50];

    //La funcion toma los parametros de entrada en la variable numeros
function duplicarNumeros(numeros) {
    // Creamos un nuevo arreglo y lo inicializamos como cadena vacia, aqui almacenaremos los numeros duplicados.
  const numerosDuplicados = [];
    // En el ciclo for recorremos el arreglo numeros desde la posicion 0 al ultimo valor de este, e incrementamos i
    // si la posicion es menor al tamaño del arreglo.
  for (let i = 0; i < numeros.length; i++) {
    // con el metodo push agregamos un elemento al nuevo arreglo que este seria la posicion actual del
    // arreglo numeros multiplicado por dos.
    numerosDuplicados.push(numeros[i] * 2);
    }
    //mostramos en pantalla el resultado
  console.log(numerosDuplicados); // Salida: [2, 134, 6, 1308, 100]
}


    // hacemos la llamada a la funcion 
duplicarNumeros(numerosEntrada);


/////////////////////////////  UTILIZANDO METODO MAP //////////////////////////////////

//El método map()crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicada a cada uno de sus elementos.

    // arreglo con numeros de entrada
const numerosEntradaMap = [110, 2, 53, 4, 15];

    // creamos la funcion que toma los parametros en la variable numeros
function duplicarNumerosMap(numeros) {
    // declaramos el nuevo arreglo  cuyo valor es igual a la iteracion que hace el metodo map() sobre
    // cada indice del arreglo numeros multiplicado por 2
  const arregloDuplicado = numeros.map((i) => i * 2);
    
    // Mandamos a imprimir a consola
  console.log(arregloDuplicado); // Salida: [220, 4, 106, 8, 30]
}

// llamada de funcion
duplicarNumerosMap(numerosEntradaMap);