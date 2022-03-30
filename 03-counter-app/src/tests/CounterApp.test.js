import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp.js';



describe('Pruebas en CounterApp.js', () => {
    
    let wrapper;

    beforeEach( () =>  {
        wrapper = shallow(<CounterApp />);
    });

    test('Se debe mostrar <CounterApp /> correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Se debe mostrar el valor por defecto 100', () => {
        
        const wrapper = shallow(<CounterApp value={100} />);
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
    })

    test('El contador se debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');
    })

    test('El contador se debe decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
    });

    test('El contador se debe poner al valor por defecto con el botón reset', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    })
})
