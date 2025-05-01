//Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números).
// Escribe una función que reciba un objeto alumno y un número, y que añada la calificación al array de calificaciones del alumno.
// Usa un bucle para calcular la calificación más alta del alumno 
// y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, C para 5-6, D para 0-4).



//variables

const alumno = {
    nombre: '',
    curso: '',
    calificaciones: [],
}


//funciones
function agregarNota(alumno, nota) {
    alumno.calificaciones.push(nota)
}


function mostrarAlumno(alumno) {
    document.writeln(`<h3>Datos del Alumno:</h3>
        <p>Nombre: ${alumno.nombre}</p>
        <p>Curso: ${alumno.curso}</p>
        <h4>Calificaciones:</h4>
        <ul>`)
    for (let i = 0; i < alumno.calificaciones.length; i++) {
        document.writeln(`<li>${alumno.calificaciones[i]}</li>`)
    }
    document.writeln(`</ul>`)
}

const nombreAlumno = prompt('Ingresa Nombre Alumno:')
const cursoAlumno = prompt('Ingresa Curso Alumno:')

alumno.nombre = nombreAlumno;
alumno.curso = cursoAlumno;

do {
    const calificacionAlumno = parseFloat(prompt('Ingresa Calificación del Alumno:'))
    agregarNota(alumno, calificacionAlumno)
} while (confirm('Desea ingresar otro Calificación?:'))


//mostrar datos del alumno
mostrarAlumno(alumno)

// calificacion mas alta
let mayorNota = 0;
console.log('mayorNota inicial: ' + mayorNota)
console.log('lenght:' + alumno.calificaciones.length)

for (let i = 0; i < alumno.calificaciones.length; i++) {
    if (mayorNota < alumno.calificaciones[i]) {
        mayorNota = alumno.calificaciones[i];
        console.log('mayor: ' + mayorNota)
    }
}

// asigna letra segun calificacion mas alta
let letraCalificacion = "";
if (mayorNota>=0 && mayorNota<=4){
    letraCalificacion = "D";
}
if (mayorNota>=5 && mayorNota<=6){
    letraCalificacion = "C";
}
if (mayorNota>=7 && mayorNota<=8){
    letraCalificacion = "B";
}
if (mayorNota>=9 && mayorNota<=10){
    letraCalificacion = "A";
}

//usa switch segun enunciado
switch (letraCalificacion) {
    case 'D':
        document.writeln(`<p>El alumno tiene una D según su calificación más alta igual a ${mayorNota}</p>`)
        break;
    case 'C':
        document.writeln(`<p>El alumno tiene una C según su calificación más alta igual a ${mayorNota}</p>`)
        break;
    case 'B':
        document.writeln(`<p>El alumno tiene una B según su calificación más alta igual a ${mayorNota}</p>`)
        break;
    case 'A':
        document.writeln(`<p>El alumno tiene una A según su calificación más alta igual a ${mayorNota}</p>`)
        break;
    default:
        document.writeln('Operación Inválida')
        break
}