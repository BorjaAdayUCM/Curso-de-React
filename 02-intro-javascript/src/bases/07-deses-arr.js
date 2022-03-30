// Desestructuración de arrays.

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3] = personajes;
console.log(p3);

const retornaArray = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArray();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre.
// 2. El segundo valor se llamará setNombre.

const retornaArray2 = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = retornaArray2('Goku');

console.log(nombre);
setNombre();