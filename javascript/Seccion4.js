// Loops
/*
  Los loops (bucles) son estructuras que permiten repetir un bloque de código varias veces.
  Los tipos más comunes son `for`, `while` y `do...while`.
*/
// Bucle for
let motos = ["Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati"];
for (let i = 0; i <= 100; i+= 5) {
  //console.log("La moto es: " + motos[i]);
  console.log(i)
}

/*
  Ciclo for in
  El ciclo `for...in` se utiliza para iterar sobre las propiedades enumerables de un objeto.
  Es útil cuando necesitas acceder a las claves de un objeto.
*/
let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]); // Muestra cada clave y su valor
}

/*
  Ciclo for of
  El ciclo `for...of` se utiliza para iterar sobre los elementos de un iterable, como un array o una cadena de texto.
  Es útil cuando necesitas acceder a los valores de un iterable.
*/
let canciones = ["Despacito", "Shape of You", "Blinding Lights"];
for (let cancion of canciones) {
  console.log("Canción: " + cancion); // Muestra cada canción
}

/*
  Ciclo while
  El ciclo `while` ejecuta un bloque de código mientras una condición sea verdadera.
  Es útil cuando no sabes cuántas veces necesitas iterar.
*/

let contador = 0;
while (contador < 5) {
  console.log("Contador: " + contador); // Muestra el valor del contador
  contador++; // Incrementa el contador
}

/*
  Ciclo do...while
  El ciclo `do...while` ejecuta un bloque de código al menos una vez y luego verifica la condición.
  Es útil cuando necesitas asegurarte de que el código se ejecute al menos una vez.
*/
let numero = 0;
do {
  console.log("Número: " + numero); // Muestra el valor del número
  numero++; // Incrementa el número
} while (numero < 3); // Continúa mientras el número sea menor que 3

/*
  Ejercicios para practicar en clases
  1. Segun el siguiente array de numeros, crea un bucle que imprima cada número multiplicado por 2.
  - [1, 2, 3, 4, 5]
  2. Según el siguiente objeto
    {
      verduras: ["lechuga", "pepino", "cebolla"],
      frutas: ["manzana", "mazorca", "tomate"],
      carnes: ["pollo", "res", "cerdo"]
    }
  Imprime todas las verduras.
  3. Según el objeto anterior, imprime todas las verduras, frutas y carnes.
*/

let numeros = [1, 2, 3, 4, 5];
  for(let i= 0; i< numeros.length; i++){
    console.log(numeros[i]*2)
  }


let objeto = {  verduras: ["lechuga", "pepino", "cebolla"],
  frutas: ["manzana", "mazorca", "tomate"] };
  carnes: ["pollo", "res", "cerdo"];   
for (let i = 0; i < objeto.verduras.length; i++) {
    console.log(objeto.verduras[i]);
}

const alimentos = {
  verduras: ["lechuga", "pepino", "cebolla"],
  frutas: ["manzana", "mazorca", "tomate"],
  carnes: ["pollo", "res", "cerdo"]
};
for (const categoria in alimentos) {
  console.log(categoria + ":");
  for (let i = 0; i < alimentos[categoria].length; i++) {
  console.log(alimentos[categoria][i]);
}
}
