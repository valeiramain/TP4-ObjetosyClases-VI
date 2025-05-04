//2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// ●	Una propiedad titular con el valor "Alex".
// ●	Una propiedad saldo, teniendo como valor inicial 0.
// ●	Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// ●	Un método extraer() que permita retirar la cantidad pasada como parámetro.
// ●	Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

const cuenta = {
    titular: 'Alex',
    saldo: 0.00,

    //metodos

    ingresar (dinero) {
        this.saldo = this.saldo + dinero;
        document.writeln(`<p>Se depositó $${dinero}. El saldo Actual es = $${this.saldo}</p>`)
    },
    extraer (dinero) {
        if (this.saldo >= dinero) {
            this.saldo = this.saldo - dinero;
            document.writeln(`<p>Se Extrajo $${dinero}. El saldo Actual es = $${this.saldo}</p>`)
        } else {
            document.writeln(`<p>Saldo insuficiente para extraer $${dinero}</p>`)
            alert('Saldo Insuficiente')
        }
    },
    informar() {
        document.writeln(`<h4>Informe de Estado de Cuenta de: $${this.titular}</h4>`)
        document.writeln(`<p>El saldo Actual es = $${this.saldo}</p>`)
    }
}
do {
    const operacion = parseInt(prompt('INGRESE 1 => Depósito,  2 => Extracción,  3 => Consultar Saldo: '))
    if (operacion >= 1 && operacion <= 3) {
        let dinero = 0

        switch (operacion) {
            case 1:
                dinero = parseFloat(prompt('Ingrese importe a depositar: $'))
                if (!isNaN(dinero)) {
                    cuenta.ingresar(dinero);
                } else {
                    alert('Valor inválido')
                }
                break;
            case 2:

                dinero = parseFloat(prompt('Ingrese importe a Extraer: $'))
                if (!isNaN(dinero)) {
                    cuenta.extraer(dinero);
                } else {
                    alert('Valor inválido')
                }
                break;
            case 3:
                cuenta.informar()
                break;
            default:
                document.writeln('Operación Inválida')
                break;
        }
    } else {
        alert('Ingrese una operación válida')
    }

} while (confirm('¿Desea realizar otra operación?'))
