/* PROBLEMA #3: DADA UNA LISTA SENCILLAMENTE ENLAZADA, EXPLICAR COMO OBTENER EL ELEMENTO DEL MEDIO. EN CASO DE TENER UNA CANTIDAD DE ELEMENTOS PAR, PUEDE SER CUALQUIERA DE LOS DOS. SI USA UN MÉTODO QUE DEVUELVE EL TAMAÑO DE LA LISTA, DEBE DEFINIRLO

    Ej. Árbol->Casa->Ruta           Pedro->Juan->José->Marcos
    R= Casa                         R= Juan o José, ambos válidos */



    /*Asumiendo una lista sencilla que tiene un elemento en el medio de la lista al menos   
    tendrá un elemento al inicio, uno al medio y otro al final, o sea indices 0, 1 y 2, se procede a extraer el elemento de la lista con índice 1 */


function elemento(arr) { 
    console.log(arr[1]); 
    return arr[1]
}

elemento(["Arbol", "Casa", "Ruta"]); //Casa

/* Si se tiene una lista, en la cuál se requiere extraer 1 o más elementos que no se ubiquen ni al principio ni al final, solo los del medio, se procede a crear el logaritmo que retire los elementos del principio y el final, retornando solo los elementos del medio restantes. */

function elementosDelMedio(arr) {
    let newArr = arr; // Asignarle el array a una nueva variable, para no modificar el array original
    newArr.shift(); // Usar una función que retire el primer elemento de la lista
    newArr.pop();   // y luego una función que retire el último, para asi solo dejar los elementos del medio en el array
    console.log(newArr.join(", ")); 
    return newArr.join(", "); // Se devuelve los elementos del medio, retirándolos del array, y separados por una coma para retornarlos como una lista sencillamente enlazada.
}

elementosDelMedio(["Pedro", "Juan", "José", "Marcos"]); //Juan, José



function longitudListaElementos(arr) { //función que evalúa la longitud de la lista para devolver un valor según sea el caso, se aplicará la función para arrays y string ".length", que mide la longitud del elemento.
    let newArr = arr; //se asigna el array a una nueva variable para no modificar el array original
    if(newArr.length < 3) { //condición que verifica si un elemento posee menos de 3 elementos, si es así, no posee elemento en el medio
        console.log("No tiene elemento en el medio");
    } else if (newArr.length === 3){ //condión que evalúa que la longitud tiene 3 elementos, por lo que posee al menos un elemento medio
        console.log("El elemento del medio es: " + newArr[1]);
        return newArr[1];
    } else { //a partir de la segunda condición tendrá más elementos en el medio, y se procede a devolverlos todos.
        console.log("Los elementos del medio son: " + newArr.splice(1,newArr.length-2) + ".");
        return newArr.splice(1,newArr.length-2);
    }
}

longitudListaElementos(["Pedro", "Juan", "José", "Marcos", "Perez", "Jimenez"]);
//Los elementos del medio son: Juan,José,Marcos,Perez.