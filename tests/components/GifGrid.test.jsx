import { fireEvent, render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid"; 
import { useFetchGifs } from "../../src/hooks/useFetchGifs";    // importo el hook

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => {

    const valor = 'serie';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            imagenes: [], 
            estaCargando: true
        });

        render(<GifGrid valor={valor} />);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(valor));
    });

    test('debe de mostrar items cuando se cargan las imagenes con useFetchGifs', () => {

        const gifs = [
            {
                id: 'Abc',
                titulo: 'serie',
                url: 'https://serie.com/serie.jpg'
            },
            {
                id: '123',
                titulo: 'serie2',
                url: 'https://serie.com/serie.jpg'
            },
        ];

        useFetchGifs.mockReturnValue({
            imagenes: gifs, 
            estaCargando: false
        });

        render(<GifGrid valor={valor} />);
        expect( screen.getAllByRole('img').length).toBe(2);

    });

});