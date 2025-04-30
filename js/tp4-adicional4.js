//Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno.
// Usa un bucle para calcular la calificación más alta del alumno 
// y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

arrayNotas = [];

function agregaCalificacion(alumno,nota){
    console.log('dentro funcion')
    alumno.calificacion.push(nota);
    console.log(alumno)
}


do{
    const nombreAlumno = prompt('Ingrese nombre del Alumno:')
    const cursoAlumno = prompt('Ingrese curso del Alumno:')
    const notaAlumno = parseFloat(prompt('ingrese calificacion del Alumno:'));
    
    const alumno = {
        nombre:nombreAlumno,
        curso:cursoAlumno,
        calificacion:arrayNotas.push(notaAlumno),
    }
    
    console.log(alumno)
    console.log(arrayNotas)

}while (confirm('Desea seguir ingresando estudiantes?'))
