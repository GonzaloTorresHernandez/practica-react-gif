import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en Hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', () => {
        // renderhook para trabajar con los hook
        // el primer llamado al hook ejecuta su lógica inicial con el estado y las configuraciones por defecto
        const { result } = renderHook( () => {
            return useFetchGifs('serie');
        });

        const { imagenes, estaCargando } = result.current;

        expect( imagenes.length).toBe(0);
        expect(estaCargando).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y estaCargando en false',  async () => {
        // renderhook para trabajar con los hook
        // renderiza el hook
        const { result } = renderHook( () => {
            return useFetchGifs('serie');
        });

        await waitFor(() => {
            // espara asta que se cumpla lo esperado
            return expect(result.current.imagenes.length).toBeGreaterThan(0);
        });

        const { imagenes, estaCargando } = result.current;

        expect( imagenes.length ).toBeGreaterThan(0);
        expect( estaCargando ).toBeFalsy();
    });
    
});