// Estructura de control IF
// const score = Number(prompt('Ingrese el puntaje'));

// ====

// Corrección: faltaba un espacio → const score
const score = Number(prompt('Ingrese el puntaje'));

console.log('El puntaje es diferente de 100');

if (score == 100) {
    console.log('Sí, el puntaje es 100');
}

// ====
// Validación de roles

const rol = 'editor';

if (rol == 'admin') {
    console.log('Tienes acceso a todo el sistema');
} else if (rol == 'editor') {
    console.log('Puedes editar funciones básicas');
} else {
    console.log('No tienes acceso al sistema');
}
