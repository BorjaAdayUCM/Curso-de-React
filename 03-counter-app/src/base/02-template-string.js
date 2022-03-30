//Template Strings

const nombre = 'Borja Aday';
const apellido = 'Guadalupe Luis';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre + '!';
}