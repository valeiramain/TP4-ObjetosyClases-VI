
# Ejercicios JavaScript – Prácticas con POO

Este repositorio contiene una serie de ejercicios prácticos orientados a afianzar los conocimientos en Programación Orientada a Objetos (POO) usando JavaScript. A través de clases, objetos y métodos, se abordan diversos niveles de dificultad y conceptos clave.


```js
Importante: Para ejecutar cada ejercicio, desbloquear el script correspondiente en el archivo index.html y luego ejecutar con LiveServer.
```


---

## Ejercicio 1: Crear objetos
**Dificultad: 🟢**

Crea un objeto llamado `auto` que tenga las propiedades: color, marca, modelo y estado (encendido o apagado). Incluye métodos para encender y apagar el auto.

**Output esperado:**

```js
auto.encender(); // "Auto encendido"
auto.apagar();   // "El auto se apagó"
```

---

## Ejercicio 2: Cuenta bancaria
**Dificultad: 🟢🟡**

Crear un objeto `cuenta` con:

- Titular: "Alex"
- Saldo inicial: 0
- Método `ingresar(cantidad)`
- Método `extraer(cantidad)`
- Método `informar()` que describe el estado actual de la cuenta

Utiliza el objeto para ingresar y extraer dinero, y mostrar los estados antes y después.

---

## Ejercicio 3: Rectángulos
**Dificultad: 🟢**

Crear una clase `Rectángulo` con propiedades `alto` y `ancho`, e incluir:

- Métodos para modificar y mostrar las propiedades
- Método para calcular el perímetro
- Método para calcular el área

---

## Ejercicio 4: Producto
**Dificultad: 🟢🟡**

Crear una clase `Producto` con:

- Código
- Nombre
- Precio
- Método `imprimeDatos()` para mostrar todas las propiedades

Crear tres instancias, almacenarlas en un array y mostrar sus datos usando el método correspondiente.

---

## Ejercicio 5: Generaciones
**Dificultad: 🟢🟡🔴**

Crear una clase `Persona` con propiedades como: nombre, edad, DNI, sexo, peso, altura y año de nacimiento.

Métodos:

- `mostrarGeneracion()` – Indica la generación y su rasgo característico
- `esMayorDeEdad()` – Indica si la persona es mayor de edad
- `mostrarDatos()` – Muestra toda la información del objeto
- `generaDNI()` – Genera un número aleatorio de 8 cifras

---

## Ejercicio 6: Libros
**Dificultad: 🟢🟡🔴**

Crear una clase `Libro` con:

- ISBN
- Título
- Autor
- Número de páginas

Incluir getters y setters, y un método `mostrarLibro()` que devuelva:

> “El libro [Título] con ISBN [ISBN] creado por el autor [Autor] tiene [Páginas] páginas”

Crear al menos dos libros y determinar cuál tiene más páginas.

---

## Ejercicio 7: Agenda telefónica
**Dificultad: 🟢🟡🔴**

Diseñar una agenda con contactos definidos por nombre y teléfono. La agenda puede tener un tamaño fijo (por defecto: 10). Métodos:

- `aniadirContacto(contacto)`
- `existeContacto(contacto)`
- `listarContactos()`
- `buscarContacto(nombre)`
- `eliminarContacto(contacto)`
- `agendaLlena()`
- `huecosLibres()`

Se debe mostrar un menú de opciones usando `prompt`, y mostrar los resultados por pantalla y consola.

---

## Ejercicios adicionales

### Ejercicio 8: Persona
Crear una clase `Persona` con propiedades `nombre`, `edad` y `profesión`. Métodos:

- `saludar()`
- `despedirse()`

Crear dos instancias con diferentes valores y llamar a sus métodos.

---

### Ejercicio 9: Animal, Perro y Gato
Crear una clase `Animal` con propiedades `nombre`, `edad` y método `emitirSonido()`.

Luego crear clases hijas:

- `Perro` con sonido propio
- `Gato` con sonido propio

Crear una instancia de cada una y verificar los sonidos.

---

### Ejercicio 10: Aeropuerto y Aviones
Crear una clase `Aeropuerto` con:

- `nombreAeropuerto`
- Lista de aviones
- Método `agregarAvion(avion)`
- Método `buscarAvion(nombre)`

Crear clase `Avion` con:

- nombre
- capacidad
- destino
- lista de pasajeros
- Método `abordar(pasajero)` que verifica si hay espacio

Crear un aeropuerto llamado “Aeropuerto Internacional”, tres aviones con destinos distintos, agregarlos al aeropuerto, buscar un avión y usar el método `abordar`.

---

## 💡 Recomendación

Para realizar estos ejercicios, es útil usar `console.log()` para visualizar el comportamiento de los métodos y verificar que las clases y objetos funcionen como se espera.

---
