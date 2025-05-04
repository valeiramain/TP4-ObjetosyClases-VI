//9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido".
// Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
// Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido"
// para verificar que cada animal emite el sonido adecuado. 

class Animal {
    #nombre;
    #edad;
    constructor(nombrep, edadp) {
        this.#nombre = nombrep;
        this.#edad = edadp;
    }

    // getter y setter
    get getNombre() {
        return this.#nombre
    }
    get getEdad() {
        return this.#edad
    }
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }

    // metodos
    emitirSonido(){
        document.writeln(`<p> Emitir sonido de clase Animal !!</p>`)
    }
}

//HERENCIA

class Perro extends Animal{
    #sonidoPerro;
    constructor (nombrep, edadp, sonidoPerrop){
        // invocar al contructor de la clase animal
        super(nombrep, edadp)
        // agregan propiedades de perro
        this.#sonidoPerro = sonidoPerrop;
    }

    //getter y setter
    get getSonidoPerro() {
        return this.#sonidoPerro
    }
    set setSonidoPerro(nuevoSonidoPerro) {
        this.#sonidoPerro = nuevosonidoPerro
    }


    emitirSonidoPerro(){
        document.writeln(`<p> ${this.getSonidoPerro} !!</p>`)
    }
}
class Gato extends Animal{
    #sonidoGato;
    constructor (nombrep, edadp, sonidoGatop){
        // invocar al contructor de la clase animal
        super(nombrep, edadp)
        // agregan propiedades de gato
        this.#sonidoGato = sonidoGatop;
    }
    //getter y setter
    get getSonidoGato() {
        return this.#sonidoGato
    }
    set setSonidoGato(nuevoSonidoGato) {
        this.#sonidoGato = nuevoSonidoGato
    }

    emitirSonidoGato(){
        document.writeln(`<p> ${this.getSonidoGato} !!</p>`)
    }
}

const perro1 = new Perro('Toby',2,'guau guau')
const gato1 = new Gato('Nube',3,'miauuuuuu')

perro1.emitirSonidoPerro()
gato1.emitirSonidoGato()
