/*
    EJERCICIO 6 ALGORITMO BURBUJA

    El algoritmo de burbuja es un algoritmo de ordenamiento sencillo 
    que funciona comparando pares de elementos adyacentes 
    y los intercambia si están en el orden incorrecto. 
    El proceso se repite hasta que no se necesiten más intercambios, 
    lo que indica que el arreglo está ordenado.

    Realizar una función que realice el algoritmo de burbuja.
    Entrada [3, 6, 12, 5, 100, 1 ]
    Salida [1, 3, 5, 6, 12, 100]
*/


const arregloAlazar= [3, 6, 12, 5, 100, 1 ]; //Entrada

function ordenBurbuja(arr) { //declaramos funcion
    
    const n = arr.length; //declaramos e inicializamos la constante "n" cuyo valor es la cantidad total de elementos del arreglo
    
    for (let i = 0; i < n - 1; i++) { // Primer "for" Donde recorreremos el arreglo mientras el indice sea menor a "n" - 1
        
        for (let j = 0; j < n - i - 1; j++) { // Segundo "for" se encarga de recorrer los elementos adyacentes en el arreglo y realizar comparaciones.    
            
            if (arr[j] > arr[j + 1]) { // si el elemento de la izquierda es mas grande que el de la derecha 
                // Intercambiar los elementos si están en el orden incorrecto
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

ordenBurbuja(arregloAlazar);