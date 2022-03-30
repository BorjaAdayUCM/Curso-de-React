//Objetos literales

const persona = {
    nombre: 'Borja Aday',
    apellido: 'Guadalupe Luis',
    edad: 23,
    direccion: {
        ciudad: 'Madrid',
        zipcode: 28008,
        lat: 14.54335,
        lng: 34.04563
    }
};

//Se usa para saber el nombre del objeto.
//console.log({persona});

//Se usa para ver los objetos en forma de tabla.
//console.table(persona);

//Son punteros, no realiza copia.
//const persona2 = persona;

//El operador spread sirve para clonar.
const persona2 = {...persona}
persona2.nombre = 'Cristian Oliver';

console.log(persona)
console.log(persona2);