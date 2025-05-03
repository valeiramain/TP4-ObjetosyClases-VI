//9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido".
// Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". 
// Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido"
// para verificar que cada animal emite el sonido adecuado. 

class Animal {
    constructor(nombrep, edadp) {
        this.nombre = nombrep;
        this.edad = edadp;
    }

    emitirSonido(){
        document.writeln(`<p> Emitir sonido de clase Animal !!</p>`)
    }
}


//HERENCIA

class Perro extends Animal{
    constructor (nombrep, edadp, sonidoPerrop){
        // invocar al contructor de la clase animal
        super(nombrep, edadp)
        // agregan propiedades de perro
        this.sonidoPerro = sonidoPerrop;
    }

    emitirSonidoPerro(){
        document.writeln(`<p> ${this.sonidoPerro} !!</p>`)
    }
}
class Gato extends Animal{
    constructor (nombrep, edadp, sonidoGatop){
        // invocar al contructor de la clase animal
        super(nombrep, edadp)
        // agregan propiedades de gato
        this.sonidoGato = sonidoGatop;
    }

    emitirSonidoGato(){
        document.writeln(`<p> ${this.sonidoGato} !!</p>`)
    }
}

const perro1 = new Perro('Toby',2,'guau guau')
const gato1 = new Gato('Nube',3,'miauuuuuu')

perro1.emitirSonidoPerro()
gato1.emitirSonidoGato()
