// Importaciones y exportaciones

// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// Find busca un elemnto en el array que cumple una condición.
export const getHeroeById = (idk) => heroes.find(({id}) => id === idk);

// console.log(getHeroeById(2));

// Filter devuelve los elementos del array que cumplen una condición.
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('Marvel'));

// console.log(owners)