import { retornaArray } from '../../base/07-deses-arr.js'


describe('Pruebas en 07-deses-arr.js', () => {
    
    test('retornaArray debe devolver un string y un número.', () => {
        
        const [letras, numeros] = retornaArray(); //['ABC', 123];

        expect(letras).toBe( 'ABC' );
        expect(typeof letras).toBe('string');
        
        expect(numeros).toBe( 123 );
        expect(typeof numeros).toBe('number');
    })
    

})
