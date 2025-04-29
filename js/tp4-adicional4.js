//Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno.
// Usa un bucle para calcular la calificación más alta del alumno 
// y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).

const alumno = {
    nombre:'',
    curso:'',
    calificacion:[],
}

function agregaCalificacion(alumno,nota){
    console.log('dentro funcion')
    alumno.calificacion.push(nota);
    console.log(alumno)
}


do{
    let nombreAlumno = prompt('Ingrese nombre del Alumno:')
    let cursoAlumno = prompt('Ingrese curso del Alumno:')
    let notaAlumno = parseFloat(prompt('ingrese calificacion del Alumno:'));
    alumno.nombre=nombreAlumno;
    console.log(alumno)
    alumno.curso=cursoAlumno;
    console.log(alumno)
    console.log('nombre:'+nombreAlumno)
    console.log('nota:'+notaAlumno)
    agregaCalificacion(nombreAlumno,notaAlumno)

    console.log(alumno)

}while (confirm('Desea seguir ingresando estudiantes?'))
