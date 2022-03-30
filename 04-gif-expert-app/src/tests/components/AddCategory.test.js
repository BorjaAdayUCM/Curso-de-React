import React from 'react'
import {shallow} from 'enzyme';

import AddCategory from '../../components/AddCategory'



describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = {setCategories} />);
    })
    
    test('Se debe mostrar <AddCategory /> correctamente.', () => {
        const wrapper = shallow(<AddCategory setCategories = {setCategories} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('La textBox debe cambiar.', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo'
        input.simulate('change', {target: { value }});
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('No debe mostrar la categoría al hacer submit.', () => {
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('Debe llamar a setCategories y limpiar la textBox.', () => {
        const value = 'Hola Mundo';
        
        wrapper.find('input').simulate('change', {target: { value }});
        wrapper.find('form').simulate('submit', { preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value').trim()).toBe('');
    })
})
