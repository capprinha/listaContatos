import styled from "styled-components";

export const Lista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 8px;
    background-color: #ccc;
    z-index: 1;
    box-shadow: 2px 0px 5px #ccc;
`

export const Titulo = styled.h1`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 24px 0px;
`
export const Campo = styled.input`
    padding: 8px;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    margin: 8px 0px;
    border-radius: 10px;
    border: 2px solid #000;
    box-shadow: 0px 2px 4px #000;
`

export const Botao = styled.button`
    padding: 8px;
    font-weight: bold;
    font-style: italic;
    background-color: #fff;
    color: #000;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 0px 2px 4px #000;
    margin-top: 20px;
    cursor: pointer;
    &:hover{
        background-color: #000;
        color: #fff;
        border-color: #fff;
        box-shadow: none;
    }
`