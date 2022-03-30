import getGifs from '../../helpers/getGifs.js'

describe('Pruebas en getGifs.js', () => {

    test('Si se proporciona una categoría, getGifs debe devolver 10 elementos o menos.', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length <= 10).toBe(true);
    })

    test('Si no se proporciona una categoría, getGifs debe devolver 0 elementos.', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    
})
