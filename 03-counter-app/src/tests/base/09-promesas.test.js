import { getHeroeByIdAsync } from '../../base/09-promesas.js';
import heroes from '../../data/heroes.js';



describe('Pruebas en 09-promesas.js', () => {
    
    test('getHeroeByIdAsync debe devolver un héroe async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            });

    });


    test('getHeroeByIdAsync debe devolver un error si el héroe por id no existe.', (done) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                done();

            });
    });
    
    
});

