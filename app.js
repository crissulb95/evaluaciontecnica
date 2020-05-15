/* PROBLEMA #1: EXPLIQUE COMO ENCONTRAR EL MAYOR ELEMENTO DE UN ARRAY DE ENTEROS:
    Ej. (5 8 0 -10 44 89 1 3 7 77 12 -3 4)
    Debería devolver 89.


    Asumiendo que el argumento que se introduce en el algoritmo es 
    estrictamente un array de números enteros. 

*/

function mayorEntero (arr) {

    let arrOrdenado = arr.sort((a, b) => b - a),
        mayorEntero = arrOrdenado.shift();
    
    return mayorEntero;

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
        console.log("El número entero mayor del array suministrado es: " + arrFiltrado.sort( (a, b) => b - a).shift())
        return "El número entero mayor del array suministrado es: " + arrFiltrado.sort( (a, b) => b - a).shift(); 
        // El valor retornado será el primer elemento del array, después de haber ordenado de mayor a menor todos los valores filtrados dentro del array.

    }

};


mayorEnteroFiltro([5, 8, 0, -10, 44, 89, 1, 3, 7, 77, 12, -3, 4]); // 4


// Se puede utilizar funciones implícitas en el lenguaje de programación para agilizar procesos también.

function mayorEnteroSimple (arr) {
    console.log(Math.max(...arr));
    return Math.max(...arr);
}

mayorEnteroSimple([5, 8, 0, -10, 44, 89, 1, 3, 7, 77, 12, -3, 4]); //4