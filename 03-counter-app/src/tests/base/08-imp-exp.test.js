import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp.js';
import heroes from '../../data/heroes.js';


describe('Pruebas en 08-imp-exp.js', () => {
    

    test('getHeroeById debe devolver un héroe por id.', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData);

    });


    test('getHeroeById debe devolver undefined si no existe el héroe con el id.', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    // debe de retornar un arreglo con los héroes de DC
    test('getHeroesByOwner debe devolver un array con los héroes de DC.', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        
        const heroesData = heroes.filter(h => h.owner === owner);

        expect(heroes).toEqual(heroesData);

    })

    
    test('getHeroesByOwner debe devolver un array con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2);

    })
})
