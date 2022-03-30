import { getImagen } from '../../base/11-async-await.js'


describe('Pruebas en 11-async-await.js', () => {

    test('getImagen debe devolver la url de la imagen', async() => {
        
        const url = await getImagen();
        expect(url.includes('https://')).toBe(true);

    })
    
    
})
