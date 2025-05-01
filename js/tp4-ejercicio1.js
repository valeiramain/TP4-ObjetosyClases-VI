//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo 
// y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

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

auto.encender()
auto.apagar()

