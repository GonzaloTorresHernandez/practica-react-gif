import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem', () => {

    const titulo = 'titulo';
    const url = 'https://mi-url.com/img.jpg';

    test('prueba martch con el stanpshot', () => {
        const { container } = render(
            <GifItem titulo={ titulo } url={ url } />
        );
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem titulo={ titulo } url={ url } />);

        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( titulo );

        const { src, alt } = screen.getByRole('img');
        expect(alt).toBe(titulo);
        expect(src).toBe(url);
    });

    test('Debe de mostar el titulo en el componente', () => {
        render(<GifItem titulo={ titulo } url={ url } />);
        expect( screen.getByAltText(titulo)).toBeTruthy();
    });
});