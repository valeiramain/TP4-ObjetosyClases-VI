//6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ●	ISBN
// ●	Título
// ●	Autor
// ●	Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

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
}