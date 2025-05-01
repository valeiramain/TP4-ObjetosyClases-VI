// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
// Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
// Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.


const arrayEstudiantes = [];

function notaMedia(arrayEst) {
    let resultado = 0;
    for (let i = 0; i < arrayEst.length; i++) {
        resultado = resultado + arrayEst[i].nota
    }
    resultado = resultado / (arrayEst.length)
    return resultado
}

do {
    const nombreEstudiante = prompt('Ingrese Nombre del Estudiante:')
    const notaEstudiante = parseFloat(prompt('Ingrese Nota del Estudiante:'))

    const estudiante = {
        nombre: nombreEstudiante,
        nota: notaEstudiante,
    }

    arrayEstudiantes.push(estudiante)

} while (confirm('Desea seguir ingresando estudiantes?'))

const media = notaMedia(arrayEstudiantes)
document.writeln(`La nota media es ${media}`)