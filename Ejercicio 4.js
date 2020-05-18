/* PROBLEMA #4: UN PALÍNDROMO ES UNA PALABRA O FRASE QUE SE LEE IGUAL AL DERECHO O AL REVÉS. HACER UNA FUNCIÓN QUE DETERMINE SI UNA PALABRA O FRASE ES UN PALÍNDROMO

    Ej. es_palindromo("NEUQUEN") => TRUE
        es_palindromo("SANTA FE") => FALSE
    */

    //Si se requiere chequear si una palabra(sin apóstrofes o caractéres especiales) es un palíndromo: 

    function palabra_palindromo(str) {
        let newArr = str.split("").reverse(); /* Para utilizar una función que invierta el orden de cada letra de un array 'reverse()', y asi chequear si la palabra invertida se lee igual a la palabra original, se separa cada letra del string dentro de un array con la función 'split("")' */
        if( newArr.join("") === str ) { // la condición para que devuelva si es un palindromo, es que la palabra original se lea igual a la palabra invertida previamente
            console.log( 'Sí es un palíndromo' );
        } else { //si no se cumple la condición anterior, no es una palabra palíndromo
            console.log( 'No es un palíndromo' );
        }
    }

    palabra_palindromo("alomomola");

    // si se trata de una palabra con caractéres especiales o frases(que incluyen espacios para separar cada palabra) se determinan filtros para retirarlos y solo evaluar las letras del argumento a evaluar.
    function es_palindromo(str) {
        let firstStr = str; // se copia el argumento a una nueva variable para invertir
        let oneRegEx = /[a-z0-9]/ig; // se crea un filtro, para poder obtener solo las letras y números
        let filteredStr = firstStr.toLowerCase().match(oneRegEx);// Se aplica el filtro y se extraen solo las letras(convertidas a minúsculas) y números para convertirlos en dos casos que se compararan para saber si se trata o no de un palíndromo.
        let arrToStr1 = filteredStr.join(""), //caso 1 unión de palabra o frase sin espacios ni caractéres especiales.
            arrToStr2 = filteredStr.reverse().join(""); //caso 2 unión de palabra o frase sin espacios ni caractéres especiales una vez haya terminado de ser revertido su orden. 

        if (arrToStr2 === arrToStr1) { // se hace la comparación entre los dos casos en esta condición
            console.log('Sí es un palíndromo');
            return true; // si caso 1(frase o palabra normal) comparado con caso 2 (palabra o frase revertida) son iguales, y por lo tanto un palíndromo
        } else {
            console.log('No es un palíndromo');
            return false; // si no se cumple la primera condición, quiere decir que no son iguales el caso 1 y el caso 2, por lo que no son palíndromos
        }
    }
    es_palindromo("anita lava LA TiNa");