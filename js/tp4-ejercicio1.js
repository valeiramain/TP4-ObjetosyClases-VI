//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

const auto = {
    color : 'Gris',
    marca : 'Toyota',
    modelo: 'Hylux',
    encendido : true,

    encender: function(){
        this.encendido=true;
        document.writeln("Auto encendido")
    },

    apagar: function(){
        this.encendido=false;
        document.writeln("El auto se apagó")
    },
}

if (!auto.encendido){
        encender()
}else{
    apagar()
}



