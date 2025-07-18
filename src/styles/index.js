import styled, { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: sans-serif;
    }
`
export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 16px;

`