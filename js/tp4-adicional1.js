//Crea un objeto persona que contenga las propiedades nombre, edad y hobbies (los hobbies son un array de strings).
// Luego, escribe una función que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona.
// Finalmente, imprime los hobbies de la persona usando un bucle.
// Usa prompt para ingresar los datos de la persona y el nuevo hobby.

const persona = {
    nombre: '',
    edad: 0,
    hobbies: [],

    mostrarHobbies: function () {
        document.writeln(`<p>Los hobbies de la persona son:</p>
            <ul>`)
        for (let i = 0; i < this.hobbies.length; i++) {
            document.writeln(`<li>${this.hobbies[i]}</li>`)
        }
        document.writeln(`</ul>`)
    }
}

const nombreP = prompt('Ingrese Nombre: ')
const edadP = parseInt(prompt('Ingrese Edad: '))
let hobbieP = prompt('Ingrese Hobbie: ')

console.log(nombreP)
console.log(edadP)
console.log(hobbieP)

if (nombreP !== '' && (nombreP !== null)) {
    persona.nombre = nombreP
}

if (!isNaN(edadP)) {
    persona.edad = edadP
}

if (hobbieP !== null) {
    persona.hobbies.push(hobbieP)
}

console.log(persona)

hobbieP = prompt('Ingrese un nuevo Hobbie: ')
console.log('nuevo hobbie: ' + hobbieP)
if (hobbieP !== null) {
    persona.hobbies.push(hobbieP)
}

console.log(persona)
persona.mostrarHobbies()