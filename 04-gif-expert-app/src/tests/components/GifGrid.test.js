import React from 'react';
import {shallow} from 'enzyme';

import GifGrid from '../../components/GifGrid'
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en <GifGrid />', () => {

    const category = 'One Punch';

    test('Se debe mostrar <GifGrid /> correctamente.', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category = {category}/>);

        expect(wrapper).toMatchSnapshot();
    })
    
    test('Debe mostrar items cuando useFetchGifs carga imágenes.', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://imagen.jpg',
            title: 'titulo'
        },
        {
            id: '123',
            url: 'https://imagen.jpg',
            title: 'titulo'
        }]
       
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category = {category}/>);

        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

        
    })

})
