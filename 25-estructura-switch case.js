// Estructura switch
// Permite evaluar una expresión y ejecutar diferentes bloques de código, según el caso que coincida.

const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Pagaste con Tarjeta');
    break;

    case 'bitcoin':
        console.log('Pagaste con Bitcoin');
    break;

    case 'debitCard':   // corregí "debiCard" → "debitCard"
        console.log('Pagaste con tarjeta débito');
    break;

    case 'creditCard':  // corregí "crediCard" → "creditCard"
        console.log('Pagaste con tarjeta crédito');
    break;

    default:
        console.log('Método de pago No Válido');
    break;
}

// ====
