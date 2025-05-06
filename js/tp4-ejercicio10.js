//10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
// esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, 
// además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
// 
// Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
// Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo,
// caso contrario mostrar un mensaje que indique que el avión está lleno.

// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones con diferentes destinos. 
// Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.





class Aeropuerto {
    #nombreAeropuerto;
    #listaAviones;
    constructor(nombreAeropuerto) {
        this.#nombreAeropuerto = nombreAeropuerto;
        this.#listaAviones = [];
    }
    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombreAeropuerto() {
        return this.#nombreAeropuerto
    }
    get getListaAviones() {
        return this.#listaAviones
    }
    //set = modificar valor. siempre tiene parametros
    set setNombreAeropuerto(nuevoNombreAeropuerto) {
        this.#nombreAeropuerto = nuevoNombreAeropuerto
    }
    set setListaAviones(nuevaListaAviones) {
        this.#listaAviones = nuevaListaAviones
    }

    // el método agregarAvion, el cual recibirá un objeto de tipo Avión
    agregarAvion(avion) {
        this.#listaAviones.push(avion)
        return (document.writeln(`<p>Se agregó el Avión ${avion.getNombre} correctamente al Aeropuerto Internacional.</p>`))
    }

    // método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje
    buscarAvion(nombreAvion) {
        const avionEncontrado = this.getListaAviones.find(avion => avion.getNombre === nombreAvion);
        return avionEncontrado
    }

    // mostrar datos del avion ingresado
    mostrarAeropuerto() {
        document.writeln(`
            <h2>Datos del Aeropuerto:</h2>
            <ul>
                <li>Nombre: ${this.getNombreAeropuerto}</li>
                <li>Lista de Aviones:
                    <ul>${this.getListaAviones.map(avion => `<li>${avion.getNombre}</li>`).join('')}</ul>
                </li>
            </ul>
        `);
    }
}

class Avion {
    #nombre;
    #capacidad;
    #destino;
    #listaPasajeros;

    constructor(nombre, capacidad, destino) {
        this.#nombre = nombre;
        this.#capacidad = capacidad;
        this.#destino = destino;
        this.#listaPasajeros = [];
    }
    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getNombre() {
        return this.#nombre
    }
    get getCapacidad() {
        return this.#capacidad
    }
    get getDestino() {
        return this.#destino
    }
    get getListaPasajeros() {
        return this.#listaPasajeros
    }

    //set = modificar valor. siempre tiene parametros
    set setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    set setCapacidad(nuevaCapacidad) {
        this.#capacidad = nuevaCapacidad
    }
    set setDestino(nuevoDestino) {
        this.#destino = nuevoDestino
    }
    set setListaPasajeros(nuevaListaPasajeros) {
        this.#listaPasajeros = nuevaListaPasajeros
    }

    // método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo,
    abordar(pasajero) {
        if (this.getListaPasajeros.length < this.getCapacidad) {
            this.#listaPasajeros.push(pasajero)
            return (document.writeln(`<p>El pasajero ${pasajero} pudo abordar el avion ${this.getNombre} con destino ${this.getDestino}.</p>`))
        } else {
            return (document.writeln(`<p>Lo sentimos! el avión  ${this.getNombre} está lleno.</p>`))
        }
    }

    // mostrar datos del avion ingresado
    mostrarAvion() {
        document.writeln(`
            <h3>Datos del Avión:</h3>
            <ul>
                <li>Nombre: ${this.getNombre}</li>
                <li>Capacidad: ${this.getCapacidad}</li>
                <li>Destino: ${this.getDestino}</li>
            </ul>
        `);
    }
}

//-------------------------------------------------------------------------------------------------
// Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional"
const aeropuertoInternacional = new Aeropuerto('Ministro Pistarini')

document.writeln(`<P>Se creó el Aeropuerto "${aeropuertoInternacional.getNombreAeropuerto}"</p>`)

// Crear 3 objetos aviones con diferentes destinos.
const avion1 = new Avion('Boeing', 160, 'Santiago de Chile')
const avion2 = new Avion('Airbus', 180, 'Lima')
const avion3 = new Avion('Embraer', 120, 'Panamá')

console.log('Se crean 3 objetos aviones:')
console.log(avion1)
console.log(avion2)
console.log(avion3)

// Agregar los 3 aviones al aeropuerto
console.log('agregar aviones a aeropuertoInternacional:')

aeropuertoInternacional.agregarAvion(avion1)
avion1.mostrarAvion()
aeropuertoInternacional.agregarAvion(avion2)
avion2.mostrarAvion()
aeropuertoInternacional.agregarAvion(avion3)
avion3.mostrarAvion()

console.log('objeto aeropuerto internacional con aviones agregados:')
console.log(aeropuertoInternacional)
aeropuertoInternacional.mostrarAeropuerto()


// Buscar un avion en la clase aeropuerto
console.log('busca avion Airbus')
const avionEncontrado = aeropuertoInternacional.buscarAvion('Airbus')
if (avionEncontrado) {
    console.log(`✅ Avión encontrado.`);
    document.writeln(`✅ Avión encontrado.`);
} else {
    console.log(`⚠️ No se encontró el avión.`);
    document.writeln(`⚠️ No se encontró el avión.`);
}

// abordar avion
console.log('Abordar 2 pasajeros al avion Boeing')
avion1.abordar("Pasajero1");
avion1.abordar("Pasajero2");
console.log(avion1)
console.log('Abordar 1 pasajero al avion Airbus')
avion2.abordar("Pasajero3");
console.log(avion2)






