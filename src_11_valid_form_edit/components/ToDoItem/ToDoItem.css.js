import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Item = styled.div`
    cursor: pointer;
    padding: 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);

    font-weight: 500;

    display: flex;
    justify-content: space-between;

    color: ${props => props.done ? '#c0392b' : 'auto'};
    text-decoration: ${props => props.done ? 'line-through' : 'auto'};

    @media screen and (max-width: ${400}px) {
        flex-direction: column;
    }
`
export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    border: 1px solid grey;
    margin-left: 10px;
    padding: 0 10px;
    transition: 0.5s linear color;
    &:hover {
        color: red;
    }
`