
/* PROBLEMA #2: DADO UN ARRAY DE ENTEROS, HACER UNA FUNCIÓN QUE INDIQUE QUÉ RANGOS DE NÚMEROS CONSECUTIVOS
DAN COMO RESULTADO LA CANTIDAD QUE SE LE PASA COMO PARÁMETRO 

    Ej. array = [6, 7, 5, 4, 3, 1, 2, 3, 5, 6, 7, 9, 0, 0, 1, 2, 4, 1, 2, 3, 5, 1, 2]
        sum = 13;

        Elementos entre (0 , 1) == 13
        Elementos entre (2 , 5) == 13
        Elementos entre (3 , 7) == 13
        Elementos entre (9 , 10) == 13
        Elementos entre (12 , 19) == 13
        Elementos entre (13 , 19) == 13
        Elementos entre (14 , 19) == 13
        Elementos entre (18 , 22) == 13*/

        function sumaRangos(arr, sum) { // tomo los dos argumentos que nos dan
            let i = 0, b = i + 1, c = arr[i];
// se crea una variable para tomar como índice iterador sobre el array, una variable para utilizar como índice mutable para diferentes alcances dentro del array, y otra para empezar a analizar que elementos del array serán los que pertenecen al rango y sumen entre si un numero igual al del argumento "sum".       
            while (i < arr.length && typeof arr[i] === "number") {
// Un iterador while que mientras se cumplan las funciones en la que el elemento iterador no sea mayor a la longitud del array y pueda seguir cada elemento dentro del array sin dificultad, y una segunda condición que exija solo valores numéricos dentro del array y asi termine de iterar sin dificultad de tomar algún elemento no definido dentro o fuera del array, para evitar errores      
                if(typeof arr[b] === "number") { 
                c += arr[b];
//si se cumple la condición de que el segundo valor a tomar para la realización de la suma es un número y no un valor no definido, se podrá continuar y terminar el loop sin problemas. Por lo tanto la suma ocurre y se verificará a continuación si en efecto la suma dentro del rango de números da como total un número igual, mayor o menor al número del argumento "num".
        
                if(c === sum) {
//si en efecto la suma de los números dentro del rango es igual al número del argumento "num", se dará a saber de que número a qué numero, es el rango de elementos el cuál la suma de sus elementos es igual al número del argumento "num."
                    console.log('La suma de números dentro del rango: (' + i + ', ' + b + ') = ' + sum );
//para pasar al siguiente valor del array y seguir analizando rangos, se aumenta por 1 el número del iterador.
                    i++;
// Además se vuelven a actualizar los datos de las variables para realizar las mismas operaciones, pero con el número iterador aumentado, dando paso a los siguientes datos dentro del array
                    b = i + 1;
                    c = arr[i];      
                } else if( c > sum ) {
//en dado caso de que el rango en que se esté analizando la suma de sus elementos, es mayor al valor del argumento "num", se aumentará el número del iterador por uno para seguir analizando nuevos rangos
                    i++;
//además se actualizarán los datos de las variables nuevamente para comenzar a analizar los datos de un nuevo rango con datos diferentes.
                    b = i + 1;
                    c = arr[i];
                } else if( c < sum ) {      
//si el caso de que la primera suma de números dentro del rango del array sea menor al valor del argumento "num", se presenta,para darle continuidad al iterador y avanzar con el siguiente número para determinar si la suma de éste junto con los valores previamente sumados, queda dentro del rango de números aceptable, y que la suma de éstos sea igual al valor "num". En ésta condición se evalúa si se sigue sumando el siguiente valor dentro del array, para alcanzar dicho valor "num", las demás condiciones evaluarán si en definitiva es igual y se muestre el rango, o en su defecto sea mayor y se sigan analizando los demás valores siguientes dentro del array.
                        b++;
                }
            }
            } 
        }
        
sumaRangos([6, 7, 5, 4, 3, 1, 2, 3, 5, 6, 7, 9, 0, 0, 1, 2, 4, 1, 2, 3, 5, 1, 2], 13);

/* La suma de números dentro del rango: (0, 1) = 13

La suma de números dentro del rango: (2, 5) = 13

La suma de números dentro del rango: (3, 7) = 13

La suma de números dentro del rango: (9, 10) = 13

La suma de números dentro del rango: (12, 19) = 13

La suma de números dentro del rango: (13, 19) = 13

La suma de números dentro del rango: (14, 19) = 13

La suma de números dentro del rango: (18, 22) = 13 */