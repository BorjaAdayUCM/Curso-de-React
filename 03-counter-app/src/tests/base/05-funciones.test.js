import '@testing-library/jest-dom';

import {getUser, getUsuarioActivo} from '../../base/05-funciones.js'


describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser debe devolver un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'SewingCactus'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })

    test('getUsuarioActivo debe devolver un objeto', () => {
        
        const nombre = 'Juan';
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    })
    
    


})
