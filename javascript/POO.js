/*
  POO (Programación Orientada a Objetos)
  La POO es un paradigma de programación que organiza el código en objetos, que son instancias de clases.
  Los objetos pueden tener propiedades (atributos) y métodos (funciones).
*/

let carro = {
  modelo: "mustang",
  marca: "ford",
  anio: "2013",
  kilometraje: 232000,
  encender: () => {
    console.log("Encendiendo");
  },
};

carro.volante = true;
console.log(carro);

carro.encender();

/*
  Las clases son moldes de objetos
*/
class Personaje {
  //constructor recibe los parametros de la clase
  constructor(nombre, vida, defensa) {
    //this es un objeto que funciona en el contexto de la clase
    //al decir this.nombre, estoy creando una propiedad nombre en el objeto this
    //Debido a que this funciona en toda la clase, ahora podre llamar a this.nombre en otras funciones si eso deseo
    this.nombre = nombre;
    this.vida = vida;
    this.defensa = defensa;
  }

  atacar() {
    console.log(`${this.nombre} ataca con su puño`);
  }
}

let jhon = new Personaje("Jhonny", 200, 12);
let jeremy = new Personaje("Jeremy", 180, 10);

jhon.atacar();
jeremy.atacar();

/*
  La herencia.
  Una clase puede heredar propiedades de otra. Piensa en ello como una serie de conjuntos, un ser vivo tiene
  ciertas propiedades, pero un gato no tiene las mismas propiedades o metodos que un humano
  aunque ambos son seres vivos. Sin embargo, si comparten ciertas cosas al ambos ser seres humanos
*/

class Arquero extends Personaje {
  constructor(nombre, vida, defensa, precision) {
    super(nombre, vida, defensa); // Llama al constructor de la clase base Personaje
    this.precision = precision; // Agrega una nueva propiedad específica de Arquero
  }

  atacar_con_arco() {
    console.log(`${this.nombre} ataca con su arco y flecha con precisión ${this.precision}`);
  }
}

let arquero = new Arquero("Legolas", 220, 13, 93);
arquero.atacar();
arquero.atacar_con_arco();

/*
  Crea un videojuego que tenga las siguientes clases:
  - personaje: Clase base para todos los personajes del juego.
  - guerrero: Clase que hereda de personaje y representa a un guerrero.
  - mago: Clase que hereda de personaje y representa a un mago.
  - arquero: Clase que hereda de personaje y representa a un arquero.

  personaje tiene las siguientes propiedades y metodos:
  - nombre: Nombre del personaje.
  - vida: Vida del personaje.
  - daño: Daño del personaje.
  - defensa: Defensa del personaje.
  - velocidad: Velocidad del personaje.
  - atacar(): Metodo utilizado para atacar (con los puños).
  - saludar(): Método utilizado para saludar indicando nombre y clase.

  guerrero tiene las siguientes propiedades y metodos:
  - array_de_armas: Armas que puede usar el guerrero.
  - atacar_con_arma(): Método utilizado para atacar con un arma aleatoria del array.

  mago tiene las siguientes propiedades y metodos:
  - array_de_hechizos: Hechizos que puede usar el mago.
  - atacar_con_hechizo(): Método utilizado para atacar con un hechizo aleatorio del array.

  arquero tiene las siguientes propiedades y metodos:
  - array_de_flechas: Flechas que puede usar el arquero.
  - disparar(): Método utilizado para disparar una flecha aleatoria del array.

  Debes de crear al menos 5 personajes, al menos 2 deben de ser guerreros, 2 magos y 1 arquero.

  Al iniciar el juego, cada personaje debe saludar indicando su nombre y clase.

  Luego habrá una ronda de ataques. En cada ronda, cada personaje atacará a otro personaje de forma aleatoria.

  Cada personaje solo puede atacar una vez por ronda.

  Además, el orden de la ronda debe ser determinado de forma aleatoria pero tomando en cuenta la velocidad de cada personaje.

  Para ello debes jugar con las probabilidades de cada personaje, por ejemplo:
  - Si el personaje tiene una velocidad de 10, debes generar un numero aleatorio entre 1 y 10.
  - Según el numero aleatorio generado, será determinado el orden de ataque de cada personaje en esa ronda

  Ejemplo:
  Personaje 1: 5
  Personaje 2: 8
  Personaje 3: 2
  Personaje 4: 10
  Personaje 5: 6

  El personaje 4 atacará primero, luego el personaje 2, luego el personaje 5, luego el personaje 1 y por último el personaje 3.

  Cuando un personaje ataque a otro, se utilizara la siguiente lógica:

  El personaje atacado se intentara defender, este generara un numero aleatorio entre 1 y su defensa.
  Si el numero aleatorio es mayor que el daño del atacante, el ataque falla y no se le resta vida al personaje atacado.
  Si el numero aleatorio es menor o igual al daño del atacante, el ataque tiene éxito y se le resta vida al personaje atacado.

  Al momento de atacar, se debe mostrar un mensaje indicando quién ataca a quién y si el ataque fue exitoso o fallido.

  Además, hay un tercio de posibilidades de que un personaje ataque con sus puños y dos tercios de posibilidades de que ataque con su arma, hechizo o flecha (según su clase).

  Cuando la vida de un personaje llegue a 0, este será eliminado del juego y no podrá atacar más.
  El juego termina cuando solo quede un personaje con vida.

  Es importante que cuando un personaje muera, se muestre un mensaje indicando que ha muerto y que no puede atacar más.
  Además, al final del juego, se debe mostrar un mensaje indicando quién es el ganador.

  El juego es ganado por el personaje que quede con vida al final.

  Nota: es importante imprimir cada numero de ronda
  ejemplo: "Ronda 1", "Ronda 2", etc.

  Puntos opcionales:
  - Implementa un sistema de habilidades especiales para cada clase, estas habilidades solo se pueden ser utilizadas una vez por juego.
  - Implementa un inventario y objetos para cada personaje, los cuales pueden ser utilizados para mejorar sus habilidades o recuperar vida, sin embargo
  Estos consumirán un turno de ataque y tienen un número limitado de usos.
  - Agrega la clase "vampiro" cuyos ataques regenerar un % aleatorio de vida al personaje.
  - Agrega la posibilidad de 1 entre 10 de que un personaje se tropiece y no pueda hacer nada en esa ronda.
*/
