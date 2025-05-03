//10- crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
// esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, 
// además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.
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

    agregarAvion(avion){
        this.#listaAviones.push(avion)
    }

    buscarAvion(nombreAvion){
        let resultado=''
        for (let i=0;i<this.#listaAviones.length;i++){
            if (this.getListaAviones[i]=nombreAvion){
                resultado = document.writeln(`<p>Avión ${nombreAvion} encontrado.</p>`)
            }else{
                resultado = document.writeln(`<p>Avión ${nombreAvion} NO encontrado.</p>`)
            }
        }
        return resultado

        // const avionBuscado = listaAviones.find(avion => avion.nombre === nombreAvion);
        //     if (avionBuscado){
        //         resultado = document.writeln(`<p>Avión ${nombreAvion} encontrado.</p>`)
        //     }else{
        //         resultado = document.writeln(`<p>Avión ${nombreAvion} NO encontrado.</p>`)
        //     }
        // return resultado
    }
}

class Avion {
    constructor(nombre, capacidad, destino) {
        this.nombre = nombre;
        this.capacidad = capacidad;
        this.destino = destino;
        this.listaPasajeros = [];
    }
}


const aeropuertoInternacional = new Aeropuerto('Ministro Pistarini')
// const avion1 = new Avion('Boeing',160, 'Santiago de Chile', ['pasajero1', 'pasajero2', 'pasajero3', 'pasajero4', 'pasajero5'])
// const avion2 = new Avion('Airbus',180, 'Lima', ['pasajero6', 'pasajero7', 'pasajero8', 'pasajero9', 'pasajero10'])
// const avion3 = new Avion('Embraer',120, 'Panamá', ['pasajer11', 'pasajero12', 'pasajero13', 'pasajero14'])
const avion1 = new Avion('Boeing', 160, 'Santiago de Chile')
const avion2 = new Avion('Airbus', 180, 'Lima')
const avion3 = new Avion('Embraer',120, 'Panamá')
console.log(avion1)
console.log(avion2)
console.log(avion3)
// Agregar los 3 aviones al aeropuerto
aeropuertoInternacional.agregarAvion(avion1)
aeropuertoInternacional.agregarAvion(avion2)
aeropuertoInternacional.agregarAvion(avion3)
console.log('objeto aeropuerto internacional:')
console.log(aeropuertoInternacional)

// no entiendo como buscar
aeropuertoInternacional.buscarAvion('Airbus')



