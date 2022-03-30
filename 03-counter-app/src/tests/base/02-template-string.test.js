import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string.js';


describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe devolver Hola Borja Aday!', () => {
        
        const nombre = 'Borja Aday';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    // getSaludo debe de retorar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe devolver Hola Carlos! si no hay argumento nombre.', () => {
    
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos!');

    })
    
    
})


