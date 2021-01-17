import styled from 'styled-components'

export const Form = styled.form`
    margin-top: 5px;
`

export const Button = styled.button`
    padding: 5px;
    font-size: 18px;
    margin-left: 5px;
    min-width: 120px;
    border-radius: 5px;
    outline: none;
    border: 1px solid grey;
    color: yellow;
    background-color: #666;
    cursor:pointer;
    transition: 0.5s linear;
    transition-property: color, background-color; 
    &:hover {
        color: white;
        background-color: #333;
    }
    @media screen and (max-width: ${400}px) {
        margin: 5px 0 0 0;
        width: 100%;
    }
`

export const Input = styled.input`
    padding: 5px;
    font-size: 18px;
    border-radius: 5px;
    outline: none;
    border: 1px solid grey;
    @media screen and (max-width: ${400}px) {
        width: 100%;
    }    
`










