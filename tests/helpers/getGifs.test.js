import { peticion } from "../../src/helpers/getGifs";

describe('Pruebas en getGifs', () => {

    const valor = 'serie';

    test('debe dde retornar un arreglo de gifs', async () => {
        const gifs = await peticion(valor);
        expect(typeof gifs).toBe('object');
        expect(gifs.length).toBeGreaterThan(0);
        expect( gifs[0] ).toEqual({
            id: expect.any( String),    // espera cualquier cadena
            titulo: expect.any( String),
            url: expect.any( String),
        });
    });

});