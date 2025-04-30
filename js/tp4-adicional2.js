// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
// Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
// Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

const estudiante = {
    nombre:'',
    nota:0.00,
}

let arrayEstudiantes =[{}];

function notaMedia(arrayEst){
    let resultado = 0;
    for(let i = 0; i<arrayEst.length;i++){
        resultado = resultado + arrayEst[i.nota]
    }
    resultado = resultado / (arrayEst.length)
    return resultado
}

do{
    let nombreEstudiante = prompt('Ingrese Nombre del Estudiante:')
    let notaEstudiante = parseFloat(prompt('Ingrese Nota del Estudiante:'))

    console.log('Nombre: '+nombreEstudiante)
    console.log('Nota: '+notaEstudiante)
    estudiante.nombre = nombreEstudiante
    estudiante.nota = notaEstudiante
    console.log(estudiante)
    console.log('array')
    //como hago para que cargue en el array solo el ultimo alumno ingresado?
    arrayEstudiantes.push(estudiante)
    // estudiante.push(new estudiante(nombreEstudiante, notaEstudiante));
}while (confirm('Desea seguir ingresando estudiantes?'))

console.log(estudiante)
console.log(arrayEstudiantes)
const media = notaMedia(arrayEstudiantes)
document.writeln(`La nota media es ${media}`)