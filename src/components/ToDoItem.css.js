import styled from 'styled-components'

export const Item = styled.div`
    cursor: pointer;
    padding: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    font-weight: 500;
    // color: #666;
    color: ${props => props.done ? '#c0392b' : 'auto'};
    text-decoration: ${props => props.done ? 'line-through' : 'auto'};
`