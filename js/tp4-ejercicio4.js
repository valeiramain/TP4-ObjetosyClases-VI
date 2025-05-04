//4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, 
// además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

const arrayProductos = [];

class Producto {
    // Defino cada propiedad privada
    #codigoProducto;
    #nombreProducto;
    #precioProducto

    constructor(codigoProductop, nombreProductop, precioProductop) {
        this.#codigoProducto = codigoProductop;
        this.#nombreProducto = nombreProductop;
        this.#precioProducto = precioProductop;
    }

    // propiedades computadas: se usan cuando tengo propiedades privadas
    //get = leer un valor
    get getCodigoProducto() {
        return this.#codigoProducto
    }
    get getNombreProducto() {
        return this.#nombreProducto
    }
    get getPrecioProducto() {
        return this.#precioProducto
    }

    //set = modificar valor. siempre tiene parametros
    set setCodigoProducto(nuevoCodigoProducto) {
        this.#codigoProducto = nuevoCodigoProducto
    }
    set setNombreProducto(nuevoNombreProducto) {
        this.#nombreProducto = nuevoNombreProducto
    }
    set setPrecioProducto(nuevoPrecioProducto) {
        this.#precioProducto = nuevoPrecioProducto
    }

    //metodos

    imprimeDatos() {
        document.writeln(`<h3>Datos del Producto:</h3>
            <ul>
            <li>Código Producto: ${this.getCodigoProducto}</li>
            <li>Nombre Producto: ${this.getNombreProducto}</li>
            <li>Precio Producto: $${this.getPrecioProducto}</li>
            </ul>`)
    }

}

//crea 3 productos
const producto1 = new Producto('P001','Zapatillas Nike Air',150000);
arrayProductos.push(producto1)
const producto2 = new Producto('P002','Remera Adidas',45000);
arrayProductos.push(producto2)
const producto3 = new Producto('P003','Campera Puma',135000);
arrayProductos.push(producto3)

console.log(arrayProductos)

// muestra cada producto
for (let i = 0; i < arrayProductos.length; i++) {
    arrayProductos[i].imprimeDatos();
}


