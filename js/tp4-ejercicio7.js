//7- Nos piden realizar una agenda telefónica de contactos.

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

// Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario
//  se pueden mostrar en pantalla y  por consola.
const arrayAgenda = []

class Contacto {
    // Defino cada propiedad privada
    #nombre;
    #telefono;
    constructor(nombrep, telefonop) {
        this.#nombre = nombrep;
        this.#telefono = telefonop;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombre() {
        return this.#nombre
    }
    get getTelefono() {
        return this.#telefono
    }

    //set = modificar valor. siempre tiene parametros
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setTelefono(nuevoTelefono) {
        this.#telefono = nuevoTelefono
    }

    // agregarContacto(arrayAgenda) {
    //     const cantContactos = parseInt(prompt('Ingrese cantidad de contactos a Ingresar en la Agenda: '))
    // if (!isNaN(cantContactos) && (cantContactos <= 10)) {
    //     for (let i = 0; i < cantContactos; i++) {
    //         const nuevoNombre = prompt('Ingrese Nombre:')
    //         const nuevoTelefono = prompt('Ingrese Telefono:')
    //         const nuevoContacto = new Contacto(nuevoNombre, nuevoTelefono)
    //         console.log(nuevoContacto)
    //         arrayAgenda.push(nuevoContacto)
    //         console.log(arrayAgenda)
    //     }
    // }
    // } else {
    //     document.writeln(`<p>Operación Inválida</p>`)
    // }

}




const operacion = parseInt(prompt('Ingrese 1=>Agregar 2=>Existe 3=>Listar 4=>Buscar 5=>Eliminar 6=>Agenda Llena 7=>Huecos Libres: '))


if (!isNaN(operacion) && (operacion >= 1 || operacion <= 7)) {
    switch (operacion) {
        case 1:
            //Agregar
            console.log('Agregar')
            break;
        case 2:
            //Existe?
            console.log('Existe?')
            break;
        case 3:
            //Listar
            console.log('Listar')
            break;
        case 4:
            //Buscar
            console.log('Buscar')
            break;
        case 5:
            //Eliminar
            console.log('eliminar')
            break;
        case 6:
            //Agenda llena?
            console.log('llena?')
            break;
        case 7:
            //huecos libres?
            console.log('huecos?')
            break;
        default:
            document.writeln("Ingresaste una opción inválida")
    }
} else {
    document.writeln(`<p>Operación Inválida</p>`)
}



console.log('fin programa')
