//Crea un objeto libro que tenga propiedades título, autor, año y género. 
// Luego, escribe una función que reciba un array de libros y un género 
// y devuelva un array con los libros de ese género usando filter. 
// Usa prompt para ingresar los datos de los libros y el género.

const libro = {
    titulo:'',
    autor:'',
    anio:0,
    genero:'',
}

let libros = [];

do{
    let nomreLibro = prompt('Ingrese nombre del Libro:')
    let genero = prompt('ingrese género del libro:').toUpperCase();


} while (confirm('Desea ingresar libros?:'))