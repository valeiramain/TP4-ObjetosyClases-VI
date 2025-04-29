// Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
// Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
// Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.

const estudiante = {
    nombre:'',
    nota:0.00,
}

let arrayEstudiantes =[];

function notaMedia(){
    let resultado = 0;
    for(let i = 0; i<arrayEstudiantes.length;i++){
        resultado = resultado + arrayEstudiantes[i.nota]
    }
    resultado = resultado / (arrayEstudiantes.length-1)
    return resultado
}

do{
    let nombreEstudiante = prompt('Ingrese Nombre del Estudiante:')
    let notaEstudiante = parseFloat(prompt('Ingrese Nota del Estudiante:'))
    estudiante.nombre = nombreEstudiante;
    estudiante.nota = notaEstudiante;
    console.log('Nombre: '+nombreEstudiante)
    console.log('Nota: '+notaEstudiante)
    // estudiante.push(estudiante(nombre, nota));
}while (confirm('Desea seguir ingresando estudiantes?'))


console.log(arrayEstudiantes)
const media = notaMedia()
document.writeln(`La nota media es ${media}`)