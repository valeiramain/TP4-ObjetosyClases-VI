//Crea un objeto libro que tenga propiedades título, autor, año y género.
// Luego, escribe una función que reciba un array de libros y un género y devuelva un array con los libros de ese género usando filter. 
// Usa prompt para ingresar los datos de los libros y el género.

//variables

const libros = []

//funciones

function filtrarPorGenero(arrayLibros, generoLibro) {
    const arrayFiltrado = arrayLibros.filter((itemLibro) => itemLibro.genero === generoLibro)
    return arrayFiltrado
}

function mostraLibrosFiltrados(arrayFiltrado,generoFiltrado) {
    document.writeln(`<h3>Los libros filtrados por género "${generoFiltrado}" son:</h3>
        <ul>`)
    for (let i = 0; i < arrayFiltrado.length; i++) {
        document.writeln(`<li>${arrayFiltrado[i].titulo}</li>`)
    }
    document.writeln(`</ul>`)
}

do {
    const titulo = prompt('Ingresa titulo:')
    const autor = prompt('Ingresa autor:')
    const anio = prompt('Ingresa año:')
    const genero = prompt('Ingresa genero:')
    const libro = {
        titulo: titulo,
        autor: autor,
        anio, //anio: anio,
        genero, //genero: genero,
    }
    libros.push(libro)
} while (confirm('Desea ingresar otro libro?:'))


// filtrar por genero
const generoSolicitado = prompt('Ingrese genero para buscar libros: ')
const librosPorGenero = filtrarPorGenero(libros, generoSolicitado)

// mostrar filtro por genero
mostraLibrosFiltrados(librosPorGenero,generoSolicitado)

