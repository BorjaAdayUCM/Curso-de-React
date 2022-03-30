// Desestructuración de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
}

// Se pueden renombrar la variable de salida (nuevaEdad).
// No tienen por qué estar en orden.
// const {edad:nuevaEdad, clave, nombre} = persona;

// console.log(nombre);
// console.log(nuevaEdad);
// console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// Podemos desestructurar en el propio argumento y aportar valores por defecto.
const retornaPersona = ({clave, nombre, edad, rango = 'Capitán'}) => {
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.353,
            lng: 34.5453
        }
    }
}

// Tarea 
// Desestructurar lo que devuelve la función.

// Podemos obtener el objeto anidado latlng u obtener directamente los valores del objeto anidado.
// const {nombreClave, anios, latlng} = retornaPersona(persona)
const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona(persona)
console.log(nombreClave, anios, lat, lng);