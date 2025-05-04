//6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ●	ISBN
// ●	Título
// ●	Autor
// ●	Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad.
// Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro {
    // Defino cada propiedad privada
    #isbn;
    #titulo;
    #autor;
    #nroDePaginas;
    constructor(isbnp, titulop, autorp, nroDePaginasp) {
        this.#isbn = isbnp;
        this.#titulo = titulop;
        this.#autor = autorp;
        this.#nroDePaginas = nroDePaginasp;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getIsbn() {
        return this.#isbn
    }
    get getTitulo() {
        return this.#titulo
    }
    get getAutor() {
        return this.#autor
    }
    get getNroDePaginas() {
        return this.#nroDePaginas
    }
    //set = modificar valor. siempre tiene parametros
    set setIsbn(nuevoIsbn) {
        this.#isbn = nuevoIsbn
    }
    set setTitulo(nuevoTitulo) {
        this.#titulo = nuevoTitulo
    }
    set setAutor(nuevoAutor) {
        this.#autor = nuevoAutor
    }
    set setNroDePaginas(nuevoNroDePaginas) {
        this.#nroDePaginas = nuevoNroDePaginas
    }

    mostrarLibro() {
        return document.writeln(`</p>El libro ${this.getTitulo} con ISBN ${this.getIsbn} creado por el autor ${this.getAutor} tiene ${this.getNroDePaginas} páginas.</p>`)
    }

    libroMasLargo(pagLibro1, pagLibro2) {
        let resultado = ''
        if (pagLibro1 > pagLibro2) {
            resultado = '<p>El primer libro tiene más páginas que el segundo</p>'
        } else if (pagLibro2 > pagLibro1) {
            resultado = '<p>El segundo libro tiene más páginas que el primero</p>'
        } else {
            resultado = '<p>Ambos libros tienen la misma cantidad de páginas</p>'
        }
        return document.writeln(resultado)
    }
}


const libro1 = new Libro('978-84-376-0494-7', 'Cien Años de Soledad', 'Gabriel García Márquez', 471);
const libro2 = new Libro('978-950-07-0006-1', 'Rayuela', 'Julio Cortázar', 736);

// Mostrar libros
libro1.mostrarLibro();
libro2.mostrarLibro();

// cual tiene más paginas
const pagLibro1 = libro1.getNroDePaginas
const pagLibro2 = libro2.getNroDePaginas

console.log('pag libro1: ' + pagLibro1)
console.log('pag libro2: ' + pagLibro2)
libro1.libroMasLargo(pagLibro1, pagLibro2)
