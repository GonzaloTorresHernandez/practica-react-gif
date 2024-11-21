import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('', () => {
        render(<GifExpertApp/>);
        console.log(screen.debug());
    });
    
});