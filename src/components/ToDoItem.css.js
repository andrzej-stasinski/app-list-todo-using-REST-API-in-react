import styled from 'styled-components'

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