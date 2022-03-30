import React from 'react'
import {shallow} from 'enzyme';

import GifGridItem from '../../components/GifGridItem.js';

describe('Pruebas en <GifGridItem />', () => {

    const titulo = 'Un título';
    const url = 'https://imagen.jpg';
    const wrapper = shallow(<GifGridItem title = {titulo} url = {url}/>);
    
    test('Se debe mostrar <GifGridItem /> correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe tener un párrafo con el título.', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
    });

    test('Debe tener una imagen con la url y alt proporcionadas.', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(titulo);
    })

    test('Debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    })
    

})