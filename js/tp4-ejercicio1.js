//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

const auto = {
    color: 'Gris',
    marca: 'Toyota',
    modelo: 'Hylux',
    encendido: false,

    encender: function () {
        this.encendido = true;
        document.writeln(`<p>Auto encendido</p>`)
    },

    apagar: function () {
        this.encendido = false;
        document.writeln(`<p>El auto se apagó</p>`)
    },
}

console.log(auto)
console.log(auto.encendido)

const accion = parseInt(prompt("Ingrese 1: Prender Auto, 2: Apagar Auto. "))
console.log('accion: ' + accion)

switch (accion) {
    case 1:
        console.log('case 1'+auto.encendido)
        if (auto.encendido === false) {
            console.log('prender')
            auto.encender()
            break;
        } else {
            document.writeln("<p>El auto ya está encendido</p>")
        }

    case 2:
        console.log('case 2'+auto.encendido)
        if (auto.encendido === true) {
            console.log('apagar')
            auto.apagar()
        } else {
            document.writeln("<p>El auto ya está apagado</p>")
        }
        break;
    default:
        document.writeln(`<p>Ingresaste una opción inválida</p>`)
        break;
}


