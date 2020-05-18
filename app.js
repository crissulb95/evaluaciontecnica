/* PROBLEMA #1: EXPLIQUE COMO ENCONTRAR EL MAYOR ELEMENTO DE UN ARRAY DE ENTEROS:
    Ej. (5 8 0 -10 44 89 1 3 7 77 12 -3 4)
    Debería devolver 89.


    Asumiendo que el argumento que se introduce en el algoritmo es 
    estrictamente un array de números enteros. 

*/

function mayorEntero (arr) {

    let arrOrdenado = arr.sort((a, b) => b - a), //Se aplica una función al array que nos ordene, de mayor a menor, los valores del array
        mayorEntero = arrOrdenado.shift(); // Se extrae el primer valor resultante de la operación previa (el número mayor).
    
    return mayorEntero; //Se retorna el valor extraído previamente

};


console.log(mayorEntero([5, 8, 0, -10, 44, 89, 1, 3, 7, 77, 12, -3, 4]));// 89

/* En el caso de que se vaya a pasar cualquier tipo de dato como argumento en el algoritmo,
se procede a ordenar más instrucciones, que filtren los datos y se puedan dar los resultados adecuados*/

function mayorEnteroFiltro (posibleArr) {

    if(!Array.isArray(posibleArr)){  // Se evalúa si el argumento no es un array para detener el proceso al principio.
        console.log("El argumento no es un array"); // por lo que devuelve un mensaje aclarando el asunto
    } else {
        let arrFiltrado = posibleArr.filter( valor => Number.isInteger(valor)); 
        // si no es el caso, y en efecto es un array, se utiliza una función que itere y filtre cada elemento de un array, 
        // mediante una función se confirma si dicho elemento es un número entero o no.
        return "El número entero mayor del array suministrado es: " + arrFiltrado.sort( (a, b) => b - a).shift(); 
        // El valor retornado será el primer elemento del array, después de haber ordenado de mayor a menor todos los valores filtrados dentro del array.

    }

};


mayorEnteroFiltro([5, 8, 0, -10, 44, 89, 1, 3, 7, 77, 12, -3, 4]); // 89


// Se puede utilizar funciones implícitas en el lenguaje de programación para agilizar procesos también.

function mayorEnteroSimple (arr) {
    return Math.max(...arr);
}

mayorEnteroSimple([5, 8, 0, -10, 44, 89, 1, 3, 7, 77, 12, -3, 4]); //89



/* PROBLEMA #2:  Dado un array de enteros, hacer una función que indique qué rangos
de números consecutivos dan como resultado la cantidad que se le pasa como parámetro.

    Ej. array = (6, 7, 5, 4, 3, 1, 2, 3, 5, 6, 7, 9, 0, 0, 1, 2, 4, 1, 2, 3, 5, 1, 2)
    sumar (13)*/

    //Suma de cada valor entre array[0] y array[1] == 13
    //Suma de cada valor entre array[2] y array[5] == 13
    //Suma de cada valor entre array[3] y array[7] == 13
    //Suma de cada valor entre array[9] y array[10] == 13
    //Suma de cada valor entre array[12] y array[19] == 13
    //Suma de cada valor entre array[13] y array[19] == 13
    //Suma de cada valor entre array[14] y array[19] == 13
    //Suma de cada valor entre array[18] y array[22] == 13

    function sumaEntreRangos (arr, sum) {
        let i = 0;
        let a = i, b = 1, c = 0;

        c = arr[a] + arr[b];

        while( i < arr.length) {
            if ( c === sum ){
                console.log(arr[a] , arr[b]);
                i++;
            }
        
        }
    }

    sumaEntreRangos([6, 7, 5, 4, 3, 1, 2, 3, 5, 6, 7, 9, 0, 0, 1, 2, 4, 1, 2, 3, 5, 1, 2], 13);
