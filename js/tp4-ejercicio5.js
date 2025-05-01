//5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
//  cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
//esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
// generaDNI(): genera un número aleatorio de 8 cifras.

class Persona {
    // Defino cada propiedad privada
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNac;
    constructor(nombrep,edadp,dnip,sexop,pesop,alturap,anioNacp) {
        this.#nombre = nombrep;
        this.#edad = edadp;
        this.#dni = dnip;
        this.#sexo = sexop;
        this.#peso = pesop;
        this.#altura = alturap;
        this.#anioNac = anioNacp;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombre() {
        return this.#nombre
    }
    get getEdad() {
        return this.#edad
    }
    get getDni() {
        return this.#dni
    }
    get getSexo() {
        return this.#sexo
    }
    get getPeso() {
        return this.#peso
    }
    get getAltura() {
        return this.#altura
    }
    get getAnioNac() {
        return this.#anioNac
    }

    //set = modificar valor. siempre tiene parametros
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setEdad(nuevaEdad) {
        this.#edad = nuevaEdad
    }
    set setDni(nuevoDni) {
        this.#dni = nuevoDni
    }
    set setSexo(nuevoSexo) {
        this.#sexo = nuevoSexo
    }
    set setPeso(nuevoPeso) {
        this.#peso = nuevoPeso
    }
    set setAltura(nuevaAltura) {
        this.#altura = nuevaAltura
    }
    set setAnioNac(nuevoAnioNac) {
        this.#anioNac = nuevoAnioNac
    }

    //metodos

    imprimeDatos() {
        document.writeln(`<h3>Datos del Persona:</h3>
            <ul>
            <li>Código Persona: ${this.##nombre}</li>
            <li>Nombre Persona: ${this.##nombre}</li>
            <li>Precio Persona: $${this.#precioPersona}</li>
            </ul>`)
    }

}


const Persona1 = new Persona('P001','Zapatillas Nike Air',150000);
arrayPersonas.push(Persona1)
const Persona2 = new Persona('P002','Remera Adidas',45000);
arrayPersonas.push(Persona2)
const Persona3 = new Persona('P003','Campera Puma',135000);
arrayPersonas.push(Persona3)

console.log(arrayPersonas)

for (let i = 0; i < arrayPersonas.length; i++) {
    arrayPersonas[i].imprimeDatos();
}


