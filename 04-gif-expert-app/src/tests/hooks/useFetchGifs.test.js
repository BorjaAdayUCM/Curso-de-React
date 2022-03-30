import React from 'react';
import {shallow} from 'enzyme';
import {renderHook} from '@testing-library/react-hooks'

import useFetchGifs from '../../hooks/useFetchGifs.js';

describe('Pruebas en useFetchGifs.js', () => {

    test('useFetchGifs debe devolver el estado inicial.', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('Debe devolver un array de imágenes y loading en false', async () => {

        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        
        await waitForNextUpdate();
        const {data, loading} = result.current;
        
        expect(data.length <= 10).toEqual(true);
        expect(loading).toBe(false);

    })
    
    
    
})
