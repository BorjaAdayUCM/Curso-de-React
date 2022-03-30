// Funciones

// Evitar crear funciones de esta manera para evitar sobreescribirlas.

// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

// saludar = 20;

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

// Ahora devuelve error porque no podemos cambiar una constante.
// saludar = 20;

// Función flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => (`Hola Mundo`);


console.log(saludar('Borja Aday'));
console.log(saludar2('Borja Aday'));
console.log(saludar3('Borja Aday'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'SewingCactus'
})

const user = getUser();

console.log(user);

// Tarea
// 1. Convertir en función flecha.
// 2. Devolver un objeto.
// 3. Probarlo.

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',  
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Tole');
console.log(usuarioActivo);