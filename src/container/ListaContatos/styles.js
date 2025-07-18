import styled from "styled-components";

export const Lista = styled.div`
    display:block;
    padding: 8px;
    height: 100vh;
    `
export const Card = styled.div`
    background-color: aliceblue;
    padding: 12px;
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 0px 2px 5px #000;
    margin-bottom: 40px;
    display: flex;
    align-items: center;

`
export const Foto = styled.img`
    height: 100px;
    width: 100px;
    background-color: #eee;
    color: #eee;
    margin-right: 12px;
    border-radius: 8px;
    border: 1px solid #000;
`
export const ListaDados = styled.div`
    display: inline-block;
`

export const Botao = styled.button`
    padding: 8px;
    margin-right: 8px;
    border-radius: 8px;
    border: 1px solid #000;
    border: 2px solid #000;
    color: #000;
    background-color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #000;
        color: #fff;
        border-color: #fff;
    }
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
