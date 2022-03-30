const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;

export const retornaArray = () => {
    return ['ABC', 123];
}

// Tarea
// 1. El primer valor del arr se llamará nombre.
// 2. El segundo valor se llamará setNombre.

const usState = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}