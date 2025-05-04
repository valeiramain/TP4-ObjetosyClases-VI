//3-Escribe una clase que permita crear distintos objetos “rectángulos”,
// con las propiedades de alto y ancho, mas los métodos necesarios para modificar
// y mostrar sus propiedades, calcular el perímetro y el área


class Rectangulos {
    // Defino cada propiedad privada
    #alto;
    #ancho;

    constructor(altop, anchop) {
        this.#alto = altop;
        this.#ancho = anchop;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getAlto() {
        return this.#alto
    }
    get getAncho() {
        return this.#ancho
    }

    //set = modificar valor. siempre tiene parametros
    set setAlto(nuevoAlto) {
        this.#alto = nuevoAlto
    }
    set setAncho(nuevoAncho) {
        this.#ancho = nuevoAncho
    }

    //metodos

    perimetro() {
        return (2 * (this.getAlto + this.getAncho))
    }

    area() {
        return (this.getAlto * this.getAncho)
    }

    mostrarDatos(titulo) {
        document.writeln(`<h3>${titulo}</h3>
            <ul>
            <li>Alto: ${this.getAlto}</li>
            <li>Ancho: ${this.getAncho}</li>
            </ul>`)
    }

}


const rectangulo1 = new Rectangulos(2, 10);
rectangulo1.mostrarDatos(`Nuevo Rectángulo`)

document.writeln(`<p>Perímetro = ${rectangulo1.perimetro()}</p>`)
document.writeln(`<p>Area = ${rectangulo1.area()}</p>`)

// modificar propiedades
rectangulo1.setAlto = 5;
rectangulo1.setAncho = 20;
rectangulo1.mostrarDatos(`Rectángulo Modificado`);

document.writeln(`<p>Perímetro = ${rectangulo1.perimetro()}</p>`)
document.writeln(`<p>Area = ${rectangulo1.area()}</p>`)






