import React from 'react';
import {shallow} from 'enzyme';



import GifExpertApp from '../GifExpertApp.js';

describe('Pruebas en <GifExpertApp />', () => {
    
    test('Se debe mostrar <GifExpertApp /> correctamente.', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    })

    test('Se debe mostrar una lista de categorías.', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length)
    })
    

})
