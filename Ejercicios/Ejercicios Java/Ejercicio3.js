/*

    Escriba un programa para calcular la suma y el producto (multiplicación) de una matriz de números.
    Imprime la suma y el producto.
    Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.

*/


const numerosEntrada = [1, 2, 3, 4];

function sumaYMulti(numeros) {
    let producto = 1; // Inicializamos la variables producto en 1 para poder multiplicar
    let sumatoria = 0;// Y realizar la sumatoria

    for (let i = 0; i < numeros.length; i++) { // ciclo for que recorrera el arreglo
        sumatoria = sumatoria + numeros[i];    // la variable sumatoria e igual a su valor actual mas el valor de la posicion del arreglo.
        producto = producto * numeros[i];      // la variable producto es igual a su valor actual por la posicion actual del arreglo
    }

    return console.log('Dada una matriz: ' + numeros + ' la suma es  ' + sumatoria + '. El producto es ' + producto); // retornamos los valores
}

sumaYMulti(numerosEntrada); // Salida: Dada una matriz: 1,2,3,4 la suma es  10. El producto es 24


///////////////////////////////  UTILIZANDO METODO REDUCE /////////////////////////////////////


const numerosEntradaReduce = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const valorInicial = 0;
const productoInicial = 1;
const sumaFinal = numerosEntradaReduce.reduce((i, valorActual) => i + valorActual,valorInicial);
const productoFinal = numerosEntradaReduce.reduce((i, valorActual) => i * valorActual, productoInicial)

console.log('Dada una matriz: ' + numerosEntradaReduce + ' la suma es  ' + sumaFinal + '. El producto es ' + productoFinal);
// Expected output: 10
