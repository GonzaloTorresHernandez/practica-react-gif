import { fireEvent, render, screen } from "@testing-library/react";
import { AddElemento } from "../../src/components/AddElemento"; 

describe('Pruebas en AddElemento', () => {

    test('debe cambiar el valor de la caja de texto', () => {
        render(<AddElemento onNewValor={ () => {} }/>);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'serie'}});

        expect( input.value ).toBe( 'serie' );;
    });

    test('debe de llamar onNewValor si el input tiene un valor', () => {

        const inputValor = 'serie';
        const onNewValor = jest.fn();   // simulacion de una funcion

        render(<AddElemento onNewValor={ onNewValor }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValor }});
        fireEvent.submit(form);
        // screen.debug();
        expect( input.value).toBe('');  // evaluar que el campo este vacio luego de ejecutar el submit

        expect( onNewValor ).toHaveBeenCalled();    // evalua que la funcion haya sido llamada
        expect( onNewValor ).toHaveBeenCalledTimes(1);  // evalua la cantidad de veces que haya sido llamada
        expect( onNewValor ).toHaveBeenCalledWith( inputValor );    //  llamado con un parametro en especifico

    });

    test('no debe de llamar onNewValor si el input esta vacio', () => {

        const onNewValor = jest.fn();

        render(<AddElemento onNewValor={ onNewValor }/>);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect( onNewValor ).toHaveBeenCalledTimes(0);
        expect( onNewValor ).not.toHaveBeenCalled(); 

    });

});