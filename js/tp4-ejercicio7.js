// 7- Nos piden realizar una agenda telefónica de contactos.

// Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

// Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

// Los métodos de la agenda serán los siguientes:

// ●	aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
// ●	existeContacto(Contacto): indica si el contacto pasado existe o no.
// ●	listarContactos(): Lista toda la agenda
// ●	buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
// ●	eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
// ●	agendaLlena(): indica si la agenda está llena.
// ●	huecosLibres(): indica cuántos contactos más podemos ingresar.

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.


//variables
// contacto => objeto con nombre y telefono
// agenda => objeto con array de contactos, y cantidad de contactos
// metodos
// crear un menu de opciones

class Contacto {
    #nombre;
    #telefono;
    constructor(nombre, telefono) {
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get getNombre() {
        return this.nombre
    }
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get getTelefono() {
        return this.telefono
    }
    set setTelefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono
    }

    mostrarContacto() {
        document.writeln(`<p>Nombre:${this.getNombre}, Teléfono: ${this.getTelefono}`)
    }
}

class Agenda {
    #contactos;
    #tamanio;
    constructor(tamanio = 10) {
        this.#contactos = [];
        this.#tamanio = tamanio;
    }
    get getContactos() {
        return this.#contactos
    }
    get getTamanio() {
        return this.#tamanio;
    }
    set setTamanio(numevoTamanio) {
        this.#tamanio = numevoTamanio
    }

    //metodos

    aniadirContacto(contacto) {
        this.#contactos.push(contacto)
        console.log('agregar contacto a la agenda')
        console.log(this.getContactos)
    }
}

// const contacto1 = new Contacto('valentina','+549381202525')
// console.log(contacto1)

const capacidadAgenda = parseInt(prompt('Ingresa el tamaño de la Agenda: '))

//crear agenda
const agendaNueva = new Agenda(capacidadAgenda)
console.log(agendaNueva)

do{
// mostrar el menú de opciones del usuario
const opcion = parseInt(prompt(`Selecciona una opción:
    1- Añadir contacto,
    2- Eliminar contacto,
    3- Listar contacto`))

switch (opcion) {
    case 1:
        //pedir al usuario nombre y telefono
        const nombre = prompt('Ingrese nombre del usuario: ')
        const telefono = prompt('Ingrese telefono del contacto:')
        // verificarContacto() si existe un contacto por el nombre ingresado (usar buscar frutas)

        // if no exite => crear contacto
        // crear objeto
        const nuevoContacto = new Contacto(nombre,telefono)
        console.log(nuevoContacto)
        // invocar aniadirContacto()
        agendaNueva.aniadirContacto(nuevoContacto)
        console.log(agendaNueva)
        break;
    case 2:
        //pedir nombre a eliminar
        // invocar eliminarContacto()
        break;
    default:
        document.writeln(`Ingresó opcion invalida`)
        break;    
}
} while(confirm(`Desea continuar realizando operaciones?`))