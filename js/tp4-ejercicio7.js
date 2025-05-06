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
        return this.#nombre
    }
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get getTelefono() {
        return this.#telefono
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
        this.getContactos.push(contacto)
        console.log(this.getContactos)
    }

    existeContacto(nombre) {
        return this.#contactos.find(contacto => contacto.getNombre.toLowerCase().trim() === nombre.toLowerCase().trim());
    }

    listarContactos() {
        document.writeln(`<h3>Lista de Contactos</h3>
            <ol>`)
        for (let i = 0; i < this.getContactos.length; i++) {
            const contacto = this.getContactos[i];
            console.log(contacto)
            document.writeln(`<li>Nombre: ${contacto.getNombre}  -  Telefono: ${contacto.getTelefono}</li>`)
        }
        document.writeln(`</ol>`)
    }

    buscarContacto(nombreBuscado) {
        const contacto = this.existeContacto(nombreBuscado);
        if (contacto) {
            document.writeln(`<p>Contacto encontrado: Nombre: ${contacto.getNombre} - Teléfono: ${contacto.getTelefono}</p>`);
            console.log('contacto encontrado')
        } else {
            document.writeln(`<p>Contacto "${nombreBuscado}" no encontrado.</p>`);
            console.log('contacto no encontrado encontrado')
        }
    }

    eliminarContacto(contacto) {
        const nombreBuscado = contacto.getNombre.toLowerCase().trim();
        const indice = this.#contactos.findIndex(c =>
            c.getNombre.toLowerCase().trim() === nombreBuscado
        );

        if (indice !== -1) {
            this.#contactos.splice(indice, 1);
            document.writeln(`<p>Contacto "${contacto.getNombre}" eliminado con éxito.</p>`);
        } else {
            document.writeln(`<p>Contacto "${contacto.getNombre}" no encontrado.</p>`);
        }
    }

    agendaLlena() {
        // return this.#contactos.length >= this.#tamanio;
        return this.getContactos.length >= this.getTamanio;
    }

    huecosLibres() {
        // return this.#tamanio - this.#contactos.length;
        return this.getTamanio - this.getContactos.length;
    }
}

// pide al usuario capacidad de la agencia
const capacidadAgenda = parseInt(prompt('Ingresa el tamaño de la Agenda: '))

//crear agenda
const agendaNueva = new Agenda(capacidadAgenda)
console.log(agendaNueva)

do {
    const opcion = parseInt(prompt(`Selecciona una opción:
    1- Añadir contacto,
    2- Existe Contacto,
    3- Listar Contacto,
    4- Buscar Contacto,
    5- Eliminar contacto,
    6- Agenda Llena,
    7- Huecos Libres`))

    switch (opcion) {
        case 1:
            const nombre = prompt('Ingrese nombre del usuario: ')
            const telefono = prompt('Ingrese telefono del contacto:')

            if (agendaNueva.getContactos.length < capacidadAgenda) {
                // puede agregar contacto
                console.log('La agenda SI tiene capacidad para agregar contacto')
                document.writeln(`<p>La agenda SI tiene capacidad para agregar contacto</p>`)

                const nuevoContacto = new Contacto(nombre, telefono)

                console.log(nuevoContacto)
                agendaNueva.aniadirContacto(nuevoContacto)
                console.log(agendaNueva)
                console.log('contacto añadido')
                document.writeln(`<p>Se añadió Nombre: ${nombre} y Telefono:${telefono} en la Agenda</p>`)
            } else {
                console.log('La agenda NO tiene capacidad para agregar contacto')
                document.writeln(`<p>La agenda NO tiene capacidad para agregar contacto</p>`)
            }

            break;
        case 2:
            // indica si el contacto pasado existe o no.
            console.log('Existe?')
            const nombreExiste = prompt('Ingrese nombre que desea saber si existe: ').trim();
            const resultadoExiste = agendaNueva.existeContacto(nombreExiste);

            console.log('resultado existe:')
            console.log(resultadoExiste)
            if (resultadoExiste) {
                console.log(`Contacto Existente: "${nombreExiste}"`);
                document.writeln(`<p>Contacto Existente: "${nombreExiste}"</p>`)
            } else {
                console.log("Contacto No Existente.");
                document.writeln(`<p>Contacto "${nombreExiste}" NO Existente</p>`)
            }
            break;
        case 3:
            console.log('listar')
            agendaNueva.listarContactos()
            break;
        case 4:
            // busca un contacto por su nombre y muestra su teléfono.
            console.log('Buscar')
            const nombreBuscado = prompt('Ingrese nombre que desea buscar: ').trim();
            agendaNueva.buscarContacto(nombreBuscado);
            break;
        case 5:
            // elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
            console.log('Eliminar')
            const nombreAEliminar = prompt('Ingrese el nombre del contacto a eliminar: ').trim();
            const contactoAEliminar = agendaNueva.existeContacto(nombreAEliminar);

            if (contactoAEliminar) {
                agendaNueva.eliminarContacto(contactoAEliminar);
            } else {
                console.log(`<p>Contacto "${nombreAEliminar}" no existe en la agenda.</p>`)
                document.writeln(`<p>Contacto "${nombreAEliminar}" no existe en la agenda.</p>`);
            }

            break;
        case 6:
            console.log('agenda llena?')
            if (agendaNueva.agendaLlena()) {
                console.log(`<p>La agenda está llena.</p>`);
                document.writeln(`<p>La agenda está llena.</p>`);
            } else {
                console.log(`<p>La agenda NO está llena.</p>`);
                document.writeln(`<p>La agenda NO está llena.</p>`);
            }
            break;
        case 7:
            console.log('huecos libres?')
            const libres = agendaNueva.huecosLibres();
            console.log(`<p>Quedan ${libres} lugar(es) disponible(s) en la agenda.</p>`);
            document.writeln(`<p>Quedan ${libres} lugar(es) disponible(s) en la agenda.</p>`);
            break;
        default:
            console.log(`Ingresó opcion invalida`)
            document.writeln(`Ingresó opcion invalida`)
            break;
    }

} while (confirm(`Desea continuar realizando operaciones?`))