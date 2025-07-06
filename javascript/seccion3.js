//Hoisting
/*
  El hoisting es un comportamiento de JavaScript donde las declaraciones de variables y funciones
  son elevadas al inicio de su contexto de ejecución. Esto significa que puedes llamar a una función
  antes de haberla declarado en el código.
*/

saludarHoisting("Juan"); // Esto funciona gracias al hoisting

function saludarHoisting(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Alcance (Scope)
/*
  El alcance se refiere a la visibilidad de las variables en diferentes partes del código.
  Hay dos tipos principales de alcance:
  - Alcance global: Las variables declaradas fuera de cualquier función son accesibles en todo el código.
  - Alcance local: Las variables declaradas dentro de una función solo son accesibles dentro de esa función.
*/

let saludos = "¡Hola!"; // Variable global

if(true) {
  var variableGlobal = "Soy global"; // Esta variable es global
  let variableLocal = "Soy local"; // Esta variable es local
  const constante = "Soy constante"; // Esta constante es local
  console.log(variableGlobal, variableLocal, constante);
}

if(true) {
  let variableLocal = "Nuevo valor local"; // Esta variable es local y no afecta a la anterior
  const constante = "Nueva constante"; // Esta constante es local y no afecta a la anterior
}
console.log(variableGlobal, variableLocal, constante);

//Funciones con retorno
/*
  Las funciones pueden devolver un valor utilizando la palabra clave `return`.
  Esto permite que la función produzca un resultado que puede ser utilizado posteriormente.
*/

function multiplicarConRetono(num1, num2) {
  return num1 * num2; // Devuelve el resultado de la multiplicación
}

console.log(multiplicarConRetono(5, 3)); // Esto muestra 15 en la consola
multiplicarConRetono(10, 3) + 5

// Es muy distinto a

function multiplicarSinRetorno(num1, num2) {
  num1 * num2; // No devuelve nada, solo realiza la operación
}

console.log(multiplicarSinRetorno(5, 3)); // Esto muestra undefined en la consola
console.log(multiplicarSinRetorno(10,3) + 5)

//Recursion
/*
  La recursión es una técnica en la que una función se llama a sí misma para resolver un problema.
  Es útil para problemas que pueden dividirse en subproblemas más pequeños.
*/

/*
  Ejemplo: Imprimir números del 1 al 5 usando recursión
*/
function imprimirNumerosRecursivo(num) {
  if (num > 5) return; // Caso base: si num es mayor que 5, termina la recursión
  console.log(num); // Imprime el número actual
  imprimirNumerosRecursivo(num + 1); // Llama a la función con el siguiente número
}

imprimirNumerosRecursivo(0); // Llama a la función para iniciar la recursión

/*
  Ejercicios de recursión

  Nivel fácil:
  1. Crea una función recursiva que imprima los números pares del 0 al 100.

  Nivel medio:
  2. Crea una función que reciba un array de frutas e imprima uno a uno cada fruta.

  Nivel difícil:
  3. Crea una función recursiva que calcule el factorial de un número dado.

  Nivel experto:
  4. Crea una función recursiva que imprima la sucesión de Fibonacci hasta un número dado.
*/

//1
function imprimir_numeros(numeros, limite = 2) {
  if (numero <= limite){
    if (numero % === 0) console.log(numero);
    imprimir_numeros(numero +1, limite);
  }
}

imprimir_numeros(0, 100);

//2

let frutas = ['uva', 'melon', 'tomate', 'banana'];

function imprimir_array(lista = [], numero = 0){
  if (numero < lista.length) {
    console.log(lista[numero])
  imprimir_array(lista, numero +1)
  }
}
imprimir-Array(frutas);

//3


function calcular_factorial(numero, acumulador = 1) {
  if (numero >= 1) {
    acumulador = acumulador * numero;
    if (numero === 1) {
      console.log("El factorial es: " + acumulador);
      return;
    }
    calcular_factorial(numero - 1, acumulador);
  } else if (numero === 0) {
    console.log("El factorial de 0 es 1");
    return;
  } else {
    console.log("Ingresa un valor valido");
  }
}

calcular_factorial(7);

 Ejercicio extra de dificultad media
  Crea una función recursiva que basado en un array de notas, te muestre el promedio.