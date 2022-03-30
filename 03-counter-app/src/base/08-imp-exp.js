
import heroes from '../data/heroes';

// Find busca un elemnto en el array que cumple una condición.
export const getHeroeById = (idk) => heroes.find(({id}) => id === idk);

// Filter devuelve los elementos del array que cumplen una condición.
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);