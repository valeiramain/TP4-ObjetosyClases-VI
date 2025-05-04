//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
// y los métodos "saludar" y "despedirse".
// Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".

class Persona {
    // Defino cada propiedad privada
    #nombre;
    #edad;
    #profesion;
    constructor(nombrep, edadp, profesionp) {
        this.#nombre = nombrep;
        this.#edad = edadp;
        this.#profesion = profesionp;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombre() {
        return this.#nombre
    }
    get getEdad() {
        return this.#edad
    }
    get getProfesion() {
        return this.#profesion
    }
    //set = modificar valor. siempre tiene parametros
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
    set setProfesion(nuevaProfesion) {
        this.#nombre = nuevaProfesion
    }

    saludar(){
        document.writeln(`<p> Hola ${this.getNombre} !!</p>`)
    }

    despedirse(){
        document.writeln(`<p> Adiós ${this.getNombre} !!</p>`)
    }
}

const persona1 = new Persona('Juan Perez',30,'Arquitecto')
const persona2 = new Persona('Ana Garcia',25,'Medica')

persona1.saludar()
persona2.saludar()
persona1.despedirse()
persona2.despedirse()