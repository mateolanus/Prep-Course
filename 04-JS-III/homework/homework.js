// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0]; //el 0 indica el primer el del array
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1]; //la ubicacion del val de ultimo el es igual al array.length - 1
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; //solo devuelve la longitud del array
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = []; //define un nuevo array vacio
  for (var i = 0; i < array.length; i++) {  //bucle for que ejecutara el bloque hasta que 
    nuevoArray[i] = array[i] + 1; //para cada el  ubicado en i se le aasigna el val del el. del array[i] +1
  }
  return nuevoArray; //devuelve el array
}


function agregarItemAlFinalDelArray(array, elemento) { //la funcion toma un array y un elemento que usara
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); //agrega elemento al final del array
  return array; //devuelve el array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento); //agrega elemento al comienzo del array
  return array; //devuelve el array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' '); //utilizo el metodo .join(' ') que hace un string
} //concatenando cada elemento del array con un espacio entre els.


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)) { //utilizo el metodo .includes(elemento) para verificar si elemento
    return true; // esta o no en el array.
  } else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0; //declaro la variable suma entera e igual a 0
  for (var i = 0; i < numeros.length; i++) { // bucle for que para todo i < a la longitud del array numeros
    suma = suma + numeros[i]; //corre el bloque que asigna a suma el valor de suma mas el valor del el i del array numeros
  }
  return suma; //retorna el resultado de la suma
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0; 
  for (var i = 0; i < resultadosTest.length; i++) { 
    suma = suma + resultadosTest[i];
  }
  return suma/resultadosTest.length; //es igual al anterior, solo que al return suma lo divido por el length del array
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros [0]; //defino variable que tomará el val max del array en cada bucle
  for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > max) { //compara cada el del array numeros con el val asignado en max para ver si es mayor
      max = numeros[i]; //si true entonces a max se le asigna el valor mas grande
    } //no pongo else para no cortar el bucle si false. directamente que termine el bucle
  }
  return max; //al final return max resultante de todo el bucle.

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) { //si la cantidad de args es 0, return 0
    return 0;
  } else if (arguments.lenght === 1) { //si la cantidad de args es 1, retorna el val de ese arg
    return arguments[0];
  }
  var pdto = 1; //declaro la var pdto que inicia en 1 (así se puede multiplicar en el for). Si toma 0, no se puede.
  for (i = 0; i < arguments.length; i++) {
    pdto = pdto * arguments[i]; //para todo i < cant de args, asignarle a pdto el val de pdto * el val del argumento
  } //cuando i = 0, pdto = pdto * arguments[0]
    //cuando i = 1, pdto = pdto (el val adoptado en el anterior bucle) * arguments[1]
    //cuando i = 2, pdto = pdto (el val adoptado en el anterior bucle) * arguments[2]
    //.
    //.
    //cuando i = cant de args -1, pdto = el val adoptado en el anterior bucle) * arguments[i]
  return pdto;
}




function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  //de los elementos del arreglo debo buscar aquellos que sean >18 y armar un nuevo arreglo con push
  //y luego hacer el length de ese arreglo
  var arreglo18 = []; //creé este array que tomará los vals >18 del array arreglo
  for (i = 0; i < arreglo.length; i++) { //creé un bucle que en cada ciclo evalua si el el es >18
    if (arreglo[i] > 18) {
      arreglo18.push(arreglo [i]); //si se cumple, entonces pusheo ese valor al array de solo >18
    }
}
  return arreglo18.length; //al final del bucle, doy la longitud del arreglo18 indicando la cantidad
}

/* otra forma sería:
    let contador = 0;
      for (let i = 0; i < arreglo.length ; i++) {
        if(arreglo[i] > 18){
          contador++
        }
      }
      return contador //de esta forma me evito crear un nuevo array y calcular su length.
*/

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia >= 1 && numeroDeDia <=7){
    if (numeroDeDia === 1 || numeroDeDia === 7){
      return 'Es fin de semana';
    }
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
                                //convertir el numero a un string utilizando el metodo toString y charAt
                                // y comparar si el primer el del str es 9
  var nStr = n.toString();      //el metodo .toString() del objeto number convierte n en str y se asigna en
  if (nStr.charAt(0) === '9') { //la var nStr. El metodo .charAt(i) indica el val asignado en i y se 
    return true;                // y se compara en el if
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  if (arreglo.length > 1) {               //si la long del array es >1, hacer el bucle for
    for (i = 1; i < arreglo.length; i++)  //empieza desde i=1 hasta i<long ejecutando el bloque if
      if (arreglo[i-1] === arreglo[i]) {  //que evalua si el el i-1 (empieza en el el 0) es igual al el i
        return true;                      //devuelve true
      } else {                            //sino devuelve false
          return false;
      }
  }
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arrayEMN = []; //creé este array que tomará los vals EMN del array 'array'
  for (i = 0; i < array.length; i++) { //bucle que en cada ciclo evalua si el el coincide con alguno
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre') {
      arrayEMN.push(array[i]); //si coincide, entonces pusheo ese valor al arrayEMN
    }
  }
  if (arrayEMN.length < 3) { 
    return 'No se encontraron los meses pedidos'; //en vez de buscar si un elemento no figura, simplemente
  } else {                                        // comparo si la long es menor a 3
        return arrayEMN;
    }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayoresA100 = []; //defini mayoresA100 que tomara los vals de (100 a 200] del array pusheando cada vez que
  for (i = 0; i < array.length; i++) { //if sea true en el ciclo for
    if (array[i] > 100 && array[i] <= 200) {
      mayoresA100.push(array[i]);
    }
  }
  return mayoresA100; //al final devuelvo el array con esos numeros
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var suma = numero;
  var arrayMas2 = [];
  for (i = 0; i < 10; i++) {
    if (i === suma) break; //el break no va dentro de las {} del if, sino inmediatamente despues de () y con ;
     else {
      suma = suma + 2;
      arrayMas2.push(suma);
    }
  }
  if (i < 10) {
    return 'Se interrumpió la ejecución';
  } else {
    return arrayMas2;
}
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var suma = numero;
  var arrayMas2 = [];
  for (i = 0; i < 10; i++) {
    if (i === 5) continue; //el continue no va dentro de las {} del if, sino inmediatamente despues de () y con ;
     else {
      suma = suma + 2;
      arrayMas2.push(suma);
    }
  }
  return arrayMas2;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
