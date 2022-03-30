import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en PrimeraApp.js', () => {
    
    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('Se debe mostrar <PrimeraApp /> correctamente.', () => {

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect(wrapper).toMatchSnapshot();
        
    });

    test('<PrimeraApp /> debe mostrar el subtitulo enviado por props.', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo = {saludo}
                subtitulo = {subTitulo}
            /> 
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subTitulo);

    })
    
    
    

})
