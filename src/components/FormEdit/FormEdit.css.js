import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
